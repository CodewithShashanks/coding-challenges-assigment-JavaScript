// 3. Build a feature for Store's Inventory.
// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.

// Sample inventory with prices in USD
const inventory = {
    item1: 50, // Price in USD
    item2: 30,
    item3: 75,
    // Add more items as needed
};

// Exchange rate: 1 USD = 80 INR
const exchangeRate = 80;

// Convert prices to INR using map
const convertedInventory = Object.keys(inventory).reduce((result, item) => {
    const priceInUSD = inventory[item];
    const priceInINR = priceInUSD * exchangeRate;
    result[item] = priceInINR;
    return result;
}, {});

// Display the converted inventory
console.log("Converted Inventory (INR):", convertedInventory);
