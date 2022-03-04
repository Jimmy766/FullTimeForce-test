const request = require('request');
const {Router} = require('express');
const router = Router();

router.get('/',(req,res)=>{
    res.send('Hello World');
});

router.get('/commits',(req,res)=>{
  
    const requestOptions = {
        url: 'https://api.github.com/repos/vitejs/awesome-vite/commits',
        method: 'GET',
        json: {},
        qs: {},
        headers: {'user-agent': 'node.js'}
      
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
                date:item.author.date,
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