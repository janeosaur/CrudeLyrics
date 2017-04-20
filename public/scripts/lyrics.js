$(document).ready(function() {
  console.log('lyrics.js loaded!');

  // to get the genre from URL of what user clicked.
  var windowHref = window.location.href;
  var splitHref = windowHref.split('/');
  splitHref.pop();
  var song = splitHref[splitHref.length-1];
  var genre = splitHref[splitHref.length-2];
  console.log('selected genre is', genre, 'and song is', song);

  // sets title of song lyrics?
  // $('.container').prepend(`<h1> ${genre} </h1>`);

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
  console.log(res)
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
