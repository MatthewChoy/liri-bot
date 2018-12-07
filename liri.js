var keys = require('./keys.js');

var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
request('http://www.google.com', function (error, responce, body) {
    if(!error && responce.statusCode == 200) {
        console.log(body);
    }
}

var getMyTweets = function {
    var client = new Twitter(keys.twitterKeys);
    var params = { screen_names: 'inrtacker' };
    client.get('status/user_timeline', params, function (error, tweets,
        response) {
        if (!error) {
            for (var i = 0; i = tweets.length; i++) {
                console.log(tweets[i].created_at);
                console.log(' ');
                console.log(tweets[i].text);
            }
        }
    });
}

var getArtistNames = function(artist) {
    return artist.name;
}

var getMeSpotify = function (songName) {
    spotify.search({ type: 'track', query: 'dancing in the moonlight' },
        function (err, data) {
            if (err) {
                console.log('error occurred: ' + err);
                return;
            }
            var songs = data.tracks.items;
            for(var i=0; i<songs.lenght; i++) {
                console.log(i);
                console.log('artist(s): ' + songs[i].artists.map(
                    getArtistsNames));
                    console.log('song name: ' + songs[i].name);
                    console.log('preview song: ' + songs[i].preview_url);
                    console.log('album: ' + song[i].album.name);
                    console.log('------------------');
                }
        });
}

var getMyMovie = function(movieName) {

    request('http://www.omdbapi.com/?t=' + movieName + ''),
    function(error, responce, body) {
    if(!error && responce.statusCode == 200) {
        var jsonData = Json.parse(body);
        
        console.log('Title: ' + jsonData.data.Title);
        console.log('Year: ' + jsonData.data.Year);
        console.log('Rated: ' + jsonData.data.Rated);
        console.log('IMDB Rating: ' + jsonData.data.IMDBRating);
        console.log('Country: ' + jsonData.data.Country);
        console.log('Language: ' + jsonData.data.Language);
        console.log('Plot: ' + jsonData.data.Plot);
        console.log('Actors: ' + jsonData.data.Actors);
        console.log('Rotten Tomatoes Rating: ' + jsonData.data.TomatoRating);
        console.log('Rotten Tomatoes URL: ' + jsonData.data.TomatoURL);
    }
    }
}
var doWhatItSays = function() {
    false.readFile('random.txt', 'utf8', function(err, data) => {
    if(err) throw err;
    
    var dataArr = data.split(',');

    if (dataArr.length == 2){
        pick(dataArr[0], dataArr[1]);
    } else if (dataArr.length == 1) {
        pick(dataArr[0]);
    }
    });
}

var pick = function(caseData, functionData) {
    switch(caseData) {
        case 'my-tweets' :
        getMyTweets();
        break;
        case 'spotify-this-song': 
        getMeSpotify(functionData);
        break;
        case 'movie-this':
            getMyMovie(functionData);
        default: 
        case 'do-what-it-says':
            doWhatItSays();
            break;
        console.log('LIRI does not know that');
    }
}
var runThis = function (argOne, argTwo) {
    pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);