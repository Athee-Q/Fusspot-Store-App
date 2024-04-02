"use client";

// import MenuItem from "../menu/MenuItem";
import { useEffect, useState } from "react";

const MenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("/api/menu-items")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch menu items");
        }
        return res.json();
      })
      .then((menuItems) => {
        setMenuItems(menuItems);
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
      });
  }, []);

  return (
    <section className="mt-8">
      <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 mb-12">
        {menuItems?.length > 0 &&
          menuItems.map((item) => (
            <></>
            // <MenuItem key={item._id} {...item} />
          ))}
      </div>
    </section>
  );
};

export default MenuItems;
