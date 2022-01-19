import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';


interface TextScrollerProps{
  text: string;
}

const TextScroller = ({ text }: TextScrollerProps) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: 'translate(60%,0)' },
    to: { transform: 'translate(-60%,0)' },
    config: { duration: 40000 },
    reset: true,
    onRest: () => {
      setKey(key + 1);
    },
  });

  return (
    <div key={key}>
      <animated.div style={scrolling}>{text}</animated.div>
    </div>
  );
};

export default TextScroller;
