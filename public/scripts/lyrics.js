$(document).ready(function() {
  console.log('lyrics.js loaded!');

  $.ajax({
    method: 'GET',
    url: '/lyrics',
    success: handleSuccess, // seems pointless
    error: handleError
  });

  // when user clicks on edit lyrics
  $('#edit').on('click', handleEditLyric);

  $('#delete').on('click', handleDeleteLyric);

});

function handleSuccess(res) {
  console.log(res) // this logs html page...
}

function handleError(e) {
  console.log('uh oh');
}

function handleEditLyric(e) {
  console.log('edit lyric clicked');
  $('#editModal').modal();
  // does it make sense for users to edit parts of a lyric?
}

function handleDeleteLyric(e) {
  console.log('delete lyric clicked');
  $('#deleteModal').modal();
}
