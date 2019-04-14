const initial = {
    products: 0
}
export default (state = initial, action) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCTS':
            return {
                products: [
                    {
                        name: 'Bulbasaur',
                        uri: 'https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png',
                        uri1: 'https://cdn.bulbagarden.net/upload/7/73/002Ivysaur.png',
                        uri2: 'https://cdn.bulbagarden.net/upload/a/ae/003Venusaur.png',
                        desc: 'Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I. It evolves into Ivysaur starting at level 16, which evolves into Venusaur starting at level 32. Bulbasaur is a small, quadruped Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On its back is a green plant bulb, which is grown from a seed planted there at birth. The bulb provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.',
                        price: '2000000',
                        id: 2
                    },
                    {
                        name: 'Charmander',
                        uri: 'https://cdn.bulbagarden.net/upload/7/73/004Charmander.png',
                        uri1: 'https://cdn.bulbagarden.net/upload/4/4a/005Charmeleon.png',
                        uri2: 'https://cdn.bulbagarden.net/upload/7/7e/006Charizard.png',
                        desc: 'Charmander (Japanese: ヒトカゲ Hitokage) is a Fire-type Pokémon introduced in Generation I. It evolves into Charmeleon starting at level 16, which evolves into Charizard starting at level 36. Charmander is a bipedal, reptilian Pokémon with a primarily orange body and blue eyes. Its underside from the chest down and the soles of its feet are cream-colored. It has two small fangs visible in its upper jaw and two smaller fangs in its lower jaw. A fire burns at the tip of this Pokémon slender tail and has blazed there since Charmanders birth. The flame can be used as an indication of Charmanders health and mood, burning brightly when the Pokémon is strong, weakly when it is exhausted, wavering when it is happy, and blazing when it is enraged. It is said that Charmander dies if its flame goes out. However, if the Pokémon is healthy, the flame will continue to burn even if it gets a bit wet and is said to steam in the rain.',
                        price: '2200000',
                        id: 1
                    }
                ]

            }

        default:
            return state;

    }
}
