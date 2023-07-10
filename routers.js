const express = require('express');
const router = express.Router();
const {liveness,faceDoc} = require('./controller');





router.post('/liveness', async (req, res) => {
 
  try {
    const success = await liveness(req.body.tokenImage);
 

    res.send(success);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during the transfer.');
  }
});



router.post('/facedoc', async (req, res) => {
 
  try {
    const success = await faceDoc(req.body.tokenImage,req.body.idImage);
 

    res.send(success);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during the transfer.');
  }
});


router.get('/', async (req, res) => {

    try {
     
      res.send('middleware is live');
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred during the transfer.');
    }
  });
  


module.exports = router;
