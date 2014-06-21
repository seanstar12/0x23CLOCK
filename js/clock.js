(function refreshData() {
  var d = new Date();
  var h = zeroCheck(d.getHours());
  var m = zeroCheck(d.getMinutes());
  var s = zeroCheck(d.getSeconds());
      
  var color = '#'+h+m+s;
      
  $('#back').animate({backgroundColor: color}, 250);
  $("p#hex").text(color);
         
  setTimeout(refreshData,1000);
})();

var state  = "normal";

$(window).keypress(function( event ) {
  if ( event.which == 102 ) state = (state == "fullscreen") ? "normal" : "fullscreen";
  chrome.tabs.getCurrent(function(tab){
    chrome.windows.update(tab.windowId, { 'state': state });
  });
});

setTimeout(function () {
  $("p#hex").fadeIn(1000);
},1000);

function zeroCheck(num) {
  return (num <= 9) ? '0' + num : num;
}
