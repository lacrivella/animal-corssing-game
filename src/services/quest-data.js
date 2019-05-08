const fishing = {
    id: 'fishing',
    title: 'Gone Fishin',
    image: 'fishing.png',
    description: `
        You are enjoying a peaceful morning fishing when you feel a tug on your line. WOAH! You just caught a huge Tuna!
        Olivia, the cat, congratulates you on your sweet catch. She asks if you want to do a trade, your tuna for a mystery item.
        Do you...
    `,
    choices: [{
        id: 'trade',
        description: 'Accept the trade with Olivia',
        result: `
            You trade the tuna with Olivia. In return you get 100 bells and 15 points of friendship.
        `,
        bells: 100,
        friendship: 15
    }, {
        id: 'sell',
        description: 'Say thanks, but no thanks, and sell the fish at market',
        result: `
            While you make a profit at the market, your friendship with Olivia is strained. She's upset that you didn't want to trade.
            Gain 450 bells, lose 5 friendship points. 
        `,
        bells: 450,
        friendship: -5
    }, {
        id: 'throw',
        description: 'Throw the fish back in the ocean',
        result: 'You throw the fish back into the ocean. You fish for fun, and Olivia respects that. Gain 5 friendship points.',
        bells: 0,
        friendship: 5
    }]
};

const camping = {
    id: 'camping',
    title: 'Parks and Rec',
    image: 'camping.png',
    description: `
        You are enjoying a sunny weekend camping by yourself. 
        You notice over at the other camp Ursala, the bear, has forgottem tp put out her fire pit.
        Do you...
    `,
    choices: [{
        id: 'water',
        description: 'Put it out!',
        result: `
        You put out the fire. Ursala comes back with more firewood right as you're done putting out the fire.
        She's upset that she'll have to start a new fire, but understands fire safety. 
        After all, Smokey the bear is her idol. Add 5 friendship points.
        `,
        bells: 0,
        friendship: 5
    }, {
        id: 'watch',
        description: 'Keep an eye on it',
        result: `
            You told yourself you would keep an eye on it. Buuuut then you get distracted by a butterfly.
            You don't realize that the fire has spread until it's too late. You're blamed for burning down the 
            whole forest even though technically it was Ursala's fault...Lose 50 bells and 10 friendship points.
        `,
        bells: -50,
        friendship: -10
    }, {
        id: 'smores',
        description: 'Go over there and make smores',
        result: `
            You got over and use the fire to make s'mores. When Ursala returns you share with her, and exchange stories over the campfire.
            She pays you 15 bells as a thank-you, and you gain 10 friendship points.
        `,
        bells: 15,
        friendship: 10
    }]
};

const shopping = {
    id: 'shopping',
    title: 'OMG, Shoes!',
    image: 'shopping.png',
    description: `
        It's pay day, and you decide to go downtown to shop around. You know you should be saving your money, 
        but you see that Labelle, the hedgehog, is selling those designer shoes you've had your eyes on for $100.
        Do you...
    `,
    choices: [{
        id: 'buy',
        description: 'Buy the shoes',
        result: `
            You make an unwise purchase, but your look is on point. 
            Lose 100 bells but gain 10 friendship points. YOLO.
        `,
        bells: -100,
        friendship: 15
    }, {
        id: 'wait',
        description: 'Wait until next week',
        result: `
            You decide to wait to buy them. Lucky you! They're on sale now for 25 bells. 
            You buy them and look hella fresh. Lose 25 bells, gain 5 friendship points.
        `,
        bells: -25,
        friendship: 5
    }, {
        id: 'steal',
        description: 'Steal em!',
        result: `
            what is wrong with you??? You try to steal the shoes and instantly get caught. 
            You're prosecuted and have to pay a fine. Lose 45 bells. 
        `,
        bells: -45,
        friendship: 0
    }]
};

const quests = [fishing, camping, shopping];
export default quests;