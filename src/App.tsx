import {FC, useState} from 'react';
import Board from './components/Board';
import PlayerForm from './components/PlayerForm';

    type AppProps={}

const App: FC<AppProps> =() =>{
  const[playerA,  setPlayerA,]= useState('');
  const[playerB,  setPlayerB,]= useState('');

  const callPlayersHandler=(pA: string, pB: string)=>{
    setPlayerA(pA);
    setPlayerB(pB);
  }

  return (
  <div className='bg-zinc-900 h-screen'>
{ playerA && playerB ? <Board players={{playerA, playerB}}/>:  <PlayerForm callPlayersHandler={callPlayersHandler} />
   }
  </div>
)}

export default App;