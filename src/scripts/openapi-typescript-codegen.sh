#!/bin/bash

# Генерация кода TypeScript из OpenAPI спецификации
npx openapi-typescript-codegen -c axios --input openapi.yaml --output ./src/openapi-typescript-codegen --useOptions --indent 2 
