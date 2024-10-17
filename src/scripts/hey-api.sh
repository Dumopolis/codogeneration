#!/bin/bash


# Генерация кода TypeScript из OpenAPI спецификации
npx @hey-api/openapi-ts -i openapi.yaml -o ./src/hey-api -c @hey-api/client-axios --schemas=false

