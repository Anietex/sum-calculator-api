import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: 'Calculator API'});
});

router.all('*', (req, res) =>{
  res.status(404).json({message: 'Page not found'})
})

module.exports = router;
