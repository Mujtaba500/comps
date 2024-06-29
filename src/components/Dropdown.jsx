import { useState } from "react";

const Dropdown = ({ options, value, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (currentIsOpen) => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleOptionClick = (option) => {
    //Close dropdown
    setIsOpen(false);
    //what option user clicked
    onSelect(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <div onClick={() => handleClick(isOpen)}>
        {value?.label || "Select..."}
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white">
          {renderedOptions}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
