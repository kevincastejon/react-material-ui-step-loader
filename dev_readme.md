### Development
You should use YARN for development as NPM seems to be causing some issues!
(Using NPM for just installing and using as a component is OK)
#### Demo app
- `yarn start` for live-testing the demo app

#### Storybook
- `yarn storybook` for live-testing the storybook app

#### GitHub Page
- `yarn github-page` for testing a temporary build of the full github-page without an possible theme that you will choose later on GitHub (no live-testing)

### Prod
#### Generate Readme.md
- `yarn generate-readme`

Will generate a readme according to your package.json info and the following files :
-  - setup_readme.md (if not present, it will use the default `npm i YOUR_PACKAGE_NAME`)
-  - usage_readme.md
-  - dev_readme.md

You can then edit your readme.md file if you need to before building/publishing/deploying

#### NPM
- `yarn publish`

Will transpile and publish to npm, it will prompt you the version incrementing.

#### GitHub Page
- `yarn build`

Will build the static demo and storybook apps for prod into the build folder

- `yarn deploy-github-page`

Will deploy the built apps from 'build' folder to the 'gh-pages' github branch

#### Helper scripts
- `yarn build-and-deploy` This helper script will call all the scripts for a complete GitHub building and deploying (`yarn build && yarn deploy-github-page`)
- `yarn publish-build-and-deploy` This helper script will call all the scripts for a complete NPM and GitHub transpiling/building and publishing/deploying (`yarn publish && yarn build-and-deploy`)


You should then commit and push sources on GitHub the usual way.
