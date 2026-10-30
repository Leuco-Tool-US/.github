# Organization GitHub Defaults

Shared GitHub defaults and workflow templates for LEUCO Tool Corporation repositories.

## Important visibility requirement

For a normal GitHub organization, GitHub requires the special `.github` repository to be public in order for default community health files to apply to the organization's other repositories. Keep this repository free of proprietary information, credentials, internal URLs, private employee information, and sensitive architecture details.

If the organization later uses Enterprise Managed Users, confirm the applicable GitHub visibility rules before changing this repository.

## What belongs here

- Default contribution guidance
- Default pull request templates
- Default issue templates
- Generic security-reporting guidance
- Organization workflow templates
- Public organization profile content, if desired

## What does not belong here

- Secrets
- Proprietary application code
- Internal system diagrams
- Private infrastructure details
- Company-wide Claude skills or hooks
- The engineering knowledge vault

Repository-specific templates override organization defaults when a project needs something different.

## Maintain these defaults

Read [maintainer guidance](docs/MAINTAINING-DEFAULTS.md) and [naming check setup](docs/NAMING-CHECKS.md). The installed conventions workflow checks this repository too.
