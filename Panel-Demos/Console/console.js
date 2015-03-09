(function (){

  function consoleTableList (){
    var records = [
      {a:1, b:2, c:3},
      {a:'foo', b:false, c:undefined}
    ];

    console.table(records);
  }

  function booYa (firstName, lastName){
    console.log('say BooYa !');
  }

  function monitorEventsTable (){
    console.table([
      {
        'Event Type': 'mouse',
        'Mapped Events': '"mousedown", "mouseup", "click", "dblclick", "mousemove", "mouseover", "mouseout", "mousewheel"'      },
      {
        'Event Type': 'key',
        'Mapped Events': '"keydown", "keyup", "keypress", "textInput"'
      },
      {
        'Event Type': 'touch',
        'Mapped Events': '"touchstart", "touchmove", "touchend", "touchcancel"'
      },
      {
        'Event Type': 'control',
        'Mapped Events': '"resize", "scroll", "zoom", "focus", "blur", "select", "change", "submit", "reset"'
      }
    ]);
  }

  this.consoleTableList = consoleTableList;
  this.booYa = booYa;
  this.monitorEventsTable = monitorEventsTable;
}).call(this);
