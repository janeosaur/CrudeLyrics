# CRUDE Lyrics - [Link to Deployed version of the project](https://shrouded-depths-16287.herokuapp.com/)

<img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="100">

Our site allows users to browse the songs and lyrics of WDI-37's favorite genres. Users can also create, update and delete their own favorite songs and lyrics! There are four genres of music which the millenials can relate to and if they need to sing along to it, they have our website where they can get the lyrics and do so. We have also kept the user in mind while developing our website.

See the published project at [github.com/janeosaur/CrudeLyrics] (https://github.com/janeosaur/CrudeLyrics)!

## Technologies Used

<li> jQuery </li>
<li> HTML </li>
<li> CSS </li>
<li> Materialize </li>
<li> Express </li>
<li> RESTful Routes </li>
<li> Ajax </li>
<li> MongoDB </li>
<li> Heroku </li>

## Code We're Proud Of

```javascript
  var windowHref = window.location.href; // http://localhost:3000/genre/rnb/I%20feel%20it%20coming/lyrics
  var splitHref = windowHref.split('/'); // ["http:", "", "localhost:3000", "genre", "rnb", "I%20feel%20it%20coming", "lyrics"]
  splitHref.pop(); // removes "lyrics"
  var song = splitHref[splitHref.length-1]; // "I%20feel%20it%20coming"
  var genre = splitHref[splitHref.length-2]; // "rnb"
```

I'm proud of this code because it required me to trace data from the client-side all the way back to the database and return it back as rendered HTML!

### Screen Shots

Take screen shots using `control` `command` `shift` `4`. The image will be on your clipboard and you can paste it where you like with `command` `v`. If you paste it anywhere within a github text editing window, it will give you a markdown version.
