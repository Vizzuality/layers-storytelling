import React from 'react';
import Chapter from './chapter';

const Story = ({ title, subtitle, byline, theme, chapters, alignments, alignment, currentChapterID, footer }) =>
<div id="story">
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
        currentChapterID={currentChapterID}
      />
    ))}
  </div>
  {footer && (
    <div id="footer" className={theme}>
      <p>{footer}</p>
    </div>
  )}
</div>;

export default Story;