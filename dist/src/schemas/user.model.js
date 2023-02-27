"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: String,
    password: String
});
console.log(userSchema, 1);
const UserModel = (0, mongoose_1.model)('User', userSchema);
exports.default = UserModel;
//# sourceMappingURL=user.model.js.map