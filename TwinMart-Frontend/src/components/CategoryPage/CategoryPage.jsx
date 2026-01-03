import React from 'react'
import { useProducts } from '../../context/ProductDataContext';
import { menu_list } from '../../assets/assets';
// import CategoryProduct from '../CategoryProduct/CategoryProduct';
import Product from '../Product/Product';

function CategoryPage() {
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
        <>
            <div className="flex flex-col  gap-4 justify-center" >

                <div className="flex justify-center mt-8 ">
                    <h1 className='text-4xl font-bold'>Shop by Category</h1>
                </div>


                <div className="flex gap-2 sticky top-22.5 bg-white z-50 shadow-md  p-2 rounded-2xl">
                    {menu_list.map((item, index) => (
                        <div
                            onClick={() => handleCategoryClick(item.menu_name)}
                            key={index}
                            className={`flex justify-center items-center  text-center rounded-2xl  p-2 cursor-pointer
                                 ${activeCategory.toLowerCase().includes(
                                item.menu_name.replace(/[\s&]+/g, "").toLowerCase()
                            )
                                    ? "bg-orange-400 text-white font-bold  inset-shadow-sm inset-shadow-black/70 z-10 transition-all duration-200 scale-105"
                                    : ""
                                }`}
                        >
                            <span className="relative z-10 font-semibold">{item.menu_name}</span>
                        </div>
                    ))}
                </div>


                <Product/>
            </div>
        </>

    );
};

export default CategoryPage
