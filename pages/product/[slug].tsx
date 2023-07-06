import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import ProductDetails from "../../components/productDetails";
import SectionTitle from "../../components/UI/SectionTitle";
import { IProduct } from "../../lib/types/products";
import Product from "../../models/Product";
import data from "../../utils/datas";
import db from "../../utils/db";

type Props = {};

const productDetailsPage: NextPage<{
  product: IProduct;
  products: IProduct[];
}> = ({ product, products }) => {
  // const { query } = useRouter();
  // const { slug } = query;

  // const product = data.products.find((x) => x.slug === slug);

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <div>
    <ProductDetails product={product} products={products} />
  </div>
);

};

export default productDetailsPage;

export const getServerSideProps = async (context: any) => {
  const slug = context.params?.slug;
  const category = context.params?.category;
  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: db.convertDocToObj(product),
    },
  };
};
