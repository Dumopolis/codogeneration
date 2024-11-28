import createClient from "openapi-fetch";
import type { paths } from "./api"; // generated by openapi-typescript

export type LoginResponse = paths['/login']['post']['requestBody']['content']['application/json']

const client = () =>
  createClient<paths>({ baseUrl: "http://localhost:8080"  });

export const getUser = async (id:number) => {
  const response = await client().GET("/users/{id}", {
    params: {
      path: { id },
    },
  });

  return response;
};
