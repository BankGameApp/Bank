export const capitalizeText = (text) => {
  const words = text.split(' ');
  const capitalizedWords = words.map(word => {
    const firstChar = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return firstChar + restOfWord;
  });
  return capitalizedWords.join(' ');
}
