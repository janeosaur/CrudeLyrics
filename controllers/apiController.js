// to GET /api 

function index(req, res) {
  res.json({
      message: 'welcome to crude lyrics',
      documentation_url: 'https://github.com/janeosaur/CrudeLyrics',
      base_url: 'localhost:3000/',
      endpoint: [{
        method: '',
        path: '',
        description: '',
      }]
    });
  }

module.exports = {
  index: index
}
