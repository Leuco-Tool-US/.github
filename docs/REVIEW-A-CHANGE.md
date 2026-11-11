# Review a change

[Start here](START-HERE.md) · [Contribution rules](../CONTRIBUTING.md)

You can review entirely in your browser. No terminal, local project, or programming knowledge is required to discuss a document.

1. Open the PR link. On **Conversation**, read the purpose, proposed changes, and reported checks. Ask for clarification if the result or reason is unclear.
2. Select **Files changed**. GitHub shows the previous and proposed content. Check that the changed files match the stated purpose. For a document, read the surrounding text; for an app, ask for a demonstration and try the affected workflow where possible.
3. For a general question, leave a comment on **Conversation**. For a specific sentence or line, use the **+** beside it in **Files changed**. If you start a pending review, finish with **Review changes** and submit it; pending comments are not yet shared.
4. Choose **Comment** to discuss, **Request changes** to ask for revisions, or **Approve** if you support merging this version. Available actions depend on access; authors cannot approve their own PRs.
5. The author responds and pushes revisions to the same branch. Review those revisions before considering the discussion complete.

Do not approve an application solely because its automated checks are green. Read which checks ran: a naming check does not test behavior, security, or business accuracy. Say which parts you can assess and ask for help with the rest.

## Finishing the PR

The project maintainer confirms the intended review is complete, feedback is resolved, and applicable checks pass. Use **Create a merge commit**, then confirm; our convention does not use squash or rebase merging. If that option is unavailable or GitHub reports conflicts, ask the maintainer rather than bypassing the problem.

After the merge, the task branch may be deleted. The merged commits and PR discussion remain available. Start the next task from updated `main`.

The ability to click Merge does not prove that review happened; enforcement varies by repository settings and GitHub plan. A document merge is a saved change. Formal policy adoption still needs the agreed approval evidence. Application deployment follows that project's release process and may be automated.

Official reference: [Reviewing proposed changes](https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request).
