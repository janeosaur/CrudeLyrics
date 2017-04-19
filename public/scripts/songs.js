$(document). ready(function() {
  console.log('song.js loaded');

//requesting lyrics from lyrics page
$.ajax ({
  method: 'GET',
  url:'/api/songs',
  success: renderAllGenreSongs
});


function renderAllGenreSongs (songs) {
songs.forEach(function(song) {
  renderSong(song);

 });
}
 function renderSong(song) {
  console.log('rendering all songs, song');
  
  genre.songs.html = genre.songs.map(renderSong).join("");

  var songshtml =(
<div class="container">
  <div class="row">
    <div class="col s8 offset-s1 genre" id="songsNameOne"><span class="flow-text"><a href="#">Song Name</a></span></div>
    <ul>
    <li><a.class="hover"></a></li>
    <li><a class="waves-effect waves-purple btn" href="#">View Lyrics</a></li>
    <li><a class="waves-effect waves-orange btn" href="#">Add Lyrics</a></li>
    </ul>

    <div class="col s8 offset-s1 genre" id="songsNameTwo"><span class="flow-text"><a href="#">Song Name</a></span></div>
      <ul>
      <li><a.class="hover"></a></li>
      <li><a class="waves-effect waves-purple btn" href="#">View Lyrics</a></li>
      <li><a class="waves-effect waves-orange btn" href="#">Add Lyrics</a></li>
      </ul>

    <div class="col s8 offset-s1 genre" id="songsNameThree"><span class="flow-text"><a href="#">Song Name</a></span></div>
      <ul>
      <li><a.class="hover"></a></li>
      <li><a class="waves-effect waves-purple btn" href="#">View Lyrics</a></li>
      <li><a class="waves-effect waves-orange btn" href="#">Add Lyrics</a></li>
      </ul> 
    </div>

   $('#songs').prepend(songshtml);
   
   }	









  	)






 }