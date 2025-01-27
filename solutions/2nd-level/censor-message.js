// A function that, given a full message and a list of words, returns a single string that represents a 'censored' version of the original message: all words from the list must be scrubbed out and replaced with five asterisks (*****).

function censorMessage(message, banList) {
    let rawWords = message.split(" ");
    let scrubbedWords = [];

    for (let word of rawWords) {
        let lowercaseWord = word.toLowerCase();
        if (banList.includes(lowercaseWord)) {
            scrubbedWords.push("*****");
        } else {
            scrubbedWords.push(word);
        }
    }

    scrubbedWords = scrubbedWords.join(" ");

    return scrubbedWords
}

console.log("\"don't mess with cats\", [\"mess\"] : ", censorMessage("don't mess with cats", ["mess"]), "should be don't ***** with cats");
console.log("\"Are you sure that this is safe\", [\"are\", \"is\"] : ", censorMessage("Are you sure that this is safe", ["are", "is"]), "should be ***** you sure that this ***** safe");
console.log("\"I CANNOT HELP YOU\", [\"can\", \"not\", \"help\", \"you\"] : ", censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"]), "should be I CANNOT ***** *****");