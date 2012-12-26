<!DOCTYPE html>
<html>
<body>
<canvas id="myCanvas" width="700" height="500" style="border:1px solid #d3d3d3;">
Your browser does not support the HTML5 canvas tag.</canvas>

<script>

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.lineWidth = 2;
function Point(x, y) {
  this.x = x;
  this.y = y;
  function incrX(d) {
    this.x += d;
  }
  function incrY(d) {
    this.y += d;
  }
} // Point 

function WaveForm() {
  this.rungs = new Array();
  this.oCord = new Array();
  this.add = add;
  this.draw = draw;
  function add(row, point) {
    this.rungs.push(row);
    this.oCord.push(point);
  }//add

  function draw(cid) {
    //document.write("Called <br>");
    for (var i=0; i<this.rungs.length; i++) {
      //document.write("Called <br>");
       var row = this.rungs[i];
       var origin = this.oCord[i];
       cid.moveTo(origin.x, origin.y+row[0].y);
       for (var j=0; j<row.length; j++) { 
          cid.lineTo(origin.x+row[j].x, origin.y+row[j].y);
       }//for
    }//for
  } //draw
}//WaveForm

  
function ClockGen(lowWidth, highWidth, waveHeight, numCycle) {
  // creates a waveform with %lowWidth% size low and
  // %highWidth% size high and a wave height of %waveHeight%
  // %numCycle% is the number of clock cycles
  // returns an array of Points
  var row = new Array();
  var x = 0;
  for (i=0; i<numCycle; i++) {
    row.push(new Point(x, waveHeight));
    row.push(new Point(x+lowWidth, waveHeight));
    row.push(new Point(x+lowWidth, 0));
    row.push(new Point(x+lowWidth+highWidth, 0));
    row.push(new Point(x+lowWidth+highWidth, waveHeight));
    x = x + lowWidth + highWidth;
  }
  return row;
}

function PulseGen(activeLevel, pulseWidth, pulseHeight, start, end) {
  var row = new Array();
  var inactive = 0;
  var active = pulseHeight;
  if (activeLevel.toLowerCase() == "low") {
    inactive = pulseHeight;
    active = 0;
  } 
  row.push(new Point(0, active));
  row.push(new Point(start, active));
  row.push(new Point(start, inactive));
  row.push(new Point(start+pulseWidth, inactive));
  row.push(new Point(start+pulseWidth, active));
  row.push(new Point(end, active));
  return row;
}

clkPoints = ClockGen(50, 50, 70, 5);
p1 = PulseGen("high", 120, 70, 170, 500);
w = new WaveForm();
w.add(clkPoints, new Point(0, 100));
w.add(clkPoints, new Point(50, 200));
w.add(p1, new Point(0, 300));
w.draw(ctx);
ctx.stroke();

</script>

</body>
</html>
