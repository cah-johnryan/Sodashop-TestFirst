export default function() {
  this.urlPrefix = ''; // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = ''; // make this `api`, for example, if your API is namespaced
  this.timing = 400; // delay for each request, automatically set to 0 during testing

  this.get('/sodaBrands', function(db) {
    return {
      sodaBrands: db.sodaBrands
    };
  });

  this.post('/sodaBrands', function(db, request) {
  var attrs = JSON.parse(request.requestBody).sodaBrand;
  var sodaBrand = db.sodaBrands.insert(attrs);
  return sodaBrand;
});
}
