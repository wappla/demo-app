# Project Title

Dashdot demo app

## Packages

-   Api: `@demo/api`
-   Admin: `@demo/admin`
-   Customer: `@demo/customer`
-   Components: `@demo/components`
-   Constants: `@demo/constants`
-   Utils: `@demo/utils`

## Development Setup

run `npm run copy:env` to copy all env example files

run `npm run docker:start` to start the docker container

run `npm run modules:install`

After that run `npm run dev` and you're ready to go

If you want to create the app DB run the following command:

`cd apps/api && npm run cmd db:reset`

## Install new packages

This is a mono-repo, using [Turbo](https://turborepo.org/) and [npm workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces).

Turbo docs for installing an external package:

[Install package readme](https://turbo.build/repo/docs/handbook/package-installation#addingremovingupgrading-packages)

Example:

```zsh
 npm install example/package --workspace=@demo/api
```

## Deployment

### Production
