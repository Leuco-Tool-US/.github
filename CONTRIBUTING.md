# Contributing to Leuco US projects

These guidelines explain how we make, check, and share project changes. They apply unless a project provides its own contribution guidelines.

You do not need to be a software engineer to contribute. Use Claude to help with technical steps, and ask for explanations in plain language whenever needed.

## Our workflow

1. **Start from the latest `main`.** This is the project's primary branch and the starting point for new work.
2. **Create a branch for your task.** A branch keeps work in progress separate from `main`.
3. **Make your changes.** Keep the task focused on one purpose.
4. **Check the result.** Try the affected workflow yourself. Have Claude run the project's technical checks and explain the results.
5. **Commit your changes.** A commit records a saved version of your work. Follow the naming convention below.
6. **Publish your branch to GitHub.** With a local copy, this means pushing your commits. Some remote editors publish them as part of committing.
7. **Open a pull request targeting `main`.** A pull request proposes bringing your branch's changes into the main project.
8. **Review before merging.** Check the proposed changes, address feedback, and ensure required automated checks pass.
9. **Choose “Create a merge commit.”** Do not use “Squash and merge” or “Rebase and merge.” Regular merging preserves the individual commits in `main`'s history.
10. **Delete the completed task branch after merging.** Its commits remain in `main`'s history. Start your next task on a new branch from updated `main`.

Do not make routine changes directly on `main`.

## Branch names

Use:

`type/short-description`

Use lowercase words separated by hyphens.

Examples:

- `feat/inventory-search`
- `fix/incorrect-total`
- `docs/setup-guide`
- `chore/project-scaffold`
- `ci/automated-checks`

Use a separate branch for each task. Do not reuse a completed branch for unrelated work.

## Commit messages

Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):

`type: short description`

An optional scope can identify the affected area:

`fix(inventory): correct quantity calculation`

Choose the type that best describes the change:

| Type | Use for |
| --- | --- |
| `feat` | Adding functionality |
| `fix` | Fixing incorrect behavior |
| `docs` | Updating documentation |
| `refactor` | Reorganizing code without changing behavior |
| `test` | Adding or updating tests |
| `build` | Changing build tools or dependencies |
| `ci` | Changing automated GitHub workflows |
| `chore` | Project setup or other maintenance |
| `perf` | Improving performance |
| `style` | Changing code formatting without changing behavior |
| `revert` | Undoing an earlier change |

Examples:

- `chore: scaffold project structure`
- `feat: add inventory search`
- `fix: correct invoice total`
- `docs: explain how to run the project`

Keep messages short and specific. Describe the change using an action such as “add,” “fix,” or “update.”

Keep related changes together and unrelated changes in separate commits. Claude can help choose an appropriate type and message.

GitHub's automatically generated merge commit messages may retain their default format.

## Pull requests

Use the same naming format for the pull request title:

`feat: add inventory search`

Explain the following in the description:

- **What changed:** What can someone do now, or what behaves differently?
- **Why:** What problem or need does this address?
- **Verification:** What was checked, how it was checked, and the results.
- **Limitations:** Anything unfinished, uncertain, or requiring follow-up.

Include screenshots when they help demonstrate a visible change. Link related issues when applicable.

Keep each pull request focused on one purpose. It may contain several related commits.

Publishing a branch or opening a pull request does not merge the changes into `main`. Merging is a separate action.

## Checking AI-assisted work

Claude can help implement changes and perform technical checks. Before merging:

- Ask for a plain-language explanation of what changed and any known limitations.
- Try the affected workflow yourself when possible. Check that it meets the original request.
- For forms, calculations, or data processing, try an incorrect or unexpected input as well as a normal one.
- Review the pull request's changed files with Claude's help.
- Confirm which technical checks actually ran and whether they passed.
- Record anything that could not be tested in the pull request description.

A statement that something works should be supported by checks and their results.

If you cannot judge whether a change is appropriate, get help before merging.

## Confidential information

Do not include passwords, API keys, customer information, or other confidential business data in commits or pull requests.

Use approved company tools and data-handling practices when working with Claude.

## Using Claude across different environments

Claude's capabilities depend on where you use it and which tools it can access.

Browser chat, Cowork, and Claude Code may have different access to project files, GitHub, and testing tools. Confirm what actions were actually completed rather than assuming a proposed change was saved, tested, or published.

Company automation may assist with this workflow as it becomes available. Required GitHub checks and repository rules still apply regardless of which tool you use.
