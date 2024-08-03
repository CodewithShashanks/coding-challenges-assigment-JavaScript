function reverseStringWithDelay(input) {
    setTimeout(() => {
        const reversed = input.split("").reverse().join("");
        console.log(`Reversed string: ${reversed}`);
    }, 2000);
}

// Example usage:
const inputString = "sllIKS WP";
reverseStringWithDelay(inputString);
