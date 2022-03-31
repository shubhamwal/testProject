import proxy from "../../controller/proxy.controller";

export const userResolvers = {
    Query: {
        async Users(parent, args, context){
          const result = await proxy.user.list()
          console.log(result);
          return result;      
          },

          async UserById(parent, args, context){
            console.log("userresolver",args);
            const result = await proxy.user.getOneUser(args)
            console.log(result);
            return result;
          }
        },
      Mutation: {
        async createUser(parent, args, context) {
            const result = await proxy.user.create(argsresult);
            console.log("esrdtyu",result);
            return result 
        },

        async deleteUser(parent, args, context) {
          const result = await proxy.user.delete(args);
          if(!result){
            
          }
          console.log("sd",result);
          return result

        },

        async updateUser(parent, args, context) {
          console.log("asdfg",args.params)
          const result = await proxy.user.update(args);
          console.log("sd",result);
          return result
        }

    }
      
};