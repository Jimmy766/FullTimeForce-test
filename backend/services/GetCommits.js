const request = require('request');
require('dotenv').config();

class GetCommits{
   

    execute(){
       
    const requestOptions = {
    url: process.env.GIT_URL_COMMITS,
    method: 'GET',
    json: {},
    qs: {},
    headers: {
        'user-agent': 'node.js',
        'Authorization': `token ${process.env.GIT_TOKEN}`
        }
    };
    
        return new Promise((resolve, reject) => {
            request(requestOptions, (err, response, body) => {
                if (err) {
                  console.log(err);
                  reject(err);
                } else if (response.statusCode === 200) {
                    
                  let result = body.map(item =>({
                      sha: item.sha,
                      message: item.commit.message,
                      url: item.url,
                      date: item.commit.author.date,
                      name: item.commit.author.name
                    })
                  );
            
                  resolve(result);
                } else {
                  console.log(response.statusCode);
                }
              });
        })
    }
}
module.exports= GetCommits;