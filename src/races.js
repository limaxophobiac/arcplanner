const races = {
    human: {},
    dwarf: {ST: 1, CN: 1, CH: -1, DX: -1, TechApt: 15, Repair: 2, Firearms: 2, PickLocks: 2, DisarmTraps: 2},
    elf: {ST: -1, CN: -2, DX: 1, WP: 1, BE: 1, MagickApt: 15, Repair: -2, Firearms: -2, PickLocks: -2, DisarmTraps: -2},
    gnome: {WP: 2, CN: -2, Haggle: 2},
    halfling: {DX: 2, Prowling: 2, Dodge: 1, ST: -3},
    halfelf: {DX: 1, BE: 1, CN: -1, MagickApt: 5, Repair: -1, Firearms: -1, PickLocks: -1, DisarmTraps: -1},
    halforc: {ST: 1, CN: 1, Melee: 2, Dodge: 2, PRes: 10, BE: -2, CH: -2},
    halfogre: {ST: 4, ResistDamage: 10, IN: -4, BE: -1, Prowling: -2}
};

export default races;