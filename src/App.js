import React, { useState } from 'react';

import Header from './components/Header';

function App() {
  // Sem useState: const projects = ['Desenvolvimento de app', 'Front-end web'];
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);
  // useState returns an array with size 2
  // 0. Variable with initial state
  // 1. Function to update the value

  function handleAddProject() {
    // Sem useStates
    //projects.push(`Novo projeto ${Date.now()}`);
    setProjects([... projects, `Novo projeto ${Date.now()}`]);
  }

  return (
  <>
    <Header title="Projects" />
    <ul>
      {projects.map(project => <li key={project}>{project}</li>)}
    </ul>

    <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
  </>
  );
}

export default App;
