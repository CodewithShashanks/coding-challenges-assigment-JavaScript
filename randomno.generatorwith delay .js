function generateRandomNumberWithDelay(delayInSeconds) {
    let remainingTime = delayInSeconds;

    const countdownInterval = setInterval(() => {
        if (remainingTime > 0) {
            console.log(`Time remaining: ${remainingTime} seconds`);
            remainingTime--;
        } else {
            clearInterval(countdownInterval);
            const randomNumber = Math.floor(Math.random() * 100); // Modify as needed
            console.log(`Random number generated: ${randomNumber}`);
        }
    }, 1000); // Update interval as needed (1 second)

    setTimeout(() => {
        clearInterval(countdownInterval);
        const randomNumber = Math.floor(Math.random() * 100); // Modify as needed
        console.log(`Random number generated: ${randomNumber}`);
    }, delayInSeconds * 1000);
}

// Example usage:
const delayInSeconds = 3;
generateRandomNumberWithDelay(delayInSeconds);
