import { Profile, IProfile } from "../models/ProfileModel";

class ProfileRepository {
  async createProfile(profileData: IProfile) {
    const profile = new Profile(profileData);
    return await profile.save();
  }

  async getProfileByEmail(email: string) {
    return await Profile.findOne({ email });
  }

  // Add more database operations as needed
}

export default new ProfileRepository();
