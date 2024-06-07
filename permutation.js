// Function to generate all combinations of a given character array
function getCombinations(chars) {
    const result = [];
    const f = (prefix, chars) => {
        for (let i = 0; i < chars.length; i++) {
            result.push(prefix + chars[i]);
            f(prefix + chars[i], chars.slice(i + 1));
        }
    };
    f('', chars);
    return result;
}

// Function to generate all permutations of a given word
function permute(word) {
    if (word.length < 2) return [word];

    const arrperm = [];
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const remainingChars = word.slice(0, i) + word.slice(i + 1);
        for (const permutation of permute(remainingChars)) {
            arrperm.push(char + permutation);
        }
    }
    return arrperm;
}

// Function to generate all permutations of all combinations of a given word
function generatePermutations(word) {
    const chars = word.toUpperCase().split('');
    const combinations = getCombinations(chars);
    const permutations = new Set();

    for (const combination of combinations) {
        const perms = permute(combination);
        for (const perm of perms) {
            permutations.add(perm);
        }
    }
    return Array.from(permutations);
}

// Function to check if a word is in the dictionary
function checkDictionary(word) {
    const perms = generatePermutations(word);
    const validWords = perms.filter(search);
    return validWords;
}

// Function to check if a word starts with a given prefix
function wordStarts(word, start) {
    return word.startsWith(start);
}

// Function to check if a word ends with a given suffix
function wordEnds(word, end) {
    return word.endsWith(end);
}

// Function to check if a word meets length constraints
function wordLength(word, length, minLength) {
    return (length === 0 && minLength === 0) || word.length === length || word.length >= minLength;
}

// Function to check if a word contains given characters
function wordContains(word, contains) {
    if (!contains) return true;

    for (let i = 0; i <= word.length - contains.length; i++) {
        if (contains.split('').every((char, index) => word[i + index] === char || char === '_' || char === '?')) {
            return true;
        }
    }
    return false;
}

// Function to apply constraints to the list of valid words
function applyConstraints(word, length, minLength, start, end, contains) {
    const validWords = checkDictionary(word);
    return validWords.filter(w => 
        wordStarts(w, start) && wordEnds(w, end) && wordLength(w, length, minLength) && wordContains(w, contains)
    );
}

// Function to display the results
function show() {
    const word = document.getElementById("word").value;
    const length = Number(document.getElementById("word_len").value);
    const minLength = Number(document.getElementById("word_mlen").value);
    const start = document.getElementById("word_start").value;
    const end = document.getElementById("word_end").value;
    const contains = document.getElementById("word_cont").value;
    
    const results = applyConstraints(word, length, minLength, start, end, contains);
    
    const outputElement = document.getElementById("two-letter");
    outputElement.innerHTML = results.length > 0 ? 
        results.map(w => `<div class="word_out">${w}</div>`).join('') : 
        '<div class="word_out">No word found</div>';
}