export default class HotelStore{
    async create (request, response) {
        // const user = new userModel(request.body);  
        try {
          const result = await Hotel.save();
          console.log(result);
          response.send(result);
        } catch (error) {
          response.status(500).send(error);
        }
    }
}