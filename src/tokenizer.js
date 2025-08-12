import vocab from "../public/vocab.json";

let tokenMap = {};

export function tokenize(words) {
  const tokens = [];
  tokenMap = {};
  for (const word of words) {
    if (vocab[word]) {
      tokenMap[word] = vocab[word];
      tokens.push(vocab[word]);
    } else {
      tokens.push(encodeWithSubstrings(word));
    }
  }

  return tokens;
}
function encodeWithSubstrings(word) {
  const result = [];
  let i = 0;
  while (i < word.length) {
    let found = false;

    // Try longest possible substring from current position for (let word.length; j > i; j--) {
    for (let j = word.length; j > i; j--) {
      const sub = word.slice(i, j);

      if (vocab[sub]) {
        {
          tokenMap[sub] = vocab[sub];
          result.push(vocab[sub]);
        }
        i = j;
        found = true;
        break;
      }
    }

    // If no substring found, fallback to character-level

    if (!found) {
      const char = word[i];

      tokenMap.char = vocab[char];

      result.push(vocab[char] || "UNK:$(char)");

      i++;
    }
  }

  return result;
}

// function encodeWithSubstrings(word) {
//   const result = [];
//   let i = 0;
//   while (i < word.length) {
//     let found = false;

//     for (let j = word.length; j > i; j--) {
//       const sub = word.slice(i, j);

//       if (vocab[sub]) {
//         tokenMap[sub] = vocab[sub];
//         result.push(vocab[sub]);
//         i = j;
//         found = true;
//         break;
//       }
//     }

//     if (!found) {
//       const char = word[i];
//       tokenMap[char] = vocab[char];
//       result.push(vocab[char] || `<UNK:${char}>`);
//       i++;
//     }
//   }

//   return result;
// }

function buildReverseVocab(vocab) {
  const reverseVocab = {};
  for (const [key, value] of Object.entries(vocab)) {
    reverseVocab[value] = key;
  }
  return reverseVocab;
}

export function decodeTokens(tokenArray, vocab) {
  const reverseVocab = buildReverseVocab(vocab);
  const decodedWords = [];
  for (const token of tokenArray) {
    if (Array.isArray(token)) {
      // Substring-encoded word

      let word = "";

      for (const subToken of token) {
        word += reverseVocab[subToken] || "";
      }
      decodedWords.push(word);
    } else {
      // Direct vocab word

      decodedWords.push(reverseVocab[token] || "");
    }
  }

  return decodedWords.join(" ");
}

export function splitText(text) {
  return text.trim().match(/\w+|[^\s\w]/g) || [];
}

export function getTokenMap() {
  return tokenMap;
}
