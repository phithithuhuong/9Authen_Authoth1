
import {Schema,model} from "mongoose"
interface IProduct {
    name: string;
    price: number;
    category: string;
}
const productSchema =  new Schema<IProduct>({
    name: String,
    price: Number,
    category: String
});
console.log(productSchema,1)
const ProductModel = model<IProduct>('Product', productSchema);
export default ProductModel;