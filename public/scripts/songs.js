$(document).ready(function() {
  console.log('songs.js loaded!');

  // to get the genre from URL of what user clicked.
    var windowHref = window.location.href;
    var splitHref = windowHref.split('/');
    var genre = splitHref[splitHref.length-1];

    console.log('selected genre is', genre);

  $.ajax({
    method: 'GET',
    url: '/api/genre/' + genre + '/songs', // server provides the genre specific song
    success: handleSuccess,
    error: handleError
  });

  // // when user clicks on edit lyrics - adjust this so it applies to songs page.
  // $('#edit').on('click', handleEditLyric);
  //
  // $('#delete').on('click', handleDeleteLyric);


  function handleSuccess(res) { // renderAlbum
    console.log(res); // logs array of song objects
    $('.container').prepend(`<h1> ${genre} <h1>`);
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
                    <button class='btn btn-info view'>View Lyrics </button>
                    <button class='btn btn-info add'>Add Lyrics </button>
                </div>
            </div>
            <!-- end one song -->
          `);
          $('.row').append(songsHtml);
        });
      };



});


// function renderSong(song) {
//   console.log(`${song.name}`);
//   return `<span> ${song.name} ${song.artistName} </span>`
// }


function handleError(e) {
  console.log('uh oh');
}


// adjust below so it applies to songs page
// function handleEditLyric(e) {
//   console.log('edit lyric clicked');
//   $('#editModal').modal();
//   // does it make sense for users to edit parts of a lyric?
//   // style the buttons so it's not touching side by side
// }
//
// function handleDeleteLyric(e) {
//   console.log('delete lyric clicked');
//   $('#deleteModal').modal();
// }
