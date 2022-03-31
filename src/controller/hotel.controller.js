import { Hotel } from "../mongo/Hotel.mongo";

export default class HotelController{

    async create (request, response) {
        const hotel = new Hotel(request.params);  
        try {
          const result = await hotel.save();
        return result
        } catch (error) {
          response.status(500).send(error);
        }
    }

}

