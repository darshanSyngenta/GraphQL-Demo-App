module.exports = {
    Book:{
        author:async(parent,args,context,info)=>{
            console.log('************************************');
            console.log(info);
            const allAuthor = await context.prisma.author.findOne({where:{AuthorId:parent.AuthorId}})
            return allAuthor;
        }
    }
};