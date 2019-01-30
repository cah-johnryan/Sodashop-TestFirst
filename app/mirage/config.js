import Mirage from 'ember-cli-mirage';

export default function () {
  this.urlPrefix = ''; // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = ''; // make this `api`, for example, if your API is namespaced
  this.timing = 400; // delay for each request, automatically set to 0 during testing

  this.get('/sodaBrands');

  this.get('/sodaBrands/:id');

  this.post('/sodaBrands');

  this.get('/sodas');

  // this.get('/sodas', function(db, request) {
  //   let sodaBrand = request.queryParams.equalTo;
  //   return {
  //     sodas: db.sodas.where({
  //       sodaBrand: sodaBrand
  //     })
  //   };
  // });

  this.get('/sodas/:id');

  this.post('/sodas');

  this.put('/sodas/:id');

  this.get('/users/:id', ({users}, request) => {
    let id = request.params.id;
    let requestedUser = users.find(id);
    requestedUser.password = '(omitted)';
    return requestedUser;
  });

  this.post('/token', (schema, request) => {
    var attrs = parseNonJsonBody(request.requestBody);
    if (attrs.grant_type === 'password') {
      let requestedUser = schema.users.where({
        userName: attrs.username,
        password: attrs.password
      })[0];
      if (requestedUser) {
        return buildResponse(200, {
          access_token: 'secret token!',
          userId: requestedUser.id
        });
      } else {
        return buildResponse(400, {
          message: 'invalid login information provided'
        });
      }
    } else {
      return buildResponse(400, {
        message: 'unsupported grant type'
      });
    }

    function parseNonJsonBody(nonJsonBody) {
      let result = {};
      window._.each(nonJsonBody.split("&"), function (item) {
        var keyPair = item.split("=");
        result[keyPair[0]] = keyPair[1];
      });
      return result;
    }

    function buildResponse(responseType, responseJsonObject) {
      return new Mirage.Response(responseType, {
        some: 'header'
      }, responseJsonObject);
    }
  });
}
