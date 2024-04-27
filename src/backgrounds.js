const backgrounds = [
    {
        name: "Afraid of the Dark",
        races: ["human", "halfling"],
        description: "You cannot stand to be in the dark. You stay constantly aware of your surroundings, peering into dim corners and dark shadows to see if something is there. While this has raised your Perception (+2), you will suffer a panic attack if you are in too dark an area, leading to penalties in Dexterity (-2), Intelligence (-2), and Willpower (-2), but you do gain a bonus to Strength (+2) from the fear.",
        modifiers: {PE: 2}
    },
    {
        name: "Agoraphobic",
        races: ["human", "dwarf", "gnome", "halfling"],
        description: "You are terrified of open spaces. As a child, you rarely went outdoors and spent your time reading and studying, gaining a bonus to Intelligence (+2). You are fine if you are indoors or even in a thickly forested area, but if you go into an outdoor open area, you suffer a panic attack, losing your Intelligence bonus and leading to penalties in Dexterity (-2), Intelligence (-2), and Willpower (-2), but you do gain a bonus to Strength (+2) from the fear.",
        modifiers: {IN: 2}
    },
    {
        name: "Apprenticed to a Blacksmith",
        races: ["human", "elf", "dwarf", "gnome", "halfling", "halfelf", "halforc", "halfogre"],
        description: "Your master is a hard man. You gain a bonus to Strength (+1) and a bonus to your Repair skill, but you suffer a penalty to Dexterity (-2) due to the strenuous and repetitive hard labor.",
        modifiers: {ST: 1, DX: -2, Repair: 2}
    },
    {
        name: "Apprenticed to a Shopkeeper",
        races: ["human", "elf", "dwarf", "gnome", "halfling", "halfelf", "halforc", "halfogre"],
        description: "Spending your whole childhood inside a shop, you gain an exceptional bonus to Haggle, but you suffer a penalty to Dexterity (-1).",
        modifiers: {DX: -1, Haggle: 3}
    },
    {
        name: "Army Training",
        races: ["human", "elf", "dwarf", "gnome", "halfling", "halfelf", "halforc"],
        description: "You received some army training during your youth, but were discharged for having flat feet. You gain bonuses to Strength (+1), as well as slight bonuses to your Bow and Melee skills, but you have a penalty to Dexterity (-1).",
        modifiers: {ST: 1, DX: -1, Bow: 1, Melee: 1}
    },
    {
        name: "Arsonist",
        races: ["human", "gnome", "halforc"],
        description: "You like fire. No, you LOVE fire! Fire! Fire! FIRE! You were always picked on as a kid for being scrawny, receiving penalties to Strength (-1) and Constitution (-1), but you showed them! You studied Explosives, gaining +20 Expertise, and you burned their homes! Burned them to the ground! Ha ha! Then you ran away from home and snuck aboard the IFS Zephyr, which seemed highly flammable and an excellent target. You probably would have torched the zeppelin if it hadn't been shot down.",
        modifiers: {ST: -1, CN: -1, Explosives: 20}
    },
    {
        name: "",
        races: ["human"],
        description: "",
        modifiers: {}
    },

    {
        name: "",
        races: ["human"],
        description: "",
        modifiers: {}
    },
    {
        name: "",
        races: ["human"],
        description: "",
        modifiers: {}
    },
    {
        name: "",
        races: ["human"],
        description: "",
        modifiers: {}
    },
];

export default backgrounds;