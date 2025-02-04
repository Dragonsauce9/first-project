
import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



export default {
    register(userData) {
   return User.create(userData);
        
    },

    async login(email, password) {

        const user = await User.findOne({ email });

if (!user) {
    throw new Error('Invalid email');
}


const isValid = await bcrypt.compare(password, user.password);
if (!isValid) {
    throw new Error('Invalid password')

}
const payload = {
    id: user.id,
    email: user.email,
}
const token = jwt.sign(payload,)
    },


};