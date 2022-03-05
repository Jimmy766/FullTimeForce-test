const request = require('request');
const {Router} = require('express');
const router = Router();
require('dotenv').config();


router.get('/',(req,res)=>{
  
    const requestOptions = {
        url: process.env.GIT_URL_COMMITS,
        method: 'GET',
        json: {},
        qs: {},
        headers: {'user-agent': 'node.js',
        'Authorization': `token ${process.env.GIT_TOKEN}`}
      
      };
      request(requestOptions, (err, response, body) => {
        if (err) {
          console.log(err);
        } else if (response.statusCode === 200) {

          console.log(body);

          let result=body.map(item=>{
            
            return {
                sha:item.sha,
                message:item.commit.message,
                url:item.url,
                date:item.commit.author.date,
                name:item.commit.author.name
            }
          });
          
          res.send(result);
        } else {
          console.log(response.statusCode);
        }
      });
});
module.exports= router;