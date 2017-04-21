$(document).ready(function() {
  console.log('songs.js loaded!');

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

// post renders on page, shows up under api but when refreshed - newly submitted songs go missing?
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



function handleError(e) {
  console.log('uh oh');
}

function handleSuccess(res) {
  console.log(res);
  res.forEach(function(song) {
    console.log(`${song.name} ${song.artistName} ${song.releaseDate}`);
    var songsHtml =
          (`
              <div class="col s4 song-output" data-name="${song.name}">
                <span class="song-name">${song.name}</span>
                  <h5>By: <span class="artistname">${song.artistName}</span> </h5>
                  <h5>Released: <span class="releaseDate">${song.releaseDate}</span> </h5>

                <div class='panel-footer valyrics'>

                    <button class='btn btn-info view-lyrics'>View Lyrics</button>
                    <button class='btn btn-info add-lyrics'>Add Lyrics</button>
                    <button class='btn btn-info edit-lyrics'>Edit Song</button>
                    <button class='btn btn-info delete-lyrics'>Delete Song</button>


                </div>
            </div>
            <!-- end one song -->
          `);
    
    $('div.songs-row').append(songsHtml);
    $('.view-lyrics').on('click', viewLyric);
  });
};

function addSong(song) {
  var songsHtml =
        (`
            <div class="col s4 song-output" data-name="${song.name}">
              <span class="song-name">${song.name}</span>
              <h5> By: <span class="artistname">${song.artistName}</span> </h5>
              <h5> Released: <span class="releaseDate">${song.releaseDate}</span> </h5>

              <div class='panel-footer valyrics'>
                  <button class='btn btn-info view-lyrics'> View Lyrics </button>
                  <button class='btn btn-info add-lyrics'> Add Lyrics </button>

              </div>
          </div>

        `);
  $('div.songs-row').append(songsHtml);
  $('.view-lyrics').on('click', viewLyric);
}

function viewLyric(e) {
 //clickedbutton();
  //var currentSong = $(this).closest('.song-output').data('name');
  console.log(currentSong); // undefined
  }


function addLyric(e) {
clickedbutton();
  console.log('add lyric clicked');
  $('.addModal').modal();
  
}
function editLyric(e) {
  clickedbutton();
}
function deleteLyric(e) {
  clickedbutton();
}
function clickedbutton () {
 window.location = "/lyrics";
}

  //delete song when its delete button is clicked
  //$('#').on('click', '.delete-song', handleDeleteSongClick);
  //edit and save songs when edit button is clicked
  //$('#').on('click', '.edit-song', handleSongEditClick);
//};


// function handleSongEditClick(e) {
//   var $songsList = $(this).closest('.song');
//   var songId = $songsList.data('song-id');
 

//   //show the save and edit button after song as been edited.
//   $songsList.find('.save-song'). toggleClass('hidden');
//   $songsList.find('edit-song'). toggleClass('hidden');

//   var songName = $songslist.find ('span.song-name'). text();
//   $songslist.find('span.song-name').html('<input class = "edit-song-name" value="' + songName + '"></input>');

//   var artistName = $songslist.find ('span.song-artistName'). text();
//   $songslist.find('span.song-artistname').html('<input class = "edit-song-artistname" value="' + song-artistName + '"></input>');  

//   var releaseDate = $songslist.find ('span.song-releaseDate'). text();
//   $songslist.find('span.song-releaseDate').html('<input class = "edit-song-releaseDate" value="' + song-releaseDate + '"></input>');
 
// //after editing songs when the save button is clicked

// function handleSaveChangesClick(e) {
//  var songId = $(this). closest('.song').data('song-id');
//  var $songslist = $('[data-song-id=' +songId +']');

//  var data = {
//    name: $songslist.find('edit-song-name'). val(),
//    artistname:$songslist.find('edit-song-artistName'). val(),
//    releasename:$songslist.find('edit-song-releaseDate'). val(),
//   };

//   console.log('Updating song data', songId, 'with data', data);

//   $.ajax ({
//     method: 'PUT',
//     url:'api/genre/' + genre + '/songs',
//     success: handleSongUpdatedResponse
//   });
//  }


//function handleSongUpdatedResponse(data) {
  //console.log('response to update', data);
  //var SongId = data._id;
  //$('[data-song-id=' +songId +']').remove();
  //renderSong(data);

//function handleDeleteSongClick(e) {
  //var SongId = $(this).parents('song') .data('song-id');


//$.ajax ({
  //method: 'DELETE',
  //url:'api/genre/' + genre + '/songs'
  //success: handleDeleteSongSuccess
 //});
//}

//function handleDeleteSongSucess(data) {
  //var deletedSongId = data._id;
  //console.log('you have deleted this song');
  //$('[data-song-id=' +songId +']'). remove();

//}

//function renderSong (song)  {
  //console.log('rendering song', song);

//}




//})























