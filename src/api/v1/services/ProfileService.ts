import profileRepository from "../repositories/ProfileRepository";
import { IProfile } from "../models/ProfileModel";

class ProfileService {
  async createProfile(profileData: IProfile) {
    return await profileRepository.createProfile(profileData);
  }

  async getProfileByEmail(email: string) {
    return await profileRepository.getProfileByEmail(email);
  }

  // Add more business logic as needed
}

export default new ProfileService();
