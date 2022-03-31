export const UserTypeDefs= `
    type Query {
        UserById(id: String): User
        Users: [User]
    }

    type User{
        id: String
        firstName: String
        lastName: String
        
    }

    input UserInput{
        firstName: String
        lastName: String
        
    }

    type Mutation {
        createUser(params: UserInput!):User
        deleteUser(id: String): User
        updateUser(id: String, firstName:  String, lastName: String): User
    }

`;