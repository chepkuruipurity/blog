const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const controllers = require('../controllers')


router.get('/', (req, res) => {
  const data = req.config // {cdn:<STRING>, global:<OBJECT>}
  res.render('home', data) // render home.mustache
})
router.get('/post/:slug',(req,res,)=>{
  const slug= req.params.slug;
  const post={
    slug:slug
  }
  res.render('post',post );
})
module.exports = router
