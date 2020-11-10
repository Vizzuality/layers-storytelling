import React from 'react';
import cx from 'classnames';
import Chapter from '../chapter/chapter';
import { useTranslation } from 'react-i18next';
import './story.css';

const alignments = {
  left: 'lefty',
  center: 'centered',
  right: 'righty'
};

const Story = ({ title, subtitle, byline, theme, chapters, alignment, currentChapterId, footer, hasIntro }) => {
  const { t } = useTranslation();

  return (
    <div id="story" className={cx({ "withIntro": hasIntro })}>
      {title && (
        <div id="header" className={theme}>
          <h1>{t(title)}</h1>
          {subtitle && <h2>{t(subtitle)}</h2>}
          {byline && <p>{t(byline)}</p>}
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
        <div id="footer" className={`footer-${theme}`}>
          <p>{t(footer)}</p>
        </div>
      )}
    </div>
  );
}

export default Story;