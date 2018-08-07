import express from 'express';
import Demo from '../app/controllers/demo';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/demo', Demo.add);

module.exports = router;
