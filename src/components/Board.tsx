import {FC, useState} from 'react';
import Button from './Button';
import Square from './Square';

    type BoardProps={
      players: {playerA: string, playerB: string}
    }


const Board: FC<BoardProps> =({players}) =>{
    const[square,  setSquare]= useState(Array(9).fill(null));
    const[isXturn,  setIsXturn]= useState(true);

    //getting id from Square component
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

//condition for winner/draw
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

    //checking winner
 const CheckWinner=()=>{
    for(let i=0; i<conditions.length; i++){
    const [a,b,c] = conditions[i];
    if( square[a] !== null && square[a]=== square[b] && square[a] === square[c]){
     return square[c]
    }
 }
 }

 //checking draw
  const checkDraw=()=>{
    if(!winner){
       return square.every(itm=> itm !==null)
    }
 }
  

 //changing player's theme conditionally 
 let playerXtheme= 'text-gray-500'
 let playerOtheme= 'text-gray-500'
  if(isXturn){
    playerXtheme= 'text-lime-400 underline'
  } else if(!isXturn){
    playerOtheme='text-teal-400 underline'
  }
  
 const winner= CheckWinner();
  const draw= checkDraw();


  //assigning players(A,B) to ('X', 'O')
 let winPlayer;
 if(winner == 'X'){
    winPlayer= players.playerA
 }else if(winner == 'O'){
  winPlayer = players.playerB
 }

  return (
  <div className='  text-center'>
   
{draw ? <div className='text-orange-400 text-xl sm:text-3xl '>Draw..</div>: <div className='w-60 sm:w-72 md:w-80 mx-auto pt-4'>
   {winner ? <div className='text-white text-xl sm:text-3xl'>Congratulations <span className='text-teal-300 font-bold text-2xl sm:text-4xl'>{winPlayer}</span></div>
   
   :<><div className='w-48 sm:w-60 md: md:w-72 flex justify-between '>
        <h3 className={'text-gray-500 text-xl' }>Player X</h3>
        <h3 className={'text-gray-500 text-xl' }>Player O</h3>
   </div>
   <div className='w-48 sm:w-60 md: md:w-72 flex justify-between '>
   <h3 className={' text-xl' + " " +  playerXtheme}>{players.playerA}</h3>
   <h3 className={' text-xl' + " " + playerOtheme}>{players.playerB}</h3>
</div>
    <div className='    flex flex-wrap pt-8 '>
      { square.map((itm,i)=> <Square item={itm} key={i} id={i} handleClick={handleClick} />)}
    </div></>}
  </div>}
    <Button onClick={replayHandler} > Re-Start</Button>
</div>
)
}

export default Board;
