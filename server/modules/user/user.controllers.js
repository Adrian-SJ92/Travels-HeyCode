import executeQuery from "../../config/db.js";
import userDal from "./user.dal.js";

class UserControllers {

  getUser = async(req, res) => {
   try {
    const result = await userDal.getUsers(); 
    res.status(200).json(result)
   } catch (error) {
     res.status(500).json(error)
   }
  }

  register = async(req, res) => {
    try {
      res.status(201).json({message:"Usuario creado corectamente"})
    } catch (error) {
      res.status(500).json(error)
    }
  }

}

export default new UserControllers();