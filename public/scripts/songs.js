$(document).ready(function() {
  console.log('songs.js loaded!');

  // to get the genre from URL of what user clicked.
  var windowHref = window.location.href;
  var splitHref = windowHref.split('/');
  var genre = splitHref[splitHref.length-1];
  console.log('selected genre is', genre);
  // sets title of genre
  $('.container').prepend(`<h1> ${genre} </h1>`);

  $.ajax({
    method: 'GET',
    url: '/api/genre/' + genre + '/songs', // server provides the genre specific songs!
    success: handleSuccess,
    error: handleError
  });

// post renders on page, shows up under api but when refreshed - newly submitted songs go missing?
  $('#song-form').on('submit', function(e){
    e.preventDefault();
    var formData = $(this).serialize();
    console.log('formData is', formData);
    $.ajax({
      method: 'POST',
      url: '/api/songs',
      data: formData,
      success: addSong,
      error: handleError
    });
  }); $("song-form").trigger('reset'); // form still doesn't reset?

}); // end of doc on ready

function handleError(e) {
  console.log('uh oh');
}

function handleSuccess(res) {
  console.log(res);
  res.forEach(function(song) {
    console.log(`${song.name} ${song.artistName} ${song.releaseDate}`);
    var songsHtml =
          (`
              <div class="col s4 song-output" data-name="${song.name}">
                <span class="song-name">${song.name}</span>
                  <h5>By: <span class="artistname">${song.artistName}</span> </h5>
                  <h5>Released: <span class="releaseDate">${song.releaseDate}</span> </h5>

                <div class='panel-footer valyrics'>

                    <button class='btn btn-info view-lyrics'> View Lyrics </button>
                    <button class='btn btn-info' add-lyrics'> Add Lyrics </button>

                </div>
            </div>
            <!-- end one song -->
          `);
    
    $('div.songs-row').append(songsHtml);
    $('.view-lyrics').on('click', viewLyric);
  });
};

function addSong(song) {
  var songsHtml =
        (`
            <div class="col s4 song-output" data-name="${song.name}">
              <span class="song-name">${song.name}</span>
              <h5> By: <span class="artistname">${song.artistName}</span> </h5>
              <h5> Released: <span class="releaseDate">${song.releaseDate}</span> </h5>

              <div class='panel-footer valyrics'>
                  <button class='btn btn-info view-lyrics'> View Lyrics </button>
                  <button class='btn btn-info' add-lyrics'> Add Lyrics </button>
              </div>
          </div>
          <!-- end one song -->
        `);
  $('div.songs-row').append(songsHtml);
  $('.view-lyrics').on('click', viewLyric);
}




// when user clicks on view lyrics

function viewLyric(e) {
  console.log('view lyric clicked');
  var currentSong = $(this).closest('.song-output').data('name');
  console.log(currentSong); // undefined
  }

// when user clicks on add lyrics
function addLyric(e) {

  console.log('add lyric clicked');
  $('.addModal').modal();
  // modal doesn't open yet?
}

function clickedbutton () {
 window.location = "/lyrics";
}









