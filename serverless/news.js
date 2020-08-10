var http = require("http");
var apiKey = "d007ed4ee98c49deb09488f346cace84";
//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'

exports.handler = function (event, context, callback) {
  var topic = event.queryStringParameters.category;
  var options = {
    host: "newsapi.org",
    path:
      "/v2/top-headlines?country=pt&category=" + topic + "&apiKey=" + apiKey,
  };

  http
    .request(options, function (response) {
      var str = "";

      //another chunk of data has been received, so append it to `str`
      response.on("data", function (chunk) {
        str += chunk;
      });

      //the whole response has been received, so we just print it out here
      response.on("end", function () {
        callback(null, {
          statusCode: 200,
          body: str,
        });
      });
    })
    .end();
};
