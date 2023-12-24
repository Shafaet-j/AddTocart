import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Select, SelectItem } from "@nextui-org/react";
import axios from "axios";
import toast from "react-hot-toast";

const ProductsDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const params = useParams();

  const { data } = useFetch(`product/${params.id}`);
  console.log(data);

  const handleAddToCart = (product) => {
    if (!selectedColor || !selectedSize) {
      toast.error("Please select color and size before adding to cart.");
      return;
    }

    axios
      .post("https://task-addtocart-server.vercel.app/api/cart", product)
      .then((response) => {
        if (response.data.success) {
          toast.success("Item added to cart successfully!");
        } else {
          toast.error("Failed to add item to cart. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
      });
  };

  return (
    <section className=" px-5 pb-10 mt-40">
      <div className=" items-center container mx-auto lg:flex justify-between gap-7 mt-16">
        <div className=" lg:w-1/2 w-full ">
          <img className="" src={data?.imageUrl} alt="" />
        </div>
        <div className=" text-left space-y-4 lg:w-1/2 w-full">
          <h2 className=" text-4xl font-bold text-black text-left">
            {data?.title}
          </h2>
          <p>Review</p>
          <p className=" text-gray-500 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            voluptas harum aperiam mollitia deleniti ullam commodi, consequatur
            atque quis doloribus facere provident sunt! Numquam eum itaque neque
            ipsam, inventore eaque!
          </p>
          <p className=" text-2xl font-medium">${data?.price}</p>
          <div className=" flex items-center gap-5">
            <Select
              label="Size"
              className="max-w-xs"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              {data?.sizes?.map((size, index) => (
                <SelectItem key={index} value={size}>
                  {size}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className=" flex items-center gap-6">
            <Select
              label="Color"
              className="max-w-xs"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              {data?.colors?.map((color, index) => (
                <SelectItem key={index} value={color}>
                  {color}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className=" flex items-center gap-4">
            <div className=" flex justify-between items-center gap-2">
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className=" w-8 h-8 hover:border-2 hover:border-black bg-slate-300 rounded-full"
              >
                +
              </button>
              <span>{quantity}</span>
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
                className=" w-8 h-8 hover:border-2 hover:border-black bg-slate-300 rounded-full"
              >
                -
              </button>
            </div>
            <div>
              <button
                onClick={() => handleAddToCart(data)}
                className=" bg-black px-8 border-2 border-black hover:bg-white duration-500 hover:text-black py-2 rounded-sm font-medium text-lg text-white"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsDetails;
