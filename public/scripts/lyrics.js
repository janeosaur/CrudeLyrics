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
}); // end of on ready

var windowHref = window.location.href;
var splitHref = windowHref.split('/');
splitHref.pop();
var song = splitHref[splitHref.length-1];
var genre = splitHref[splitHref.length-2]; // making this available to below

function handleSuccess(res) {
  console.log(res);
    var lyricsHtml = (`
        <div class="song-output" data-name="${res.name}">
          <span class="song-name">${res.name}</span>
          <h5>By: <span class="artistname">${res.artistName}</span> </h5>
          <h5>Released: <span class="releaseDate">${res.releaseDate}</span> </h5>
          <div class="lyrics-output"> ${res.lyrics.verse} </div>
          <div class="writtenby"> Submitted By: ${res.lyrics.writers} </div>
      </div>
      <!-- end one song -->
      `);
    $('.lyrics-output').append(lyricsHtml);
    $('#edit').on('click', handleEditLyric);
    $('#delete').on('click', handleDeleteLyric);
  }

function handleError(e) {
  console.log('uh oh');
}

function handleEditLyric(e) {
  console.log('edit lyric clicked');
  $('#editModal').modal();
}

function handleDeleteLyric(e) {
  console.log('clicked delete for ', genre, song);
   var currentSong = $(this).closest('.song-output').data('name');
   window.location.href = '/genre/' + genre + '/' + currentSong + '/lyrics';
  $('#deleteModal').modal();
  // when submit from modal is clicked.. fun function
  $('.delete').on('click', function () {
    console.log('delete on modal clicked');
    $.ajax({
      method: 'delete',
      url: '/api/lyrics/' + genre + '/' + song,
      success: deleteLyricSuccess,
      error: handleError
    })
  }); // end of modal delete button
} // end of handleDeleteLyric

function deleteLyricSuccess(json) {
  var lyric = json;
  console.log(lyric);
  $('.lyrics-output').html('<p class="deleted"> Deleted! </p>');
  $('#delete').remove();
}
