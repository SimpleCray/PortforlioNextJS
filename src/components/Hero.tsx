import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Hai Duong but you can call me Cray!",
      "I'm a simple guy",
      "Addicted to coding!"
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return <div>
    <p>{text}</p>
  </div>;
}
