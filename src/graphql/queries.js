/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPropertyID = /* GraphQL */ `
  query GetPropertyID($id: ID!) {
    getPropertyID(id: $id) {
      id
      name
      landId
      createdAt
      updatedAt
    }
  }
`;
export const listPropertyIDS = /* GraphQL */ `
  query ListPropertyIDS(
    $filter: ModelPropertyIDFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPropertyIDS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        landId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
