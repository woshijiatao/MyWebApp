console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

$(function () {
  console.log('ready!');
  $('#settingIcon').on('click', function () {
    $('#styleSetting').toggle();
  });
})
