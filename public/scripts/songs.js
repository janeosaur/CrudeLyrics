$(document).ready(function() {
  console.log('songs.js loaded!');

  // to get the genre from URL of what user clicked.
    var windowHref = window.location.href;
    var splitHref = windowHref.split('/');
    var genre = splitHref[splitHref.length-1];

    console.log('selected genre is', genre);

  $.ajax({
    method: 'GET',
    url: '/api/genre/' + genre + '/songs', // server provides the genre specific songs!
    success: handleSuccess,
    error: handleError
  });

  function handleSuccess(res) {
    $('.container').prepend(`<h1> ${genre} </h1>`);
    res.forEach(function(song) {
      console.log(`${song.name} ${song.artistName} ${song.releaseDate}`);

    var songsHtml =
          (`
              <div class="col s4 song-output">
                <span class="songs">${song.name}</span>
                <ul>
                  <h5>By: <span class="artistname">${song.artistName}</span> </h5>
                  <h5>Released: <span class="releaseDate">${song.releaseDate}</span> </h5>
                </ul>

                <div class='panel-footer valyrics'>
                    <button class='btn btn-info view-lyrics' onclick="ViewLyric()"> View Lyrics </button>
                    <button class='btn btn-info' add-lyrics' onclick="AddLyric()""> Add Lyrics </button>
                </div>
            </div>
            <!-- end one song -->
          `);
          $('.row').append(songsHtml);
        });
      };
});

function handleError(e) {
  console.log('uh oh');
}

// when user clicks on view lyrics
function ViewLyric(e) {
  console.log('view lyric clicked');
  $('#viewModal').modal();
}
// when user clicks on add lyrics
function AddLyric(e) {
  console.log('add lyric clicked');
  $('#addModal').modal();
}
