import UserModel from "../models/UserModel.js";
import BaseController from './BaseController.js';

class UsersController extends BaseController {

    constructor() {
        super(new UserModel());
    }
  
}

export default UsersController;
