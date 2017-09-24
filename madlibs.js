ready=prompt("Author, tell filler to leave.");
// create arrays
var sentence = [];
var replacements = [];

// add sentence words
alert("Last word is punctuation mark ending sentence. Stop entering via '^'");

do {
	nextWord = prompt("Next word?");
	if (nextWord != "^") {
		sentence.push(nextWord);
		}
	}
while (nextWord != "^");
// End add sentence words

// show sentence
var sentenceString = sentence.join(' ');
alert("Your sentence is: "+sentenceString.toString());
// End show sentence

// define replacements
index=0;
do {
	replacements[index] = prompt("Next position?");
	if (replacements[index] != "^") {
		sentence[replacements[index]] = "["+prompt("Next part of speech?")+"]";
	}
	index++;
}
while (replacements[index-1] != "^");
// End define replacements

// Author checks sentence
var sentenceString = sentence.join(' ');
alert("Sentence is now: "+sentenceString.toString());

// switch places
alert(replacements[index-1]);
ready=prompt("Author, go get filler, then YOU leave.");

// enter replacement words
index=0;
do {
	sentence[replacements[index]]=prompt("Enter a "+sentence[replacements[index]]+".");
	index++;
}
while (replacements[index]!= "^");

ready=prompt("All replacements entered. Go get Author.");

sentenceString = sentence.join(' ');
alert(sentenceString.toString());