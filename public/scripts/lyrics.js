$(document).ready(function() {
  console.log('lyrics.js loaded!');

  // to get the genre from URL of what user clicked.
  var windowHref = window.location.href;
  var splitHref = windowHref.split('/');
  splitHref.pop();
  var song = splitHref[splitHref.length-1];
  var genre = splitHref[splitHref.length-2];
  console.log('selected genre is', genre, 'and song is', song);

  $.ajax({
    method: 'GET',
    url: '/api/genre/' + genre + '/' + song + '/lyrics',
    success: handleSuccess,
    error: handleError
  });

});


// original below

  // when user clicks on edit lyrics
  $('#edit').on('click', handleEditLyric);
  $('#delete').on('click', handleDeleteLyric);


function handleSuccess(res) {
  console.log(res);
    var lyricsHtml = (`
        <div class="song-output" data-name="${res.name}">
          <span class="song-name">${res.name}</span>
          <h5>By: <span class="artistname">${res.artistName}</span> </h5>
          <h5>Released: <span class="releaseDate">${res.releaseDate}</span> </h5>
          <div class="lyrics-output"> ${res.lyrics.verse} </div>
      </div>
      <!-- end one song -->
      `);
    $('.lyrics-output').append(lyricsHtml);
  }

function handleError(e) {
  console.log('uh oh');
}


function handleEditLyric(e) {
  console.log('edit lyric clicked');
  $('#editModal').modal();
  // style the buttons so it's not touching side by side
}

function handleDeleteLyric(e) {
  console.log('delete lyric clicked');
  $('#deleteModal').modal();
}
