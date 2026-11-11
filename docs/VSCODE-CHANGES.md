# Make a change in VS Code

[Start here](START-HERE.md) · [Contribution rules](../CONTRIBUTING.md)

This path is for an existing GitHub repository. If the project only exists on your computer, follow [Upload an existing project](UPLOAD-A-PROJECT.md) first. Ask IT for help installing Git and VS Code if needed. Each application's README lists its own additional tools and run commands.

## Open the right project

1. On GitHub, open the company's repository and select **Code > HTTPS**, then copy its URL.
2. In VS Code, press **Ctrl+Shift+P**, run **Git: Clone**, and paste the URL. Choose a parent folder on your computer. Sign in with the account authorized for company work when prompted.
3. Select **Open** when cloning finishes. Open the individual repo folder, not a parent folder containing several repos. If you already cloned it, use **File > Open Folder** to open that existing folder instead.
4. Open **Terminal > New Terminal**. Run `git remote -v` and confirm the URL points to the intended `Leuco-Tool-US` repository. Run `git status` to see the current branch and any unfinished changes.
5. Check `git config user.name` and `git config user.email`. These control commit attribution, separately from GitHub sign-in. If they are wrong, use the project-only commands below, replacing the example values with your own name and an email verified on your work GitHub account (or its GitHub no-reply address):

```powershell
git config --local user.name "Your Name"
git config --local user.email "YOUR_VERIFIED_EMAIL"
```

These commands do not change identity settings for your other repositories. Do not copy another employee's identity.

## Start a task

With no unfinished changes, use **Ctrl+Shift+P > Git: Checkout to...** and select `main`, then **Git: Pull**. Next run **Git: Create Branch...**, enter a name such as `fix/incorrect-total`, and confirm it appears in the bottom status bar.

If you prefer the terminal, the equivalent commands below run in the project terminal you opened above. Change the example branch name for your task. Run each command separately; stop if one fails.

```powershell
git status
git switch main
git pull --ff-only
git switch -c fix/incorrect-total
```

If `git status` shows work you have not saved into a commit, do not discard it to make these commands work. Ask the maintainer to help retain it on the correct branch. If a pull reports conflicts or diverged history, do not force-push or reset to get past the error.

## Save, check, commit and push

1. Make your changes and save the files. Run the project's documented checks and try the affected business workflow. Record what passed and what you could not test.
2. Open **Source Control**. Select each changed file to review its differences. Use the **+** beside each intended file to stage it (select it for the commit). Do not stage unrelated files, secrets, or live data.
3. Enter a specific message such as `fix: correct quantity total`. Choose **Commit** from the button's dropdown if the main button says **Commit & Push**. A local commit alone is valid; the combined button is a convenience.
4. Use **Publish Branch** the first time you upload this branch. If VS Code offers to publish a new repository instead, stop and recheck the existing remote. On later revisions use **Git: Push**.
5. Open the repository on GitHub, then **Pull requests > New pull request**. Set **base: main**, **compare: your task branch**. Check the changed files, enter a conventional title, and complete the PR template.

You have finished proposing the change when the PR is visible on GitHub. Continue feedback on that same branch and PR. Follow [Review a change](REVIEW-A-CHANGE.md) before merging.

After the PR is merged and your local work is committed, switch to `main` and pull again before starting the next task. Deleting the remote task branch does not delete your local branch or the merged history.

References: [VS Code and GitHub](https://code.visualstudio.com/docs/sourcecontrol/github), [branches](https://code.visualstudio.com/docs/sourcecontrol/branches-worktrees), and [staging and committing](https://code.visualstudio.com/docs/sourcecontrol/staging-commits).
