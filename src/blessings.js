const blessings = [
    {
        name: "Arbalah's blessing",
        description: "For returning Arbalah's sacred artifact to him, you have been given his blessing.",
        modifiers: {Reaction: 5}
    },
    {
        name: "Gypsy blessing",
        description: "For helping Madame Toussaude, you received a gypsy blessing.",
        modifiers: {CH: 1}
    },
    {
        name: "Brigitte's blessing",
        description: "Priestess Brigitte has blessed you for returning the idol of Geshtianna.",
        modifiers: {BE: 1}
    },
    {
        name: "Halcyon's blessing",
        description: "You have completed the First Circle, that of Goodness. Therefore, you receive the blessing of Halcyon, God of Truth.",
        modifiers: {WP: 2, PE: 2, Heal: 4, SpotTrap: 4}
    },
    {
        name: "Moorindal's blessing",
        description: "You have completed the Second Circle, that of Evil. Therefore you receive the blessing of Moorindal, God of Shadow.",
        modifiers: {Melee: 4, Backstab: 8, Prowling: 4}
    },
    {
        name: "Kai'tan's blessing",
        description: "You have completed the Third Circle, that of Neutrality. Therefore you receive the blessing of Kai'tan, Goddess of Balance.",
        modifiers: {BE: 1, CH: 1, Bow: 4, Haggle: 4, Persuasion: 4}
    },
    {
        name: "Velorien's blessing",
        description: "You have joined the Three Circles and offered your life to Velorien, the All-Father. Therefore, you receive his blessing of Ultimate Power!",
        modifiers: {DX: 4, Hp: 100, Fp: 100, ResistDamage: 30, Dodge: 12, Melee: 12, PickPocket: 12, Persuasion: 12, Firearms: 12}
    }
];

export default blessings;