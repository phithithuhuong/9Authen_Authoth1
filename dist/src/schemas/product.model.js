"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: String,
    price: Number,
    category: String
});
console.log(productSchema, 1);
const ProductModel = (0, mongoose_1.model)('Product', productSchema);
exports.default = ProductModel;
//# sourceMappingURL=product.model.js.map