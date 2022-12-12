import {FC, useState} from 'react';
import Board from './components/Board';
import PlayerForm from './components/PlayerForm';

    type AppProps={}

const App: FC<AppProps> =() =>{
  const[playerA,  setPlayerA,]= useState('');
  const[playerB,  setPlayerB,]= useState('');

  const callPlayersHandler=(A: string, B: string)=>{
    setPlayerA(A);
    setPlayerB(B);
  }

  return (
  <div className='bg-zinc-900 h-screen py-8 pl-8'>
     <h2 className='text-2xl text-teal-300 border-2 max-w-max rounded-md px-2 py-1 '>Tic-Tac-Toe</h2>

{ playerA && playerB ? <Board players={{playerA, playerB}}/>:  <PlayerForm callPlayersHandler={callPlayersHandler} />
   }
  </div>
)}

export default App;