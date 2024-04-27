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