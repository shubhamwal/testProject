import HotelController from "./hotel.controller";
import UserController from "./user.controller";

class proxyController{
    constructor(){
        this.hotel = new HotelController();
        this.user = new UserController();
    }
}

export default new proxyController();