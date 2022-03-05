const request = require('request');
const { Router } = require('express');
const  GetCommits = require('../services/getCommits');
const router = Router();
require('dotenv').config();


router.get('/', (req, res) => {

  let commits=new GetCommits();
  commits.execute()
    .then(result=>{
      res.send(result);
    });
});
module.exports = router;