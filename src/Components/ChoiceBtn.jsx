import React, { useEffect, useState } from "react";
import FoodData from "../FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Redux/Slices/CategorySlice";

function ChoiceBtn() {
  const [Categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const ListUniqueCategory = () => {
    const uniqueCategory = [...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCategory);
  };

  useEffect(() => {
    ListUniqueCategory();
  }, []);

  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    dispatch(setCategory(category));
  };

  return (
    <div>
      <div className="font-bold text-2xl mb-2 ml-5">Find the Best Food</div>

      <div className="ml-5">
        <button
          className={`font-bold px-4 py-2 mr-2 border border-gray-500 rounded ${
            activeCategory === "All" ? "bg-orange-500 text-white" : ""
          }`}
          onClick={() => handleCategoryClick("All")}
        >
          All
        </button>

        {Categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={`font-bold px-4 py-2 mr-2 border border-gray-500 rounded ${
              activeCategory === category ? "bg-orange-500 text-white" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ChoiceBtn;
