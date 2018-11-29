#!/usr/bin/env sh
npm version patch
npm run build:release
npm publish
