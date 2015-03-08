(function (){

  var detached;

  function createDetachedNodes (){
    var p = document.getElementById('p');
    detached = document.createElement('div');
    p.appendChild(detached);
    p.removeChild(detached);
    fill();
  }

  function fill (){
    for(var i = 0; i < 25; ++i){
      var div = document.createElement('div');
      div.data = new Array(10000);

      var j = 0;
      var l = 0;
      for(j = 0, l = div.data.length; j < l; ++j){
        div.data[j] = j.toString();
      }
      detached.appendChild(div);
    }
  }

  function removeDetachedNodes (){
    detached = null;
  }

  this.createDetachedNodes = createDetachedNodes;
  this.removeDetachedNodes = removeDetachedNodes;

}).call(this);
