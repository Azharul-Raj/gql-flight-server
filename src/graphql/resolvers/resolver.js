const InvoiceModel = require('../../models/Invoice');

// Define your GraphQL resolvers
const resolvers = {
  Query: {
    getInvoiceData: async (_, { invoiceId }) => {
      try {
        const invoice = await InvoiceModel.findById(invoiceId);
        return invoice;
      } catch (error) {
        throw new Error('Error fetching invoice data');
      }
    },
    getAllInvoiceData: async () => {
      try {
        const invoices = await InvoiceModel.find();
        return invoices;
      } catch (error) {
        throw new Error('Error fetching all invoice data');
      }
    },
  },
  Mutation: {
    createInvoiceData: async (_, { input }) => {
      console.log(input)
      try {
        const newInvoice = new InvoiceModel(input);
        const savedInvoice = await newInvoice.save();
        return savedInvoice;
      } catch (error) {
        throw new Error('Error creating invoice data');
      }
    },
    updateInvoiceData: async (_, { invoiceId, input }) => {
      try {
        const updatedInvoice = await InvoiceModel.findByIdAndUpdate(
          invoiceId,
          input,
          { new: true }
        );
        return updatedInvoice;
      } catch (error) {
        throw new Error('Error updating invoice data');
      }
    },
    deleteInvoiceData: async (_, { invoiceId }) => {
      try {
        const deletedInvoice = await InvoiceModel.findByIdAndRemove(invoiceId);
        return deletedInvoice;
      } catch (error) {
        throw new Error('Error deleting invoice data');
      }
    },
  },
};

module.exports = resolvers;
