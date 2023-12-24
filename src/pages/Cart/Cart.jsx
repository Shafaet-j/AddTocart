import React from "react";
import { FaCross, FaTrash } from "react-icons/fa";
import useFetch from "../../hooks/useFetch";

const Cart = () => {
  const { data } = useFetch("/carts");
  console.log(data);

  //   const total = data.reduce((acc, curr) => acc + curr.total, 0);

  return (
    <div className=" pt-10">
      <div className=" mb-10">
        <h1 className=" text-left text-3xl font-semibold">
          Products in your Cart
        </h1>
      </div>
      <div className=" flex-col flex gap-2">
        {data?.map((item) => (
          <div className=" border p-2">
            <div className=" flex items-center justify-between">
              <div className=" flex gap-4">
                <img className=" w-14" src={item?.image} alt="" />
                <div>
                  <h3 className=" text-xl font-semibold text-black">
                    {item?.title}
                  </h3>
                  <div className=" flex justify-between">
                    <div className=" flex gap-1">
                      <p>${item?.price}</p>
                      <span>*</span>
                      <p>{item.quantity}</p>
                    </div>

                    <p>{item?.total}</p>
                  </div>
                </div>
              </div>
              <div>
                <FaTrash size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {data?.length > 0 && (
        <div className=" flex items-center justify-between mb-6 mt-6">
          <h4 className=" text-lg font-semibold">SUBTOTAL</h4>
          <p className=" text-lg font-semibold">123$</p>
        </div>
      )}
      <div>
        {data?.length === 0 ? (
          <p className=" text-lg font-semibold">No Products added</p>
        ) : (
          <button className=" bg-black px-2  py-2 rounded-md font-medium text-white btn hover:bg-black">
            Proceed to CheckOut
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
