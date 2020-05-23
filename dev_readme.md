**All the scripts presented here can be call with npm or yarn, if using yarn just replace 'npm run' by 'yarn'.**

### Start
`npm run start`
(alias of 'npm run dev')

Runs the library in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Test
`npm run test`

Runs the test watcher in an interactive mode.

`npm run storybook`

Runs the storybook playground in development mode. Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### Builds
`npm run `
  - **build-component** : Build the component for publishing into 'build' folder.
  - **build-documentation-page** : Build a Jekyll static page from the readme.md file into 'public/documentation'. To test this, run 'start' or 'dev' and open your browser to [http://localhost:3000/documentation](http://localhost:3000/documentation).
  - **build-storybook-page** : Build the storybook static app into 'public/storybook'. To test this, run 'start' or 'dev' and open your browser to [http://localhost:3000/storybook](http://localhost:3000/storybook).
  - **build-github-page** : Will call 'build-documentation-page' and 'build-storybook-page' and then build the complete static demo app into 'demo' folder for github gh-page branch.
  - **build-all** : Will call 'build-component' and 'build-github-page' so it will build the component into 'build' for publishing, and the complete static demo app into 'demo' folder for github gh-page branch.

### Deploy
`npm run deploy-github-page`
Deploys the built demo page to github gh-page branch. You can then access by visiting [https://YOUR-USER-NAME.github.io/YOUR-PACKAGE-NAME/](https://YOUR-USER-NAME.github.io/YOUR-PACKAGE-NAME/), add '/documentation' to visit the Jekyll static readme app, or '/storybook' to visit the storybook playground of your library.
