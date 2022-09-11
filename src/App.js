import React from 'react';
// import Topic from './Topic';
import SplitPane from 'react-split-pane';
import TaskCreator from './TaskCreator';
import TaskViewer from './TaskViewer';

//https://www.youtube.com/watch?v=lyRP_D0qCfk   --> React Calendar

const App = () => {
  return (
  <SplitPane split="vertical" minSize={400} defautSize={400} maxSize={800}>
    <TaskCreator />
    <TaskViewer />
  </SplitPane>
  );
}

export default App;
