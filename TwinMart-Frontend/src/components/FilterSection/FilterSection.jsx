import React, { useState } from 'react'
import { useProducts } from '../../context/ProductDataContext';
import './FilterSection.css'

function FilterSection({ search, setSearch, priceRange, setPriceRange, category, handleCategoryChange, resetFilters }) {
  const { activeCategory, setActiveCategory } = useProducts()

  const categories = [
    "Fruits & Vegetables",
    "Dairy, Bread & Eggs",
    "Masala & Dry Fruits",
    "Ice Cream & Desserts",
    "Frozen Foods",
    "Sweet Cravings",
    "Fashion & Lifestyle",
    "Gifts & Stationery",
    "Home & Kitchen",
    "Electronics",
    "Health & Beauty",
    "Toys & Sports",
    "Baby Care",
  ];



  return (
    <div className='bg-white p-4 rounded-2xl h-max'>
      <input type="text" placeholder='Search...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='bg-white p-2 rounded-full border-2 border-orange-400 ' />

      {/* Catergory */}
      <h1 className='mt-5 font-semibold text-xl'>Category</h1>
      <div className="flex flex-col gap-2 mt-3">

        <div className="flex gap-2 items-center cursor-pointer">
          <input type="checkbox" name="category"
            value="All"
            checked={category === "All"}
            onChange={handleCategoryChange}
            className='accent-orange-400' />
          <button className='cursor-pointer uppercase text-[15px]'>All</button>

        </div>

        {categories.map((cat, index) => {
          return <div key={index} className="flex gap-2">
            <input type="checkbox" className='accent-orange-400'
              name={cat} checked={category === cat}
              value={cat}
              onChange={handleCategoryChange} />
            <button className='cursor-pointer uppercase text-[15px]'>{cat}</button>
          </div>

        })
        }
      </div>

      {/* price range */}
      <h1 className='mt-5 font-semibold text-xl mb-3'>Price Range</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="" >Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</label>
        <input type="range" className='accent-orange-400 bg-white'
          min="0"
    max="2000"
    step="10"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} />
      </div>

      <button className='bg-orange-400 text-white rounded-md px-3 py-1 mt-5 cursor-pointer ' onClick={resetFilters}>Reset Filters</button>
    </div>
  )
}
export default FilterSection;
