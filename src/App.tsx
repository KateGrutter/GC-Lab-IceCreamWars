import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PageHeader } from './PageHeader';
import { AdDesigner } from './AdDesigner';
import { VotesComponent } from './Votes';
function App() {
  return (
    <div className='App'>
      <PageHeader></PageHeader>
      <AdDesigner></AdDesigner>
      <VotesComponent></VotesComponent>
    </div>
  )
}

export default App;
