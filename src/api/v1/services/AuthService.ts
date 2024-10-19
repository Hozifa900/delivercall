import userRepository from "../repositories/UserRepository";
import { IUser } from "../models/UserModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import jwtConfig from "../../../config/JwtConfig";
import UserRepository from "../repositories/UserRepository";

const { jwtSecret, jwtExpiration } = jwtConfig;

class AuthService {
  register = async (userData: IUser) => {
    const { username, password } = userData;
    let user = await userRepository.findUserByUsername(username);
    if (user) throw new Error("User already exists");

    await userRepository.createUser(userData);

    return { message: "User registered successfully" };
  };

  login = async (loginData: any) => {
    const { username, password } = loginData;
    const user = await UserRepository.findUserByUsername(username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error("Invalid username or password");
    }

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      jwtSecret,
      {
        expiresIn: jwtExpiration,
      }
    );
    return token;
  };
}
export default new AuthService();
