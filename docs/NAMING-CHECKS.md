# Naming checks — policy version 1

This bundle installs identical copies of `workflow-templates/conventions.yml` as `.github/workflows/conventions.yml` in all five repositories. They do not run until uploaded and Actions is enabled.

The workflow checks PR titles, source branches, and all non-merge commit subjects in each PR. It accepts the types in CONTRIBUTING.md, optional lowercase scopes, and an optional breaking-change `!`. Commit bodies and PR descriptions are not linted. A BREAKING CHANGE footer is allowed but its semantics are not verified. Merge commits (two or more parents) are exempt regardless of subject; merely naming an ordinary commit “Merge” does not exempt it.

It runs when a PR is opened, edited, updated, reopened, or marked ready. It reads metadata through GitHub's API without checking out or executing PR code, uses read permissions only, and needs no custom secrets. It rejects PRs above the API's 250-commit limit rather than partially validating them.

Require the `conventions` status check only after a pilot PR has run it. Until required it is advisory. Free does not provide private-repository rulesets. Do not enable a blanket commit regex that rejects generated merge messages.

Bot PRs are not exempt. Configure automation for the same conventions, or document an explicit narrow exception. Commits already on main are not checked retroactively. Invalid new commit messages may need correction on the task branch; coordinate any rewriting of pushed history with collaborators.

Review modifications to required workflows. Editable workflows are not tamper-proof enforcement. Use repository permissions and verified reviewers/CODEOWNERS; consider organization-required workflows if your future plan supports them. Workflow updates must be deliberately propagated; copying a template does not establish automatic updates.

Sources: [github-script](https://github.com/actions/github-script), [API limit](https://docs.github.com/en/rest/pulls/pulls#list-commits-on-a-pull-request), [rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository).
