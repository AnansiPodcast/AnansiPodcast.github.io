var updateChannel = 'beta'
  , infoURL = 'http://anansi-podcast.herokuapp.com/latest/'+updateChannel+'/info'
  , homeContainer = $('#home-container')
  , buttonLabelTemplate = 'Anansi Desktop ${version} ' + updateChannel
  , downloadPath
  , buttonContainer

if(homeContainer.length) {
  buttonContainer = homeContainer.find('.button-container')
  $.get(infoURL, function(response){
    downloadPath = response.url
    buttonContainer.find('small').text(buttonLabelTemplate.replace('${version}', response.latest))
  })
  buttonContainer.find('button').on('click', function() {
    location.href = downloadPath
  })
}
