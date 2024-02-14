import React from 'react';
import useSound from 'use-sound';
import songone from './assests/Animal.mp3'

const Songs=()=>
{
    const [playSound]= useSound(songone);
    return(
        <div>
            <button onClick={playSound}> playSound</button>
        </div>
    );
};

export default Songs;