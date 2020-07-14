module.exports = {
    createBook: async (parent, args,context) => {
        console.log(args);
        const bookObj= await context.prisma.books.create({data:{BookId:args.book.BookId,Description:args.book.Description,Title:args.book.Title,author:{create:{AuthorId:args.book.author.AuthorId,Age:args.book.author.Age,Name:args.book.author.Name}} }})
        
        console.log(bookObj);
       return 'Book Created Successfully';
     }
  };
  