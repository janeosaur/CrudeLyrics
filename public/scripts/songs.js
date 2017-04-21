$(document).ready(function() {
  console.log('songs.js loaded!');
  $('select').material_select();

  // to get the genre from URL of what user clicked.
  var windowHref = window.location.href;
  var splitHref = windowHref.split('/');
  var genre = splitHref[splitHref.length-1];
  console.log('selected genre is', genre);
  // sets title of genre
  $('.container').prepend(`<h1> ${genre} </h1>`);

  $.ajax({
    method: 'GET',
    url: '/api/genre/' + genre + '/songs', // server provides the genre specific songs!
    success: handleSuccess,
    error: handleError
  });

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
  }); $("song-form").trigger('reset'); // form still doesn't reset?
}); // end of doc on ready

var windowHref = window.location.href;
var splitHref = windowHref.split('/');
var genre = splitHref[splitHref.length-1]; // to make it available to below functions

function handleError(e) {
  console.log('uh oh');
}

function handleSuccess(res) {
  res.forEach(function(song) {
    var songsHtml = (
      `<div class="col s4 row song" data-song-id="${song._id}">
          <div class= "song-output" data-name="${song.name}">
            <span class="song-name">${song.name}</span>
              <h5>By: <span class="artistname">${song.artistName}</span> </h5>
              <h5>Released: <span class="releaseDate">${song.releaseDate}</span> </h5>
            <div class='panel-footer valyrics'>
                <button class='btn btn-info view-lyrics'> View </button>
                <a class="modal-trigger waves-effect waves-light btn edit-song" href="#editModal">Edit</a>
                <a class="modal-trigger waves-effect waves-light btn delete-song" href="#deleteModal">Delete</a>
            </div>
        </div>
      </div>
      <!-- end one song -->
      `);
    $('div.songs-row').append(songsHtml);
    $('.view-lyrics').on('click', viewLyric);
    $('.delete-song').on('click', deleteSong);
    $('.edit-song').on('click', editSong);
  });
};

function addSong(song) {
  var songsHtml =
      (`<div class="col s4 row song" data-song-id="${song._id}">
          <div class="song-output" data-name="${song.name}">
            <span class="song-name">${song.name}</span>
            <h5> By: <span class="artistname">${song.artistName}</span> </h5>
            <h5> Released: <span class="releaseDate">${song.releaseDate}</span> </h5>
            <div class='panel-footer valyrics'>
                <a class="modal-trigger waves-effect waves-light btn add-lyrics" href="#addLyricsModal">Add Lyrics</a>
          		  <a class="modal-trigger waves-effect waves-light btn edit-song" href="#editModal">Edit</a>
                <a class="modal-trigger waves-effect waves-light btn delete-song" href="#deleteModal">Delete</a>
            </div>
        </div>
      </div>
      <!-- end one song -->
      `);
    $('div.songs-row').append(songsHtml);
    $('.add-lyrics').on('click', addLyric);
    $('.delete-song').on('click', deleteSong);
    $('.edit-song').on('click', editSong);
}

// when user clicks on view lyrics
function viewLyric(e) {
  console.log('view lyric clicked');
  console.log(genre);
  var currentSong = $(this).closest('.song-output').data('name');
  console.log(currentSong);
  window.location.href = '/genre/' + genre + '/' + currentSong + '/lyrics';
  }

// when user clicks on add lyrics
function addLyric(e) {
  console.log('add lyric clicked');
  $('.addModal').modal();
  // modal doesn't open yet?
}

function editSong() {
  console.log('edit song was clicked');
  var currentSong = $(this).closest('.song-output').data('name');
  $('#editModal').modal();
  $('.edit-submit').on('click', function() {
    console.log('submit on edit song clicked');
  //   // update function goes here
    var newName = $('#song-name').val();
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
