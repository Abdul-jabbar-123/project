import React from 'react';
import "./NavBar.css";
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const AutoTypewriter = ({ words, typeSpeed, deleteSpeed }) => {
  const [text] = useTypewriter({
    words:  ['React-Developer', 'Graphycal-Designer','Ilustrator-Usernp'],
    loop: {},
    typeSpeed:  120,
    deleteSpeed: 80,
  });

  return (
    <div className='type-writer'>
      <h1>I'm a
        <span>{' '}</span>
        <span className='text-decorate'>
          {text}
        </span>
        <span className='text-decoration'>
          <Cursor />
        </span>
      </h1>
    </div>
  );
};

export default AutoTypewriter;
