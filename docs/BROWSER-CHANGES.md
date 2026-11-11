# Make a change in your browser

[Start here](START-HERE.md) · [Contribution rules](../CONTRIBUTING.md)

Use this for a document or small text edit. For application changes that need local testing, use the [VS Code guide](VSCODE-CHANGES.md). You need permission to create a branch in the repository. If GitHub offers to fork the company repository into your personal account, stop and ask the maintainer for the intended access.

## Create your task branch

1. Open the repository's **Code** tab. Read its README and contribution guide.
2. Above the files, open the branch selector and select `main`.
3. Open the selector again. Type a new name such as `docs/clarify-user-instructions` and select **Create branch … from main**. Use a unique, descriptive name for your task.
4. Confirm the selector now displays your task branch. Changes you make here will not change `main` until merged.

## Edit and save

1. Open the file, then select the pencil (**Edit this file**). For a new text file, use **Add file > Create new file** instead.
2. Make the focused change. Use **Preview** to check formatting when available.
3. Select **Commit changes**. Use a message such as `docs: clarify user instructions`.
4. Confirm the destination is your task branch, not `main`, then commit. Browser commits are already saved on GitHub; there is no separate local push step.

Repeat on the same branch for related edits. Do not create a new PR for each saved revision.

## Propose the change

1. Open **Pull requests > New pull request** (or the **Compare & pull request** banner).
2. Set **base** to `main` and **compare** to your task branch. These should be different. If GitHub reports nothing to compare, check the branch and that your commit was saved.
3. Review the file differences. Include only changes that belong to this task.
4. Select **Create pull request**. Use a title such as `docs: clarify user instructions` and fill in the template: what changed, why, what you checked, and anything untested.
5. Select a reviewer if you know the appropriate maintainer and have that option. Otherwise share the PR link with the maintainer through your normal company channel.

You are done when the PR exists and the right person can review it. Follow [Review a change](REVIEW-A-CHANGE.md) for feedback and merging. Publishing the proposal does not approve it.

Interface reference: [GitHub's Hello World walkthrough](https://docs.github.com/en/get-started/using-github/hello-world).
