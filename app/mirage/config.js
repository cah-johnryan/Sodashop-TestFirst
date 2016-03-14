import Mirage from 'ember-cli-mirage';

export default function() {
  this.urlPrefix = ''; // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = ''; // make this `api`, for example, if your API is namespaced
  this.timing = 400; // delay for each request, automatically set to 0 during testing

  this.get('/sodaBrands', function(db) {
    return {
      sodaBrands: db.sodaBrands
    };
  });

  this.get('/sodaBrands/:id', function(db, request) {
    let id = request.params.id;
    return {
      sodaBrands: db.sodaBrands.find(id)
    };
  });

  this.post('/sodaBrands', function(db, request) {
    var attrs = JSON.parse(request.requestBody).sodaBrand;
    var newSodaBrand = db.sodaBrands.insert(attrs);
    return {
      sodaBrand: newSodaBrand
    };
  });

  this.get('/sodas', function(db, request) {
    let sodaBrand = request.queryParams.equalTo;
    return {
      sodas: db.sodas.where({
        sodaBrand: sodaBrand
      })
    };
  });

  this.get('/sodas/:id', function(db, request) {
    let id = request.params.id;
    return {
      sodas: db.sodas.find(id)
    };
  });

  this.post('/sodas', function(db, request) {
    var attrs = JSON.parse(request.requestBody).soda;
    attrs.sodaBrand = Number(attrs.sodaBrand);
    var newSoda = db.sodas.insert(attrs);
    return {
      soda: newSoda
    };
  });

  this.put('/sodas/:id', function(db, request) {
    var id = request.params.id;
    var attrs = JSON.parse(request.requestBody).soda;
    var record = db.sodas.update(id, attrs);
    return {
      soda: record
    };
  });

  this.get('/users/:id', function(db, request) {
    let id = request.params.id;
    let requestedUser = db.users.find(id);
    requestedUser.password = '(omitted)';
    return {
      user: requestedUser
    };
  });

  this.post('/token', function(db, request) {
    var attrs = parseNonJsonBody(request.requestBody);
    if (attrs.grant_type === 'password') {
      let requestedUser = db.users.where({
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
      window._.each(nonJsonBody.split("&"), function(item) {
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
