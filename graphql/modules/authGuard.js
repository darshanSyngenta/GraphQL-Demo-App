const { skip } = require('graphql-resolvers');
const accessArr =[{Role:"Admin",allowedResolvers:["allUsers","user","author","getAllBooks"]},{Role:"User",allowedResolvers:["user","author"]}] 
const checkRole = (skip,currentUser,info) =>{
    for(var i =0;i<accessArr.length;i++){
        if(accessArr[i].Role == currentUser){
            var index = accessArr[i].allowedResolvers.indexOf(info.fieldName);
            if(index > -1){
                skip;
            }
        }
    }
    return new Error('Not Authorized user.')
}
module.exports.isAuth = (parent, args, { currentUser },info) =>{
//     console.log(checkRole(skip,currentUser,info));
// currentUser ? checkRole(skip,currentUser,info) : new Error('Not authenticated as user.');
for(var i =0;i<accessArr.length;i++){
    if(accessArr[i].Role == currentUser){
        var index = accessArr[i].allowedResolvers.indexOf(info.fieldName);
        if(index > -1){
           return skip;
        }
    }
}
return new Error('Not Authorized user.')

}
