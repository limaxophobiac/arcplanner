import { useState } from 'react'
import backgrounds from './backgrounds.js'
import races from './races.js'
import blessings from './blessings.js'
import './Planner.css'

const basestats = {ST: 8, CN: 8, DX: 8, BT: 8, IN: 8, WP: 8, PE: 8, CH: 8};


function characterFactory(){
    return {
        male: true,
        race: "human",
        background: 0,
        level: 1,
        unspent: 5,
        ST: 0, 
        CN: 0,
        DX: 0,
        BT: 0,
        IN: 0,
        WP: 0,
        PE: 0,
        CH: 0,
        Hp: 0,
        Fp: 0
    };
}

function Planner(){
    const [character, setCharacter] = useState(characterFactory());
    return (
        <>
            Cosmetic <br/>
            { "ST: " + (basestats.ST + character.ST)}
            <br/>
            {races.halfogre.ST}
            <br/><br/>
            {backgrounds[3].description}
            <br/>
            <br/>
            {backgrounds[4].description}
            <br/>
            {backgrounds[20].description}
        </>
    )
}

export default Planner;