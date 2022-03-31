import { User } from "../mongo/User.mongo";


export default class UserController{

    async create(request, response) {
        const user = new User(request.params);  
        console.log("user",user);
        try {
          const result = await user.save();
          console.log("result",result);
        return result
        } catch (error) {
          response.status(500).send(error);
        }
    }

     async list(request,response) {
         try{
             const result = await User.find();
             console.log("result1",result);
             return result
         }catch (error) {
            response.status(500).send(error);
          }
         
         }

         async getOneUser(request,response){
           console.log("aa",request);
           try{
             const result = await User.findById(request.id);
             console.log("yy",result);
             return result 
           }catch(error){
            response.status(500).send(error);
           }
         }

         async delete(request,response){
          console.log("aa",request);
          try{
            const result = await User.findByIdAndDelete(request.id);
            //  if(id === User){

            //  }
            console.log("yy",result);
            return result 
          }catch(error){
           response.status(500).send(error);
          }
        }

        async update(request,response){
          console.log("bb",request);
          try{
            const result = await User.findByIdAndUpdate(request.params);
            console.log("zz",request);
            return result 
          }catch(error){
            response.status(500).send(error);
          }
        }




}