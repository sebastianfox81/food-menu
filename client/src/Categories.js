import React from 'react';

const Categories = ({ menuItems }) => {
  return (
    <div>
      <button className="filter-btn">All</button>
      <button className="filter-btn">Breakfast</button>
      <button className="filter-btn">Lunch</button>
      <button className="filter-btn">Shakes</button>
    </div>
  )
};

export default Categories;
