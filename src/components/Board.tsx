import {FC, useState} from 'react';
import Square from './Square';

    type BoardProps={
      players: {playerA: string, playerB: string}
    }


const Board: FC<BoardProps> =({players}) =>{
    const[square,  setSquare]= useState(Array(9).fill(null));
    const[isXturn,  setIsXturn]= useState(true);

    const handleClick=(id: number)=>{
        const copySquare= [...square];

        if(copySquare[id] == null){
            copySquare[id]= isXturn? 'X': 'O';
            setSquare(copySquare)
             setIsXturn(!isXturn);
        }}

    const replayHandler=()=>{
        setSquare(Array(9).fill(null));
        setIsXturn(true)
    }
   
  const conditions=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

 const CheckWinner=()=>{
    for(let i=0; i<conditions.length; i++){
    const [a,b,c] = conditions[i];
    if( square[a] !== null && square[a]=== square[b] && square[a] === square[c]){
     return square[c]
    }
 }
 }

  const checkDraw=()=>{
    if(!winner){
       return square.every(itm=> itm !==null)
    }
 }
  

 let playerXtheme;
 let playerOtheme;
  if(isXturn){
    playerXtheme= 'text-lime-400 underline'
  } else if(!isXturn){
    playerOtheme='text-teal-400 underline'
  }
  
 const winner= CheckWinner();
  const draw= checkDraw();

  if(draw){
    console.log('draw')
  }
  
 let winPlayer;
 if(winner == 'X'){
    winPlayer= players.playerA
 }else if(winner == 'O'){
  winPlayer = players.playerB
 }

  return (
  <div className='text-teal-300	 py-8 pl-8 text-center'>
    <h2 className='text-2xl border-2 max-w-max rounded-md px-2 py-1 '>Tic-Tac-Toe</h2>

{draw ? <div className='text-orange-400 text-xl sm:text-3xl '>Draw..</div>: <div className='w-60 sm:w-72 md:w-80 mx-auto pt-4'>
   {winner ? <div className='text-white text-xl sm:text-3xl'>Congratulations <span className='text-teal-300 font-bold text-2xl sm:text-4xl'>{winPlayer}</span></div>
   
   :<><div className='w-48 sm:w-60 md: md:w-72 flex justify-between '>
        <h3 className={'text-gray-500 text-xl' }>Player X</h3>
        <h3 className={'text-gray-500 text-xl' }>Player O</h3>
   </div>
   <div className='w-48 sm:w-60 md: md:w-72 flex justify-between '>
   <h3 className={'text-gray-500 text-xl' + " " +  playerXtheme}>{players.playerA}</h3>
   <h3 className={'text-gray-500 text-xl' + " " + playerOtheme}>{players.playerB}</h3>
</div>
    <div className='    flex flex-wrap pt-8 '>
      { square.map((itm,i)=> <Square item={itm} key={i} id={i} handleClick={handleClick} />)}
    </div></>}
  </div>}
    <button onClick={replayHandler} className='bg-white px-3 py-2 rounded-md font-semibold mt-8 '> Re-Start</button>
</div>
)
}

export default Board;
