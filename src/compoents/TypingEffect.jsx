"use client";

const { useState, useEffect } = require("react");

const TypingEffect = ({ text }) => {
  const [value, setValue] = useState(() => text[0]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    if (index === text.length) {
      return;
    }

    const timeout = setTimeout(() => {
      setValue((prev) => prev + text[index]);
      setIndex(prev => prev + 1);
    }, 50);

    return () => clearTimeout(timeout);
  }, [value, text]);

  return <p>{value}</p>;
};

export default TypingEffect;
