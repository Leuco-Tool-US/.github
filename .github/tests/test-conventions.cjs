// Run: node .github/tests/test-conventions.cjs (from this repository root)
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const workflowPath = path.join(__dirname, '../../workflow-templates/conventions.yml');
const workflow = fs.readFileSync(workflowPath, 'utf8');
const body = workflow.split('          script: |\n')[1]
  .split('\n').map(line => line.startsWith('            ') ? line.slice(12) : line).join('\n');
const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
const run = new AsyncFunction('context', 'github', 'core', body);
const commit = (message, parents=1) => ({
  sha:'a'.repeat(40), parents:Array.from({length:parents},()=>({sha:'b'})),
  commit:{message}
});
async function check(options={}) {
  const commits = options.list || [commit('docs: clarify setup')];
  const pr = {number:1,title:'docs: clarify setup',head:{ref:'docs/setup-guide'},
    commits: commits.length, ...options.pr};
  const failures = [];
  let called = false;
  const github = {rest:{pulls:{listCommits:()=>{}}},paginate:async(_fn,args)=>{
    called=true; assert.equal(args.pull_number,1); return commits;
  }};
  await run({payload:{pull_request:pr},repo:{owner:'test',repo:'test'}},
    github,{setFailed:m=>failures.push(m),info:()=>{}});
  return {failures,called};
}
(async()=>{
  const cases = [
    ['valid',{},false],
    ['scope and breaking marker',{pr:{title:'feat(auth)!: change login'}},false],
    ['multiline commit',{list:[commit('fix: handle zero\n\nBREAKING CHANGE: new behavior')]},false],
    ['regular merge exempt',{list:[commit('Merge pull request #1',2)]},false],
    ['fake merge rejected',{list:[commit('Merge pull request #1',1)]},true],
    ['invalid title',{pr:{title:'Update files'}},true],
    ['multiline title',{pr:{title:'docs: fine\nmalformed'}},true],
    ['uppercase type',{pr:{title:'Docs: update'}},true],
    ['missing description',{pr:{title:'docs: '}},true],
    ['invalid branch',{pr:{head:{ref:'alex/review'}}},true],
    ['issue branch',{pr:{head:{ref:'fix/123-incorrect-total'}}},false],
    ['bad ordinary commit',{list:[commit('updates')]},true],
    ['incomplete API list',{pr:{commits:2}},true],
    ['250 commits',{list:Array.from({length:250},()=>commit('test: add case'))},false],
    ['over limit',{pr:{commits:251}},true],
  ];
  for(const [name,options,fail] of cases) {
    const result=await check(options);
    assert.equal(result.failures.length>0,fail,name);
    if(name==='over limit') assert.equal(result.called,false);
  }
  console.log(cases.length+' convention workflow fixtures passed');
})().catch(error=>{console.error(error);process.exitCode=1;});
