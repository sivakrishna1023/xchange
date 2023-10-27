import Link from "next/link";
import React from "react";

// category_data
const category_data = [
  {
    category: "Business",
    blog_item: "14",
  },
  {
    category: "Cleaning",
    blog_item: "19",
  },
  {
    category: "Consultant",
    blog_item: "21",
  },
  {
    category: "Creative",
    blog_item: "27",
  },
  {
    category: "Technology",
    blog_item: "35",
  },
];

const Category = () => {
  return (
    <>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title mb-10">Category</h3>
        <div className="sidebar__widget-content">
          <ul>
            {category_data.map((item, i) => (
              <li key={i}>
                <Link href="/blog">
                  {item.category} <span>({item.blog_item})</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Category;
