#!/bin/bash -e

npm install
git_hash=$1 git_branch=$2 npm run test