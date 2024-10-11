import React, { useState } from 'react';
import menus from "./data";
import Menu from "./Components/Menu";
import Categories from "./Components/Categories";

const allCategories = ["all", ...new Set(menus.map(menu => menu.category))]
function App() {

    const [allMenus, setAllMenus] = useState(menus)
    const [categorize,setCategorize] = useState(allCategories)

    const filterManus = (category) => {
        if (category === "all") {
            setAllMenus(menus)
            return
        }

        let filteredMenus = menus.filter(menu => menu.category === category)
        setAllMenus(filteredMenus)
    }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline">
          </div>
        </div>
          <Categories categories={categorize} filterMenus={filterManus}/>
          <Menu allMenus={allMenus}/>
      </section>
    </main>
  );
}

export default App;
