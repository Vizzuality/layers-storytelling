import React from 'react';

const Intro = ({ title }) => {
  return (
    <div className="intro step h-screen w-screen absolute bg-white z-50">
      <h1>
        {title}
      </h1>
    </div>
    );
}

export default Intro;