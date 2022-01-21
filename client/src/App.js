import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = [ 'all', ...new Set(items.map(item => item.category))];
console.log(allCategories)

function App() {

  const [ menuItems, setMenuItems ] = useState(items)
  const [ categories, setCategories ] = useState(allCategories)



  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter(item => item.category === category);
    setMenuItems(newItems)
  }

  return (
    <main>

      <section className="section-center">
        <div className="title">
          <h2>Menu</h2>
        </div>
        <div className="underline"></div>
        <Categories categories={categories} filterItems={filterItems}/>
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
