Parse.Cloud.beforeSave('Project', function(request, response) {
  if (!request.object.get('name')) {
    response.error('name is required');
  } else {
    response.success();
  }
});
