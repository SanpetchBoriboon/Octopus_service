import mongoose, { Document, Schema } from 'mongoose';

interface IUserProfile extends Document {
    userId?: string;
    settingLanguage: string;
}

const UserProfileSchema: Schema = new Schema({
    userId: {
        type: String,
        required: false,
    },
    settingLanguage: {
        type: String,
        default: 'en',
        required: true,
    },
});

const UserProfile = mongoose.model<IUserProfile>('UserProfile', UserProfileSchema);

export default UserProfile;
