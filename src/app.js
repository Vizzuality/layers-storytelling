import React, { useState } from 'react';
import './app.css';
import Story from './components/story/story';
import Map from './components/map/map';

const App = (props) => {
  const { chapters, accessToken, style, theme, showMarkers, title, subtitle, byline, alignment, footer } = props;
  const [currentChapter, setCurrentChapter] = useState(chapters[0]);

  const { id: currentChapterID } = currentChapter;
  return (
    <div>
      <Story
        chapters={chapters}
        title={title}
        subtitle={subtitle}
        byline={byline}
        theme={theme}
        alignment={alignment}
        currentChapterID={currentChapterID}
        footer={footer}
      />
      <Map chapters={chapters} setCurrentChapter={setCurrentChapter} accessToken={accessToken} mapStyle={style} showMarkers={showMarkers} />
    </div>
  );
};

export default App;