var images1 = [
[1, 60, 70],
[2, 40, 50],
[3, 70, 75],
[4, 30, 40],
[5, 30, 50],
[6, 60, 70],
[7, 80, 100],
[8, 20, 40],
[9, 60, 70],
[10,  70, 80],
[11,  80, 95],
[12,  70, 80],
[13,  90, 100],
[14,  10, 20],
[15,  20, 40],
[16,  60, 70],
[17,  70, 80],
[18,  90, 100],
[19,  10, 25],
[20,  70, 80],
[21,  60, 70],
[22,  0,  30],
[23,  30, 40],
[24,  70, 90],
[25,  0,  20],
[26,  80, 100],
[27,  10, 20],
[28,  0,  20],
[29,  20, 30],
[30,  80, 100],
[31,  70, 80],
[32,  40, 50],
[33,  10, 30],
[34,  80, 100],
[35,  70, 80],
[36,  40, 50],
[37,  80, 90],
[38,  10, 30],
[39,  0,  20],
[40,  20, 30],
[41,  40, 60],
[42,  60, 80],
[43,  60, 80],
[44,  70, 80],
[45,  50, 70],
[46,  80, 100]
];

var images2 = [
[47,  50, 60],
[48,  80, 95],
[49,  50, 80],
[50,  50, 70],
[51,  20, 30],
[52,  40, 50],
[53,  60, 70],
[54,  40, 70],
[55,  40, 60],
[56,  60, 70],
[57,  80, 90],
[58,  80, 90],
[59,  80, 90],
[60,  90, 100],
[61,  90, 100],
[62,  40, 60],
[63,  40, 60],
[64,  80, 90],
[65,  50, 60],
[66,  30, 50],
[67,  75, 90],
[68,  20, 35],
[69,  20, 35],
[70,  70, 80],
[71,  40, 60],
[72,  75, 80],
[73,  75, 85],
[74,  40, 60],
[75,  70, 80],
[76,  80, 90],
[77,  80, 90],
[78,  95, 100],
[79,  30, 40],
[80,  40, 60],
[81,  30, 40],
[82,  80, 90],
[83,  80, 90],
[84,  90, 100],
[85,  20, 30],
[86,  60, 70],
[87,  50, 60],
[88,  45, 65],
[89,  80, 90],
[90,  60, 70],
[91,  60, 70],
[92,  40, 60],
[93,  30, 60],
[94,  90, 100],
[95,  20, 30],
[96,  90, 100]
//[97,  60, 70]
];

var viewedImages = new Array();

function getImage(images) {
  var rand = parseInt(Math.random()*(images.length), 10);
  console.log(viewedImages.length);
  return images[rand];
};

function removeIndex2(val) {
    if (val > -1) {
      images2.splice(val, 1);
    }
};

function removeIndex1(val) {
    if (val > -1) {
      images1.splice(val, 1);
    }
};

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
});

app.configure('development', function(){
  app.use(express.errorHandler());
  app.use(express.bodyParser());
});

/*app.post('/', function (req, res) {
    console.log(request.body.name);
});*/

app.get('/', function (req, res, next) {
  var options = {
    root: __dirname + '/public/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  res.sendfile('index.html', options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent: ' + 'index');
    }
  });
});

app.get('/images/banner.jpg', function (req, res, next) {
  var options = {
    root: __dirname + '/public/images/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  res.sendfile('banner.jpg', options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('banner.jpg');
    }
  });
});

//stylesheets
app.get('/css/:name.css', function (req, res, next) {
  var options = {
    root: __dirname + '/public/css/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  fileName = req.params.name;
  res.sendfile('style.css', options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('style.css');
    }
  });
});

app.get('/css/images/overlay.png', function (req, res, next) {
  var options = {
    root: __dirname + '/public/css/images/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  res.sendfile('overlay.png', options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('images/overlay.png');
    }
  });
});

//font
app.get('/fonts/font:name', function (req, res, next) {
  var options = {
    root: __dirname + '/public/fonts/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  fileName = 'font' + req.params.name;
  console.log(fileName);
  res.sendfile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log(fileName);
    }
  });
});

//javascript
app.get('/js/:name', function (req, res, next) {
  var options = {
    root: __dirname + '/public/js/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  fileName = req.params.name;
  console.log(fileName);
  res.sendfile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log(fileName);
    }
  });
});

//photos page
var pairs = new Array(); //TODO: js array of arrays

app.get('/start.html', function (req, res, next) {
  //images = populateImages();
  var options = {
    root: __dirname + '/public/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  res.sendfile('start.html', options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('start.html');
    }
  });
});

app.get('/images/pic1.jpg', function(req, res) {
  if(viewedImages.length < 96) {
    var image = getImage(images1);
    removeIndex1(image[0]-1);
    imageURL = image[0] + '.jpg';
    viewedImages.push(image);

    var options = {
      root: __dirname + '/public/images/',
      dotfiles: 'deny',
      headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
      }
    };

    //fileName = req.params.name;
    res.sendfile(imageURL, options, function (err) {
      if (err) {
        console.log(err);
        res.status(err.status).end();
      }
      else {
        console.log('Sent: image1');
      }
    });
  }
});

app.get('/images/pic2.jpg', function(req, res) {
  if(viewedImages.length < 96) {
    var image = getImage(images2);
    removeIndex2(image[0]-1);
    imageURL = image[0] + '.jpg';
    viewedImages.push(image);

    var options = {
      root: __dirname + '/public/images/',
      dotfiles: 'deny',
      headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
      }
    };

    //fileName = req.params.name;
    res.sendfile(imageURL, options, function (err) {
      if (err) {
        console.log(err);
        res.status(err.status).end();
      }
      else {
        console.log('Sent image2');
      }
    });
  }
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
