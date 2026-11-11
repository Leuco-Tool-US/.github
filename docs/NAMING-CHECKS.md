# Naming checks — policy version 1

This bundle installs identical copies of `workflow-templates/conventions.yml` as `.github/workflows/conventions.yml` in all five repositories. They do not run until uploaded and Actions is enabled.

The workflow checks PR titles, source branches, and all non-merge commit subjects in each PR. It accepts the types in CONTRIBUTING.md, optional lowercase scopes, and an optional breaking-change `!`. Commit bodies and PR descriptions are not linted. A BREAKING CHANGE footer is allowed but its semantics are not verified. Merge commits (two or more parents) are exempt regardless of subject; merely naming an ordinary commit “Merge” does not exempt it.

It runs when a PR is opened, edited, updated, reopened, or marked ready. It reads metadata through GitHub's API without checking out or executing PR code, uses read permissions only, and needs no custom secrets. It rejects PRs above the API's 250-commit limit rather than partially validating them.

Require the `conventions` status check only after a pilot PR has run it. Until required it is advisory. Free does not provide private-repository rulesets. Do not enable a blanket commit regex that rejects generated merge messages.

Bot PRs are not exempt. Configure automation for the same conventions, or document an explicit narrow exception. Commits already on main are not checked retroactively. Invalid new commit messages may need correction on the task branch; coordinate any rewriting of pushed history with collaborators.

Review modifications to required workflows. Editable workflows are not tamper-proof enforcement. Use repository permissions and verified reviewers/CODEOWNERS; consider organization-required workflows if your future plan supports them. Workflow updates must be deliberately propagated; copying a template does not establish automatic updates.

Sources: [github-script](https://github.com/actions/github-script), [API limit](https://docs.github.com/en/rest/pulls/pulls#list-commits-on-a-pull-request), [rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository).

## Getting help with a failed check

Open the failed **conventions** check and its run **Summary**. It identifies the exact branch, PR title or commit message that failed and provides a ready-to-copy request containing the PR link. Paste that request into a work-account Claude Code session with repository access and the company plugin available. With plugin version 0.4.0 or later, `/leuco-workflows:fix-contribution-check` is the explicit shortcut; colleagues can also ask in ordinary language.

Changing a PR title does not change its commit messages. A commit-message repair changes the commit ID, so Claude previews it and requests confirmation before replacing a published commit. The routine automated path supports one ordinary, author-owned tip commit on an unmerged PR branch. Shared, signed or complex history needs a coordinated maintainer plan. New valid commits do not fix earlier invalid messages.

The check itself never modifies repository contents or starts a Claude session. It uses read-only permissions, requires no AI API key and does not execute code from the PR. The new skill must be distributed before employees can invoke it; publishing this template does not update existing workflow copies or installed plugins automatically.

Claude Code cloud sessions can use their assigned branch when it matches `claude/<lowercase-hyphenated-slug>-<six-character-lowercase-alphanumeric-id>`. The check recognizes the branch format. It does not verify who created the branch. PR titles and commit messages follow the usual rules.
