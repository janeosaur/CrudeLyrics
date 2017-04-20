$(document).ready(function() {
  console.log('lyrics.js loaded!');

   var windowHref = window.location.href;
   var params = "";
   //var songDetails = params.split("&");


  $.ajax({
    method: 'GET',
    url: '/api/lyrics',
    success: handleSuccess,
    error: handleError
  });

  // when user clicks on edit lyrics
  $('#edit').on('click', handleEditLyric);
  $('#delete').on('click', handleDeleteLyric);

  function handleSuccess(res) {
    var lyricsHtml =
    (`<div class="row">
         <div class="col s8 offset-s2 song-details" id="song-name"><span class="flow-text">${params}</span></div>
         <div class="col s4 offset-s6 song-details" id="artist-name"><span class="flow-text">By ${params}</span></div>
       </div>

       <div class="row">
        <div class="col s8 offset-s2 song-details" id="lyrics-target"><span class="flow-text">${params}</span></div>
        <div class="col s4 offset-s6 song-details"><span class="flow-text">Contributed By ${params}</span></div>
      </div>`);
          $('.lyrics-container').prepend(lyricsHtml);
      }

  function handleError(e) {
    console.log('uh oh');
  }

});



function handleEditLyric(e) {
  console.log('edit lyric clicked');
  $('#editModal').modal();
  // does it make sense for users to edit parts of a lyric?
  // style the buttons so it's not touching side by side
}

function handleDeleteLyric(e) {
  console.log('delete lyric clicked');
  $('#deleteModal').modal();
}
