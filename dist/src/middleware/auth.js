"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = async (req, res, next) => {
    try {
        let accessToken = req.body["access_token"];
        if (accessToken) {
            jsonwebtoken_1.default.verify(accessToken, "123456789", (err, decoded) => {
                if (err) {
                    return res.status(401).json({
                        message: err.message,
                        status: 401,
                    });
                }
                else {
                    req.decoded = decoded;
                    console.log(req.decoded, 3);
                    next();
                }
            });
        }
        else {
            return res.status(401).json({
                message: 'No token provided.',
                status: 401,
            });
        }
    }
    catch (err) {
        console.log(err);
        return res.status(401).json({
            message: err.message,
            status: 401,
        });
    }
};
exports.auth = auth;
//# sourceMappingURL=auth.js.map