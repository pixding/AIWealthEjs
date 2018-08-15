var express = require('express');
var router = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var fs = require("fs");


var FaceApi = require("baidu-aip-sdk").face;
var faceApi = new FaceApi("xxx","xxx","xxx")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload',multipartMiddleware,function(req,res,next){
  fs.readFile(req.files.thumbnail.path, "base64",function (err, data) {　
    
    faceApi.detect(data,"BASE64",{"face_field":"beauty,age,gender,glasses"})
    .then(function(ren){
      res.send(ren);
    })


    　
  });


})

module.exports = router;
