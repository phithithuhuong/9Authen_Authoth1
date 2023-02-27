
import {Schema,model} from "mongoose"
interface IUser {
    username: string;
    password: string;
}
const userSchema =  new Schema<IUser>({
    username: String,
    password: String
});
console.log(userSchema,1)
const UserModel = model<IUser>('User', userSchema);
export default UserModel;