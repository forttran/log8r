module.exports.homelist=function(req, res) {
  res.render('location-list', { title: 'homelist' });
};

module.exports.locationInfo=function(req, res) {
  res.render('Location-info', { title: 'location Info' });
};

module.exports.addReview=function(req, res) {
  res.render('location-review-form', { title: 'add Review' });
};