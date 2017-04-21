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
var genre = spitHref[splitHref.length-2];// making this available to below

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

function handleDeleteLyric(e) {
  e.preventDefault();
  console.log('clicked delete for ', genre, song);
  $('#deleteModal').modal();
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
  $('.lyrics-output').html('<p class="deleted"> Deleted! </p>');
  // css animation?
  $('#delete').remove();
  $('#edit').remove();
  if ($('#edit')) {
    window.setTimeout(function(){
      window.location.href = '/';
    }, 2000); // have page go back to homepage 
  };
  // make them go back to homepage after few seconds...
}

function handleEditLyric(e) {
  e.preventDefault();
  console.log('edit lyric clicked ', song);
  $('#editModal').modal();
  $('.edit-submit').on('click', function() {
    console.log('submit on edit song clicked');
    // update function goes here
    var newWriter = { writers: $('#writtenBy').val() };
    console.log('PUTing data for new writer', newWriter);
    $.ajax({
      method: 'put',
      url: '/api/lyrics/' + song,
      data: newWriter,
      success: handleLyricEdit,
      error: handleError
    });
  });
};

function handleLyricEdit(data) {
  console.log(data);
  window.location.reload();
  // var updateWriter = data.writers;
  // $('.writtenby').html(`Edited By: ${updateWriter}`);
}
