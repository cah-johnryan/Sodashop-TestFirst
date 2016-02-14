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
        'sodaBrand': sodaBrand
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
}
