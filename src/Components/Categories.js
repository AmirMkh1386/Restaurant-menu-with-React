import React, { useState } from "react";

const Categories = ({ categories, filterMenus }) => {

    const [mainCategory, setMainCategory] = useState('all')

  return (
    <div className="btn-container">
        {
            categories.map(category => (
                <button
                    key={category.id}
                    type="button"
                    // highlight class  for highlight main category
                    className={category === mainCategory ? "filter-btn highlight" : "filter-btn" }
                    onClick={() => {
                        setMainCategory(category)
                        filterMenus(category)
                    }}
                >
                    {category}
                </button>
            ))
        }

    </div>
  );
};

export default Categories;
