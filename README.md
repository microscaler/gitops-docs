# Weave GitOps Docs - Re-Hosted

These docs are published as: [docs.microscaler.com](https://docs.microscaler.com)

You can easily repeat the same trick using Fermyon Cloud!

Later on, we may add a CI, but for now the site has been built and published by hand.

## How to maintain this Repository

There are three `make` targets:

### `make clone`

Git clone from `git@github.com:microscaler/weave-gitops`

### `make build`

Runs `cd weave-gitops/website && yarn build` - first, make sure you ran `yarn
install` in the `weave-gitops/website` directory by hand.

This was tested using Node `v21.7.1` and Yarn `1.22.19`

### `make sync`

Using `rsync`, populates the `assets/` directory with the build output.

## `spin deploy`

(You will need to update `spin.toml` to point at your own deployment)
