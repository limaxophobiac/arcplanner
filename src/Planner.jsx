import { useState } from 'react'
import backgrounds from './backgrounds.js'
import races from './races.js'
//import blessings from './blessings.js'
import Statdisplay from './statdisplay.jsx'
import './Planner.css'

export default Planner;

function Planner(){
    const [character, setCharacter] = useState(characterFactory());

    function addStat(id, val){
        setCharacter({...character, [id]: character[id] + val, unspent: character.unspent - val})
    }
    function calcPrimary(name){
        const base = 8 + (name == "ST" && !character.male ? -1 : 0) + (name == "CN" && !character.male ? 1 : 0);
        return base + character[name] + (backgrounds[character.background].modifiers[name] || 0) + (races[character.race][name] || 0);
    }
    function calcSkill(name){
        return (races[character.race][name] || 0) + (backgrounds[character.background].modifiers[name] || 0) + (character[name]*4);
    }

    /*
        Gambling: 0,
        Haggle: 0,
        Heal: 0,
        Persuasion: 0,
        Repair: 0,
        Firearms: 0,
        PickLocks: 0,
        DisarmTraps: 0,
    */
    return (
        <div id ="planner">
            <div id="primary">
                <h2>Primary Statistics</h2>
                <Statdisplay name="ST" value={calcPrimary("ST")} assigned={character.ST} hasPoints={character.unspent > 0} adder = {(val) => addStat("ST", val)}/>
                <Statdisplay name="CN" value={calcPrimary("CN")} assigned={character.CN} hasPoints={character.unspent > 0} adder = {(val) => addStat("CN", val)}/>
                <Statdisplay name="DX" value={calcPrimary("DX")} assigned={character.DX} hasPoints={character.unspent > 0} adder = {(val) => addStat("DX", val)}/>
                <Statdisplay name="BT" value={calcPrimary("BT")} assigned={character.BT} hasPoints={character.unspent > 0} adder = {(val) => addStat("BT", val)}/>
                <Statdisplay name="IN" value={calcPrimary("IN")} assigned={character.IN} hasPoints={character.unspent > 0} adder = {(val) => addStat("IN", val)}/>
                <Statdisplay name="WP" value={calcPrimary("WP")} assigned={character.WP} hasPoints={character.unspent > 0} adder = {(val) => addStat("WP", val)}/>
                <Statdisplay name="PE" value={calcPrimary("PE")} assigned={character.PE} hasPoints={character.unspent > 0} adder = {(val) => addStat("PE", val)}/>
                <Statdisplay name="CH" value={calcPrimary("CH")} assigned={character.CH} hasPoints={character.unspent > 0} adder = {(val) => addStat("CH", val)}/>
            </div>
            <div id="Skills">
                <h2>Skills</h2>
                <Statdisplay name="Bow" value={calcSkill("Bow")} assigned={character.Bow} hasPoints={character.unspent > 0} adder = {(val) => addStat("Bow", val)}/>
                <Statdisplay name="Dodge" value={calcSkill("Dodge")} assigned={character.Dodge} hasPoints={character.unspent > 0} adder = {(val) => addStat("Dodge", val)}/>
                <Statdisplay name="Melee" value={calcSkill("Melee")} assigned={character.Melee} hasPoints={character.unspent > 0} adder = {(val) => addStat("Melee", val)}/>
                <Statdisplay name="Throwing" value={calcSkill("Throwing")} assigned={character.Throwing} hasPoints={character.unspent > 0} adder = {(val) => addStat("Throwing", val)}/>
                
                <Statdisplay name="Backstab" value={calcSkill("Backstab")} assigned={character.Backstab} hasPoints={character.unspent > 0} adder = {(val) => addStat("Backstab", val)}/>
                <Statdisplay name="Pick Pocket" value={calcSkill("PickPocket")} assigned={character.PickPocket} hasPoints={character.unspent > 0} adder = {(val) => addStat("PickPocket", val)}/>
                <Statdisplay name="Prowling" value={calcSkill("Prowling")} assigned={character.Prowling} hasPoints={character.unspent > 0} adder = {(val) => addStat("Prowling", val)}/>
                <Statdisplay name="Spot Trap" value={calcSkill("SpotTrap")} assigned={character.SpotTrap} hasPoints={character.unspent > 0} adder = {(val) => addStat("SpotTrap", val)}/>
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
        </div>
    )
}


function characterFactory(){
    return {
        male: true,
        race: "halfling",
        background: 9,
        level: 1,
        unspent: 30,
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

