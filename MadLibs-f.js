// initialize variables
var sentence = []; // [] means array
var index = 0;
var replacements = [];

// Main Code

	// Input the sentence (author)
	sentence=populate(sentence, "Word "); // populate is the name of the function we are calling

	// Specify the replacements positions (author)
	replacements=populate(replacements, "Position ");

	// Specify parts of speech (author)
	sentence=swap(sentence,replacements,"Enter the PoS for ",0);

	// Get the replacements from the filler
	sentence=swap(sentence,replacements,"Enter a ",0);

	// Output the sentence without the ^ or commas
	sentence.splice(-1,1);
	sentenceString = sentence.join(' ');
	alert(sentenceString.toString());

// Define Functions

// Build Sentence and Replacements Arrays
function populate(myArray,sprompt){
	index=0;
	do {
	myArray[index] = prompt(sprompt + index + ":");
	index++;
	}
	while(myArray[index - 1] != "^")
	return myArray;
}

// Swap itemes in Sentence Array for Parts of Speech, New Words
function swap(sarray,rarray,sprompt,index){
	index=0;
	for (index = 0; index < rarray.length - 1; index++){
		sarray[rarray[index]]= prompt(sprompt + sarray[rarray[index]] + ".");
	}
	return sarray;
}
