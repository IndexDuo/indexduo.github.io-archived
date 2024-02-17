import React, { useEffect, useState } from 'react';

const TypingEffect = () => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);
    const roles = [" Web Designer.", " UI/UX Designer.", " student.", "n orange."]; // Add more roles as needed

    // Blinking effect
    useEffect(() => {
        const timeout2 = setTimeout(() => {
          setBlink(!blink);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    // Typing effect
    useEffect(() => {
      if (index >= roles.length) setIndex(0); // Reset to first role after the last one
      const currentRole = roles[index];
      
      // Start deleting after typing the full role
      if (subIndex === currentRole.length + 1 && !reverse) {
          setReverse(true);
          return;
      }

      // Move to the next role after deleting the current one
      if (subIndex === 0 && reverse) {
          setReverse(false);
          setIndex((prevIndex) => (prevIndex + 1) % roles.length);
          return;
      }

      // Typing effect timing
      const timeout = setTimeout(() => {
          setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
      }, reverse ? 75 : 150); // Faster deletion, slower typing

      return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, roles]);

  return (
      <h1>
          I am a{`${roles[index].substring(0, subIndex)}${blink ? "|" : " "}`}
      </h1>
  );
};

export default TypingEffect;