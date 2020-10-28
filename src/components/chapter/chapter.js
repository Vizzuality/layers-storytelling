import React from 'react';

function Chapter({ id, theme, title, image, description, currentChapterID }) {
  const classList = id === currentChapterID ? 'step active' : 'step';
  return (
    <div id={id} className={classList}>
      <div className={theme}>
        {title && <h3 className="title">{title}</h3>}
        {image && <img src={image} alt={title}></img>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

export default Chapter;