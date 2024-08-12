// ANSWERS. NEEDS TO BE RE-FACTORED SOON.
const waldoAnswers = {
    "Maps": [
        {"Easy":
            [
                {
                    "filename": "airport.jpg",
                    "width": 4360,
                    "height": 2762,
                    "waldoX": 252,
                    "waldoY": 206,
                    "odlawX": 89,
                    "odlawY": 385
                },
                {
                    "filename": "beach.jpeg",
                    "width": 4360,
                    "height": 2762,
                    "waldoX": 556,
                    "waldoY": 229,
                    "odlawX": 98,
                    "odlawY": 208
                },
                {
                    "filename": "cake-factory.png",
                    "width": 3000,
                    "height": 1935,
                    "waldoX": 446,
                    "waldoY": 40,
                    "odlawX": 206,
                    "odlawY": 340
                },
                {
                    "filename": "museum.jpg",
                    "width": 3000,
                    "height": 1935,
                    "waldoX": 805,
                    "waldoY": 388,
                    "odlawX": 129,
                    "odlawY": 363
                },
                // {
                //     "filename": "ocean.png",
                //     "width": 3000,
                //     "height": 1935,
                //     "waldoX": 430,
                //     "waldoY": 148,
                //     "odlawX": 206,
                //     "odlawY": 326
                // }
                {
                    "filename": "racetrack.jpeg",
                    "width": 3000,
                    "height": 1935,
                    "waldoX": 253,
                    "waldoY": 196,
                    "odlawX": 540,
                    "odlawY": 373
                },
                {
                    "filename": "some-place.jpg",
                    "width": 3000,
                    "height": 1935,
                    "waldoX": 722,
                    "waldoY": 56,
                    "odlawX": 49,
                    "odlawY": 428
                },
                // {
                //     "filename": "swimmers.jpeg",
                //     "width": 3000,
                //     "height": 1935,
                //     "waldoX": 881,
                //     "waldoY": 561,
                //     "odlawX": 206,
                //     "odlawY": 326
                // }
    
    
    
                // {
                //     "filename": "castle-raid.jpg",
                //     "width": 3000,
                //     "height": 1935,
                //     "waldoX": 620,
                //     "waldoY": 217,
                //     "odlawX": -1,
                //     "odlawY": -1
                // }
            ]

        },
        {"Medium":
            [
                {
                    "filename": "hollywood.jpeg",
                    "width": 3000,
                    "height": 1935,
                    "waldoX": 631,
                    "waldoY": 254,
                    "odlawX": 499,
                    "odlawY": 464
                },
                {
                    "filename": "gold-rush.jpeg",
                    "width": 3000,
                    "height": 1935,
                    "waldoX": 169,
                    "waldoY": 253,
                    "odlawX": 341,
                    "odlawY": 76
                },
                // {
                //     "filename": "metropolis.png",
                //     "width": 3000,
                //     "height": 1935,
                //     "waldoX": 97,
                //     "waldoY": 462,
                //     "odlawX": 206,
                //     "odlawY": 326
                // }
                {
                    "filename": "ski-mountain.jpeg",
                    "width": 3000,
                    "height": 1935,
                    "waldoX": 769,
                    "waldoY": 424,
                    "odlawX": 287,
                    "odlawY": 368
                },
                {
                    "filename": "town-square.jpeg",
                    "width": 3000,
                    "height": 1935,
                    "waldoX": 388,
                    "waldoY": 423,
                    "odlawX": 532,
                    "odlawY": 538
                },
                {
                    "filename": "yacht.jpg",
                    "width": 3000,
                    "height": 1935,
                    "waldoX": 788,
                    "waldoY": 440,
                    "odlawX": 327,
                    "odlawY": 422
                }
    
    
    
            
            ]
        },
        {"Hard":
        [
            {
                "filename": "fruit-mountain.jpeg",
                "width": 3000,
                "height": 1933,
                "waldoX": 803,
                "waldoY": 389,
                "odlawX": 594,
                "odlawY": 331
            },
            {
                "filename": "boat.jpg",
                "width": 3000,
                "height": 1935,
                "waldoX": 155,
                "waldoY": 406,
                "odlawX": 866,
                "odlawY": 216
            },
            {
                "filename": "medieval-castle.png",
                "width": 3000,
                "height": 1935,
                "waldoX": 564,
                "waldoY": 360,
                "odlawX": 206,
                "odlawY": 326
            },
            {
                "filename": "mess-hall.jpeg",
                "width": 3000,
                "height": 1935,
                "waldoX": 512,
                "waldoY": 207,
                "odlawX": 361,
                "odlawY": 346
            },
            {
                "filename": "space-station.jpeg",
                "width": 3000,
                "height": 1935,
                "waldoX": 364,
                "waldoY": 375,
                "odlawX": 66,
                "odlawY": 410
            }


        ]
    }
    ]
}

export const getRandomImage = (difficulty) => {
    const maps = waldoAnswers.Maps;
    let imagesArray;

    switch (difficulty) {
        case 'easy':
            imagesArray = maps[0].Easy; // These are all the easy maps
            break;
        case 'medium':
            imagesArray = maps[1].Medium; // medium maps
            break;
        case 'hard':
            imagesArray = maps[2].Hard; // hard maps
            break;
        default:
            throw new Error('Invalid difficulty level'); // Throw an error if the difficulty is invalid
    }

    // Get a random image from the imagesArray i set above
    const randomIndex = Math.floor(Math.random() * imagesArray.length);
    return imagesArray[randomIndex];
}