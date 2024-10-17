#!/bin/bash

# Генерация кода TypeScript из OpenAPI спецификации
npx @openapitools/openapi-generator-cli generate -i openapi.yaml -o ./src/openapi-generator -g typescript-axios --additional-properties=supportsES6=true,withInterfaces=true,withSeparateModelsAndApi=true,apiPackage='api',modelPackage='model' --skip-validate-spec
