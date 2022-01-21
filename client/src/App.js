import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

  const [ menuItems, setMenuItems ] = useState(items)
  const [ categories, setCategories ] = useState([])

  return (
    <main>

      <section className="section-center">
        <div className="title">
          <h2>Menu</h2>
        </div>
        <div className="underline"></div>
        <Categories menuItems={menuItems}/>
        {menuItems.map((item) => {
          return (
            <Menu key={item.id} {...item}/>
          )
        })}
      </section>
    </main>
  )
}

export default App;
