import React from "react";
import { useSpring, animated } from "react-spring";

const InventoryList = ({ items }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Inventory Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <InventoryItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const InventoryItem = ({ item }) => {
  const [hovered, setHovered] = React.useState(false);
  const springProps = useSpring({
    transform: hovered ? "scale(1.05)" : "scale(1)",
    boxShadow: hovered ? "0px 10px 30px rgba(0,0,0,0.2)" : "0px 10px 20px rgba(0,0,0,0.1)",
  });

  return (
    <animated.div
      style={springProps}
      className="bg-white p-4 rounded-md shadow-md transition-transform"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
      <p>Category: {item.category}</p>
      <p>
        Quantity: {item.quantity} {item.unit}
      </p>
      <p>Location: {item.location}</p>
    </animated.div>
  );
};

export default InventoryList;
