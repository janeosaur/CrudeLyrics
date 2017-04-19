

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

});

function renderSong(song) {
  return `<span>&ndash; (${song.name}) ${song.artistName} &ndash;</span>`
}

function handleSuccess(res) { // renderAlbum
  console.log(res); // returns array of songs objects
  // to add these elements to HTML...
  // res.songsHtml = res.songs.map(renderSong).join('');
  //
  // var songsHtml =
  //       (`
  //         <div class="row album" data-album-id="${album._id}">
  //           <div class="col-md-10 col-md-offset-1">
  //             <div class="panel panel-default">
  //               <div class="panel-body">
  //               <!-- begin album internal row -->
  //                 <div class='row'>
  //                   <div class="col-md-3 col-xs-12 thumbnail album-art">
  //                     <img src="images/800x800.png" alt="album image">
  //                   </div>
  //                   <div class="col-md-9 col-xs-12">
  //                     <ul class="list-group">
  //                       <li class="list-group-item">
  //                         <h4 class='inline-header'>Album Name:</h4>
  //                         <span class='album-name'>${album.name}</span>
  //                       </li>
  //                       <li class="list-group-item">
  //                         <h4 class='inline-header'>Artist Name:</h4>
  //                         <span class='artist-name'>${album.artistName}</span>
  //                       </li>
  //                       <li class="list-group-item">
  //                         <h4 class='inline-header'>Released date:</h4>
  //                         <span class='album-releaseDate'>${album.releaseDate}</span>
  //                       </li>
  //                       <li class="list-group-item">
  //                         <h4 class="inline-header">Songs:</h4>
  //                         ${album.songsHtml}
  //                       </li>
  //                     </ul>
  //                   </div>
  //                 </div>
  //                 <!-- end of album internal row -->
  //                 <div class='panel-footer'>
  //                   <div class='panel-footer'>
  //                     <button class='btn btn-primary add-song'>Add Song</button>
  //                     <button class='btn btn-danger delete-album'>Delete Album</button>
  //                     <button class='btn btn-info edit-album'>Edit Album</button>
  //                     <button class='btn btn-success save-album hidden'>Save Changes</button>
  //                     <button class='btn btn-info edit-songs'>Edit Songs</button>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <!-- end one album -->
  //       `);
  //       $('#albums').prepend(albumHtml);
      }

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

