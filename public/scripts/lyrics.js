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

  $('#edit-lyrics').on('click', handleEditLyric);
}); // end of on ready

var windowHref = window.location.href;
var splitHref = windowHref.split('/');
splitHref.pop();
var song = splitHref[splitHref.length-1];
var genre = splitHref[splitHref.length-2];// making this available to below

function handleSuccess(res) {
  console.log(res);
    var lyricsHtml = (`
        <div class="song-output" data-name="${res.name}">
          <span class="song-name">${res.name}</span>
          <div class="song-details">
            <span class="song-details">${res.artistName}</span>
            <span class="song-details">, ${res.releaseDate}</span>
          </div>
          <div class="lyrics-output"> ${res.lyrics.verse} </div>
          <div class="writtenby"> Submitted By: ${res.lyrics.writers} </div>
      </div>
      <!-- end one song -->
      `);
    $('.lyrics-output').append(lyricsHtml);
  }

function handleError(e) {
  console.log('uh oh');
}

function handleEditLyric(e) {
  e.preventDefault();
  console.log('edit lyric clicked ', song);
  $('#editModal').modal();
  $('.edit-submit').on('click', function() {
    console.log('submit on edit song clicked');
    var newWriter = $('#submittedBy').val()
    var newVerse = $('#verse').val();
    var newLyric = {writers: newWriter, verse: newVerse};
    $.ajax({
      method: 'put',
      url: '/api/lyrics/' + song,
      data: newLyric,
      success: handleLyricEdit,
      error: handleError
    });
  });
};

function handleLyricEdit(data) {
  console.log(data);
  window.location.reload();
}

// if we want a lyrics delete option..
// function deleteLyricSuccess(json) {
//   $('.lyrics-output').html('<p class="deleted"> Deleted! </p>');
//   // css animation?
//   $('#delete').remove();
//   $('#edit').remove();
//   if ($('#edit')) {
//     window.setTimeout(function(){
//       window.location.href = '/';
//     }, 2000); // have page go back to homepage
//   };
//   // make them go back to homepage after few seconds...
// }
