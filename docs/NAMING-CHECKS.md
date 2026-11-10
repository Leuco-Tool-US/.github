# Naming checks — policy version 1

The shared naming workflow is installed as .github/workflows/conventions.yml in the organization defaults, governance, vault, Claude, design and Python-template repositories. The source template is workflow-templates/conventions.yml. Each installed copy must be maintained deliberately; templates do not automatically update existing repositories.

The workflow checks PR titles, source branches, and all non-merge commit subjects in each PR. It accepts the types in CONTRIBUTING.md, optional lowercase scopes, and an optional breaking-change `!`. Commit bodies and PR descriptions are not linted. A BREAKING CHANGE footer is allowed but its semantics are not verified. Merge commits (two or more parents) are exempt regardless of subject; merely naming an ordinary commit “Merge” does not exempt it.

It runs when a PR is opened, edited, updated, reopened, or marked ready. It reads metadata through GitHub's API without checking out or executing PR code, uses read permissions only, and needs no custom secrets. It rejects PRs above the API's 250-commit limit rather than partially validating them.

Require the `conventions` status check only after a pilot PR has run it. Until required it is advisory. Free does not provide private-repository rulesets. Do not enable a blanket commit regex that rejects generated merge messages.

Bot PRs are not exempt. Configure automation for the same conventions, or document an explicit narrow exception. Commits already on main are not checked retroactively. Invalid new commit messages may need correction on the task branch; coordinate any rewriting of pushed history with collaborators.

Review modifications to required workflows. Editable workflows are not tamper-proof enforcement. Use repository permissions and verified reviewers/CODEOWNERS; consider organization-required workflows if your future plan supports them. Workflow updates must be deliberately propagated; copying a template does not establish automatic updates.

Sources: [github-script](https://github.com/actions/github-script), [API limit](https://docs.github.com/en/rest/pulls/pulls#list-commits-on-a-pull-request), [rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository).

## Enforcement responsibilities

- CONTRIBUTING explains the workflow to people; Claude guidance helps generate compliant work.
- The conventions workflow checks PR titles, branch names and commit subjects. It does not assess whether a description is truthful or a change is safe.
- A main-branch rule must require pull requests and the conventions check to block routine merges that fail validation.
- Application repositories also need their own tests and relevant required checks.
- Regular merge commits are enabled; squash and rebase merging are disabled. Do not require linear history.
- A review approval must come from another authorized person. Add the intended reviewer accounts before depending on required review; authors cannot approve their own PRs.
- CODEOWNERS identifies responsible reviewers only after actual users or teams and permissions are confirmed. Do not invent accounts.
- Keep any administrative bypass narrow and deliberate; it is not the everyday workflow.

Public repositories can use repository rulesets on GitHub Free. Private organization repositories require an eligible paid plan for rulesets/protected branches. Keep private material private; until enforcement is available, follow the documented PR process and inspect checks manually. Do not describe an advisory check as enforced.

## Verify the setup

Use a real documentation PR as a pilot. Confirm its valid title, branch and commit subjects pass. Temporarily use an invalid PR title to verify the check fails, then restore the compliant title and confirm it passes again. Require the verified check only after this pilot. Keep the pilot evidence with the setup record.

A workflow marked active with no run is unresolved, not a passing check. Inspect Actions permissions, triggering events and run diagnostics before relying on it.
