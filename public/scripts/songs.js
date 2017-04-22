$(document).ready(function() {
  console.log('songs.js loaded!');
  $('select').material_select();

  // to get the genre from URL of what user clicked.
  var windowHref = window.location.href;
  var splitHref = windowHref.split('/');
  var genre = splitHref[splitHref.length-1];
  console.log('selected genre is', genre);

  // sets title of genre to page
  if(genre==='rnb') {
    $('.container').prepend(`<h1 id="genrename"> R&B Songs </h1>`);
  } else {
    $('.container').prepend(`<h1 id="genrename"> ${genre} Songs </h1>`);
  };

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
      `<div class="col s4 row song" data-song-id="${song._id}">
          <div class= "song-output" data-name="${song.name}">
            <span class="song-name">${song.name}</span>
              <h5 class="artistname">By: <span class="artistname">${song.artistName}</span> </h5>
              <h5 class="releaseDate">Released: <span class="releaseDate">${song.releaseDate}</span> </h5>
            <div class='panel-footer valyrics'>
                <button class='btn btn-info cyan darken-2 lyrics-options'> View </button>
                <a class="modal-trigger waves-effect waves-light btn cyan darken-2 lyrics-options edit-song" href="#editModal">Edit</a>
                <a class="modal-trigger waves-effect waves-light btn cyan darken-2 lyrics-options delete-song" href="#deleteModal">Delete</a>
            </div>
        </div>
      </div>
      <!-- end one song -->
      `);
    $('div.songs-row').append(songsHtml);
    // allows user to click on view button, song name & artist name text on song card to view lyrics
    $('.view-lyrics, .song-name, .artistname').on('click', viewLyric);
    $('.delete-song').on('click', deleteSong);
    $('.edit-song').on('click', editSong);
//     $('#delete').on('click', handleDeleteSong);
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
                <a class="modal-trigger waves-effect waves-light btn cyan darken-2 lyrics-options delete-song" href="#deleteModal">Delete</a>
                <!-- buggy features
                <a class="modal-trigger waves-effect waves-light btn cyan darken-2 lyrics-options add-lyrics" href="#addLyricsModal">Add Lyrics</a>
          		  <a class="modal-trigger waves-effect waves-light btn cyan darken-2 lyrics-options edit-song" href="#editModal">Edit</a> -->
            </div>
        </div>
      </div>
      <!-- end one song -->
      `);
    $('div.songs-row').append(songsHtml);
    $('.delete-song').on('click', deleteSong);
    // $('.edit-song').on('click', editSong); // buggy
    // $('.add-lyrics').on('click', addLyric);
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
