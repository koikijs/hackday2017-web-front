(function() {
  var con = new WebSocket('ws://10.20.52.198:8888');
  var video = document.getElementsByClassName('video')[0];
  var isOpen = false;
  con.onopen = function() {
  };

  con.onerror = function() {
    console.log("connection failed")
  };

  con.onmessage = function (e) {
    var data = JSON.parse(e.data);
    if (data.event === 'isOpen' && !isOpen) {
      isOpen = true;
      video.className = 'video active';
    } else if (data.event === 'isClose' && isOpen) {
      isOpen = false;
      video.className = 'video';
    }
  };
})();
