import {FC} from 'react';

    type SquareProps={
        item: string;
        id: number;
        handleClick: (id: number)=>void;
    }

const Square: FC<SquareProps> =({item, id, handleClick}) =>{
  
  let squareTheme;
  if(item== 'X'){
    squareTheme= "text-lime-400"
  }else{
    squareTheme= 'text-teal-400'
  }
  return (
    <button onClick={()=>handleClick(id)} className={'text-3xl border border-white w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 '+ " "+ squareTheme}>
      {item} 
    </button>
  )
}

export default Square;