import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PageHeader } from './PageHeader/PageHeader';
import { AdDesigner } from './AdDesigner/AdDesigner';
import { VotesComponent } from './VoteHere/Votes';
import { Ad } from './Ad/Ad';
function App() {
  return (
    <div className='App'>
      <PageHeader user={'Kate'}></PageHeader>
      <div className='adContainer'>
      <Ad flavor={'Strawberry'} darkTheme={true} fontSize={20}></Ad>
      <Ad flavor={'Chocolate'} darkTheme={false} fontSize={30}></Ad>
      <Ad flavor={'Vanilla'} darkTheme={true} fontSize={30}></Ad>

      </div>
      <AdDesigner></AdDesigner>
      <VotesComponent></VotesComponent>
    </div>
  )
}

export default App;
