import React from "react";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import { Spinner } from "@nextui-org/react";

const FeatureProducts = () => {
  const { data, loading, error } = useFetch("/products");

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Error loading data</p>;
  }
  return (
    <section>
      <div className=" py-16">
        <h1 className=" text-4xl text-black font-semibold text-left container mx-auto px-5">
          Products
        </h1>
      </div>
      <div className=" container mx-auto grid-cols-1 grid gap-4 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 pb-16 px-5">
        {data?.map((product) => (
          <div className=" group">
            <div className="bg-[#f8f8f8] overflow-hidden relative">
              <img className=" h-96 object-cover" src={product?.image} alt="" />
              <div className=" absolute group-hover:bottom-2 group-hover:left-0 group-hover:right-0 transition-all -bottom-[50px] duration-300 left-0 right-0 opacity-0 group-hover:opacity-100">
                <button className=" bg-black px-8 border-2 border-black hover:bg-white duration-500 hover:text-black py-2 rounded-sm font-medium text-lg text-white">
                  Add to cart
                </button>
              </div>
            </div>
            <Link to={`/productsDetails/${product._id}`}>
              <h2 className=" text-left text-xl mt-5 group-hover:text-slate-950 duration-300 text-slate-800 font-semibold">
                {product?.title}
              </h2>
            </Link>
            <p className=" text-left">${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureProducts;
