(function (){

  function addRowToTable (){
    var elm = document.createElement('tr');
    var tableBody = document.getElementsByTagName('tbody').item();
    var record = ['Amjad', 'Amazon', 'Amoeba', 'Arm guard'];

    record.forEach(function (item){
      var td = document.createElement('td');
      td.appendChild(document.createTextNode(item));
      elm.appendChild(td);
    });

    tableBody.appendChild(elm);
  }

  function addAttribute (){
    var titleElem = document.getElementsByClassName('title')[0];
    titleElem.className += ' green';
  }

  function removeRowFromTable (){
    var tableBody = document.getElementsByTagName('tbody').item();
    if(typeof tableBody !== undefined){
      tableBody.removeChild(tableBody.children[tableBody.children.length - 1]);
    }
  }

  this.addRowToTable = addRowToTable;
  this.addAttribute = addAttribute;
  this.removeRowFromTable = removeRowFromTable;

}).call(this);
