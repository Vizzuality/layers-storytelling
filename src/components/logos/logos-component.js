import React from 'react';

const Logos = ({ logos }) => {
  return logos && logos.length ? (
    <div className="fixed bottom-0 right-0 z-10">
      {logos.map(logo => (
        <img
          src={logo.src}
          title={`${logo.name} logo`}
          alt={`${logo.name} logo`}
          style={logo.width ? { width: `${logo.width}px` } : undefined }
        />
      ))
    }
    </div>
  ) : null;
}

export default Logos;