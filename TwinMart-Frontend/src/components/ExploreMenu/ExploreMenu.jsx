import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets.js";
import { useProducts } from "../../context/ProductDataContext";

const ExploreMenu = () => {
  const { activeCategory, setActiveCategory } = useProducts();

  const handleCategoryClick = (menu_name) => {
    // Convert menu_name (like "Fruits & Vegetables") into key form used in ProductContext
    const formattedCategory = menu_name
      .replace(/[\s&]+/g, "") // remove spaces and &
      .replace(/[^\w]/g, ""); // remove special chars if any

    setActiveCategory(formattedCategory.charAt(0).toLowerCase() + formattedCategory.slice(1));
    console.log(formattedCategory.charAt(0).toLowerCase() + formattedCategory.slice(1))
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Shop by Category</h1>
      <p className="explore-menu-text">
        Discover a wide range of high-quality products crafted to meet your everyday needs.
        Shop your favorites and elevate your lifestyle with the best deals, one purchase at a time.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() => handleCategoryClick(item.menu_name)}
            key={index}
            className={`explore-menu-list-item ${
              activeCategory.toLowerCase().includes(
                item.menu_name.replace(/[\s&]+/g, "").toLowerCase()
              )
                ? "active-category"
                : ""
            }`}
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`transition-all ${
                activeCategory.toLowerCase().includes(
                  item.menu_name.replace(/[\s&]+/g, "").toLowerCase()
                )
                  ? "border-2 border-orange-600 rounded-full p-1"
                  : ""
              }`}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
