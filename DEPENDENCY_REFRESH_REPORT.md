# Dependency Refresh Report

Branch: `chore/refresh-dependencies`  
Date: 2026-08-31

## Scope

Clean up repo-side dependency warnings that appeared during Docker deployment builds.

This work was completed in the GitHub repo workflow, not directly on the VPS.

## Commands run

```bash
git checkout main
git pull origin main
git checkout -b chore/refresh-dependencies

npm ci
npm audit
npx update-browserslist-db@latest
npm install baseline-browser-mapping@latest -D
npm audit fix

npm run lint
npm run build
npm audit --json > npm-audit-after.json
npm ls next postcss eslint-config-next @next/eslint-plugin-next glob --all
```

## Audit summary

| Stage | Moderate | High | Total |
| --- | ---: | ---: | ---: |
| Before safe fixes | 2 | 11 | 13 |
| After safe fixes | 0 | 5 | 5 |

The full after-audit output is captured in `npm-audit-after.json`.

## Browser data warning status

Resolved.

The production build no longer reports stale warnings for:

- `baseline-browser-mapping`
- `caniuse-lite`
- Browserslist data

## Safe updates applied

- Updated `caniuse-lite` through `npx update-browserslist-db@latest`.
- Added/updated `baseline-browser-mapping` as a dev dependency.
- Applied `npm audit fix` without `--force`.
- Updated Next.js within the existing major version to `14.2.35`.
- Updated transitive vulnerable packages where npm could do so without breaking major upgrades.

## Remaining vulnerabilities

`npm audit` still reports 5 high vulnerabilities after safe fixes.

Remaining owning packages:

- `next@14.2.35`
- `next` transitive `postcss@8.4.31`
- `eslint-config-next@14.2.35`
- `@next/eslint-plugin-next@14.2.35`
- `glob@10.3.10` under Next ESLint tooling

The npm-recommended full fix is:

```bash
npm audit fix --force
```

That would install:

- `next@16.3.3`
- `eslint-config-next@16.3.3`

This was not applied in this branch because it is a breaking upgrade path. Next 16 requires Node `>=20.9.0`, while the current Dockerfile uses `node:18-alpine` for dependency, build, and runtime stages. The matching Next 16 ESLint config also expects ESLint 9+, while the repo currently uses ESLint 8.

Recommended follow-up: plan a separate framework/runtime upgrade branch for Next 16, Node 20, and ESLint 9 migration.

## Validation

Passed:

- `npm run lint`
- `npm run build`

The validated production build generated all expected app routes, including:

- `/`
- `/blog`
- `/blog/meet-the-two-agent-infrastructure-team`
- `/products/azure-vm-manager`
- `/feed.xml`
- `/sitemap.xml`

## Visual/content regression check

No content changes were made in this branch. The dependency refresh compiled the existing pages successfully.

The key requested routes were checked locally after the dependency refresh:

| Route | Status | Expected page title |
| --- | ---: | --- |
| `/` | 200 | `143IT — Automate & Dominate with AI` |
| `/blog` | 200 | `Blog — Daily IT Operations Insights \| 143IT` |
| `/blog/meet-the-two-agent-infrastructure-team` | 200 | `Meet the Two-Agent Infrastructure Team \| 143IT Blog` |
| `/products/azure-vm-manager` | 200 | `Azure VM Manager — Controlled Azure VM Operations \| 143IT` |

## Deployment note

After this branch is merged to `main`, redeploy through the normal VPS deployment command:

```bash
/home/sidekick/bin/deploy-143it
```
