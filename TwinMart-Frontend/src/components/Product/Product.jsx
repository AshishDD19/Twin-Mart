import React, { useState } from "react";
import { useProducts } from "../../context/ProductDataContext";
import FilterSection from "../FilterSection/FilterSection";
import { useNavigate } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { useCart } from "../../context/CartContext";
import { FaCheck, FaCheckCircle, FaHeart, FaRegHeart } from "react-icons/fa";
import { useWishlist } from "../../context/WishListContext";
import toast from "react-hot-toast";


function Product() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { addToCart, cartItem, isInCart, deleteItem } = useCart()
  const { addToWishList, removeFromWishList, isWishlisted } = useWishlist();
  const { getProducts, activeCategory } = useProducts();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 2000]);

  // Get products of the selected ExploreMenu category
  const products = getProducts(activeCategory);

  // Handle category radio selection
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // Apply filtering logic
  const filteredData = products.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
    );
  });

  // Reset all filters
  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setPriceRange([0, 2000]);
  };

  console.log(cartItem);

  return (
    <div className="p-8 flex gap-6">

      {/* Filter Section */}
      <FilterSection
        search={search}
        setSearch={setSearch}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        category={category}
        handleCategoryChange={handleCategoryChange}
        resetFilters={resetFilters}
      />

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {filteredData.length > 0 ? (
          filteredData.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl h-[300px] shadow-md p-4 text-center bg-white hover:scale-105 transition-transform hover:cursor-pointer"

            >
              <button
                onClick={() =>
                  isWishlisted(p.id, p.category)
                    ? removeFromWishList(p.id, p.category)

                    : addToWishList(p)
                }
                className="relative left-26 cursor-pointer">
                {isWishlisted(p.id, p.category)
                  ? <FaHeart className="text-orange-400 " />
                  : <FaRegHeart className="text-orange-400" />

                }

              </button>

              <img
                src={p.image}
                alt={p.name}
                className="h-32 mx-auto rounded-full border border-orange-500"
                onClick={() => navigate(`/product/${p.id}`)}
              />
              <h3 className="font-bold mt-2">{p.name}</h3>
              <p className="text-gray-600">₹ {p.price}</p>

              <button className={`flex  gap-2 justify-center items-center mt-3 mx-auto px-4 py-2 rounded-full  text-white  cursor-pointer  shadow shadow-black/80
                ${isInCart(p.id, p.category)
                  ? "bg-orange-400/80 hover:bg-orange-500"
                  : "bg-orange-500 hover:bg-orange-400"
                  }
                `}
                onClick={() =>
                  isInCart(p.id, p.category)
                    ? deleteItem(p.id, p.category)
                      
                    : addToCart(p)

                }>
                {isInCart(p.id, p.category) ? <><FaCheck  /> <p>Added to Cart</p> </>
                  : <><RiShoppingCartLine className="text-2xl" /> <p>Add to Cart</p> </>}

              </button>

             

            </div>
          ))
        ) : (
          <p className="text-black text-xl align-middle text-center">No products found 😢</p>
          // <div className="flex justify-center items-center md:h-[600px] md:w-[900px] mt-10">
          //   <Lottie animationData={}/>
          // </div>
          // <img
          //   // src="/images/Product is Empty.png"
          //   alt="No products found 😢"
          // className=" w-[500px] h-[500px] "
          // />
        )}
      </div>
    </div>
  );
}

export default Product;
