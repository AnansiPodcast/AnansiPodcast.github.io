var updateChannel = 'beta'
  , infoURL = 'http://anansi-podcast.herokuapp.com/latest/'+updateChannel+'/info'
  , homeContainer = $('#home-container')
  , menu = $('.main-menu')
  , buttonLabelTemplate = 'Anansi Desktop ${version} ' + updateChannel
  , downloadPath
  , buttonContainer

function activePage(page) {
  menu.find('li[rel="'+page+'"]').addClass('active')
}

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

menu.find('li').removeClass('active')
if(location.href.indexOf('blog') > -1) activePage('blog')
