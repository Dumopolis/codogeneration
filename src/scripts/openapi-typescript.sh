#!/bin/bash

# Local schema
npx openapi-typescript openapi.yaml -o ./src/openapi-typescript/api.ts --root-types true --export-type true --alphabetize true --path-params-as-type true