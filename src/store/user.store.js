import { User } from "../mongo/User.mongo";

export default class UserStore{
    async create (request, response) {
        // const user = new userModel(request.body);  
        try {
          const result = await User.save();
          console.log("zz",result);
          response.send(result);
        } catch (error) {
          response.status(500).send(error);
        }
    }

     async list (request,response) {
      try {
          const result = await User.find();
          console.log("ze","result");
          response.send(result);
      }catch (error){
          response.status(500).send(error);
      }
    }
    async UserById(request,response) {
      try{
        const result = await User.findById();
        console.log(result);
        response.send(result);
      }
      catch (error){
        response.status(500).send(error);
      }
    }

}