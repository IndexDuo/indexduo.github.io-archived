import React, { useEffect, useState } from 'react';

const TypingEffect = () => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);
    const roles = ["Web Designer", "UI/UX Designer", "Gamer", "etc."]; // Add more roles as needed

    // Blinking effect
    useEffect(() => {
        const timeout2 = setTimeout(() => {
          setBlink(!blink);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    // Typing effect
    useEffect(() => {
        if (index === roles.length) setIndex(0);
        if (subIndex === roles[index].length + 1 && 
            !reverse) {
          setReverse(true);
          return;
        }
        if (subIndex === 0 && reverse) {
          setReverse(false);
          setIndex((prev) => prev + 1);
          return;
        }

        const timeout = setTimeout(() => {
          setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === roles[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, roles]);

    return (
        <h1>
            I am a {`${roles[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </h1>
    );
};

export default TypingEffect;
