// to GET /api
function index(req, res) {
  res.json({
      message: 'welcome to crude lyrics',
      collaborators: 'addy and jane',
      documentation_url: 'https://github.com/janeosaur/CrudeLyrics',
      base_url: 'localhost:3000/',
      endpoint: [
        {
        method: 'GET',
        path: '/api',
        description: 'shows this! :)',
        },
        {
        method: 'GET',
        path: '/api/songs',
        description: 'shows all songs as JSON',
        },
        {
        method: 'GET',
        path: '/api/songs/:id',
        description: 'shows req.param.id specific song as JSON',
        },
        {
        method: 'GET',
        path: '/api/lyrics',
        description: 'shows all lyrics as JSON',
        },
        {
        method: 'GET',
        path: '/api/lyrics/:id',
        description: 'shows req.param.id specific lyric as JSON',
        },
        {
        method: 'GET',
        path: '/api/genre/:genre/:song/lyrics',
        description: 'shows req.param.genre and song specific lyric as JSON',
        },
        {
        method: 'GET',
        path: '/api/genre/:genre/:songs',
        description: 'shows req.param.genre specific songs as JSON',
        },
        {
        method: 'POST',
        path: '/api/songs',
        description: 'creates a song',
        },
        {
        method: 'PUT',
        path: '/api/lyrics/:song',
        description: 'updates a lyric',
        },
        {
        method: 'PUT',
        path: '/api/genre/:genre/:song',
        description: 'updates a song'
        },
        {
        method: 'DELETE',
        path: '/api/genre/:genre/:song',
        description: 'deletes a song'
        }
      ]
    });
  }

module.exports = {
  index: index
}
