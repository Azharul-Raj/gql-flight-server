const { gql } = require('apollo-server-express');

// Define your GraphQL schema
const typeDefs = gql`
  type Product {
    product_type: String!
    product: String!
    description: String!
    total: String!
  }

  type InvoiceData {
    _id: ID!
    client: String!
    trip_no: String!
    products: [Product!]!
  }

  type Query {
    getInvoiceData(invoiceId: ID!): InvoiceData
    getAllInvoiceData: [InvoiceData]
  }

  type Mutation {
    createInvoiceData(input: InvoiceDataInput!): InvoiceData
    updateInvoiceData(invoiceId: ID!, input: InvoiceDataInput!): InvoiceData
    deleteInvoiceData(invoiceId: ID!): InvoiceData
  }

  input InvoiceDataInput {
    client: String!
    trip_no: String!
    products: [ProductInput!]!
  }

  input ProductInput {
    product_type: String!
    product: String!
    description: String!
    total: String!
  }
`;

module.exports = typeDefs;
