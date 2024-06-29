import Dropdown from "./components/Dropdown.jsx";
import { useState } from "react";

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Red", value: "Red" },
    { label: "Green", value: "Green" },
    { label: "Blue", value: "Blue" },
    ,
  ];

  return (
    <>
      <Dropdown options={options} value={selection} onSelect={handleSelect} />
    </>
  );
}

export default App;
