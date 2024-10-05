function countWords(sentence) {
    let wordCount = 0;
    let currentWord = "";
  
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] !== " ") {
        currentWord += sentence[i];
      } else if (currentWord !== "") {
        wordCount++;
        currentWord = "";
      }
    }
  
    if (currentWord !== "") {
      wordCount++;
    }
  
    return wordCount;
  }
  
  // Example usage:
  let sentence = "Hello   world, this is a test sentence.";
  console.log("Number of words:", countWords(sentence));
