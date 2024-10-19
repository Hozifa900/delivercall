import { User, IUser } from "../models/UserModel";

class UserRepository {
  findUserByUsername = async (username: String) => {
    return await User.findOne({ username });
  };

  createUser = async (userData: IUser) => {
    const user = new User(userData);
    return await user.save();
  };
}
export default new UserRepository();
