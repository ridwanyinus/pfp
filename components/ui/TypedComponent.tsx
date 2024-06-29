"use client";
import React, { useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js"; // Ensure correct import

const TypesComponent: React.FC = () => {
  const typesElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options: TypedOptions = {
      strings: ["Front-End Developer.", "Graphic Designer.", "Web Designer."],
      typeSpeed: 60,
      loop: true,
    };

    if (typesElement.current) {
      const typed = new Typed(typesElement.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return <div ref={typesElement} className="element"></div>;
};

export default TypesComponent;
