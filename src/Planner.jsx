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
        Fp: 0,
        Conveyance: 0,
        Divination: 0,
        Air: 0,
        Earth: 0,
        Fire: 0,
        Water: 0,
        Force: 0,
        Mental: 0,
        Meta: 0,
        Morph: 0,
        Nature: 0,
        NecroBlack: 0,
        NecroWhite: 0,
        Phantasm: 0,
        Summoning: 0,
        Temporal: 0,
        Bow: 0,
        Dodge: 0,
        Melee: 0,
        Throwing: 0,
        Backstab: 0,
        PickPocket: 0,
        Prowling: 0,
        SpotTrap: 0,
        Gambling: 0,
        Haggle: 0,
        Heal: 0,
        Persuasion: 0,
        Repair: 0,
        Firearms: 0,
        PickLocks: 0,
        DisarmTraps: 0,
        Chemistry: 0,
        Electrical: 0,
        Explosives: 0,
        GunSmithing: 0,
        Herbology: 0,
        Mechanical: 0,
        Smithy: 0,
        Therapeutics: 0
        
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