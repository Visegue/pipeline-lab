# Pipeline-lab

This is a lab project for testing out workflows with github actions.

The aim is to make and keep it generic with regards of no partilar underlying technology.
This is partially true as it will utilize [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) and particularily [semantic-release](https://github.com/semantic-release/semantic-release) to automate the release process.

Outside of that the workflow files for this particular project will be technology agnostic (although it was initally scaffolded for nextjs).
The idea is to fork the repo to try out different technology stacks.

## Workflow

The theory behind the workflow currently looks like:
![Workflow visualization](docs/build.drawio.svg)

The visualization make no distinction of how the different branches should be used.

Initially a nominal workflow was visualized. Illustrating how the different branches was made to be used in conjunction and automate processes between them.
The idea was to automate the complete release process: <br /> 
`feature/fix/...` -> `prerelease (staging)`-> `release (prod)`

Instead the branches are now viusalized completely separate and a user can decide for themself how to work with them. That way it's possible to create a flow working with both `previews`, `prereleases` and/or `releases`.

### Feature branches

The feature branches are the heart of the development cycle.
With the current actions all branches are considered `feature` branches.
When a change is ready it should be merged into any of the other branches, taking the workflow forward.
When a `PR` is created it should deploy a preview which will (preferably) be automatically verified, manually where automation is not applicable.

An independently deployed preview is favorable instead of deploying to a dev environment.
Deployment to a dev environment is usually easier, but if several features are worked on in parallel they might end up overwriting each other, needing syncronization between parallel work.
Although a `PR` is usually filed when the work is ready to be brought in, it is still W.I.P as long as it's open (and there's communication going on between the participants of the PR).
It's not always the case that the work done in the PR is ready for `environment` deployment until it's ready for merge.
