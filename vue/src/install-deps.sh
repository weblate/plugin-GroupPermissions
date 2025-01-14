#!/bin/sh

mv _package.json package.json
npm install
mv package.json _package.json
