export const HotelTypeDefs = `
    
    type Hotel{
        id: String
        name: String
        location: String
        status: Boolean
    }

    input HotelInput{
        name: String
        location: String
        status: Boolean
    }

    type Mutation {
        createHotel(params: HotelInput!):Hotel
    }

`;