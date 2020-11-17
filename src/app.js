import React, { useState } from 'react';
import './app.scss';
import Story from './components/story/story';
import Map from './components/map/map';
import Intro from './components/intro/intro';
import Logos from './components/logos/logos';

const App = (props) => {
  const {
    chapters,
    accessToken,
    style,
    theme,
    showMarkers,
    title,
    subtitle,
    byline,
    alignment,
    footer,
    intro,
    logos
  } = props;
  const [currentChapterId, setCurrentChapter] = useState(chapters[0]);
  const [currentAction, setCurrentAction] = useState();

  return (
    <div>
      {intro && <Intro {...intro} />}
      <Logos logos={logos}/>
      <Story
        hasIntro={!!intro}
        chapters={chapters}
        title={title}
        subtitle={subtitle}
        byline={byline}
        theme={theme}
        alignment={alignment}
        currentChapterId={currentChapterId}
        footer={footer}
        setCurrentChapter={setCurrentChapter}
        setCurrentAction={setCurrentAction}
      />
      <Map
        chapters={chapters}
        currentAction={currentAction}
        accessToken={accessToken}
        mapStyle={style}
        showMarkers={showMarkers}
        currentChapterId={currentChapterId}
      />
    </div>
  );
};

export default App;