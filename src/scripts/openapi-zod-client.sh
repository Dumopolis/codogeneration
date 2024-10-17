#!/bin/bash


# Генерация кода TypeScript из OpenAPI спецификации
npx openapi-zod-client ./openapi.yaml -o ./src/openapi-zod-client/zod-client.ts --with-docs true --export-types true --strict-objects true

