function validateURL(input) {
    const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)*[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?(\/[a-zA-Z0-9-]*)?$/;

    if (urlRegex.test(input)) {
        console.log("Valid URL!");
    } else {
        console.log("Invalid URL.");
    }
}

// Example usage:
const userInput = "https://www.example.com";
validateURL(userInput);
