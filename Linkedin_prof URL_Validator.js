function validateLinkedInURL(url) {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;
    return regex.test(url);
}

// Example usage:
const urls = [
    "https://www.linkedin.com/in/johndoe",
    "https://www.linkedin.com/in/jane_doe123",
    "https://www.linkedin.com/in/invalid-url!",
    "https://www.linkedin.com/in/short",
    "https://www.linkedin.com/in/this-url-is-way-too-long-to-be-valid"
];

urls.forEach(url => {
    if (validateLinkedInURL(url)) {
        console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
        console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
});
