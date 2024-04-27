import { useState } from 'react'
import backgrounds from './backgrounds.js'
import './Planner.css'


const basestats = {ST: 8, CN: 8, DX: 8, BT: 8, IN: 8, WP: 8, PE: 8, CH: 8};

const races = {

};

function characterFactory(){
    return {
        male: true,
        race: "Human",
        background: "none",
        level: 1,
        ST: 0, 
        CN: 0,
        DX: 0,
        BT: 0,
        IN: 0,
        WP: 0,
        PE: 0,
        CH: 0,
        Hp: 0,
        Fp: 0,
        blessings: {}
    };
}

function Planner(){
    const [character, setCharacter] = useState(characterFactory());
    return (
        <>
            Cosmetic <br/>
            { "ST: " + (basestats.ST + character.ST)}
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