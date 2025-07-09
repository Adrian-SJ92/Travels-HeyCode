
import executeQuery from "../../config/db.js";
class UserDal {

  getUsers = async()=>{
    try {
      let sql = 'SELECT * FROM user'
      const result = await executeQuery (sql);
      return result
      
    } catch (error) {
      throw error
    }
  }

}

export default new UserDal();