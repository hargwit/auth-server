# auth-server

An example basic authentication server written in [node](https://nodejs.org/en/) alongside
[express](https://expressjs.com/) and a [mysql](https://www.mysql.com/) database.

## Contents

- [Motivation](#motivation)
- [Getting started](#getting-started)
- [Environments](#environments)
- [How to contribute](#how-to-contribute)

## Motivation

The motivation for this project is two-fold:

- Solidify Kuberenetes knowledge

  - Kubernetes is in operation in my day job for production and QA environments so helps me to debug issues in those
    areas
  - Gives me a better understanding of how my code will be deployed and therefore can influence my design decisions.

- Investigate "throw-away" environments

  - Quickly create a production-like environment with a single command
  - Must be able to create environment on development machine
  - Must be able to create environment in CI workflow
  - Ideally reuse as many production Kubernetes resources as possible to reduce duplication
  - Potentially useful for end-to-end/integration level testing

## Getting started

Follow these steps to create a "throw-away" kubernetes cluster on your local machine that is representative of the live
environment.

Pre-requisites:

- [Docker](https://www.docker.com/)
- [Kind](https://kind.sigs.k8s.io/)
- [Skaffold](https://skaffold.dev)
- [Kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)

Once you have installed these tools, run the following two commands to create a local production-like Kubernetes
cluster. The cluster will be accessible at your [localhost](http://localhost).

Create the cluster with [Kind](https://kind.sigs.k8s.io/)

```sh
./k8s/create-cluster k8s/cluster-config.yaml
```

Build the images and deploy them to the cluster with [Skaffold](https://skaffold.dev) and
[Kustomize](https://kustomize.io/) (built into Kubectl).

```sh
skaffold run -p dev
```

Optionally you can add the following line to your `/etc/hosts` file so that your locally running cluster will be
acccessible at a production like endpoint [`auth-dev.hargwit.com`](http://auth-dev.hargwit.com).

```sh
locahost auth-dev.hargwit.com
```

## Environments

The environments all share a base set of Kubernetes resources that describe the deployment and services. Specific
[Kustomize](https://kustomize.io/) overlays are used to customize the ingress hosts and namespaces.

[Skaffold](https://skaffold.dev) is responsible for building application docker images and final Kubernetes resource
files, storing the images in docker repositories and deploying them to the target cluster. Each environment has a
corresponding [Skaffold profile](https://skaffold.dev/docs/environment/profiles/) which describes the build and deploy
process.

### Development

The development environment runs on your local development machine. You can start this environment up by following the
steps in [Getting started](#getting-started).

[Skaffold](https://skaffold.dev) also supports hot-reloading environments on code changes. Run the following command,
make a change to the code and see your change automatically re-deployed to the cluster.

```sh
skaffold dev -p dev
```

### Test

The test environment is built during the [pull_request](./.github/workflows/pull_request.yaml) pipeline. This Github
action pipeline builds a [Kind](https://kind.sigs.k8s.io/) cluster before using [Skaffold](https://skaffold.dev) to
build and deploy the application images to the cluster.

This environment is entirely private to the Github action and it is thrown away after the action finishes runnning.

Once the environment is deployed, the action runs integration tests against the cluster. This provides a high level of
confidence as the cluster is a replication of the production environment.

### QA

The QA environment is hosted as a subdomain of my [website](https://hargwit.com) -
[auth-qa.hargwit.com](https://auth-qa.hargwit.com). Both the QA and [Production](#production) environments share a
[Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine/) cluster with independent namespaces.

Each time a commit is pushed to the develop branch (i.e. when development branches are merged post code-review) the
[deploy](./.github/workflows/deploy.yaml) pipeline will run. This pipeline uses [Skaffold](https://skaffold.dev) to
build the docker images before pushing them to my
[dockerhub registry](https://hub.docker.com/repository/docker/hargwit/auth-server). After this,
[Skaffold](https://skaffold.dev) will deploy the built images to the
[Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine/) cluster using the credentials stored as secrets
against the Github repository.

The ingress is controlled by the [NGINX ingress controller](https://kubernetes.github.io/ingress-nginx/) and HTTPS
certificates are managed by [cert-manager](https://cert-manager.io/) while DNS records are managed by Netlify DNS using
subdomains to my site [hargwit.com](https://hargwit.com).

### Production

The production environment is almost identical to the [QA environment](#qa) (or rather the other way around). This
environment is hosted as another subdomain at [auth.hargwit.com](https://auth.hargwit.com).

When a release is created against the Github repository, the [release](./.github/workflows/release.yaml) pipeline will
run. This pipeline works in exactly the same way as the [QA](#qa) pipeline but with the production
[Skaffold](https://skaffold.dev) profile specified.

Once again, the ingress is controlled by the [NGINX ingress controller](https://kubernetes.github.io/ingress-nginx/) and
HTTPS certificates are managed by [cert-manager](https://cert-manager.io/) while DNS records are managed by Netlify DNS
using subdomains to my site [hargwit.com](https://hargwit.com).

## How to contribute

Something missing or not working as expected? See the [contribution guide](./CONTRIBUTING.md).
