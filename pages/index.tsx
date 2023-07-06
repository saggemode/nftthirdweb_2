import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import dynamic from "next/dynamic";
import Carousel from "../components/carousel";
import Benefits from "../components/Benefits";

import { specialOfferProductsActions } from "../store/specialOfferProducts-slice";
import { newestProductsActions } from "../store/newestProduct-slice";

const Offers = dynamic(() => import("../components/Offers/Offers"));
const Newest = dynamic(() => import("../components/newest/Newest"));
const Category = dynamic(() => import("../components/category/Category"));

const Brands = dynamic(() => import("../components/brands"));
const Banners = dynamic(() => import("../components/banners"), { ssr: false });

import { IProduct } from "../lib/types/products";
import { newestProductsFn } from "../utilities/sortByTimeStamp";
import db from "../utils/db";
import Product from "../models/Product";

const Home: NextPage<{ products: IProduct[] }> = ({ products }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    //add products to offers list
    const offersProducts = products.filter((item) => item.discount);
    dispatch(specialOfferProductsActions.addProducts(offersProducts));

    //add products to newest list
    const sortedProductsByTimeStamp = newestProductsFn(products);
    dispatch(newestProductsActions.addProducts(sortedProductsByTimeStamp));
  }, [dispatch, products]);

  return (
    <div>
      <Carousel />
      <Benefits />
      <Offers />
      <Category />
      <Newest />
      <Banners />
      <Brands />
    </div>
  );
};

export default Home;

// export const getServerSideProps = async () => {
//   try {
//     await db.connect();
//     const response = JSON.stringify(await Product.find({}).exec());
//     const products = JSON.parse(response);

//     return {
//       props: { products },
//     };
//   } catch (err) {
//     return {
//       props: { error: "no response from data-base" },
//     };
//   }

  export const getStaticProps = async () => {
    await db.connect();
    const products = await Product.find({}).lean();
    await db.disconnect();
    return {
      props: {
         products: products.map(db.convertDocToObj),
        //products,
      },
    };
  };

  // export const getStaticProps = async () => {
  //   await db.connect();
  //   const products = await Product.find({}).lean();
  //   await db.disconnect();
  //   return {
  //     props: {
  //       // products: products.map(db.convertDocToObj),
  //       products,
  //     },
  //   };

  //   const response = await fetch(`https://fakestoreapi.com/products`);
  //   // .then(res=>res.json())
  //   // .then(json=>console.log(json));
  //   const products = await response.json();

  //  // console.log(products)

  //   return {
  //     props: {
  //       products,
  //     },
  //   };
//};
