import { Schema, model } from "mongoose";

interface IProfile {
  name: string;
  email: string;
  bio: string;
}

const profileSchema = new Schema<IProfile>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  bio: { type: String, required: true },
});

const Profile = model<IProfile>("Profile", profileSchema);

export { Profile, IProfile };
