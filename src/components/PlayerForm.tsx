import {FC, MouseEvent, useState} from 'react';
import Button from './Button';

    type PlayerFormProps={
      callPlayersHandler: (text1:string, text2: string)=> void;
    }

const PlayerForm: FC<PlayerFormProps> =({callPlayersHandler}) =>{
  const[text1,  setText1]= useState('');
  const[text2,  setText2]= useState('');

  const handleClick=(e: MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    callPlayersHandler(text1, text2)
  }

  return (
    <form className='pt-36'>
      <fieldset className='border border-white h-60 w-1/2 mx-auto px-2  flex flex-col items-center justify-center'>
        <input type="text" value={text1} onChange={(e)=>setText1(e.target.value)}
        placeholder='Player 1' className='border border-gray-500 px-2 py-1 md:w-60 rounded-md outline-green-400'/>

        <input type="text" value={text2} onChange={(e)=>setText2(e.target.value)}
        placeholder='Player 2' className='border border-gray-500 px-2 py-1 md:w-60 rounded-md outline-green-400'/>
        <Button onClick={handleClick} className='text-teal-300'>Start</Button>
      </fieldset>
    </form>
  )
}

export default PlayerForm;