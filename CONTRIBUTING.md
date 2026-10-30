# Contributing to Leuco US projects

These are the default contribution guidelines for this organization's projects. A project's own guide should identify additional requirements or explicit exceptions. Company-wide access and data requirements still apply.

You do not need to be a software engineer to contribute. Claude can help with technical steps; ask for explanations in plain language when needed. 

## Workflow

1. Start from the latest `main`, the project's primary branch.
2. Create a branch for one focused task. This keeps unfinished work separate from `main`.
3. Make changes and check the result. Try the affected workflow yourself where possible; use Claude to run the project's technical checks and explain their results.
4. Commit related changes together. A commit records a saved version of your work.
5. Publish the branch to GitHub. For a local copy this means pushing; some remote editors publish as part of committing.
6. Open a pull request targeting `main`. Explain the change and its verification using the template.
7. Review the changed files, resolve feedback, and ensure required checks pass.
8. Merge using **Create a merge commit**. Do not use squash or rebase merging. GitHub's extra merge commit preserves the connection to the individual commits.
9. Delete the completed task branch after merging. Its commits remain in `main`'s history. Begin the next task on a fresh branch from updated `main`.

Do not make routine changes directly on `main`. An administrator may make the initial baseline commit before protections are activated.

## Branch names

Use `type/short-description`, with lowercase words separated by hyphens. Examples: `feat/inventory-search`, `fix/incorrect-total`, `docs/setup-guide`, `chore/project-scaffold`, and `ci/automated-checks`.

Use a separate branch for each task. An issue number is optional: `fix/123-incorrect-total`.

## Commit messages and pull request titles

Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):

`type: short description`

An optional scope names an area: `fix(inventory): correct quantity calculation`. Mark breaking changes with `!` before the colon, or the specification's `BREAKING CHANGE:` footer.

| Type | Purpose |
| --- | --- |
| `feat` | New functionality |
| `fix` | Correcting behavior |
| `docs` | Documentation |
| `refactor` | Code restructuring without changing behavior |
| `test` | Tests |
| `build` | Build tools or dependencies |
| `ci` | Automated workflows |
| `chore` | Project setup or other maintenance |
| `perf` | Performance improvements |
| `style` | Code formatting without behavior changes |
| `revert` | Undoing an earlier change |

Use lowercase types and a specific description such as `chore: scaffold project structure`. The extra types and branch format above are our convention; the external specification primarily defines `feat`, `fix`, and breaking changes.

Use this format for your own commits and PR titles. Automatically generated merge commits are exempt. A long commit body is optional. Keep unrelated changes in separate commits; one PR may contain several related commits.

## Pull request descriptions

Explain what changed, why it was needed, what checks actually ran and their results, and anything unfinished or untested. Link related issues. Include screenshots when they make a visible change easier to review.

Publishing a branch or opening a pull request does not merge it. Repository review requirements still apply.

## Checking AI-assisted work

- Ask for a plain-language explanation and known limitations.
- Try the affected business workflow, including an unexpected input where relevant.
- Review the changed files with Claude's help and confirm which technical checks ran.
- Record any checks that could not be completed. A proposal or confident statement is not evidence that a change was saved, tested, or published.
- Get help before merging when you cannot judge the impact.

Claude Code, Cowork, and browser chat have different capabilities. Use the tools available in the current environment and verify completed actions.

## Data and support

Do not commit credentials, customer datasets, or confidential information. Use approved company accounts, tools, and data-handling practices. Report access or security concerns through the company's approved private support process, not a public issue.

This default repository is public. Keep its content safe for public viewing. Project-specific internal procedures belong in private repositories.
