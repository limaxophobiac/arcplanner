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
        name: "Bandit",
        races: ["human", "halfelf", "halforc"],
        description: "You are a gun-toting bandit. Your lifestyle has earned you a bonus to your Firearms skill, as well as a penalty to Charisma (-1). You ran afoul of the law and reached the IFS Zephyr just one step ahead of the authorities. You have your gun and some ammo, but you don't have any money.",
        modifiers: {CH: -1, Firearms: 2}
    },

    {
        name: "Barbarian",
        races: ["human", "dwarf", "gnome", "halfling", "halfelf", "halforc"],
        description: "You were raised among a wild barbarian tribe in a far away land. No one knows how or why you came to be passenger aboard the IFS Zephyr, but given your ferocious demeanor, no one tried to find out. You gain bonuses to Strength (+2) and Constitution (+1), and a slight bonus to Melee, while suffering penalties to Intelligence (-1) and Charisma (-2), and a penalty to Haggle. You also possess barbarian armor but less money than other characters.",
        modifiers: {ST: 2, CN: 1, IN: -1, CH: -2, Melee: 1, Haggle: -2}
    },
    {
        name: "Beat with an Ugly Stick",
        races: ["human", "elf", "dwarf", "gnome", "halfling", "halfelf", "halforc", "halfogre"],
        description: "You are ugly. There is just no other word for it, unless you consider 'hideous' a better word. Children flee from you in terror and even the kindest of souls finds it difficult to stand your presence for long. As a result of your countenance, you take an extreme penalty to Beauty (-6), but because you have had to defend yourself from frequent attacks, you gain a bonus to Strength (+2), Dexterity (+2), and a slight bonus to all of your Combat Skills.",
        modifiers: {BE: -6, ST: 2, DX: 2, Melee: 1, Dodge: 1, Bow: 1, Throwing: 1}
    },
    {
        name: "Bookworm",
        races: ["human", "elf", "dwarf", "gnome", "halfling", "halfelf"],
        description: "You have spent most of your life reading. You gain a bonus to Intelligence (+1). Unfortunately, myopia has set in, and you lose a point to Perception (-1).",
        modifiers: {IN: 1, PE: -1}
    },
    {
        name: "Born Under a Sign",
        races: ["human", "elf", "dwarf", "gnome", "halfling", "halfelf", "halforc", "halfogre"],
        description: "You were born during an astounding astronomical event. As a result, you experience fewer critical hits and critical misses, but when you do get them their results tend to be spectacular.",
        modifiers: {}
    },
    {
        name: "Bride of Frankenstein",
        races: ["human", "halforc"],
        description: "You were reanimated by a mad scientist to be the bride of his other creation, but somehow you managed to escape before the wedding. You are very well constructed, gaining bonuses to Beauty (+4), Constitution (+4), Electrical Resistance (+20%), and Poison Resistance (+10%), but you have a very slow Dexterity (-4), a damaged brain-larynx connection (you use Dumb Dialogue options), and a susceptibility to fire, Fire Resistance (-10%). You also start out with no money whatsoever.",
        modifiers: {BE: 4, CN: 4, DX: -4, ERes: 20, PRes: 10, FRes: -10}
    },
    {
        name: "Bully",
        races: ["human", "elf", "dwarf", "gnome", "halfling", "halfelf"],
        description: "You were the class bully, big and dumb. Extortion and intimidation have afforded you a bonus to Strength (+1), but getting people to do your homework for you leaves you with a deficiency in Intelligence (-1).",
        modifiers: {IN: -1, ST: 1}
    },
    {
        name: "Charlatan's Protégé",
        races: ["human", "elf", "dwarf", "gnome", "halfling", "halfelf"],
        description: "Having been convinced by a travelling salesman to become his apprentice, you've given up your life in the military academy you were enrolled in. You gain a major bonus to Charisma (+6), but lose some physical Strength (-2) and Constitution (-2), as well as taking slight penalties to all of your Combat Skills.",
        modifiers: {CH: 6, ST: -2, CN: -2, Melee: -1, Dodge: -1, Bow: -1, Throwing: -1}
    },
    {
        name: "Child of a Hero",
        races: ["human", "elf", "dwarf", "gnome", "halfling", "halfelf", "halforc", "halfogre"],
        description: "You start with your father's +1 sword and are known throughout the land as a child of a Hero. Therefore you will incur terrible negative reaction for any evil act.",
        modifiers: {}
    },
    {
        name: "Clanless Dwarf",
        races: ["dwarf"],
        description: "Your parents did not belong to a clan, and would not discuss the reasons why. You gain no dwarven bonus to Tech skills, but you do start with an excellent dwarven war hammer.",
        modifiers: {Repair: -2, Firearms: -2, PickLocks: -2, DisarmTraps: -2}
    },
    {
        name: "Dark Elf Follower",
        races: ["elf"],
        description: "You believe in the philosophy of the dark elves, that technology must be brought down at any cost. This faith has strengthened your resolve, Willpower (+2), but the recent rise of technology has made you bitter, Charisma (-2).",
        modifiers: {WP: 2, CH: -2}
    },
    {
        name: "Dark Sight",
        races: ["human", "elf", "dwarf", "gnome", "halfling", "halfelf", "halforc", "halfogre"],
        description: "Your eyes are overly sensitive to light. You are nearly blind in daylight, but you can see perfectly in darkness. Therefore, all skill lighting penalties are reversed for you.",
        modifiers: {}
    },
    {
        name: "Day Mage",
        races: ["human", "elf", "gnome", "halfling", "halfelf", "halforc", "halfogre"],
        description: "You were born with a magickal Aptitude that has affinity for the sun. During the day (between the hours of 6 AM and 6 PM), you possess a 20% bonus to your Magickal Aptitude, but at night you suffer a 20% penalty to your Magickal Aptitude.",
        modifiers: {}
    },
    {
        name: "Débutante",
        races: ["human", "elf", "dwarf", "gnome", "halfling", "halfelf", "halforc", "halfogre"],
        description: "",
        modifiers: {}
    },
    {
        name: "",
        races: ["human", "elf", "dwarf", "gnome", "halfling", "halfelf", "halforc", "halfogre"],
        description: "Your family is one of the most influential in all of Arcanum. As a young debutante, you have bonuses to Beauty (+3) and Charisma (+3). Of course, the easy life has made you soft in mind and body. You have penalties in Strength (-1), Dexterity (-1), and all of your Combat Skills.",
        modifiers: {BE: 3, CH: 3, ST: -1, DX: -1, Melee: -2, Dodge: -2, Bow: -2, Throwing: -2}
    },
    {
        name: "Disenfranchised Gnome",
        races: ["gnome"],
        description: "You are not a part of the gnomish capitalist bourgeoisie, and instead grew up as a day laborer. You suffer a penalty to Haggle, but gain a bonus to Strength (+1).",
        modifiers: {ST: 1, Haggle: -2}
    },
    {
        name: "Educator",
        races: ["human", "elf", "dwarf", "gnome", "halfling", "halfelf", "halforc", "halfogre"],
        description: "You are a natural teacher. As you learn skill training, you can teach your followers the previous training step. So as an Expert, you can teach your followers as Apprentices, if they qualify. However, since you spend extra time with each follower, you cannot have as many as usual (-1 to maximum followers).",
        modifiers: {Followers: -1}
    },
    {
        name: "Elven Blood",
        races: ["human", "gnome", "halfling", "halfogre"],
        description: "Your father's great-grandmother was an elf. You gain an increase in Magickal Aptitude (5%), but suffer a slight penalty to all Tech skills.",
        modifiers: {Repair: -1, Firearms: -1, PickLocks: -1, DisarmTraps: -1, MagickApt: 5}
    },
    {
        name: "Escaped Lunatic",
        races: ["human"],
        description: "You have escaped from an insane asylum and stowed away aboard the IFS Zephyr. You are extremely resistant to damage (+25% to normal, fire, electrical, and poison resistance) but you have no money, you have stolen some cheap clothing, and most people are frightened or repulsed by you Reaction Modifier(-25 reaction).",
        modifiers: {ResistDamage: 25, FRes: 25, ERes: 25, PRes: 25, Reaction: -25}
    },
    {
        name: "Extreme Personality",
        races: ["human", "elf", "dwarf", "gnome", "halfling", "halfelf", "halforc", "halfogre"],
        description: "You possess an extreme personality. People react more strongly to your presence, and tend to grow to either love or hate you.",
        modifiers: {}
    },
    {
        name: "Factory Escapee",
        races: ["halforc"],
        description: "You were a slave in a factory until a recent escape. You have little money, but you gain a bonus to Strength (+1).",
        modifiers: {ST: 1}
    },
    {
        name: "Feral Child",
        races: ["human", "gnome", "halfelf", "halforc", "halfogre"],
        description: "As an infant, your parents abandoned you in the middle of the forest. Having been raised by a pack of wolves gives you a considerable bonus to Dexterity (+3) as well as slight bonuses in the Thieving Skills of Prowling and Pick Pocket. But, oblivious of table manners and the rules of good society, you receive a severe penalty to Intelligence (-6) as well as slight penalties in the Social Skills of Persuasion and Haggle. You begin with half the normal stating wealth.",
        modifiers: {IN: -6, Persuasion: -1, Haggle: -1, DX: 3, Prowling: 1, PickPocket: 1}
    },
    {
        name: "Foppish Elf",
        races: ["elf"],
        description: "Raised in the city, you lose the elven bonus to dexterity but gain a bonus to Persuasion.",
        modifiers: {DX: -1, Persuasion: 2}
    },
    {
        name: "Frankenstein Monster",
        races: ["human", "halforc"],
        description: "You were reanimated by a mad scientist from various body parts he found at grave sites, but somehow you escaped from the laboratory. You are very well constructed, gaining bonuses to Strength (+4), Constitution (+4), Electrical Resistance (+30%), and Poison Resistance (+20%), but you have very slow Dexterity (-6), a damaged brain-larynx connection (you use dumb dialog options), and a susceptibility to fire, Fire Resistance (-20%). You also start out with no money whatsoever.",
        modifiers: {ST: 4, CN: 4, DX: -6, ERes: 30, PRes: 20, FRes: -20}
    },
    {
        name: "Freed Bodyguard",
        races: ["halfogre"],
        description: "Your gnomish master recently died, and in his will you were freed from servitude, as well as being left a small monetary gift. However, you are not very bright, and suffer a penalty to your Intelligence (-1).",
        modifiers: {IN: -1}
    },
    {
        name: "Halfling Orphan",
        races: ["halfling"],
        description: "Abandoned in a large city as a child, you survived by stealing and never received any education. You gain a bonus to Pick Pocket, but lost a point to Intelligence (-1).",
        modifiers: {IN: -1, PickPocket: 2}
    },
    {
        name: "",
        races: ["human", "elf", "dwarf", "gnome", "halfling", "halfelf", "halforc", "halfogre"],
        description: "",
        modifiers: {}
    },
    {
        name: "",
        races: ["human", "elf", "dwarf", "gnome", "halfling", "halfelf", "halforc", "halfogre"],
        description: "",
        modifiers: {}
    },
];

export default backgrounds;