import React from 'react';
import cx from 'classnames';
import './chapter.css';

function Chapter({ id, theme, title, image, images, description, currentChapterId }) {
  const stepClasses = 'step max-w-md opacity-25';
  const classList = id === currentChapterId ? `${stepClasses} active` : stepClasses;
  const renderImage = (img) => (
    <figure className="relative p-1">
      <img
        key={img.src}
        src={img.src}
        alt={title}
        className={cx('image w-full', { 'p-10': !img.title })}
      />
      {img.title && (
        <figcaption
          className={`absolute top-0 flex uppercase text-xs p-1 tracking-wider ${
            img.whiteLegend ? 'text-white' : ''
          }`}
        >
          <div className="flex mr-1">{img.title}</div>-
          <div className="font-bold ml-1">{img.author}</div>
        </figcaption>
      )}
    </figure>
  );
  return (
    <div id={id} className={classList}>
      <div className={theme}>
        {images &&
          images.filter((i) => i.position === 'top').map((i) => renderImage(i))}
        {title && (
          <div className="content text-base py-12 px-12 leading-6">
            {title && <h3 className="text-xl font-bold pb-6">{title}</h3>}
            {description && <p>{description}</p>}
          </div>
        )}
        {image && renderImage({ src: image })}
        {images &&
          images
            .filter((i) => i.position === 'bottom')
            .map((i) => renderImage(i))}
      </div>
    </div>
  );
}

export default Chapter;
