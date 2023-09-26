export const extractNumbers = (sentence) => {
    // Define a regular expression pattern for matching numbers
    const pattern = /\d+(\.\d+)?/g; // This pattern matches integers and decimals
  
    // Use the match() function to extract all occurrences of the pattern from the sentence
    const numbersArray = sentence.match(pattern);
  
    // Convert the extracted strings to numerical values (if needed)
    const numericalValues = numbersArray.map(number => {
        return number.includes('.') ? parseFloat(number) : parseInt(number);
    });
  
    return numericalValues;
}