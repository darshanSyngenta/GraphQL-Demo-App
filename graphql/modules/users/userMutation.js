
module.exports = {
    login:async (parent, { username, password },context,info) => {
       console.log(info);
       const userObj= await context.prisma.user.findOne({where:{UserName:username}})
       return {token:'d2r934jf95jtg5489gjrvij4rvi4j'};
    },
    signup:async (parent, { username, password },context) => {
        
       const userObj= await context.prisma.user.create({data:{ UserName: 'alice@prisma.io',Name:'Alice',UserId:5}})
       
       console.log(userObj);
      return 'User Created Successfully';
    }
}