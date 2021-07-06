#!/bin/sh

dir=$(dirname $BASH_SOURCE[0])

echo $dir

kind create cluster --config="$dir/cluster-config.yaml"

VERSION=$(curl https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/stable.txt)
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/${VERSION}/deploy/static/provider/kind/deploy.yaml

echo "Waiting for ingress to start ..."

sleep 10

kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=90s

kind get clusters
