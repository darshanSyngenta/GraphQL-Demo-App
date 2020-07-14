

module.exports = {
    getAllBooks: async (parent, args, context, info) => {
      console.log(info);
        const allBooks = await context.prisma.books.findMany()
        return allBooks;
  }
};
