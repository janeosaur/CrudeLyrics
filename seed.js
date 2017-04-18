var db = require('./models');

var songsList = [];
songsList.push({
        song: "I feel it coming",
        artistName: "The Weeknd",
        releaseDate: 2016,
        genre: "r&b",
        lyrics: "Yeah, uh Tell me what you really like Baby I can take my time\
              We don't ever have to fight\
              Just take it step-by-step\
              I can see it in your eyes\
              'Cause they never tell me lies\
              I can feel that body shake\
              And the heat between your legs\
              You've been scared of love and what it did to you\
              You don't have to run, I know what you've been through\
              Just a simple touch and it can set you free\
              We don't have to rush when you're alone with me\
              I feel it coming, I feel it coming, babe\
              I feel it coming, I feel it coming, babe\
              I feel it coming, I feel it coming, babe\
              I feel it coming, I feel it coming, babe\
              You are not the single type\
              So baby, this the perfect time\
              I'm just trying to get you high\
              And faded off this touch\
              You don't need a lonely night\
              So baby, I can make it right\
              You just got to let me try\
              To give you what you want\
              You've been scared of love and what it did to you\
              You don't have to run, I know what you've been through\
              Just a simple touch and it can set you free\
              We don't have to rush when you're alone with me\
              I feel it coming, I feel it coming, babe\
              I feel it coming, I feel it coming, babe\
              I feel it coming, I feel it coming, babe\
              I feel it coming, I feel it coming, babe\
              I feel it coming, I feel it coming, babe\
              I feel it coming, I feel it coming, babe\
              I feel it coming, I feel it coming, babe\
              I feel it coming, I feel it coming, babe\
              You've been scared of love and what it did to you\
              You don't have to run, I know what you've been through\
              Just a simple touch and it can set you free\
              We don't have to rush when you're alone with me\
              I feel it coming, I feel it coming, babe\
              I feel it coming, I feel it coming, babe (I know what you feel right now)\
              I feel it coming, I feel it coming, babe\
              I feel it coming, I feel it coming, babe (I know what you feel right now)\
              I feel it coming, I feel it coming, babe\
              I feel it coming, I feel it coming, babe (I know what you feel right now)\
              I feel it coming, I feel it coming, babe\
              I feel it coming, I feel it coming, babe\
              I feel it coming, babe\
              I feel it coming, babe\
              I feel it coming, babe\
              I feel it coming, babe"
      });
songsList.push({
        song: "Company",
        artistName: "Tinashe",
        releaseDate: 2016,
        genre: "r&b",
        lyrics: "Ay, ay, ay\
              Uh, ay what\
              I don't need the lovin' nope\
              So don't make this somethin'\
              See, I'm nothin' like a girlfriend, no\
              I'm not like someone I'm supposed to be\
              And I just want some company, company\
              And I just need some company, company\
              I just need some company, company\
              I just need some company, company\
              Hey, yeah, shout out to my booty\
              I'm straight up with this one boy, I know it\
              I call it when I stop feelin' alone\
              I want it and sometimes, see, I don't\
              I don't need no problems with nobody\
              I know how to get that, I don't follow me\
              I just need a moment, fuck and leave\
              You could say you had it all, no strings\
              I don't need the lovin' nope\
              So don't make this somethin'\
              See, I'm nothin' like a girlfriend, no\
              I'm not like someone I'm supposed to be\
              And I just want some company, company\
              And I just need some company, company\
              I just need some company, company\
              I just need some company, company\
              Companions, but we keep it even lower\
              I never ever been the type to ever just show up\
              And you can't ever be the type of guy to just show up\
              Treat it like a meet and greet and then we go up\
              I don't need no problems with nobody\
              I know how to get that, unfollow me\
              I just need a moment, fuck and leave\
              You could say you had it all, no strings\
              Had it all\
              You could say you had it all\
              You could say you had it all\
              You could say you had it all\
              You could say you had it all\
              You could say you had it all\
              You could say you had it all\
              All babe\
              You're just my little side thing\
              Just a little sweet fling\
              Baby you don't have to buy things\
              I just want the high, supply me\
              I don't need the lovin' nope\
              So don't make this somethin'\
              See, I'm nothin' like a girlfriend, no\
              I'm not like someone I'm supposed to be\
              And I just want some company, company\
              And I just need some company, company\
              I just need some company, company\
              I just need some company, company\
              Da, da, da, I just need\
              I just need some company, company\
              I just need some company\
              I"
      });
songsList.push({
        song: "Gangsta",
        artistName: "Kehlani",
        releaseDate: 2016,
        genre: "r&b",
        lyrics: "Lehani gangsta\
              need a gangsta\
              To love me better\
              Than all the others do\
              To always forgive me\
              Ride or die with me\
              That's just what gangsters do\
              I'm fucked up, I'm black and blue\
              I'm built for it, all the abuse\
              I got secrets, that nobody, nobody knows\
              I'm good on, that pussy shit\
              I don't want, what I can get\
              I want someone, with secrets\
              That nobody, nobody, nobody knows\
              I need a gangsta\
              To love me better\
              Than all the others do\
              To always forgive me\
              Ride or die with me\
              That's just what gangsters do\
              My freakness is on the loose\
              And running, all over you\
              Please take me to places, that nobody, nobody knows\
              You got me hooked up on the feeling\
              You got me hanging from the ceiling\
              Got me up so high I'm barely breathing\
              So don't let me, don't let me, don’t let me, don't let me go\
              I need a gangsta\
              To love me better\
              Than all the others do\
              To always forgive me\
              Ride or die with me\
              That's just what gangsters do"
      });
songsList.push({
        song: "With you",
        artistName: "Feel Kim",
        releaseDate: 2017,
        genre: "kpop",
        lyrics: "I’m a bit scared\
              Life is like going on a trip\
              Without knowing where to go\
              Though I’m walking alone\
              My heart is always thinking of you\
              Because even on the vanishing stars\
              Even on this lonely path\
              You are here\
              I’m just trying to live\
              I’m trying to believe more\
              Maybe a different tomorrow is waiting for us\
              At the end of a long day\
              On top of that faraway road\
              You’re already like a miracle\
              Making me smile\
              I need to get up again\
              Life is about not kneeling before adversity\
              When the tears you held back suddenly spill out\
              Think of me\
              On days it’s hard to endure\
              Even on lonely nights\
              I’m by your side\
              I’m just trying to live\
              I’m trying to believe more\
              Maybe a different tomorrow is waiting for us\
              At the end of a long day\
              On top of that faraway road\
              You’re already like a miracle\
              Making me smile\
              I’m just trying to live\
              I trying to dream again\
              Until the painful days of the past\
              Become days I long for\
              On the corner of that vanishing star\
              Like a miracle, we are in love with each other"
      });
songsList.push({
        song: "Someday",
        artistName: "BtoB",
        releaseDate: 2017,
        genre: "kpop",
        lyrics: [db.Lyric.schema]
      });
songsList.push({
        song: "I'll Be Yours",
        artistName: "Girls Day",
        releaseDate: 2017,
        genre: "kpop",
        lyrics: [db.Lyric.schema]
      });
songsList.push({
        song: "Falling",
        artistName: "Alesso",
        releaseDate: 2016,
        genre: "edm",
        lyrics: [db.Lyric.schema]
      });
songsList.push({
        song: "Scared to be Lonely",
        artistName: "Dua Lipa",
        releaseDate: 2017,
        genre: "edm",
        lyrics: [db.Lyric.schema]
      });
songsList.push({
        song: "Party til the Daylight",
        artistName: "Hardwell",
        releaseDate: 2017,
        genre: "edm",
        lyrics: [db.Lyric.schema]
      });

db.Song.remove({}, function(err, songs) {
  db.Song.create(songsList, function(err, songs) {
    console.log('all songs', songs);

  })
})
