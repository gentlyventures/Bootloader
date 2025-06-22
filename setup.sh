#!/bin/bash

set -e

echo "Installing dependencies..."
npm install

echo "\ud83d\udd27 Installing test dependencies..."
npm install --no-save jest @types/jest ts-jest
