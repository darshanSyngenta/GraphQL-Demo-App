module.exports = {
    Author: {
        books: async(parent,args,context,info)=>{
        const allBooks = await context.prisma.books.findMany({where:{AuthorId:parent.AuthorId}})
        return allBooks;
    }
    }
}