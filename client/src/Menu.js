import React from 'react';

const Menu = ( {title, price, img, desc }) => {
  return (
    <div className="menu-item">
      <img src={img} alt={title} className="photo"/>
      <h5>{title}</h5>
      <p>{price}</p>
      <h5>{desc}</h5>
    </div>
  )
};

export default Menu;
