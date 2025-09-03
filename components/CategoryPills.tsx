import React from "react";

const categories = [
  "Mobile", "Laptop", "Headphones", "Watches", "Electronic", "Fashion",
  "Men", "Women", "Kids", "Footwear", "Home appliance", "Sports",
  "Jewellery", "Kitchen", "Home decor", "Study", "Others"
];

const CategoryPills = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {categories.map((category, index) => (
        <div key={index} className="category-pill">{category}</div>
      ))}
    </div>
  );
};

export default CategoryPills;
