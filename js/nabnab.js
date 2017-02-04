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
    var type = e.data.split(',')[0];
    var value = Number(e.data.split(',')[1] || 0);
    if (type === 'isOpen' && !isOpen) {
      isOpen = true;
      video.className = 'video active';
    } else if (type === 'isClose' && isOpen) {
      isOpen = false;
      video.className = 'video deactive';
    }
    if (type === 'ambient' && isOpen && value < 100) {
      video.style.filter = 'brightness(' + value + '%)';
    }
  };
})();
