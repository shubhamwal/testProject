import { makeExecutableSchema } from '@graphql-tools/schema';
import { hotelResolvers } from './resolvers/hotel.resolver';
import { HotelTypeDefs } from './schemas/hotel.schema';
import { UserTypeDefs } from './schemas/user.schema';
import { mergeTypeDefs } from "@graphql-tools/merge";
import { userResolvers } from './resolvers/user.resolver';
import { mergeResolvers } from "@graphql-tools/merge";

const types = [HotelTypeDefs, UserTypeDefs]

const typedefs = mergeTypeDefs(types);
const resolvers = [hotelResolvers,userResolvers]
const allResolvers =  mergeResolvers(resolvers);


export const schema = makeExecutableSchema({
    typeDefs: typedefs,
    resolvers: allResolvers
  })
