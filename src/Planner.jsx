import { useState } from 'react'
import backgrounds from './backgrounds.js'
import races from './races.js'
//import blessings from './blessings.js'
import Statdisplay from './statdisplay.jsx'
import Passivedisplay from './passivedisplay.jsx'
import './Planner.css'

export default Planner;

function Planner(){
    const [character, setCharacter] = useState(characterFactory());
    const [igMins, setIgMins] = useState(false);

    function addStat(id, val){
        setCharacter({...character, [id]: character[id] + val, unspent: character.unspent - val})
    }
    function calcPrimary(primary){
        const base = 8 + (primary == "ST" && !character.male ? -1 : 0) + (primary == "CN" && !character.male ? 1 : 0);
        return Math.max(base + (backgrounds[character.background].modifiers[primary] || 0) + (races[character.race][primary] || 0) + character[primary], 1);
    }
    function calcMaxPrimary(primary){
        let racial = 20 + (primary == "ST" && !character.male ? -1 : 0) + (races[character.race][primary] || 0);
        if (!character.male && primary == "CN" && racial < 19) racial++;
        if ((backgrounds[character.background].modifiers[primary] || 0) + racial >= 20) return Math.max(20, racial);
        return racial + (backgrounds[character.background].modifiers[primary] || 0)
    }

    function calcSkill(name){
        return (races[character.race][name] || 0) + (backgrounds[character.background].modifiers[name] || 0) + (character[name]*4);
    }
    function calcMaxSkill(primary, skill){
        if (igMins) return 20 + (races[character.race][skill] || 0) + (backgrounds[character.background].modifiers[skill] || 0);
        return Math.min(20, (Math.floor(calcPrimary(primary)/3) -1)*4) + (races[character.race][skill] || 0) + (backgrounds[character.background].modifiers[skill] || 0);
    }

    function calcDiscpMax(){
        if (igMins) return 7;
        let i = calcPrimary("IN");
        return i >= 19 ? 7 : i >= 17 ? 6 : i >= 15 ? 5 : i >= 13 ? 4 : i >= 11 ? 3 : i >= 8 ? 2 : i >= 5 ? 1 : 0; 
    }

    function calcAffinity(){
        let magickApt = (races[character.race].MagickApt || 0) + (backgrounds[character.background].modifiers.MagickApt || 0) + magics.reduce((acc, elem) => acc + character[elem]*5, 0);
        let techApt = (races[character.race].TechApt || 0) + (backgrounds[character.background].modifiers.TechApt || 0) + disciplines.reduce((acc, elem) => acc + character[elem]*7, 0);
        return magickApt - techApt - character.Repair*5 - character.Firearms*5 -character.PickLocks*5 -character.DisarmTraps*5;
    }

    return (
        <div id ="planner">
            <div id="primary">
                <h2>Primary</h2>
                {primaryStats.map(elem => <Statdisplay key = {elem} name={elem} value={calcPrimary(elem)} assigned={character[elem]} hasPoints={character.unspent > 0} adder = {(val) => addStat(elem, val)} max = {calcMaxPrimary(elem)}/>)}

            </div>
            <div id="Skills">
                <h2>Skills</h2>
                {skills.map(elem => <Statdisplay key = {elem.skill} name={elem.skill} value={calcSkill(elem.skill)} assigned={character[elem.skill]} hasPoints={character.unspent > 0} adder = {(val) => addStat(elem.skill, val)} max = {calcMaxSkill(elem.primary, elem.skill)}/>)}
                <h5>Note: Skills over 20 and below 0 act as 20 or 0</h5>
            </div>
            
            <div id="Magic">
                <h2>Magic</h2>
                {magics.map(elem => <Statdisplay key ={elem} name={elem} value={character[elem]} assigned={character[elem]} hasPoints={character.unspent > 0} adder = {(val) => addStat(elem, val)} max = {Math.floor(calcPrimary("WP")/3) -1}/>)}
            </div>
            <div id="Disciplines">
                <h2>Disciplines</h2>
                {disciplines.map(elem => <Statdisplay key ={elem} name={elem} value={character[elem]} assigned={character[elem]} hasPoints={character.unspent > 0} adder = {(val) => addStat(elem, val)} max = {calcDiscpMax()}/>)}
            </div>
            <div id="derived">
                <h2>Derived Statistics</h2>
                <Statdisplay name="HP" value={character.level*3 + calcPrimary("ST")*2 + calcPrimary("WP") + character.Hp*4} assigned={character.Hp} hasPoints={character.unspent > 0} adder = {(val) => addStat("Hp", val)} max = {10000}/>
                <Statdisplay name="FP" value={character.level*3 + calcPrimary("CN")*2 + calcPrimary("WP") + character.Fp*4} assigned={character.Fp} hasPoints={character.unspent > 0} adder = {(val) => addStat("Fp", val)} max = {10000}/>
                <Passivedisplay name = {"Magick Affinity"} value = {Math.max(calcAffinity(), 0)}/>
                <Passivedisplay name = {"Tech Affinity"} value = {Math.max(-calcAffinity(), 0)}/>
            </div>
        </div>
    )
}

const primaryStats = ["ST", "CN", "DX", "BT", "IN", "WP", "PE", "CH"];

const magics = [
    "Conveyance",
    "Divination",
    "Air",
    "Earth",
    "Fire",
    "Water",
    "Force",
    "Mental",
    "Meta",
    "Morph",
    "Nature",
    "NecroBlack",
    "NecroWhite",
    "Phantasm",
    "Summoning",
    "Temporal",
]

const disciplines = [
    "Chemistry",
    "Electrical",
    "Explosives",
    "GunSmithing",
    "Herbology",
    "Mechanical",
    "Smithy",
    "Therapeutics"
]

const skills = [
    {skill: "Bow", primary: "DX"},
    {skill: "Dodge", primary: "DX"},
    {skill: "Melee", primary: "DX"},
    {skill: "Throwing", primary: "DX"},
    {skill: "Backstab", primary: "DX"},
    {skill: "PickPocket", primary: "DX"},
    {skill: "Prowling", primary: "PE"},
    {skill: "SpotTrap", primary: "PE"},
    {skill: "Gambling", primary: "IN"},
    {skill: "Haggle", primary: "WP"},
    {skill: "Heal", primary: "IN"},
    {skill: "Persuasion", primary: "CH"},
    {skill: "Repair", primary: "IN"},
    {skill: "Firearms", primary: "PE"},
    {skill: "PickLocks", primary: "DX"},
    {skill: "DisarmTraps", primary: "PE"},
]

function characterFactory(){
    return {
        male: true,
        race: "halfelf",
        background: 9,
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

