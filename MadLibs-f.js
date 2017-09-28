var sentence = [];
var index = 0;
var replacements = [];
sentence.splice(-1,1);
sentenceString = sentence.join(' ');
alert(sentenceString.toString());

function populate(sarray,sprompt,index){
	do {
	sarray[index] = prompt(sprompt + index + ":");
	index++;
	}
	while(sarray[index - 1] != "^")
	return sarray;
}

function swap(sarray,rarray,sprompt,index){
for (index = 0; index < rarray.length - 1; index++){
	sarray[rarray[index]]= prompt(sprompt + sarray[rarray[index]] + ".");
}
	return sarray;
}

//Input the sentence
populate(sentence, "Word",0);

//Specify the replacements positions
populate(replacements, "Position",0);

//Specify parts of speech
swap(sentence,replacements,"Enter the PoS for ",0);

//Get the replacements
swap(sentence,replacements,"Enter a ",0);

