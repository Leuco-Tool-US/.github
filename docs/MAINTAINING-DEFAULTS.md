# Maintaining organization defaults

The root CONTRIBUTING.md is the organization's employee guide. This file adds requirements for changes to the defaults themselves.

- Keep every file safe for public visibility, including workflow templates, issue forms, and the organization profile.
- Consider the effect on repositories that inherit defaults. A local CONTRIBUTING.md or PR template replaces that default; GitHub does not merge the text.
- Default community files are displayed by GitHub but are not copied into individual repository clones. Claude needs separately distributed machine instructions.
- Workflow templates are optional starting points, not automatically installed checks. Deploy updated workflow copies deliberately and record their version.
- Install the naming workflow in a pilot repository and let it run before making its `conventions` check required.
- Review changes to automated checks as tooling changes. Restrict who can edit required workflows using repository permissions and review requirements; an editable workflow is not an immutable organization policy.

Sources: [default community files](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file), [workflow templates](https://docs.github.com/en/actions/how-tos/reuse-automations/create-workflow-templates).
