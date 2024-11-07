// Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

const countWordOccurrences = (str:string, word:string):number =>{
    const words = str.toLowerCase().split(/\W+/);
    const targetword = word.toLowerCase();

    let count = 0;

    for(let i = 0; i<words.length;i++){
        if(targetword === words[i])
            count ++;

    };
    return count;
}

