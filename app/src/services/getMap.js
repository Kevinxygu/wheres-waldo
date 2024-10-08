// ANSWERS. NEEDS TO BE RE-FACTORED SOON.

// Add in from .env
const waldoAnswers = JSON.parse(import.meta.env.VITE_WALDO_ANSWERS);

export const getRandomImage = (difficulty) => {
    // try parsing from a string instead
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