# Upload an existing project

[Start here](START-HERE.md) · [Contribution rules](../CONTRIBUTING.md)

The goal is to bring usable project source into a company-owned repository for review. Uploading source does not move the running application, migrate its database, or approve its use. However, an existing deployment connection can react to pushes: check the project's current hosting setup first.

## 1. Identify what you have

| Starting point | Next step |
| --- | --- |
| A folder of source files, without Git history | Use the new-repository steps below. |
| An existing Git repository, on your computer or in a personal account | Old commits are uploaded too, so they need the same review as today's files. If the history is clean and you want to keep it, ask the maintainer to review a history-preserving import or transfer. If the history contains sensitive material or cannot be reviewed, do not upload it: copy the reviewed current files into a new folder without the `.git` folder, use the new-repository steps below, and say in the PR that history was left out and why. Keep the original folder and its `.git` untouched; do not force-push or rewrite its history. |
| An existing company repository | Clone that repo and use a task branch. Do not initialize another copy or overwrite its history. |
| A Claude artifact or hosted app link | Export the actual source first. A link or screenshot is not a complete project. Include required components, styles, assets, dependency files and run instructions; identify anything missing. |

If unsure whether your folder already uses Git, open it in VS Code, choose **Terminal > New Terminal**, and run `git rev-parse --show-toplevel`. A returned path identifies its Git root, possibly a parent folder. A “not a git repository” result means Git did not find one. Do not initialize another repo inside an existing one.

## 2. Prepare the files before upload

- Include source, dependency manifests and lockfiles, needed configuration examples, permitted assets, and synthetic examples. Add a README with purpose, maintainer/contact, setup/run/test instructions, required environment-variable names, and known limitations.
- Exclude passwords, tokens, actual `.env` files, live sales/customer/user records, database dumps, logs with private data, and sensitive screenshots. A private repo is still not a secrets manager or operational database.
- Exclude generated dependency folders such as `node_modules` and `.venv`, build output, and machine-specific files. Configure `.gitignore` for the actual project. An `.env.example` must contain placeholders only.
- Review source and configuration for embedded credentials and personal paths. Check that asset and dependency rights permit company use. Automated scanning helps, but does not prove the content is safe.
- For existing history, deleting a secret from today's files does not remove it from old commits. Contact IT privately about exposed credentials and arrange rotation and history review before uploading.

Ask the project maintainer to help with this first import if you cannot assess the file list. Do not upload a whole laptop folder, working database, or project ZIP as a substitute for reviewing its contents.

## 3. Create the destination (new project without history only)

1. On GitHub select **New repository**. Set **Owner: Leuco-Tool-US**. If the organization is unavailable or creation is blocked, ask its administrator to create the repository for you.
2. Under **Repository template**, choose `Leuco-Tool-US/project-template-basic`. It supplies a README outline, contribution guide, proprietary notice, `.gitignore` and the naming check. For a Python application choose `Leuco-Tool-US/app-template-python` instead. Use a descriptive lowercase name with hyphens. Select **Private** and add a brief purpose. The template files create the initial `main` baseline, so your source import can be reviewed in a PR. If you start without a template, initialize with a README instead.
3. Do not choose an open-source license without authorization. Create the repository and confirm its owner and private visibility.
4. Clone this new repository into a new folder using the [VS Code guide](VSCODE-CHANGES.md). Keep your original source folder untouched.
5. Create a branch named `chore/import-project` from `main` using that guide.
6. Copy only the reviewed source and supporting files into the clone. Do not copy a `.git` folder, excluded data, or credentials. Combine useful README content instead of blindly overwriting it.
7. Review and stage the intended files in Source Control, commit as `chore: import project source`, and **Publish Branch**.
8. Open a PR with **base: main**, **compare: chore/import-project**. Describe the source, files omitted, checks run, and anything missing. Have the maintainer review it before regular merging.

The new repo does not automatically inherit another repo's checks, settings, templates or Claude installation. Before routine team use, its maintainer must apply the [repository defaults setup](MAINTAINING-DEFAULTS.md), inspect the project's workflow files before enabling execution, confirm intended access and merge settings, and verify run/test instructions with synthetic data. This setup is separate from approving hosting, production access, or deployment.

For a brand-new project rather than an existing source import, start from the same templates: `project-template-basic` for most work, `app-template-python` for a Python application. Ask the maintainer if neither fits. Do not assume a Python template fits a React application.

Official background: [Importing locally hosted code](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github). Our first-import procedure uses a README baseline and review branch so the team can review the source before it joins `main`.
