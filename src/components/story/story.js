import React from 'react';
import cx from 'classnames';
import Chapter from '../chapter/chapter';
import './story.css';

const alignments = {
  left: 'lefty',
  center: 'centered',
  right: 'righty'
};

const Story = ({ title, subtitle, byline, theme, chapters, alignment, currentChapterId, footer, hasIntro }) => console.log('c', currentChapterId) || (
  <div id="story" className={cx({ "withIntro": hasIntro })}>
    {title && (
      <div id="header" className={theme}>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
        {byline && <p>{byline}</p>}
      </div>
    )}
    <div id="features" className={alignments[alignment]}>
      {chapters.map((chapter) => (
        <Chapter
          key={chapter.id}
          theme={theme}
          {...chapter}
          currentChapterId={currentChapterId}
        />
      ))}
    </div>
    {footer && (
      <div id="footer" className={theme}>
        <p>{footer}</p>
      </div>
    )}
  </div>
);

export default Story;