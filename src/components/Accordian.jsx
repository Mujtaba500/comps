import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordian = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index) => {
    expandedIndex === index ? setExpandedIndex(-1) : setExpandedIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex p-3 bg-gray border-b justify-between cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-t border-x rounded">{renderedItems}</div>;
};

export default Accordian;
