import React, { useEffect, useState } from "react";
import FoodData from "../FoodData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Slices/CardSlices";
import toast from "react-hot-toast";

const notify = (FoodName) => toast.success(` ${FoodName} Added to Cart`, {
  style: { border: '1px solid #713200', padding: '16px', color: '#713200' },
  iconTheme: { primary: '#713200', secondary: '#FFFAEE' }
});

function Card() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(FoodData);
  }, []);

  const search = useSelector((state) => state.search.search);
  const category = useSelector((state) => state.category.category);

  const filteredData = data.filter((item) => {
    const matchesCategory = category == "All" || item.category.includes(category);
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch
  })


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 ml-[11vw] mr-[11vw]">
      {filteredData.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-md overflow-hidden shadow-md transition-transform transform hover:scale-105"
        >
          <div className="mb-4">
            <img
              className="object-cover ml-auto mr-auto w-[380px] md:h-48 lg:h-56 rounded-t-md"
              src={item.img}
              alt={item.name}
            />
          </div>
          <div className="p-4 flex flex-col justify-between">
            <div className="text-gray-800">
              <p className="text-lg font-bold mb-2"><b>Name:</b> {item.name}</p>
              <p className="mb-2"><b>Price:</b> {`₹` + item.price}</p>
              <p className="mb-2"><b>Description:</b> {item.desc.slice(0, 100)}...</p>
              <p className="mb-2"><b>Rating:</b> {item.rating}</p>
              <p className="mb-2"><b>Category:</b> {item.category}</p>
            </div>

            <button
              className="bg-[#FC6736] text-white py-2 px-4 rounded-md hover:bg-red-600 transition-all duration-300"
              onClick={() => {
                notify(item.name);
                dispatch(
                  addToCart({
                    id: item.id,
                    img: item.img,
                    name: item.name,
                    price: item.price,
                    rating: item.rating,
                    category: item.category,
                    qty: 1,
                  })
                );
              }}
            > Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card;



