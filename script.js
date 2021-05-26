// Unsplash API
const count = 10;
const apiKey = getApiKey();
const apiUrl = `https://api.unsplash.com/photos/random/?count=${count}&client_id=${apiKey}`;

// Get Photos from Unsplash API
const getPhotos = async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch Error
    }
};

// On Load
getPhotos();
