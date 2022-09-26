function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
const string = "Hello!";
let greeting;
function sayHiToHeadphonedRoommate(string){
    if (string === "Let's have dinner together!") {
        greeting = "I would love to!"
    } else if (string === string.toLowerCase()) {
        greeting = "I can't hear you!"
    }
    else if (string === string.toUpperCase()) {
        greeting = "YES INDEED!"
    }
    return greeting
}