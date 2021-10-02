/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPropertyID = /* GraphQL */ `
  mutation CreatePropertyID(
    $input: CreatePropertyIDInput!
    $condition: ModelPropertyIDConditionInput
  ) {
    createPropertyID(input: $input, condition: $condition) {
      id
      name
      landId
      createdAt
      updatedAt
    }
  }
`;
export const updatePropertyID = /* GraphQL */ `
  mutation UpdatePropertyID(
    $input: UpdatePropertyIDInput!
    $condition: ModelPropertyIDConditionInput
  ) {
    updatePropertyID(input: $input, condition: $condition) {
      id
      name
      landId
      createdAt
      updatedAt
    }
  }
`;
export const deletePropertyID = /* GraphQL */ `
  mutation DeletePropertyID(
    $input: DeletePropertyIDInput!
    $condition: ModelPropertyIDConditionInput
  ) {
    deletePropertyID(input: $input, condition: $condition) {
      id
      name
      landId
      createdAt
      updatedAt
    }
  }
`;
