function printAlphabetDistributionOfInputText() {
    const distribution = parseInputTextByAlphabet();
    document.getElementById("distribution").innerHTML = distribution;
}

function parseInputTextByAlphabet() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz',
    alphabetLetters = alphabet.split(''),
    inputText = document.getElementById('textToParse').value,
    distribution = getRelativeDistributionOfEachLetterInText(alphabetLetters, inputText);
    return distribution;
}

function getRelativeDistributionOfEachLetterInText(alphabetLetters, inputText) {
    var distribution = '',
    countOfEachLetter = []; 
    countOfEachLetter = getCountOfEachLetterInText(alphabetLetters, inputText);
    const sumOfAllLetters = getSumOfNumbersInArray(countOfEachLetter);
    for (var i = 0; i < alphabetLetters.length; i++) {
        singleLetterDistribution = (countOfEachLetter[i] / sumOfAllLetters * 100).toFixed(2);
        distribution += alphabetLetters[i] + ': ' + singleLetterDistribution + '<br>';	
    }
    return distribution;
}

function getCountOfEachLetterInText(alphabetLetters, inputText) {
    var countOfEachLetter = [];
    for (var i = 0; i < alphabetLetters.length; i++) {
        var letter = alphabetLetters[i];
        countOfEachLetter.push(inputText.countOccurrenceOfSymbol(letter));
    }
    return countOfEachLetter;
}

String.prototype.countOccurrenceOfSymbol = function(symbol) { 
    return this.length - this.replace(new RegExp(symbol,"gi"), '').length;
}

function getSumOfNumbersInArray(array) {
    return array.reduce(function(a, b) { return a + b; }, 0);
}