import './style.scss';

function main() {
  requestAnimationFrame(main);
}

requestAnimationFrame(main);

function getPermutations(input: string): string[] {
  const result: Set<string> = new Set();

  // Convert the input string to an array of characters
  const letters: string[] = input.split('');
  const len: number = letters.length;

  const isEven = (char: string): boolean => char.charCodeAt(0) % 2 === 0;

  // Helper function to check if letters have indexes 2 apart
  function isFarApart(word: string[]): boolean {
    const indexes = word.map((char) => letters.indexOf(char));
    const minIndex = Math.min(...indexes);
    const maxIndex = Math.max(...indexes);
    return maxIndex - minIndex > 3;
  }

  // Helper function to check for 3 even or 3 odd letters
  function isValid(word: string[]): boolean {
    if (isFarApart(word)) {
      return false;
    }

    const evens: number = word.filter(isEven).length;
    const odds: number = word.length - evens;
    return evens !== 3 && odds !== 3;
  }

  // Generate all possible combinations with repetitions
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      for (let k = 0; k < len; k++) {
        const arr: string[] = [letters[i], letters[j], letters[k]];
        const word: string = arr.sort().join('');
        if (isValid(arr)) {
          result.add(word);
        }
      }
    }
  }

  return Array.from(result);
}

// Example usage:
const input: string = 'abcdef';
const muts = getPermutations(input);

console.log(muts);

console.log(
  muts
    .map((value) => {
      const power = value.split('').reduce((acc, lt) => {
        return acc + input.indexOf(lt);
      }, 0);

      return {
        value,
        power,
        grade: Math.floor(Math.max(1, power / 3)),
      };
    })
    .slice()
    .sort((a, b) => {
      if (a.power === b.power) return 0;
      return a.power > b.power ? 1 : -1;
    })
);
