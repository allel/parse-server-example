require('./triggers/project');

Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});
