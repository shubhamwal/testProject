import proxy from "../../controller/proxy.controller";

export const hotelResolvers = {
    
    Mutation: {
        async createHotel(parent, args, context) {
            const result = await proxy.user.create(args);
            console.log(result);
            return result
        }
      }
};