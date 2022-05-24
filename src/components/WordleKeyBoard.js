import React, { useEffect, useContext } from 'react';
import Key from './Key'
import { AppContext } from "../App";

const WordleKeyBoard = () => {
    const keys1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const keys2 = ['a', 's', 'd', 'f', 'g', 'h', 'i', 'j', 'k'];
    const keys3 = ['EN', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'DE'];


    const { board } = useContext(AppContext);
    return(
     <div className='keyboard'>
            <div className="line1">
                {keys1.map((key) => {
                    return <Key keyVal={key}/>;
        })}
      </div>
        <div className='line2'>
                {keys2.map((key) => {
                    return <Key keyVal={key}/>;
        })}
      </div>
        <div className='line3'>
                {keys3.map((key) => {
                    return <Key keyVal={key}/>;
        })}
      </div>
     </div>
    )
}

export default WordleKeyBoard