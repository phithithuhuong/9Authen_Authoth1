"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const auth_1 = require("../middleware/auth");
const user_model_1 = __importDefault(require("../schemas/user.model"));
const product_model_1 = __importDefault(require("../schemas/product.model"));
router.use("/product", auth_1.auth);
router.post("/user/register", async (req, res) => {
    try {
        const user = await user_model_1.default.findOne({ username: req.body.username });
        if (!user) {
            const passwordHash = await bcrypt_1.default.hash(req.body.password, 10);
            let userData = {
                username: req.body.username,
                password: passwordHash
            };
            const newUser = await user_model_1.default.create(userData);
            res.json({ user: newUser, code: 200 });
        }
        else {
            res.json({ err: "User exited" });
        }
    }
    catch (err) {
        res.json({ err: err });
    }
});
router.post("/user/login", async (req, res) => {
    try {
        const user = await user_model_1.default.findOne({ username: req.body.username });
        if (user) {
            const comparePass = await bcrypt_1.default.compare(req.body.password, user.password);
            if (!comparePass) {
                return Promise.reject({
                    code: 404,
                    message: "PASSWORD_NOT_VALID",
                });
            }
            let payload = {
                user_id: user["id"],
                username: user["username"],
            };
            const token = jsonwebtoken_1.default.sign(payload, '123456789', {
                expiresIn: 36000,
            });
            return res.json({ token: token, code: 200 });
        }
        else {
            return res.json({ err: 'Email has been used' });
        }
    }
    catch (err) {
        return res.json({ err: err });
    }
});
router.post("/product/create", async (req, res) => {
    try {
        const product = await product_model_1.default.findOne({ name: req.body.name });
        if (!product) {
            let productData = {
                name: req.body.name,
                price: req.body.price,
                category: req.body.category,
            };
            const productNew = await product_model_1.default.create(productData);
            res.json({ product: productNew, code: 200 });
        }
        else {
            res.json({ err: "Product exited" });
        }
    }
    catch (err) {
        res.json({ err: err });
    }
});
exports.default = router;
//# sourceMappingURL=router.js.map