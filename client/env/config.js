// YOU DO NOT NEED TO EDIT this code.
//
// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.
if (!/(&|\?)username=/.test(window.location.search)) {
  var newSearch = window.location.search;
  if (newSearch !== '' & newSearch !== '?') {
    newSearch += '&';
  }
  window.username = (prompt('What is your name?') || 'anonymous');
  newSearch += 'username=' + username;
  window.location.search = newSearch;
}

//Put your parse application keys here!

// $.ajaxPrefilter(function (settings, _, jqXHR) {
//   jqXHR.setRequestHeader("X-Parse-Application-Id", "wPfavNOxOKTzlXiMq9r226nSo5Vl5aMFfEcvAupE");
//   jqXHR.setRequestHeader("X-Parse-REST-API-Key", "eCGqXWtDjoZofGzf785KvSODrUrXURbL6JCQqaHj");
// });
