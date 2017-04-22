var db = require('./models');


// make lyrics object that looks like the model

var songsList = [];
songsList.push({
        name: "I feel it coming",
        artistName: "The Weeknd",
        releaseDate: 2016,
        genre: "rnb",
        lyrics: {
          name: "I feel it coming",
          verse: "I feel it coming, I feel it coming, babe",
          language: 'English',
          writers: 'Addy'
        }
      });
songsList.push({
        name: "Company",
        artistName: "Tinashe",
        releaseDate: 2016,
        genre: "rnb",
        lyrics: {
          name: "Company",
          verse: "And I just want some company, company",
          language: 'English',
          writers: 'Addy'
        }
      });
songsList.push({
        name: "Gangsta",
        artistName: "Kehlani",
        releaseDate: 2016,
        genre: "rnb",
        lyrics: {
          name: "Gangsta",
          verse: "I need a gangsta",
          language: 'English',
          writers: 'Addy'
        }
      });
songsList.push({
        name: "With you",
        artistName: "Feel Kim",
        releaseDate: 2017,
        genre: "kpop",
        lyrics: {
          name: "With you",
          verse: "I’m just trying to live. I’m trying to believe more",
          language: 'English',
          writers: 'Addy'
        }
      });
songsList.push({
        name: "Someday",
        artistName: "BtoB",
        releaseDate: 2017,
        genre: "kpop",
        lyrics: {
          name: "Someday",
          verse: "Let’s meet again, I’ll wait for us. Let’s be more happy, more calm",
          language: 'English',
          writers: 'Addy'
        }
      });

 songsList.push({
        name: "I'll be yours",
        artistName: "Girls Day",
        releaseDate: 2017,
        genre: "kpop",
        lyrics: {
          name: "I'll be yours",
          verse: "I’ll tell you that I’ll be yours",
          language: 'English',
          writers: 'Addy'
        }
      });
songsList.push({
        name: "Falling",
        artistName: "Alesso",
        releaseDate: 2016,
        genre: "edm",
        lyrics: {
          name: "Falling",
          verse: "Feeling like I'm love blind, taking over my mind. Look at me I'm falling, falling",
          language: 'English',
          writers: 'Addy'
        }
      });
songsList.push({
        name: "Scared to be Lonely",
        artistName: "Dua Lipa",
        releaseDate: 2017,
        genre: "edm",
        lyrics: {
          name: "Scared to be Lonely",
          verse: "Is the only reason you're holding me tonight. 'Cause we're scared to be lonely?",
          language: 'English',
          writers: 'Addy'
        }
      });
songsList.push({
        name: "Party til the Daylight",
        artistName: "Hardwell",
        releaseDate: 2017,
        genre: "edm",
        lyrics: {
          name: "Party til the Daylight",
          verse: "Party till the daylight",
          language: 'English',
          writers: 'Addy'
        }
      });
songsList.push({
        name: "Fake Love",
        artistName: "Drake",
        releaseDate: 2017,
        genre: "hiphop",
        lyrics: {
          name: "Fake Love",
          verse: "I got fake people showin' fake love to me",
          language: 'English',
          writers: 'Jane'
        }
      });
songsList.push({
        name: "Selfish",
        artistName: "Future feat. Rihanna",
        releaseDate: 2017,
        genre: "hiphop",
        lyrics: {
          name: "Selfish",
          verse: "Let's not be alone",
          language: 'English',
          writers: 'Jane'
        }
      });
songsList.push({
        name: "Bad and Boujee",
        artistName: "Migos feat. Lil Uzi Vert",
        releaseDate: 2017,
        genre: "hiphop",
        lyrics: {
          name: "Bad and Boujee",
          verse: "Yeah yea yea yea",
          language: 'English',
          writers: 'Jane'
        }
      });

var lyricsList = [];
lyricsList.push({
  name: "I feel it coming",
  verse: "Yeah, uh Tell me what you really like Baby I can take my time\
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
          I feel it coming, babe",
  language: 'English',
  writers: 'Addy'
});
lyricsList.push({
  name: "Company",
  verse: "Ay, ay, ay\
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
          I",
  language: 'English',
  writers: 'Addy'
});

lyricsList.push({
  name: "Gangsta",
  verse: "Lehani gangsta\
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
          That's just what gangsters do",
  language: 'English',
  writers: 'Addy'
});
lyricsList.push({
  name: "With you",
  verse: "I’m a bit scared\
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
          Like a miracle, we are in love with each other",
  language: 'English',
  writers: 'Addy'
});
lyricsList.push({
  name: "Someday",
  verse: "Your hands that touched me\
          Your voice that called me It’s still so clear\
          it still lingers around me\
          Why didn’t I try my best\
          When you were here?\
          If I was stronger\
          I would’ve held onto you till the end\
          Even when I’m doing well, without much thought\
          The forgotten memories come back as a dilemma\
          Me with you and me without you\
          Are two entirely different people, just know that\
          All these illusions make the musty air thicker\
          First time first love it was really good for the first time\
          But it became a mess, as if we were at war\
          But some day\
          Some day, let’s meet again on a better day\
          Let’s be more happy, more cool\
          Like the ocean with waves\
          Let’s meet again, I’ll wait for us\
          Let’s be more happy, more calm\
          Some day, under the heart fluttering sunlight\
          On the day I let you go\
          Because of my foolishness, I blamed you\
          I resented you and hated you\
          Because it hurt so much as if I was being ripped apart\
          I erased you now I know I can’t turn things around now\
          I was a fool who didn’t know – When I’m not the me\
          of the young days – When I become stronger\
          If only I could hold your hand again, please\
          Some day, let’s meet again on a better day\
          Let’s be more happy, more cool\
          Like the ocean with waves\
          Let’s meet again, I’ll wait for us\
          Let’s be more happy, more calm\
          Some day, under the heart fluttering sunlight\
          I’ll be honest, I really regret it\
          I only had to say one thing, I’m sorry\
          I’ll be honest, I admit it was my fault\
          Because of me, we split apart\
          Now I’ll tell you, I’m truly sorry\
          I pray that we can see each other again\
          I pray for you every night and day\
          Hoping to see you face to face again someday\
          Some day, let’s meet again on a better day\
          Let’s be more happy, more cool\
          Like the ocean with waves\
          Let’s meet again, I’ll wait for us\
          Let’s be more happy, more calm\
          Some day, under the heart fluttering sunlight",
  language: 'English',
  writers: 'Addy'
});
lyricsList.push({
  name: "I'll be yours",
  verse: "Whatchu doing? I’ll be yours\
          Baby I’ll be yours\
          You want to have me? I’ll be yours\
          Maybe I’ll be yours\
          Wait a minute! I’ll be yours\
          Baby I’ll be yours\
          Sweeter than the honey\
          Falling from your eyes\
          I’ll tell you that I’ll be yours\
          ooh wee baby You’d exclaim\
          Sparkling Me\
          Like a popping champagne\
          Sometimes it’s nice to be chic\
          And softly\
          I flaunt my attractiveness\
          Hurry and close your eyes\
          Roll the dice\
          Wherever is okay\
          Because you’ll end up coming to me whoo\
          Oh clear your thoughts\
          Throw aside how awkward you feel\
          Be a man and tell me how you really feel\
          Whatchu doing? I’ll be yours\
          Baby I’ll be yours\
          You want to have me? I’ll be yours\
          Maybe I’ll be yours\
          Wait a minute! I’ll be yours\
          Baby I’ll be yours\
          Sweeter than the honey\
          Falling from your eyes\
          I’ll tell you that I’ll be yours\
          Come On Baby\
          Come to me a little closer\
          I’ll tell you Boy to have everything about me\
          I know that you won’t be opposed to it\
          right right\
          Fall for me inside\
          Cast a spell up and down\
          A night to melt away\
          1, 2 step 1, 1, 2 step\
          Now blow out the candles and\
          Make a wish\
          baby it’s lingering at the tip of our nose\
          Flower scent, I’ll tickle you just like it does\
          So you won’t forget me wherever you are\
          baby like the noise lingering at our ears\
          Will you follow my voice?\
          Feel so good Oh yeah-\
          Whatchu doing? I’ll be yours\
          Baby I’ll be yours\
          You want to have me? I’ll be yours\
          Maybe I’ll be yours\
          Wait a minute! I’ll be yours\
          Baby I’ll be yours\
          Poke it and take it\
          To your lips\
          Tell me whatchu doing? I’ll be yours",
  language: 'English',
  writers: 'Addy'
});

lyricsList.push({
  name: "Falling",
  verse: "Right here, right now, it's all we need\
          Relax your mind and set it free\
          Be all you got, be all I see\
          The way you move, the way you feel\
          Look at me I'm falling, falling\
          Feeling like I'm love blind, taking over my mind\
          Look at me I'm falling, falling\
          Feeling like I'm love blind, taking over my mind\
          Look at me I'm falling, falling\
          Feeling like I'm love blind, taking over my mind\
          Look at me I'm falling, falling\
          Feeling like I'm love blind, taking over my mind\
          Look at me I'm falling, falling\
          Feeling like I'm love blind, taking over my mind\
          Look at me I'm falling, falling\
          Feeling like I'm love blind, taking over my mind\
          Look at me I'm\
          Right here, right now it's all we need\
          Relax your mind and set it free\
          Be all you got, be all I see\
          The way you move, the way you feel\
          Look at me I'm falling, falling\
          Feeling like I'm love blind, taking over my mind\
          Look at me I'm falling, falling\
          Feeling like I'm love blind, taking over my mind\
          Look at me I'm falling, falling\
          Feeling like I'm love blind, taking over my mind\
          Look at me I'm falling, falling\
          Feeling like I'm love blind, taking over my mind\
          Look at me I'm fall\
          Look at me I'm falling, falling\
          Feeling like I'm love blind, taking over my mind\
          Look at me I'm falling, falling\
          Feeling like I'm love blind, taking over my mind\
          Look at me I'm falling, falling\
          Feeling like I'm love blind, taking over my mind\
          Look at me I'm falling, falling\
          Feeling like I'm love blind, taking over my mind\
          Look at me I'm fall\
          Look at me I'm fall\
          Look at me I'm fall",
  language: 'English',
  writers: 'Addy'
});

lyricsList.push({
  name: "Scared to be Lonely",
  verse: "It was great at the very start\
          Hands on each other\
          Couldn't stand to be far apart\
          Closer the better\
          Now we're picking fights\
          And slamming doors\
          Magnifying all our flaws\
          And I wonder why\
          Wonder what for\
          Why we keep coming back for more\
          Is it just our bodies?\
          Are we both losing our minds?\
          Is the only reason you're holding me tonight\
          'Cause we're scared to be lonely?\
          Do we need somebody\
          Just to feel like we're alright?\
          Is the only reason you're holding me tonight\
          'Cause we're scared to be lonely?\
          Too much time, losing track of us\
          Where was the real?\
          Undefined, spiraling out of touch\
          Forgot how it feels\
          All the messed up fights\
          And slamming doors\
          Magnifying all our flaws\
          And I wonder why\
          Wonder what for\
          It's like we keep coming back for more\
          Is it just our bodies?\
          Are we both losing our minds?\
          Is the only reason you're holding me tonight\
          'Cause we're scared to be lonely?\
          Do we need somebody\
          Just to feel like we're alright?\
          Is the only reason you're holding me tonight\
          'Cause we're scared to be lonely?\
          Scared to be lonely\
          Even when we know it's wrong\
          Been somebody better for us all along\
          Tell me, how can we keep holding on?\
          Holding on tonight\
          'Cause we're scared to be lonely?\
          Even when we know it's wrong\
          Been somebody better for us all along\
          Tell me, how can we keep holding on?\
          Holding on tonight\
          'Cause we're scared to be lonely?\
          Is it just our bodies?\
          Are we both losing our minds?\
          Is the only reason you're holding me tonight\
          'Cause we're scared to be lonely?\
          Scared to be lonely\
          Scared to be lonely\
          Scared to be lonely\
          Eh, eh, scared to be lonely",

  language: 'English',
  writers: 'Addy'
});
lyricsList.push({
  name: "Party til the Daylight",
  verse: "Party till the daylight\
          Party till the daylight\
          Light, light, light, light\
          Party till the daylight\
          Party till the daylight\
          Party till the daylight\
          Light, light, light, light, light\
          Party till the day\
          Party till the daylight\
          Party till the daylight\
          Party till the daylight\
          Light, light, light, light\
          Party till the daylight\
          Party till the daylight\
          Party till the daylight\
          Light, light, light, light, light\
          Party till the day",
  language: 'English',
  writers: 'Addy'
});

lyricsList.push({
  name: "Fake Love",
  verse: "I've been down so long it look like up to me\
          They look up to me\
          I got fake people showin' fake love to me\
          Straight up to my face, straight up to my face\
          I've been down so long it look like up to me\
          They look up to me\
          I got fake people showin' fake love to me\
          Straight up to my face, straight up to my face\
          Somethin' ain't right when we talkin'\
          Somethin' ain't right when we talkin'\
          Look like you hidin' your problems\
          Really you never was solid\
          No you can't son me, you won't never get to run me\
          Just when shit look, outta reach, I reach back like one, three\
          Like one, three, yeah\
          That's when they smile in my face\
          Whole time they wanna take my place\
          Whole time they wanna take my place\
          Whole time they wanna take my place\
          Yeah, I know they wanna take my place\
          I can tell that love is fake\
          I don't trust a word you say\
          How you wanna click up after your mistakes?\
          Look you in the face and it's just not the same\
          I've been down so long it look like up to me\
          They look up to me\
          I got fake people showin' fake love to me\
          Straight up to my face, straight up to my face\
          I've been down so long it look like up to me\
          They look up to me\
          I got fake people showin' fake love to me\
          Straight up to my face, straight up to my face\
          Yeah, straight up to my face, tryna play it safe\
          Vibe switch like night and day, I can see it like right away\
          I came up, you changed up, I caught that whole play\
          Since then, things never been the same\
          That's when they smile in my face\
          Whole time they wanna take my place\
          Whole time they wanna take my place\
          Whole time they wanna take my place\
          Yeah, I know they wanna take my place\
          I can tell that love is fake\
          (I can tell that love is fake)\
          I don't trust a word you say\
          (I don't trust a word you say)\
          How you wanna click up after your mistakes?\
          (How you wanna click up after your mistakes?)\
          Look you in the face and it's just not the same\
          I've been down so long it look like up to me\
          They look up to me\
          I got fake people showin' fake love to me\
          Straight up to my face, straight up to my face\
          I've been down so long it look like up to me\
          They look up to me\
          I got fake people showin' fake love to me\
          Straight up to my face, straight up to my face",
  language: 'English',
  writers: 'Jane'
});
lyricsList.push({
  name: "Selfish",
  verse: "Oooh, yeah\
          It was right\
          Even though it felt wrong\
          Nothin' ever stopped you\
          From showin' your progression suddenly\
          Broken lies\
          Drivin' backwards\
          Makin' all the wrong turns\
          Sayin' all the wrong words\
          Dodgin' angels\
          Oh, let's not be alone\
          Let's not be alone\
          Let's be one\
          Oh, let's not be alone\
          Empty thoughts fill the room\
          Breathe for me and I'll breathe for you\
          Let's be selfish tonight, tonight (selfish, baby tonight)\
          Let's be selfish, tonight, tonight (selfish, baby tonight)\
          Yeah, yeah\
          I just hit the liquor side of France\
          Currency exchange, lookin' fancy\
          If that money dirty, make it dance\
          25 karats cost a mansion\
          Gold rose petals, bottle standin'\
          Came from the concrete, takin' chances\
          Pop gold Ace like a Xanny\
          I just need the blessin' from your family\
          Broken lies, ain't no love without us\
          It will die, roses turn into dust\
          Every night, we gettin' more popular\
          Wrong is right, when it comes to us\
          Oh, let's not be alone\
          Let's not be alone\
          Tonight, yeah\
          Let's be selfish tonight, tonight (selfish, baby tonight)\
          Let's be selfish tonight, tonight (selfish, baby tonight)\
          Yeah, yeah\
          I'll be selfish\
          Let's be selfish\
          Ohh, ohh\
          (Yeah, yeah)\
          Oh, oh oh oh\
          I'll be selfish\
          Let's be selfish\
          Let's be\
          Let's be selfish\
          (Yeah, yeah)",
  language: 'English',
  writers: 'Jane'
});

lyricsList.push({
  name: "Bad and Boujee",
  verse: "You know Young Rich Niggas\
          You know so we ain't really never had no old money\
          We got a whole lotta new money though\
          (If Young Metro don't trust you I'm gon' shoot ya)\
          Raindrops, drop tops (drop top)\
          Smokin' on cookie in the hotbox (cookie)\
          Fuckin' on your bitch she a thot, thot, thot (Thot)\
          Cookin' up dope in the crockpot, (pot)\
          We came from nothin' to somethin' nigga (hey)\
          I don't trust nobody, grip the trigger (nobody)\
          Call up the gang, they come and get you (gang)\
          Cry me a river, give you a tissue (hey)\
          My bitch is bad and boujee (bad)\
          Cookin' up dope with a Uzi (blaow)\
          My niggas is savage, ruthless (savage)\
          We got 30's and 100 rounds too (grrah)\
          My bitch is bad and boujee (bad)\
          Cookin' up dope with a Uzi (dope)\
          My niggas is savage, ruthless (hey)\
          We got 30's and 100 rounds too (glah)\
          Offset, woah, woah, woah, woah, woah\
          Rackings on rackings, got backends on backends\
          I'm ridin' around in a coupe (coupe)\
          I take your bitch right from you (you)\
          Bitch I'm a dog, woof (grrr)\
          Beat the ho walls loose (hey)\
          Hop in the frog, woah (skrt)\
          I tell that bitch to come for me (come for me)\
          I swear these niggas under me (hey)\
          They hate and the devil keep jumpin' me (jumpin' me)\
          Bankrolls on me keep me company (cash)\
          We did the most, yeah\
          Pull up in Ghosts, yeah (woo)\
          My diamonds a choker (glah)\
          Holdin' the fire with no holster (blaow)\
          Rick The Ruler, diamonds cooler (cooler)\
          This a Rollie not a Mueller (hey)\
          Dabbin' on 'em like the usual (dab)\
          Magic with the brick, do voodoo (magic)\
          Court side with a bad bitch (bitch)\
          Then I send the bitch through Uber (go)\
          I'm young and rich and plus I'm boujee (hey)\
          I'm not stupid so I keep the Uzi (rrrah)\
          Rackings on rackings, got backends on backends\
          So my money makin' my back ache\
          You niggas got a low Act' rate (Act')\
          We from the Nawf, yeah dat way (Nawf)\
          Fat cookie blunt in the ash tray (cookie)\
          Two bitches, just national smash day (smash)\
          Hop in the Lamb', have a drag race (skrt)\
          I let them birds take a bath bae (brrrrr)\
          Raindrops, drop tops (drop top)\
          Smokin' on cookie in the hotbox (cookie)\
          Fuckin' on your bitch she a thot, thot, thot (thot)\
          Cookin' up dope in the crockpot, (pot)\
          We came from nothin' to somethin' nigga (hey)\
          I don't trust nobody, grip the trigger (nobody)\
          Call up the gang, they come and get you (gang)\
          Cry me a river, give you a tissue (hey)\
          My bitch is bad and boujee (bad)\
          Cookin' up dope with a Uzi (blaow)\
          My niggas is savage, ruthless (savage)\
          We got 30's and 100 rounds too (grrah)\
          My bitch is bad and boujee (bad)\
          Cookin' up dope with a Uzi (dope)\
          My niggas is savage, ruthless (hey)\
          We got 30's and 100 rounds too (glah)\
          Pour a four, I'm droppin' muddy\
          Outer space, KiD CuDi (drank)\
          Introduce me your bitch ass wifey and we know she sluttin'\
          Broke a brick down, nutty buddy, now that nigga duckin'\
          Don't move too fast I might shoot you (huh?)\
          Draco bad and boujee (Draco)\
          I'm always hangin' with shooters (brrah)\
          Might be posted somewhere secluded (private)\
          Still be playin' with pots and pans, call me Quavo Ratatouille\
          Run with that sack, call me Boobie (run with it)\
          When I'm on stage show me boobies (ay)\
          Ice on my neck, I'm the coolest (ice)\
          Hop out the suicide with the Uzi (pew-pew-pew)\
          I pull up, I pull up, I pull up\
          I hop out with all of the drugs in the cooler (skrt)\
          I'm cookin', I'm cookin', I'm whippin', I'm whippin' into a rock up, let it lock up (lock up)\
          I gave her 10 racks, I told her go shoppin' and spend it all at the pop up (ten)\
          These bitches they fuck and suck dick and they bustin' for Instagram, get your clout up\
          Uh, yeah, dat way, float on the track like a Segway (go)\
          Yeah, dat way, I used to trap by the subway (trappin')\
          Yeah, dat way, young nigga trap with the AK (rrrah)\
          Yeah, dat way, big dyke ho get it on, Macy Gray (hey)\
          Raindrops, drop tops (drop top)\
          Smokin' on cookie in the hotbox (cookie)\
          Fuckin' on your bitch she a thot, thot, thot (thot)\
          Cookin' up dope in the crockpot, (pot)\
          We came from nothin' to somethin' nigga (hey)\
          I don't trust nobody, grip the trigger (nobody)\
          Call up the gang, they come and get you (gang)\
          Cry me a river, give you a tissue (hey)\
          My bitch is bad and boujee (bad)\
          Cookin' up dope with a Uzi (blaow)\
          My niggas is savage, ruthless (savage)\
          We got 30's and 100 rounds too (grrah)\
          My bitch is bad and boujee (bad)\
          Cookin' up dope with a Uzi (dope)\
          My niggas is savage, ruthless (hey)\
          We got 30's and 100 rounds too (glah)\
          Yeah, yeah, yeah, yeah, my bitch she bad to the bone, ay\
          Wait, these niggas watchin', I swear to God they be my clones\
          Yeah, hey, huh, switchin' my hoes like my flows (what?)\
          Switchin' my flows like my clothes (like what?)\
          Keep on shootin' that gun, don't reload\
          Oh, oh, now she won't fuck with my crew\
          'Cause the money come all out the roof\
          Drive the 'Rari, that bitch got no roof (skrt)\
          Wait, what kind of 'Rari? 458 (damn)\
          All of these niggas, they hate (they hate)\
          Try to hide, shoot through the gate\
          Look, go to the strip club, make it rain (rain)\
          So much money they use rakes\
          Count 100, 000 in your face (in your face)\
          Yeah, they put 300 right in the safe\
          Met her today, oh\
          She talk to me like she knew me, yah\
          Go to sleep in a jacuzzi, yah\
          Yeah, wakin' up right to a two piece, yah\
          Countin' that paper like loose leaf, yah\
          Gettin' that chicken with blue cheese, yah\
          Yeah, boy you so fake like my collar\
          You snakin', I swear to God that be that Gucci, ay\
          And you know we winnin' (winnin')\
          Yeah, we is not losin'\
          Try to play your song, it ain't move me (what?)\
          Saw your girl once now she choose me, yeah\
          Raindrops, drop tops (drop top)\
          Smokin' on cookie in the hotbox (cookie)\
          Fuckin' on your bitch she a thot, thot, thot (thot)\
          Cookin' up dope in the crockpot, (pot)\
          We came from nothin' to somethin' nigga (hey)\
          I don't trust nobody, grip the trigger (nobody)\
          Call up the gang, they come and get you (gang)\
          Cry me a river, give you a tissue (hey)\
          My bitch is bad and boujee (bad)\
          Cookin' up dope with a Uzi (blaow)\
          My niggas is savage, ruthless (savage)\
          We got 30's and 100 rounds too (grrah)\
          My bitch is bad and boujee (bad)\
          Cookin' up dope with a Uzi (dope)\
          My niggas is savage, ruthless (hey)\
          We got 30's and 100 rounds too (glah)",
  language: 'English',
  writers: 'Jane'
});

db.Lyric.remove({}, function(err, lyrics) {
  console.log('removed all lyrics');
  db.Lyric.create(lyricsList, function(err, lyrics) {
    console.log('created all lyrics');
    db.Song.remove({}, function(err, songs) {
      songsList.forEach(function (songData) {
        var song = new db.Song({
          name : songData.name,
          artistName : songData.artistName,
          releaseDate : songData.releaseDate,
          genre : songData.genre
        });
        db.Lyric.findOne({name : songData.name}, function (err, foundLyric) {
          if (err) {console.log('err with findOne', err)};
          song.lyrics = foundLyric;
          song.save(function(err, savedSong) {
            console.log('successfully saved song');
          });
        });
      });
    });
  });
}); // end of db.lyric.remove
