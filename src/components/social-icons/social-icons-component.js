import React from 'react';

const SocialIcons = ({ social }) => {
  return social && social.length ? (
    <div className="absolute bottom-0 left-0 text-white fill-current z-10 m-3 flex flex-col items-center">
      {social.map((social) => (
        <a
          key={social.name}
          title={social.name}
          alt={social.name}
          href={social.href}
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
          rel="noopener"
        >
          <img
            src={social.src}
            title={`${social.name} social`}
            alt={`${social.name} social`}
            className="ml-3 mb-8 text-white fill-current"
            style={social.width ? { width: `${social.width}px` } : undefined}
          />
        </a>
      ))}
    </div>
  ) : null;
}

export default SocialIcons;