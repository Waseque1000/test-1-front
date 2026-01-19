/** @format */

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypewriterHook = ({ array }) => {
  
  const [text] = useTypewriter({
    words: array && array.length > 0 ? array : ["Hello", "Artify", "World"],
    loop: 0, 
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <span className="font-serif font-bold">
      <span className="text-amber-500">{text}</span>
      
      <Cursor cursorColor="#f59e0b" cursorStyle="|" />
    </span>
  );
};

export default TypewriterHook;
