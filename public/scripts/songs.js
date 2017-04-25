$(document).ready(function() {
  console.log('songs.js loaded!');
  $('select').material_select();

  // to get the genre from URL of what user clicked.
  var windowHref = window.location.href;
  var splitHref = windowHref.split('/');
  var genre = splitHref[splitHref.length-1];
  console.log('selected genre is', genre);

  // sets title of genre to page
  $('.header-main').html(`${genre}`);

  $.ajax({
    method: 'GET',
    url: '/api/genre/' + genre + '/songs', // server provides the genre specific songs!
    success: handleSuccess,
    error: handleError
  });

  $('#add-songs-button').on('click', addSongFromModal);

}); // end of doc on ready




var windowHref = window.location.href;
var splitHref = windowHref.split('/');
var genre = splitHref[splitHref.length-1]; // to make it available to below functions

function handleError(e) {
  console.log('uh oh');
};

function handleSuccess(res) {
  res.forEach(function(song) {

    var songsHtml = (
      `<div class="col m4 row song" data-song-id="${song._id}">
           <div class= "song-output" data-name="${song.name}">
             <h4 class="song-title">${song.name}</h4>
             <p id="song-details">By: <span class="artistname">${song.artistName}</span> </p>
             <a class="modal-trigger lyrics-options edit-song" href="#editModal"><i class="material-icons">mode_edit </i></a>
             <a class="modal-trigger lyrics-options delete-song" href="#deleteModal"><i class="material-icons"> delete </i></a>
             <div class='panel-footer valyrics'>
                 <button class='btn btn-info blue-grey lighten-5 lyrics-options view-lyrics'> View Lyrics </button>
             </div>
         </div>
       </div>
       <!-- end one song -->
       `);
    $('div.songs-row').append(songsHtml);
    // allows user to click on view button, song name & artist name text on song card to view lyrics
    $('.view-lyrics, .song-title, .artistname').on('click', viewLyric);
    $('.delete-song').on('click', deleteSong);
    $('.edit-song').on('click', editSong);
    // $('#delete').on('click', handleDeleteSong);

  });
};

function addSong(song) {
  var songsHtml =
      (`<div class="col s4 row song" data-song-id="${song._id}">
          <div class="song-output" data-name="${song.name}">
            <h4 class="song-title">${song.name}</h4>
            <p id="song-details">By: <span class="artistname">${song.artistName}</span> </p>
            <div class='panel-footer valyrics'>
                <a class="modal-trigger lyrics-options edit-song" href="#editModal"><i class="material-icons">mode_edit </i></a>
                <a class="modal-trigger lyrics-options delete-song" href="#deleteModal"><i class="material-icons"> delete </i></a>
                <!-- <a class="modal-trigger waves-effect waves-light btn blue-grey lighten-5 lyrics-options add-lyrics" href="#addLyricsModal">Add Lyrics</a> -->
            </div>
        </div>
      </div>
      <!-- end one song -->
      `);
    $('div.songs-row').append(songsHtml);
    $('.delete-song').on('click', deleteSong);
    $('.edit-song').on('click', editSong); // works for first edit, but not after
    // $('.add-lyrics').on('click', addLyric); // feature not available
};


function viewLyric(e) {

  console.log('view lyric clicked');
  console.log(genre);
  var currentSong = $(this).closest('.song-output').data('name');
  console.log(currentSong);
  window.location.href = '/genre/' + genre + '/' + currentSong + '/lyrics';

};


// when user clicks on add lyrics
function addLyric(e) {
  console.log('add lyric clicked');
  $('.addModal').modal();
  // modal doesn't open yet - not set up
};

function editSong() {
  console.log('edit song was clicked');
  var currentSong = $(this).closest('.song-output').data('name');
  $('#editModal').modal();
  $('#edit-submit').on('click', function() {
    console.log('submit on edit song clicked');
    var newName = $('#song-tile').val();
    var newArtist = $('#artistName').val();
    var newRelease = $('#releaseDate').val();
    var editedSong = {name: newName, artistName: newArtist, releaseDate: newRelease}
    console.log(editedSong);
    $.ajax({
      method: 'put',
      url: '/api/genre/' + genre + '/' + currentSong,
      data: editedSong,
      success: handleSongEdit,
      error: handleError
    });
  });
}

function deleteSong(e) {
  var currentSong = $(this).closest('.song-output').data('name');
  console.log('delete song was clicked', currentSong, genre);
  $('#deleteModal').modal();
  $('.delete').on('click', function () {
    console.log('delete on modal clicked');
    $.ajax({
      method: 'delete',
      url: '/api/genre/' + genre + '/' + currentSong,
      success: deleteSongSuccess,
      error: handleError
    });
  });
}

function deleteSongSuccess(data) {
  var deletedSongId = data._id;
  $('div[data-song-id=' + deletedSongId + ']').remove();
}

function handleSongEdit(data) {
  console.log('handle song edit');
  window.location.reload();
}

function addSongFromModal(e) {
  e.preventDefault();
  console.log('add song was clicked');
  $('#addSongModal').modal();
  $('#song-form').on('submit', function(e){
    e.preventDefault();
    var formData = $(this).serialize();
    console.log('formData is', formData);
    $.ajax({
      method: 'POST',
      url: '/api/songs',
      data: formData,
      success: addSong,
      error: handleError
    });
    $('#addSongModal').modal('close');
  });
  $("song-form").trigger('reset'); // form still doesn't reset?
}


// below is for when user adds new song but chooses incorrect genre
// it prevents from loading on the page, however it'll still register as a post
// on the specified genre. - seems a bit buggy at the moment.
//   if (genre === song.genre){
//     $('div.songs-row').append(songsHtml);
//   } else {
//     // make this modal instead of alert
//     alert('please choose correct genre');
//   };
//   $('.view-lyrics').on('click', viewLyric);
//   $('#delete').on('click', handleDeleteSong);
