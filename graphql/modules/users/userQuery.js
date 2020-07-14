const {isAuth} = require('../authGuard');
const { combine } = require('graphql-resolvers');
module.exports = {
    me:async(parent,args,context,info)=>{
        const me = await context.prisma.user.findOne({where:{UserId:1}})
        return me;
    },
    
    user:()=>{
        return{id:10,username:'Darshan'}
    },
    
    allUsers: combine(isAuth,
        async(parent,args,context,info)=>{
        const allUsers = await context.prisma.user.findMany();
        return allUsers;
    }
    )
}