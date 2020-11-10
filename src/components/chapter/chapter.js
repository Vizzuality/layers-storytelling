import React from 'react';
import cx from 'classnames';
import './chapter.css';
import { useTranslation } from 'react-i18next';

function Chapter({ id, theme, title, image, images, description, currentChapterId, legend, sources }) {
  const { t } = useTranslation();

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
          className={
            'absolute top-0 mt-1 p-1 flex uppercase tracking-wider bg-black bg-opacity-50 text-white text-xs'
          }
        >
          <div className="flex mr-1">{t(img.title)}</div>-
          <div className="font-bold ml-1">{t(img.author)}</div>
        </figcaption>
      )}
    </figure>
  );

  const renderLegend = (legend, sources) => (
    <div className="text-sm pb-12 px-12">
      {legend.map((l) => (
        <div className="flex items-center mb-4">
          <span
            className="w-8 h-8 mr-4"
            style={{
              'border-radius': l.type === 'circle' ? '50%' : 'none',
              'background-color': l.color,
              border: l.border ? `solid 2px ${l.border}` : 'none'
            }}
          />
          <span>{l.title}</span>
        </div>
      ))}
      {sources && <div className="ml-12">{t(sources)}</div>}
    </div>
  );

  return (
    <div id={id} className={classList}>
      <div className={theme}>
        {images &&
          images.filter((i) => i.position === 'top').map((i) => renderImage(i))}
        {title && (
          <div className="content text-base py-12 px-12 leading-6">
            {title && <h3 className="font-serif text-2xl pb-6">{t(title)}</h3>}
            {description && (
              <p className="text-sm leading-8">{t(description)}</p>
            )}
          </div>
        )}
        {legend && renderLegend(legend, sources)}
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
