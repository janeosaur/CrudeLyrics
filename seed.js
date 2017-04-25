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
        artistName: "BTOB",
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
        artistName: "Martin Garrix Feat. Dua Lipa",
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
  verse: "Yeah, uh <br><br> Tell me what you really like <br> Baby I can take my time <br> \
          We don't ever have to fight <br> \
          Just take it step-by-step <br>\
          I can see it in your eyes <br>\
          'Cause they never tell me lies <br> \
          I can feel that body shake<br>\
          And the heat between your legs<br><br>\
          You've been scared of love and what it did to you <br>\
          You don't have to run, I know what you've been through<br>\
          Just a simple touch and it can set you free<br>\
          We don't have to rush when you're alone with me<br><br>\
          I feel it coming, I feel it coming, babe<br>\
          I feel it coming, I feel it coming, babe<br>\
          I feel it coming, I feel it coming, babe<br>\
          I feel it coming, I feel it coming, babe<br><br>\
          You are not the single type<br>\
          So baby, this the perfect time<br>\
          I'm just trying to get you high<br>\
          And faded off this touch<br>\
          You don't need a lonely night<br>\
          So baby, I can make it right<br>\
          You just got to let me try<br>\
          To give you what you want<br><br>\
          You've been scared of love and what it did to you<br>\
          You don't have to run, I know what you've been through<br>\
          Just a simple touch and it can set you free<br>\
          We don't have to rush when you're alone with me<br><br>\
          I feel it coming, I feel it coming, babe<br>\
          I feel it coming, I feel it coming, babe<br>\
          I feel it coming, I feel it coming, babe<br>\
          I feel it coming, I feel it coming, babe<br>\
          I feel it coming, I feel it coming, babe<br>\
          I feel it coming, I feel it coming, babe<br>\
          I feel it coming, I feel it coming, babe<br>\
          I feel it coming, I feel it coming, babe<br><br>\
          You've been scared of love and what it did to you<br>\
          You don't have to run, I know what you've been through<br>\
          Just a simple touch and it can set you free<br>\
          We don't have to rush when you're alone with me<br><br>\
          I feel it coming, I feel it coming, babe<br>\
          I feel it coming, I feel it coming, babe (I know what you feel right now)<br>\
          I feel it coming, I feel it coming, babe<br>\
          I feel it coming, I feel it coming, babe (I know what you feel right now)<br>\
          I feel it coming, I feel it coming, babe<br>\
          I feel it coming, I feel it coming, babe (I know what you feel right now)<br>\
          I feel it coming, I feel it coming, babe<br>\
          I feel it coming, I feel it coming, babe<br><br>\
          I feel it coming, babe<br>\
          I feel it coming, babe<br>\
          I feel it coming, babe<br>\
          I feel it coming, babe",
  language: 'English',
  writers: 'Addy'
});
lyricsList.push({
  name: "Company",
  verse: "Ay, ay, ay<br>\
          Uh, ay what<br><br>\
          I don't need the lovin' nope<br>\
          So don't make this somethin'<br>\
          See, I'm nothin' like a girlfriend, no<br>\
          I'm not like someone I'm supposed to be<br>\
          And I just want some company, company<br>\
          And I just need some company, company<br>\
          I just need some company, company<br>\
          I just need some company, company<br><br>\
          Hey, yeah, shout out to my booty<br>\
          I'm straight up with this one boy, I know it<br>\
          I call it when I stop feelin' alone<br>\
          I want it and sometimes, see, I don't<br><br>\
          I don't need no problems with nobody<br>\
          I know how to get that, I don't follow me<br>\
          I just need a moment, fuck and leave<br>\
          You could say you had it all, no strings<br><br>\
          I don't need the lovin' nope<br>\
          So don't make this somethin'<br>\
          See, I'm nothin' like a girlfriend, no<br>\
          I'm not like someone I'm supposed to be<br>\
          And I just want some company, company<br>\
          And I just need some company, company<br>\
          I just need some company, company<br>\
          I just need some company, company<br><br>\
          Companions, but we keep it even lower<br>\
          I never ever been the type to ever just show up<br>\
          And you can't ever be the type of guy to just show up<br>\
          Treat it like a meet and greet and then we go up<br><br>\
          I don't need no problems with nobody<br>\
          I know how to get that, unfollow me<br>\
          I just need a moment, fuck and leave<br>\
          You could say you had it all, no strings<br><br>\
          Had it all<br>\
          You could say you had it all<br>\
          You could say you had it all<br>\
          You could say you had it all<br>\
          You could say you had it all<br>\
          You could say you had it all<br>\
          You could say you had it all<br>\
          All babe<br>\
          You're just my little side thing<br>\
          Just a little sweet fling<br>\
          Baby you don't have to buy things<br>\
          I just want the high, supply me<br><br>\
          I don't need the lovin' nope<br>\
          So don't make this somethin'<br>\
          See, I'm nothin' like a girlfriend, no<br>\
          I'm not like someone I'm supposed to be<br>\
          And I just want some company, company<br>\
          And I just need some company, company<br>\
          I just need some company, company<br>\
          I just need some company, company<br><br>\
          Da, da, da, I just need<br>\
          I just need some company, company<br>\
          I just need some company<br>\
          I",
  language: 'English',
  writers: 'Addy'
});

lyricsList.push({
  name: "Gangsta",
  verse: "I need a gangsta<br>\
          To love me better<br>\
          Than all the others do<br>\
          To always forgive me<br>\
          Ride or die with me<br>\
          That's just what gangsters do<br><br>\
          I'm fucked up, I'm black and blue<br>\
          I'm built for it, all the abuse<br>\
          I got secrets, that nobody, nobody knows<br>\
          I'm good on, that pussy shit<br>\
          I don't want, what I can get<br>\
          I want someone, with secrets<br>\
          That nobody, nobody, nobody knows<br><br>\
          I need a gangsta<br>\
          To love me better<br>\
          Than all the others do<br>\
          To always forgive me<br>\
          Ride or die with me<br>\
          That's just what gangsters do<br><br>\
          My freakness is on the loose<br>\
          And running, all over you<br>\
          Please take me to places, that nobody, nobody knows<br>\
          You got me hooked up on the feeling<br>\
          You got me hanging from the ceiling<br>\
          Got me up so high I'm barely breathing<br>\
          So don't let me, don't let me, don’t let me, don't let me go<br><br>\
          I need a gangsta<br>\
          To love me better<br>\
          Than all the others do<br>\
          To always forgive me<br>\
          Ride or die with me<br>\
          That's just what gangsters do",
  language: 'English',
  writers: 'Addy'
});
lyricsList.push({
  name: "With you",
  verse: "<span style='text-decoration: underline'>Korean</span><br>\
          조금 두렵기도 해x<br>\
          살아가는 건<br>\
          어딘지 모른 채 떠나는 길<br>\
          혼자 걷고 있어도<br>\
          내 마음은 언제나<br>\
          그댈 생각해<br>\
          사라져 가는 저 별도<br>\
          외로운 이 길도<br>\
          그대가 있기에<br>\
          그저 살아가려 해<br>\
          좀 더 믿어보려 해<br>\
          어쩌면 다른 내일이<br>\
          우릴 기다리고 있는 걸<br>\
          지친 하루의 끝에<br>\
          그 아득한 길 위에<br>\
          그댄 이미 기적처럼<br>\
          나를 웃게 하는 걸<br>\
          다시 일어서야 해<br>\
          살아가는 건<br>\
          불행에 무릎 꿇지 않는 것<br>\
          참았던 그 눈물이<br>\
          울컥 쏟아질 때면<br>\
          날 생각해<br>\
          견디기 힘든 날에도<br>\
          쓸쓸한 밤에도<br>\
          내가 곁에 있어<br>\
          그저 살아가려 해<br>\
          좀 더 믿어보려 해<br>\
          어쩌면 다른 내일이<br>\
          우릴 기다리고 있는 걸<br>\
          지친 하루의 끝에<br>\
          그 아득한 길 위에<br>\
          그댄 이미 기적처럼<br>\
          나를 웃게 하는 걸<br>\
          그저 살아가려 해<br>\
          다시 꿈 꾸려 해<br>\
          아파했던 지난 일들<br>\
          그리움이 되는 날까지<br>\
          여기 사라져가는 별<br>\
          그 한구석에<br>\
          우린 마치 기적처럼<br>\
          서로 사랑하는 걸<br><br>\
          <span style='text-decoration: underline'>Romanization</span><br>\
          jogeum duryeopgido hae<br>\
          saraganeun geon<br>\
          eodinji moreun chae tteonaneun gil<br>\
          honja geotgo isseodo<br>\
          nae maeumeun eonjena<br>\
          geudael saenggakhae<br>\
          sarajyeo ganeun jeo byeoldo<br>\
          oeroun i gildo<br>\
          geudaega issgie<br>\
          geujeo saragaryeo he<br>\
          jom deo mideoboryeo hae<br>\
          eojjeomyeon dareun naeiri<br>\
          uril gidarigo issneun geol<br>\
          jichin haruui kkeute<br>\
          geu adeukhan gil wie<br>\
          geudaen imi gijeokcheoreom<br>\
          nareul usge haneun geol<br>\
          dasi ireoseoya hae<br>\
          saraganeun geon<br>\
          bulhaenge mureup kkulhji anhneun geos<br>\
          chamassdeon geu nunmuri<br>\
          ulkeok ssodajil ttaemyeon<br>\
          nal saenggakhae<br>\
          gyeondigi himdeun naredo<br>\
          sseulsseulhan bamedo<br>\
          naega gyeote isseo<br>\
          geujeo saragaryeo hae<br>\
          jom deo mideoboryeo hae<br>\
          eojjeomyeon dareun naeiri<br>\
          uril gidarigo issneun geol<br>\
          jichin haruui kkeute<br>\
          geu adeukhan gil wie<br>\
          geudaen imi gijeokcheoreom<br>\
          nareul usge haneun geol<br>\
          geujeo saragaryeo hae<br>\
          dasi kkum kkuryeo hae<br>\
          apahaessdeon jinan ildeul<br>\
          geuriumi doeneun nalkkaji<br>\
          yeogi sarajyeoganeun byeol<br>\
          geu hanguseoge<br>\
          urin machi gijeokcheoreom<br>\
          seoro saranghaneun geol<br><br>\
          <span style='text-decoration: underline'>English</span><br>\
          I’m a bit scared<br>\
          Life is like going on a trip<br>\
          Without knowing where to go<br>\
          Though I’m walking alone<br>\
          My heart is always thinking of you<br>\
          Because even on the vanishing stars<br>\
          Even on this lonely path<br>\
          You are here<br>\
          I’m just trying to live<br>\
          I’m trying to believe more<br>\
          Maybe a different tomorrow is waiting for us<br>\
          At the end of a long day<br>\
          On top of that faraway road<br>\
          You’re already like a miracle<br>\
          Making me smile<br>\
          I need to get up again<br>\
          Life is about not kneeling before adversity<br>\
          When the tears you held back suddenly spill out<br>\
          Think of me<br>\
          On days it’s hard to endure<br>\
          Even on lonely nights<br>\
          I’m by your side<br>\
          I’m just trying to live<br>\
          I’m trying to believe more<br>\
          Maybe a different tomorrow is waiting for us<br>\
          At the end of a long day<br>\
          On top of that faraway road<br>\
          You’re already like a miracle<br>\
          Making me smile<br>\
          I’m just trying to live<br>\
          I trying to dream again<br>\
          Until the painful days of the past<br>\
          Become days I long for<br>\
          On the corner of that vanishing star<br>\
          Like a miracle, we are in love with each other",
  language: 'English',
  writers: 'Addy'
});
lyricsList.push({
  name: "Someday",
  verse: "<span style='text-decoration: underline'>Korean</span><br>\
          날 만지던 너의 그 두 손이<br>\
          날 부르던 너의 목소리가<br>\
          아직도 선명해<br>\
          여전히 맴돌아<br>\
          왜 네가 있을 때<br>\
          최선을 다하지 못했을까<br>\
          더 강했더라면<br>\
          끝까지 널 붙잡았을 텐데<br>\
          별생각 없이 잘 지내고 있다가도<br>\
          잊혀진 기억은 찾아와 딜레마로<br>\
          네가 있는 나와 네가 없는 나는<br>\
          전혀 다른 두 사람이란 것만 알아둬<br>\
          온갖 망상에 더 짙어지는 매캐한 공기<br>\
          First time first love 처음치고는 꽤 좋았지<br>\
          전쟁 통에 엉망진창이 됐어<br>\
          어느새 But someday<br>\
          언젠가 다시 만나 우리 더 좋은 날에 우리<br>\
          좀 더 행복하게 좀 더 시원하게<br>\
          파도치는 바다 같을 때<br>\
          꼭 다시 만나 우리 난 기다릴게 우리를<br>\
          좀 더 행복하게 좀 더 차분하게<br>\
          설레는 햇빛 아래서 언젠가<br>\
          널 떠나보내던 날에<br>\
          아주 어리석었었던 탓에<br>\
          다 너를 탓하고 원망하고 미워했어<br>\
          찢기듯 아프고 아파서 널 지워냈어<br>\
          이제 와 돌이킬 수 없단 걸<br>\
          모르는 바보라서<br>\
          어린 날의 내가 아닌 더 강해지는 날에<br>\
          그때 다시 한번 네 손 잡는다면 부디<br>\
          언젠가 다시 만나 우리 더 좋은 날에 우리<br>\
          좀 더 행복하게 좀 더 시원하게<br>\
          파도치는 바다 같을 때<br>\
          꼭 다시 만나 우리 난 기다릴게 우리를<br>\
          좀 더 행복하게 좀 더 차분하게<br>\
          설레는 햇빛 아래서 언젠가<br>\
          솔직히 말할게 나 정말 후회해<br>\
          미안하다는 한마디만 하면 됐는데<br>\
          솔직히 말할게 내 탓인 거 인정해<br>\
          나 때문에 우리가 서로 갈라져 버린 게<br>\
          이제는 말할게 나 정말 미안해<br>\
          우리가 서로 다시 볼 수 있게 매일 기도해<br>\
          I pray for you every night and day<br>\
          Hoping to see you face to face again someday<br>\
          언젠가 다시 만나 우리 더 좋은 날에 우리<br>\
          좀 더 행복하게 좀 더 시원하게<br>\
          파도치는 바다 같을 때<br>\
          꼭 다시 만나 우리 난 기다릴게 우리를<br>\
          좀 더 행복하게 좀 더 차분하게<br>\
          설레는 햇빛 아래서 언젠가<br><br>\
          <span style='text-decoration: underline'>Romantization</span><br>\
          Nal manjideon neoui geu du soni<br>\
          Nal bureudeon neoui moksoriga<br>\
          Ajikdo seonmyeonghae<br>\
          Yeojeonhi maemdora<br>\
          Wae nega isseul ttae<br>\
          Choeseoneul dahaji motaesseulkka<br>\
          Deo ganghaetteoramyeon<br>\
          Kkeutkkaji neol butjabasseul tende<br>\
          Byeolsaenggak eopsi jal jinaego ittagado<br>\
          Ichyeojin gieogeun chajawa dillemaro<br>\
          Nega inneun nawa nega eomneun naneun<br>\
          Jeonhyeo dareun du saramiran geotman aradwo<br>\
          Ongat mangsange deo jiteojineun maekaehan gonggi<br>\
          First time first love cheoeumchigoneun kkwae johatji<br>\
          Jeonjaeng tonge eongmangjinchangi dwaesseo<br>\
          Eoneusae but someday<br>\
          Eonjenga dasi manna uri deo joheun nare uri<br>\
          Jom deo haengbokhage jom deo siwonhage<br>\
          Padochineun bada gateul ttae<br>\
          Kkok dasi manna uri nan gidarilge urireul<br>\
          Jom deo haengbokhage jom deo chabunhage<br>\
          Seolleneun haetbit araeseo eonjenga<br>\
          Neol tteonabonaedeon nare<br>\
          Aju eoriseogeosseotteon tase<br>\
          Da neoreul tatago wonmanghago miwohaesseo<br>\
          Jjitgideut apeugo apaseo neol jiwonaesseo<br>\
          Ije wa dorikil su eoptan geol<br>\
          Moreuneun baboraseo<br>\
          Eorin narui naega anin deo ganghaejineun nare<br>\
          Geuttae dasi hanbeon ne son jamneundamyeon budi<br>\
          Eonjenga dasi manna uri deo joheun nare uri<br>\
          Jom deo haengbokhage jom deo siwonhage<br>\
          Padochineun bada gateul ttae<br>\
          Kkok dasi manna uri nan gidarilge urireul<br>\
          Jom deo haengbokhage jom deo chabunhage<br>\
          Seolleneun haetbit araeseo eonjenga<br>\
          Soljikhi malhalge na jeongmal huhoehae<br>\
          Mianhadaneun hanmadiman hamyeon dwaenneunde<br>\
          Soljikhi malhalge nae tasin geo injeonghae<br>\
          Na ttaemune uriga seoro gallajyeo beorin ge<br>\
          Ijeneun malhalge na jeongmal mianhae<br>\
          Uriga seoro dasi bol su itge maeil gidohae<br>\
          I pray for you every night and day<br>\
          Hoping to see you face to face again someday<br>\
          Eonjenga dasi manna uri deo joheun nare uri<br>\
          Jom deo haengbokhage jom deo siwonhage<br>\
          Padochineun bada gateul ttae<br>\
          Kkok dasi manna uri nan gidarilge urireul<br>\
          Jom deo haengbokhage jom deo chabunhage<br>\
          Seolleneun haetbit araeseo eonjenga<br><br>\
          <span style='text-decoration: underline'>English</span><br>\
          Your hands that touched me<br>\
          Your voice that called me<br>\
          It’s still so clear<br>\
          It still lingers around me<br>\
          Why didn’t I try my best<br>\
          When you were here?<br>\
          If I was stronger<br>\
          I would’ve held onto you till the end<br>\
          Even when I’m doing well, without much thought<br>\
          The forgotten memories come back as a dilemma<br>\
          Me with you and me without you<br>\
          Are two entirely different people, just know that<br>\
          All these illusions make the musty air thicker<br>\
          First time first love it was really good for the first time<br>\
          But it became a mess, as if we were at war<br>\
          But some day<br>\
          Some day, let’s meet again on a better day<br>\
          Let’s be more happy, more cool<br>\
          Like the ocean with waves<br>\
          Let’s meet again, I’ll wait for us<br>\
          Let’s be more happy, more calm<br>\
          Some day, under the heart fluttering sunlight<br>\
          On the day I let you go<br>\
          Because of my foolishness, I blamed you<br>\
          I resented you and hated you<br>\
          Because it hurt so much as if I was being ripped apart<br>\
          I erased you now I know I can’t turn things around now<br>\
          I was a fool who didn’t know – When I’m not the me<br>\
          Of the young days – When I become stronger<br>\
          If only I could hold your hand again, please<br>\
          Some day, let’s meet again on a better day<br>\
          Let’s be more happy, more cool<br>\
          Like the ocean with waves<br>\
          Let’s meet again, I’ll wait for us<br>\
          Let’s be more happy, more calm<br>\
          Some day, under the heart fluttering sunlight<br>\
          I’ll be honest, I really regret it<br>\
          I only had to say one thing, I’m sorry<br>\
          I’ll be honest, I admit it was my fault<br>\
          Because of me, we split apart<br>\
          Now I’ll tell you, I’m truly sorry<br>\
          I pray that we can see each other again<br>\
          I pray for you every night and day<br>\
          Hoping to see you face to face again someday<br>\
          Some day, let’s meet again on a better day<br>\
          Let’s be more happy, more cool<br>\
          Like the ocean with waves<br>\
          Let’s meet again, I’ll wait for us<br>\
          Let’s be more happy, more calm<br>\
          Some day, under the heart fluttering sunlight",
  language: 'English',
  writers: 'Addy'
});
lyricsList.push({
  name: "I'll be yours",
  verse: "<span style='text-decoration: underline'>Korean</span><br>\
          지금 뭐해? I’ll be yours<br>\
          Baby I’ll be yours<br>\
          갖고 싶지? I’ll be yours<br>\
          Maybe I’ll be yours<br>\
          ooh wee baby 뭐가 그리<br>\
          겁이 나니? <br>\
          좀 더 다가와 봐<br>\
          저기부터 벌써 내 앞까지<br>\
          check it on me<br>\
          따라만 올 거니?<br>\
          자꾸만 헷갈리게<br>\
          나를 밀고 당기지<br>\
          어느새 빠져들지<br>\
          망설이단 나를 놓칠걸 whoo<br>\
          oh 왜 내가 좋은지 들려줘<br>\
          애만 태우지 말고 웃어봐<br>\
          남자답게 더 쿨하게 말해봐<br>\
          지금 뭐해? I’ll be yours<br>\
          Baby I’ll be yours<br>\
          갖고 싶지? I’ll be yours<br>\
          Maybe I’ll be yours<br>\
          Wait a minute! I’ll be yours<br>\
          Baby I’ll be yours<br>\
          네 눈에서 뚝 떨어지는<br>\
          꿀처럼 더 달콤하게<br>\
          말해줄게 I’ll be yours<br>\
          ooh wee baby 감탄하겠지<br>\
          반짝이는 Me<br>\
          Like a popping champagne<br>\
          때론 chic 하게 바꿔도 좋지<br>\
          또 부드럽게<br>\
          매력을 펼치지<br>\
          어서 눈을 감고서<br>\
          주사위를 굴려봐<br>\
          어디로든 괜찮아<br>\
          결국 내게 오게 될테니 whoo<br>\
          Oh 복잡한 생각을 비워봐<br>\
          어색한 네 마음도 던져봐<br>\
          남자답게 네 진심을 말해봐<br>\
          지금 뭐해? I’ll be yours<br>\
          Baby I’ll be yours<br>\
          갖고 싶지? I’ll be yours<br>\
          Maybe I’ll be yours<br>\
          Wait a minute! I’ll be yours<br>\
          Baby I’ll be yours<br>\
          네 눈에서 뚝 떨어지는<br>\
          꿀처럼 더 달콤하게<br>\
          말해줄게 I’ll be yours<br>\
          Come On Baby <br>\
          내게 좀 더 다가와봐<br>\
          내 모든걸 Boy 가지라 하지<br>\
          너도 절대 싫지 않은거를 알아 <br>\
          right right <br>\
          내게 빠져 inside<br>\
          주문을 걸어 up and down<br>\
          사르르 녹아 버릴 night<br>\
          1, 2 step 1, 1, 2 step<br>\
          이젠 촛불을 끄고서<br>\
          소원을 빌어봐<br>\
          baby 코 끝에서 맴돈<br>\
          Flower 향기처럼 널 간지럽힐래<br>\
          어딜 가도 잊을 수 없게<br>\
          baby 귓가에서 맴돈 소리처럼 <br>\
          내 목소릴 따라올래?<br>\
          Feel so good Oh yeah<br>\
          내 맘 원해? I’ll be yours<br>\
          Baby I’ll be yours<br>\
          갖고 싶지? I’ll be yours<br>\
          Maybe I’ll be yours<br>\
          Wait a minute! I’ll be yours<br>\
          Baby I’ll be yours<br>\
          콕 찍어서 네 입술 끝에<br>\
          은근슬쩍 가져가지<br>\
          말해 뭐해? I’ll be yours<br><br>\
          <span style='text-decoration: underline'>Romantization</span><br>\
          jigeum mweohae? I’ll be yours<br>\
          Baby I’ll be yours<br>\
          gatgo shipji? I’ll be yours<br>\
          Maybe I’ll be yours<br>\
          ooh wee baby mweoga geuri<br>\
          geopi nani? <br>\
          jom deo dagawa bwa<br>\
          jeogibuteo beolsseo nae apkkaji<br>\
          check it on me<br>\
          ttaraman ol geoni?<br>\
          jakkuman hetgallige<br>\
          nareul milgo danggiji<br>\
          eoneusae ppajyeodeulji<br>\
          mangseoridan nareul nochilgeol whoo<br>\
          oh wae naega joeunji deullyeojweo<br>\
          aeman taeuji malgo useobwa<br>\
          namjadapge deo kulhage malhaebwa<br>\
          jigeum mweohae? I’ll be yours<br>\
          Baby I’ll be yours<br>\
          gatgo shipji? I’ll be yours<br>\
          Maybe I’ll be yours<br>\
          Wait a minute! I’ll be yours<br>\
          Baby I’ll be yours<br>\
          ne nuneseo ttuk tteoreojineun<br>\
          kkulcheoreom deo dalkomhage<br>\
          malhaejulge I’ll be yours<br>\
          ooh wee baby gamtanagetji<br>\
          banjagineun Me<br>\
          Lige a popping champagne<br>\
          ttaeron chic hage bakkweodo joji<br>\
          tto budeureobge<br>\
          maeryeogeul pyeolchiji<br>\
          eoseo nuneul gamgoseo<br>\
          jusawireul gullyeobwa<br>\
          eodirodeun gwaenchana<br>\
          geolguk naege oge doelteni whoo<br>\
          Oh bokjapan saenggageul biweobwa<br>\
          eosaekhan ne maeumdo deonjyeobwa<br>\
          namjadapge ne jinshimeul malhaebwa<br>\
          jigeum mweohae? I’ll be yours<br>\
          Baby I’ll be yours<br>\
          gatgo shipji? I’ll be yours<br>\
          Maybe I’ll be yours<br>\
          Wait a minute! I’ll be yours<br>\
          Baby I’ll be yours<br>\
          ne nuneseo ttuk tteoreojineun<br>\
          kkulcheoreom deo dalkomhage<br>\
          malhaejulge I’ll be yours<br>\
          Come On Baby <br>\
          naege jom deo dagawabwa<br>\
          nae modeungeol Boy gajira haji<br>\
          neodo jeoldae shilchi aneungeoreul ara <br>\
          right right <br>\
          naege ppajyeo inside<br>\
          jumuneul georeo up and down<br>\
          sareureu noga beoril night<br>\
          1, 2 step 1, 1, 2 step<br>\
          ijen chotbureul kkeugoseo<br>\
          soweoneul bireobwa<br>\
          baby ko kkeuteseo maemdon<br>\
          Flower hyanggicheoreom neol ganjireopillae<br>\
          eodil gado ijeul su eopsge<br>\
          baby gwitgaeseo maemdon soricheoreom <br>\
          nae moksoril ttaraollae?<br>\
          Feel so good Oh yeah-<br>\
          nae mam weonae? I’ll be yours<br>\
          Baby I’ll be yours<br>\
          gatgo shipji? I’ll be yours<br>\
          Maybe I’ll be yours<br>\
          Wait a minute! I’ll be yours<br>\
          Baby I’ll be yours<br>\
          kok jjigeoseo ne ipsul kkeute<br>\
          eungeunseuljjeok gajyeogaji<br>\
          malhae mweohae? I’ll be yours<br><br>\
          <span style='text-decoration: underline'>English</span><br>\
          What’re you doing right now? I’ll be yours<br>\
          Baby I’ll be yours<br>\
          Want me? I’ll be yours<br>\
          Maybe I’ll be yours<br>\
          ooh wee baby<br>\
          What’re you so scared of?<br>\
          Come closer<br>\
          From all the way over there. Till you’re in front of me<br>\
          check it on me<br>\
          Are you just gonna follow behind?<br>\
          You keep confusing me<br>\
          Playing games with me<br>\
          Suddenly, I’ve fallen for you<br>\
          If you hesitate, you’ll lose me<br>\
          Tell me why you like me<br>\
          Don’t just make me antsy, smile<br>\
          Be a man, be cool and tell me<br>\
          What’re you doing right now? I’ll be yours<br>\
          Baby I’ll be yours<br>\
          Want me? I’ll be yours<br>\
          Maybe I’ll be yours<br>\
          Wait a minute! I’ll be yours<br>\
          Baby I’ll be yours<br>\
          Like the honey that drips from your eyes<br>\
          I’ll tell you more sweetly<br>\
          I’ll be yours<br>\
          ooh wee baby<br>\
          You’ll be in awe<br>\
          Cuz it’s the dazzling me<br>\
          Like a popping champagne<br>\
          Sometimes being chic is good<br>\
          Softly, I’ll show you my charms<br>\
          Close your eyes<br>\
          Throw the dice<br>\
          Wherever you want<br>\
          Because it’ll come to me in the end<br>\
          Empty out your complicated thoughts<br>\
          Throw away your awkwardness<br>\
          Be a man, tell me how you really feel<br>\
          What’re you doing right now? I’ll be yours<br>\
          Baby I’ll be yours<br>\
          Want me? I’ll be yours<br>\
          Maybe I’ll be yours<br>\
          Wait a minute! I’ll be yours<br>\
          Baby I’ll be yours<br>\
          Like the honey that drips from your eyes<br>\
          I’ll tell you more sweetly<br>\
          I’ll be yours<br>\
          Come On Baby<br>\
          come a little closer<br>\
          I’m telling you boy, to have all of me<br>\
          I know you don’t hate it<br>\
          right right<br>\
          Fall into me, inside<br>\
          Cast a spell up and down<br>\
          Softly melting night<br>\
          1, 2 step 1, 1, 2 step<br>\
          Now blow the candles<br>\
          Make a wish<br>\
          baby, like the flower scent at the tip of your nose<br>\
          I wanna tickle you<br>\
          So you won’t forget me wherever you go<br>\
          baby like the sound that lingers in your ears<br>\
          Wanna follow my voice?<br>\
          Feel so good Oh yeah<br>\
          Want my heart? I’ll be yours<br>\
          Baby I’ll be yours<br>\
          Want me? I’ll be yours<br>\
          Maybe I’ll be yours<br>\
          Wait a minute! I’ll be yours<br>\
          Baby I’ll be yours<br>\
          I’ll aim and slowly take it to your lips<br>\
          What’s more to say?<br>\
          I’ll be yours<br>",
  language: 'English',
  writers: 'Addy'
});

lyricsList.push({
  name: "Falling",
  verse: "Right here, right now, it's all we need<br>\
          Relax your mind and set it free<br>\
          Be all you got, be all I see<br>\
          The way you move, the way you feel<br><br>\
          Look at me I'm falling, falling<br>\
          Feeling like I'm love blind, taking over my mind<br>\
          Look at me I'm falling, falling<br>\
          Feeling like I'm love blind, taking over my mind<br><br>\
          Look at me I'm falling, falling<br>\
          Feeling like I'm love blind, taking over my mind<br>\
          Look at me I'm falling, falling<br>\
          Feeling like I'm love blind, taking over my mind<br>\
          Look at me I'm falling, falling<br>\
          Feeling like I'm love blind, taking over my mind<br>\
          Look at me I'm falling, falling<br>\
          Feeling like I'm love blind, taking over my mind<br>\
          Look at me I'm<br><br>\
          Right here, right now it's all we need<br>\
          Relax your mind and set it free<br>\
          Be all you got, be all I see<br>\
          The way you move, the way you feel<br><br>\
          Look at me I'm falling, falling<br>\
          Feeling like I'm love blind, taking over my mind<br>\
          Look at me I'm falling, falling<br>\
          Feeling like I'm love blind, taking over my mind<br><br>\
          Look at me I'm falling, falling<br>\
          Feeling like I'm love blind, taking over my mind<br>\
          Look at me I'm falling, falling<br>\
          Feeling like I'm love blind, taking over my mind<br><br>\
          Look at me I'm falling, falling, eh-eh<br>\
          Falling, falling, eh-eh<br><br>\
          Look at me I'm falling, falling<br>\
          Feeling like I'm love blind, taking over my mind<br>\
          Look at me I'm falling, falling<br>\
          Feeling like I'm love blind, taking over my mind<br><br>\
          Look at me I'm falling, falling<br>\
          Feeling like I'm love blind, taking over my mind<br>\
          Look at me I'm falling, falling<br>\
          Feeling like I'm love blind, taking over my mind<br><br>\
          Look at me I'm falling, falling, eh-eh<br>\
          Falling, falling, eh-eh<br>\
          Look at me I'm falling, falling, eh-eh<br>\
          Look at me I'm falling, falling, eh-eh",
  language: 'English',
  writers: 'Addy'
});

lyricsList.push({
  name: "Scared to be Lonely",
  verse: "It was great at the very start<br>\
          Hands on each other<br>\
          Couldn't stand to be far apart<br>\
          Closer the better<br><br>\
          Now we're picking fights and slamming doors<br>\
          Magnifying all our flaws<br>\
          And I wonder why, wonder what for<br>\
          Why we keep coming back for more<br><br>\
          Is it just our bodies? Are we both losing our minds?<br>\
          Is the only reason you're holding me tonight<br>\
          'Cause we're scared to be lonely?<br>\
          Do we need somebody just to feel like we're alright?<br>\
          Is the only reason you're holding me tonight<br>\
          'Cause we're scared to be lonely?<br><br>\
          Too much time, losing track of us<br>\
          Where was the real?<br>\
          Undefined, spiraling out of touch<br>\
          Forgot how it feels<br><br>\
          All the messed up fights and slamming doors<br>\
          Magnifying all our flaws<br>\
          And I wonder why, wonder what for<br>\
          It's like we keep coming back for more<br><br>\
          Is it just our bodies? Are we both losing our minds?<br>\
          Is the only reason you're holding me tonight<br>\
          'Cause we're scared to be lonely?<br>\
          Do we need somebody just to feel like we're alright?<br>\
          Is the only reason you're holding me tonight<br>\
          'Cause we're scared to be lonely?<br><br>\
          Scared to be lonely<br><br>\
          Even when we know it's wrong<br>\
          Been somebody better for us all along<br>\
          Tell me, how can we keep holding on?<br>\
          Holding on tonight 'cause we're scared to be lonely<br>\
          Even when we know it's wrong<br>\
          Been somebody better for us all along<br>\
          Tell me, how can we keep holding on?<br>\
          Holding on tonight 'cause we're scared to be lonely<br><br>\
          Is it just our bodies? Are we both losing our minds?<br>\
          Is the only reason you're holding me tonight<br>\
          'Cause we're scared to be lonely?<br><br>\
          Scared to be lonely<br>\
          Scared to be lonely<br>\
          Scared to be lonely<br>\
          Eh, eh, scared to be lonely",
  language: 'English',
  writers: 'Addy'
});
lyricsList.push({
  name: "Party til the Daylight",
  verse: "Party till the daylight<br>\
          Party till the daylight<br>\
          Light, light, light, light<br>\
          Party till the daylight<br>\
          Party till the daylight<br>\
          Party till the daylight<br>\
          Light, light, light, light, light<br><br>\
          Party till the day<br><br>\
          Party till the daylight<br>\
          Party till the daylight<br>\
          Party till the daylight<br>\
          Light, light, light, light<br>\
          Party till the daylight<br>\
          Party till the daylight<br>\
          Party till the daylight<br>\
          Light, light, light, light, light<br><br>\
          Party till the day",
  language: 'English',
  writers: 'Addy'
});

lyricsList.push({
  name: "Fake Love",
  verse: "Yeah, yeah <br><br>\
          I've been down so long it look like up to me<br>\
          They look up to me<br>\
          I got fake people showin' fake love to me<br>\
          Straight up to my face, straight up to my face<br>\
          I've been down so long it look like up to me<br>\
          They look up to me<br>\
          I got fake people showin' fake love to me<br>\
          Straight up to my face, straight up to my face<br><br>\
          Somethin' ain't right when we talkin'<br>\
          Somethin' ain't right when we talkin'<br>\
          Look like you hidin' your problems<br>\
          Really you never was solid<br>\
          No you can't son me, you won't never get to run me<br>\
          Just when shit look, outta reach, I reach back like one, three<br>\
          Like one, three, yeah<br><br>\
          That's when they smile in my face<br>\
          Whole time they wanna take my place<br>\
          Whole time they wanna take my place<br>\
          Whole time they wanna take my place<br>\
          Yeah, I know they wanna take my place<br>\
          I can tell that love is fake<br>\
          I don't trust a word you say<br>\
          How you wanna click up after your mistakes?<br>\
          Look you in the face and it's just not the same<br><br>\
          I've been down so long it look like up to me<br>\
          They look up to me<br>\
          I got fake people showin' fake love to me<br>\
          Straight up to my face, straight up to my face<br>\
          I've been down so long it look like up to me<br>\
          They look up to me<br>\
          I got fake people showin' fake love to me<br>\
          Straight up to my face, straight up to my face<br><br>\
          Yeah, straight up to my face, tryna play it safe<br>\
          Vibe switch like night and day, I can see it like right away<br>\
          I came up, you changed up, I caught that whole play<br>\
          Since then, things never been the same<br><br>\
          That's when they smile in my face<br>\
          Whole time they wanna take my place<br>\
          Whole time they wanna take my place<br>\
          Whole time they wanna take my place<br>\
          Yeah, I know they wanna take my place<br>\
          I can tell that love is fake<br>\
          (I can tell that love is fake)<br>\
          I don't trust a word you say<br>\
          (I don't trust a word you say)<br>\
          How you wanna click up after your mistakes?<br>\
          (How you wanna click up after your mistakes?)<br>\
          Look you in the face and it's just not the same<br><br>\
          I've been down so long it look like up to me<br>\
          They look up to me<br>\
          I got fake people showin' fake love to me<br>\
          Straight up to my face, straight up to my face<br>\
          I've been down so long it look like up to me<br>\
          They look up to me<br>\
          I got fake people showin' fake love to me<br>\
          Straight up to my face, straight up to my face",
  language: 'English',
  writers: 'Jane'
});
lyricsList.push({
  name: "Selfish",
  verse: "Oooh, yeah<br><br>\
          It was right<br>\
          Even though it felt wrong<br>\
          Nothin' ever stopped you<br>\
          From showin' your progression suddenly<br><br>\
          Broken lies<br>\
          Drivin' backwards<br>\
          Makin' all the wrong turns<br>\
          Sayin' all the wrong words<br>\
          Dodgin' angels<br><br>\
          Oh, let's not be alone<br>\
          Let's not be alone<br>\
          Let's be one<br>\
          Oh, let's not be alone<br>\
          Empty thoughts fill the room<br>\
          Breathe for me and I'll breathe for you<br><br>\
          Let's be selfish tonight, tonight (selfish, baby tonight)<br>\
          Let's be selfish, tonight, tonight (selfish, baby tonight)<br>\
          Yeah, yeah<br><br>\
          I just hit the liquor side of France<br>\
          Currency exchange, lookin' fancy<br>\
          If that money dirty, make it dance<br>\
          25 karats cost a mansion<br>\
          Gold rose petals, bottle standin'<br>\
          Came from the concrete, takin' chances<br>\
          Pop gold Ace like a Xanny<br>\
          I just need the blessin' from your family<br>\
          Broken lies, ain't no love without us<br>\
          It will die, roses turn into dust<br>\
          Every night, we gettin' more popular<br>\
          Wrong is right, when it comes to us<br><br>\
          Oh, let's not be alone<br>\
          Let's not be alone<br>\
          Tonight, yeah<br>\
          Let's be selfish tonight, tonight (selfish, baby tonight)<br>\
          Let's be selfish tonight, tonight (selfish, baby tonight)<br>\
          Yeah, yeah<br>\
          I'll be selfish<br>\
          Let's be selfish<br>\
          Ohh, ohh<br>\
          (Yeah, yeah)<br>\
          Oh, oh oh oh<br>\
          I'll be selfish<br>\
          Let's be selfish<br>\
          Let's be<br>\
          Let's be selfish<br>\
          (Yeah, yeah)",
  language: 'English',
  writers: 'Jane'
});

lyricsList.push({
  name: "Bad and Boujee",
  verse: "You know Young Rich Niggas<br>\
          You know so we ain't really never had no old money<br>\
          We got a whole lotta new money though<br>\
          (If Young Metro don't trust you I'm gon' shoot ya)<br><br>\
          Raindrops, drop tops (drop top)<br>\
          Smokin' on cookie in the hotbox (cookie)<br>\
          Fuckin' on your bitch she a thot, thot, thot (Thot)<br>\
          Cookin' up dope in the crockpot, (pot)<br>\
          We came from nothin' to somethin' nigga (hey)<br>\
          I don't trust nobody, grip the trigger (nobody)<br>\
          Call up the gang, they come and get you (gang)<br>\
          Cry me a river, give you a tissue (hey)<br>\
          My bitch is bad and boujee (bad)<br>\
          Cookin' up dope with a Uzi (blaow)<br>\
          My niggas is savage, ruthless (savage)<br>\
          We got 30's and 100 rounds too (grrah)<br>\
          My bitch is bad and boujee (bad)<br>\
          Cookin' up dope with a Uzi (dope)<br>\
          My niggas is savage, ruthless (hey)<br>\
          We got 30's and 100 rounds too (glah)<br><br>\
          Offset, woah, woah, woah, woah, woah<br>\
          Rackings on rackings, got backends on backends<br>\
          I'm ridin' around in a coupe (coupe)<br>\
          I take your bitch right from you (you)<br>\
          Bitch I'm a dog, woof (grrr)<br>\
          Beat the ho walls loose (hey)<br>\
          Hop in the frog, woah (skrt)<br>\
          I tell that bitch to come for me (come for me)<br>\
          I swear these niggas under me (hey)<br>\
          They hate and the devil keep jumpin' me (jumpin' me)<br>\
          Bankrolls on me keep me company (cash)<br>\
          We did the most, yeah<br>\
          Pull up in Ghosts, yeah (woo)<br>\
          My diamonds a choker (glah)<br>\
          Holdin' the fire with no holster (blaow)<br>\
          Rick The Ruler, diamonds cooler (cooler)<br>\
          This a Rollie not a Mueller (hey)<br>\
          Dabbin' on 'em like the usual (dab)<br>\
          Magic with the brick, do voodoo (magic)<br>\
          Court side with a bad bitch (bitch)<br>\
          Then I send the bitch through Uber (go)<br>\
          I'm young and rich and plus I'm boujee (hey)<br>\
          I'm not stupid so I keep the Uzi (rrrah)<br>\
          Rackings on rackings, got backends on backends<br>\
          So my money makin' my back ache<br>\
          You niggas got a low Act' rate (Act')<br>\
          We from the Nawf, yeah dat way (Nawf)<br>\
          Fat cookie blunt in the ash tray (cookie)<br>\
          Two bitches, just national smash day (smash)<br>\
          Hop in the Lamb', have a drag race (skrt)<br>\
          I let them birds take a bath bae (brrrrr)<br><br>\
          Raindrops, drop tops (drop top)<br>\
          Smokin' on cookie in the hotbox (cookie)<br>\
          Fuckin' on your bitch she a thot, thot, thot (thot)<br>\
          Cookin' up dope in the crockpot, (pot)<br>\
          We came from nothin' to somethin' nigga (hey)<br>\
          I don't trust nobody, grip the trigger (nobody)<br>\
          Call up the gang, they come and get you (gang)<br>\
          Cry me a river, give you a tissue (hey)<br>\
          My bitch is bad and boujee (bad)<br>\
          Cookin' up dope with a Uzi (blaow)<br>\
          My niggas is savage, ruthless (savage)<br>\
          We got 30's and 100 rounds too (grrah)<br>\
          My bitch is bad and boujee (bad)<br>\
          Cookin' up dope with a Uzi (dope)<br>\
          My niggas is savage, ruthless (hey)<br>\
          We got 30's and 100 rounds too (glah)<br>\
          Pour a four, I'm droppin' muddy<br>\
          Outer space, KiD CuDi (drank)<br>\
          Introduce me your bitch ass wifey and we know she sluttin'<br>\
          Broke a brick down, nutty buddy, now that nigga duckin'<br>\
          Don't move too fast I might shoot you (huh?)<br>\
          Draco bad and boujee (Draco)<br>\
          I'm always hangin' with shooters (brrah)<br>\
          Might be posted somewhere secluded (private)<br>\
          Still be playin' with pots and pans, call me Quavo Ratatouille<br>\
          Run with that sack, call me Boobie (run with it)<br>\
          When I'm on stage show me boobies (ay)<br>\
          Ice on my neck, I'm the coolest (ice)<br>\
          Hop out the suicide with the Uzi (pew-pew-pew)<br>\
          I pull up, I pull up, I pull up<br>\
          I hop out with all of the drugs in the cooler (skrt)<br>\
          I'm cookin', I'm cookin', I'm whippin', I'm whippin' into a rock up, let it lock up (lock up)<br>\
          I gave her 10 racks, I told her go shoppin' and spend it all at the pop up (ten)<br>\
          These bitches they fuck and suck dick and they bustin' for Instagram, get your clout up<br>\
          Uh, yeah, dat way, float on the track like a Segway (go)<br>\
          Yeah, dat way, I used to trap by the subway (trappin')<br>\
          Yeah, dat way, young nigga trap with the AK (rrrah)<br>\
          Yeah, dat way, big dyke ho get it on, Macy Gray (hey)<br><br>\
          Raindrops, drop tops (drop top)<br>\
          Smokin' on cookie in the hotbox (cookie)<br>\
          Fuckin' on your bitch she a thot, thot, thot (thot)<br>\
          Cookin' up dope in the crockpot, (pot)<br>\
          We came from nothin' to somethin' nigga (hey)<br>\
          I don't trust nobody, grip the trigger (nobody)<br>\
          Call up the gang, they come and get you (gang)<br>\
          Cry me a river, give you a tissue (hey)<br>\
          My bitch is bad and boujee (bad)<br>\
          Cookin' up dope with a Uzi (blaow)<br>\
          My niggas is savage, ruthless (savage)<br>\
          We got 30's and 100 rounds too (grrah)<br>\
          My bitch is bad and boujee (bad)<br>\
          Cookin' up dope with a Uzi (dope)<br>\
          My niggas is savage, ruthless (hey)<br>\
          We got 30's and 100 rounds too (glah)<br><br>\
          Yeah, yeah, yeah, yeah, my bitch she bad to the bone, ay<br>\
          Wait, these niggas watchin', I swear to God they be my clones<br>\
          Yeah, hey, huh, switchin' my hoes like my flows (what?)<br>\
          Switchin' my flows like my clothes (like what?)<br>\
          Keep on shootin' that gun, don't reload<br>\
          Oh, oh, now she won't fuck with my crew<br>\
          'Cause the money come all out the roof<br>\
          Drive the 'Rari, that bitch got no roof (skrt)<br>\
          Wait, what kind of 'Rari? 458 (damn)<br>\
          All of these niggas, they hate (they hate)<br>\
          Try to hide, shoot through the gate<br>\
          Look, go to the strip club, make it rain (rain)<br>\
          So much money they use rakes<br>\
          Count 100, 000 in your face (in your face)<br>\
          Yeah, they put 300 right in the safe<br>\
          Met her today, oh<br>\
          She talk to me like she knew me, yah<br>\
          Go to sleep in a jacuzzi, yah<br>\
          Yeah, wakin' up right to a two piece, yah<br>\
          Countin' that paper like loose leaf, yah<br>\
          Gettin' that chicken with blue cheese, yah<br>\
          Yeah, boy you so fake like my collar<br>\
          You snakin', I swear to God that be that Gucci, ay<br>\
          And you know we winnin' (winnin')<br>\
          Yeah, we is not losin'<br>\
          Try to play your song, it ain't move me (what?)<br>\
          Saw your girl once now she choose me, yeah<br><br>\
          Raindrops, drop tops (drop top)<br>\
          Smokin' on cookie in the hotbox (cookie)<br>\
          Fuckin' on your bitch she a thot, thot, thot (thot)<br>\
          Cookin' up dope in the crockpot, (pot)<br>\
          We came from nothin' to somethin' nigga (hey)<br>\
          I don't trust nobody, grip the trigger (nobody)<br>\
          Call up the gang, they come and get you (gang)<br>\
          Cry me a river, give you a tissue (hey)<br>\
          My bitch is bad and boujee (bad)<br>\
          Cookin' up dope with a Uzi (blaow)<br>\
          My niggas is savage, ruthless (savage)<br>\
          We got 30's and 100 rounds too (grrah)<br>\
          My bitch is bad and boujee (bad)<br>\
          Cookin' up dope with a Uzi (dope)<br>\
          My niggas is savage, ruthless (hey)<br>\
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
