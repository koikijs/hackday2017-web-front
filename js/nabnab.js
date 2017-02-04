(function() {
  var con = new WebSocket('ws://192.168.1.117:8888');
  var video = document.getElementsByClassName('video')[0];
  var isOpen = false;
  con.onopen = function() {
  };

  con.onerror = function() {
    console.log("connection failed")
  };

  con.onmessage = function (e) {
    console.log(e.data);
    if (e.data === 'isOpen' && !isOpen) {
      isOpen = true;
      video.className = 'video active';
    } else if (e.data === 'isClose' && isOpen) {
      isOpen = false;
      video.className = 'video deactive';
    }
  };
})();
