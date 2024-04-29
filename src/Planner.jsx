import { useState } from 'react'
import backgrounds from './backgrounds.js'
import races from './races.js'
import blessings from './blessings.js'
import Statdisplay from './statdisplay.jsx'
import './Planner.css'




function Planner(){
    const [character, setCharacter] = useState(characterFactory());
    function addStat(id, val){
        setCharacter({...character, [id]: character[id] + val, unspent: character.unspent - val})
    }
    return (
        <>
            <div id="primary">
                <h2>Primary Statistics</h2>
                <Statdisplay name="ST" value={8 - !character.male + character.ST} assigned={character.ST} hasPoints={character.unspent > 0} adder = {(val) => addStat("ST", val)}/>
                <Statdisplay name="CN" value={8 + !character.male + character.CN} assigned={character.CN} hasPoints={character.unspent > 0} adder = {(val) => addStat("CN", val)}/>
                <Statdisplay name="DX" value={8 + character.DX} assigned={character.DX} hasPoints={character.unspent > 0} adder = {(val) => addStat("DX", val)}/>
                <Statdisplay name="BT" value={8 + character.BT} assigned={character.BT} hasPoints={character.unspent > 0} adder = {(val) => addStat("BT", val)}/>
                <Statdisplay name="IN" value={8 + character.IN} assigned={character.IN} hasPoints={character.unspent > 0} adder = {(val) => addStat("IN", val)}/>
                <Statdisplay name="WP" value={8 + character.WP} assigned={character.WP} hasPoints={character.unspent > 0} adder = {(val) => addStat("WP", val)}/>
                <Statdisplay name="PE" value={8 + character.PE} assigned={character.PE} hasPoints={character.unspent > 0} adder = {(val) => addStat("PE", val)}/>
                <Statdisplay name="CH" value={8 + character.CH} assigned={character.CH} hasPoints={character.unspent > 0} adder = {(val) => addStat("CH", val)}/>
            </div>
            <div id="Skills">
                <h2>Skills</h2>
            </div>
            <div id="Magic">
                <h2>Magic</h2>
            </div>
            <div id="Disciplines">
                <h2>Disciplines</h2>
            </div>
            <div id="derived">
                <h2>Derived Statistics</h2>
            </div>
        </>
    )
}


function characterFactory(){
    return {
        male: true,
        race: "human",
        background: 0,
        level: 1,
        unspent: 10,
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

export default Planner;