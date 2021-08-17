#!/bin/bash

echo "Using cluster config at $1"

kind create cluster --config=$1

echo "Cluster info"
kubectl cluster-info --context kind-auth-example

VERSION=$(curl https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/stable.txt)
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/${VERSION}/deploy/static/provider/kind/deploy.yaml

echo "Waiting for ingress to start ..."

sleep 20

kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=90s

kubectl apply -f https://github.com/jetstack/cert-manager/releases/latest/download/cert-manager.yaml
