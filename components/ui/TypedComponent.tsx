"use client";
import React, { useEffect, useRef } from "react";
import Types, { TypesOptions } from "types.js"; // Ensure correct import

const TypesComponent: React.FC = () => {
  const typesElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options: TypesOptions = {
      strings: ["Front-End Developer.", "Graphic Designer.", "Web Designer."],
      typeSpeed: 60,
      loop: true,
    };

    if (typesElement.current) {
      const types = new Types(typesElement.current, options);

      return () => {
        types.destroy();
      };
    }
  }, []);

  return <div ref={typesElement} className="element"></div>;
};

export default TypesComponent;
