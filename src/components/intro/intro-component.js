import React from 'react';
import './intro.css';

const Intro = ({ title, date }) => {
  return (
    <div className="intro step absolute h-screen w-screen z-1 bg-cover bg-no-repeat">
      <div className="background-cover absolute h-screen w-screen flex flex-col justify-center items-center">
        <div className="container max-w-md text-white text-center mb-6">
          <h1 className="text-6xl font-bold mb-10">{title}</h1>
          <h2 className="text-lg">
            Made by <span className="font-bold">Mongabay</span> in collaboration
            with <span className="font-bold">Vizzuality</span>
          </h2>
        </div>
        <div className="container max-w-xl text-white">
          {date && (
            <div className="text-xs font-bold text-white flex items-center mb-6">
              <span className="separator" />
              <span className="font-bold uppercase px-1">Published {date}</span>
              <span className="separator" />
            </div>
          )}
        </div>
        <div className="container max-w-sm text-gray-100 text-center">
          scroll down to discover
        </div>
      </div>
    </div>
  );
}

export default Intro;