const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.route("/")
    .get((req, res) => {
        res.status(200).send({
            message: `Successful${req.method} from ${req.hostname}`,
            params: req.params,
            query: req.query,
            baseUrl: req.baseUrl
        })
    })

app.listen(8080, ()=>{
    console.log('successfully running on port 8080')
});

