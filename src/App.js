import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

function App() {  
  // Sem useState: const projects = ['Desenvolvimento de app', 'Front-end web'];
  const [projects, setProjects] = useState([]);
  // useState returns an array with size 2
  // 0. Variable with initial state
  // 1. Function to update the value

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, []);

  function handleAddProject() {
    // Sem useStates
    //projects.push(`Novo projeto ${Date.now()}`);
    setProjects([... projects, `Novo projeto ${Date.now()}`]);
  }

  return (
  <>
    <Header title="Projects" />
    <ul>
      {projects.map(project => <li key={project.id}>{project.title}</li>)}
    </ul>

    <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
  </>
  );
}

export default App;
