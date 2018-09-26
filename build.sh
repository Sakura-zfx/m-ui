#!/usr/bin/env sh
set -e
read -p "Are you sure to change package.json version? (y/n)" -n 1 -r
echo    # (optional) move to a new line

if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Enter commit type: "
  read COMMIT_TYPE

  echo "Enter commit message: "
  read MESSAGE

  read -p "Commit $COMMIT_TYPE: $MESSAGE - are you sure? (y/n)" -n 1 -r
  echo    # (optional) move to a new line

  if [[ $REPLY =~ ^[Yy]$ ]]
  then
    echo "Commit $COMMIT_TYPE: $MESSAGE ..."
    npm run build:release

    git add .
    git commit -m "$COMMIT_TYPE: $MESSAGE"
    git push origin master

    echo "Publish $COMMIT_TYPE: $MESSAGE ..."
    npm publish
  fi
fi
