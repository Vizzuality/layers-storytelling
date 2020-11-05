import { useEffect, useState } from 'react';
import scrollama from 'scrollama';

const Scroller = ({ chapters, setCurrentChapter, setCurrentAction }) => {
  const [scroller, setScroller] = useState(null);

  useEffect(() => {
    setScroller(scrollama());
  }, []);

  useEffect(() => {
    if (scroller) {
      scroller.setup({
        step: '.step',
        offset: 0.5,
        progress: true
      })
      window.addEventListener('resize', scroller.resize);
    }
  }, [scroller]);

  useEffect(() => {
    if (scroller) {
      scroller
        .onStepEnter((response) => {
          const chapter = chapters.find((c) => c.id === response.element.id);
          if (chapter) {
            setCurrentChapter(chapter);
            setCurrentAction('enter');
          } else {
            // Intro Chapter
            console.log('first chapter');
          }
        })
        .onStepExit((response) => {
          const chapter = chapters.find(
            (chapter) => chapter.id === response.element.id
          );
          if (chapter) {
            setCurrentChapter(chapter);
            setCurrentAction('exit');
          } else {
            // Intro Chapter
            console.log('first chapter');
          }
        });
    };
  }, [chapters, scroller, setCurrentChapter, setCurrentAction]);

  return null;
}

export default Scroller;