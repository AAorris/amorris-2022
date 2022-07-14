#!/usr/bin/env zsh

if [[ "$1" == "" ]]; then
    echo "Usage: create-package <name>"
    exit 1
fi

echo "creating packages/$1"
cp -r packages/_template packages/$1
