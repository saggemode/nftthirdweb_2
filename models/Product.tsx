import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    images: { type: Array },
    price: { type: Number, required: true },
    discount:{ type: Number, required: true },
    isOffer: { type: Boolean, required: true, default: false },
    brand: { type: String, required: true },
    starRating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;

export interface IProduct {
  quantity: number;
  name: string;
  slug: string;
  category: string;
  image: string;
  price: number;
  brand: string;
  starRating: number;
  discount:number;
  countInStock: number;
  description: string;
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
}
