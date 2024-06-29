"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedComponent: React.FC = () => {
  const typedElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options: Typed.TypedOptions = {
      strings: ["Front-End Developer.", "Graphic Designer.", "Web Designer."],
      typeSpeed: 60,
      loop: true,
    };

    if (typedElement.current) {
      const typed = new Typed(typedElement.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return <div ref={typedElement} className="element"></div>;
};

export default TypedComponent;
