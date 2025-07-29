import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Kamal");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Kamal", "Selvi", "Siddhu"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  };

  //   const handleClick = () => {
  //     console.log("You clicked me");
  //   };
  const handleClick2 = () => {
    console.log(count);
  };
  //   const handleClick2 = (name) => {
  //     console.log(`${name} was clicked me`);
  // //   };
  //   const handleClick3 = (e) => {
  //     console.log(e);
  //   };

  return (
    <main>
      {/* <p onDoubleClick={handleClick}>Hello {handleNameChange()}</p> */}
      {/* <button onClick={handleClick}>Click Me</button> */}
      {/* <button onClick={() => handleClick2("Kamal")}>Click Me</button> */}
      {/* <button onClick={(e) => handleClick3(e)}>Click Me</button> */}
      <p onDoubleClick={handleClick}>Hello {name}</p>

      <button onClick={handleNameChange}>Change Name</button>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
    </main>
  );
};

export default Content;
