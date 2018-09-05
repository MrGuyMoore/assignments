var lyrics = ["This", "hit", "that", "ice", "cold", "Michelle", "Pfeiffer", "that", "white", "gold", "This", "one", "for", "them",
    "hood", "girls", "Them", "good", "girls", "straight", "masterpieces", "Stylin'", "whilen'", "livin'", "it", "up", "in",
    "the", "city", "Got", "Chucks", "on", "with", "Saint", "Laurent", "Gotta", "kiss", "myself", "I'm", "so", "pretty"];

function songPrint() {
    return lyrics.join(" ")
}
console.log(songPrint());

function songBackwards() {
    return lyrics.reverse()
}
console.log(songBackwards());

function songSkip(skipping) {
    var lyrics = ["This", "hit", "that", "ice", "cold", "Michelle", "Pfeiffer", "that", "white", "gold", "This", "one", "for", "them",
        "hood", "girls", "Them", "good", "girls", "straight", "masterpieces", "Stylin'", "whilen'", "livin'", "it", "up", "in",
        "the", "city", "Got", "Chucks", "on", "with", "Saint", "Laurent", "Gotta", "kiss", "myself", "I'm", "so", "pretty"];

    for (var i = 0; i < lyrics.length; i + 2);

}


function switchLyrics(lyrics) {
    var lyrcisString = '';
    for (var i = 0; i < lyrics.length - 1; i += 2){
        lyricsString += lyrics[i] + ' ' + lyrics[i - 1] + '';
    }

}