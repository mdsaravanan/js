<!DOCTYPE html>
<html>
<body>
<canvas id="myCanvas" width="700" height="500" style="border:1px solid #d3d3d3;">
Your browser does not support the HTML5 canvas tag.</canvas>

<script>

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
//ctx.moveTo(0,0);
//ctx.lineTo(100,100);
//ctx.stroke();
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

function Row() {
  this.rows = new Array();
  this.current = 0;
  function Iterator() {
    this.current = 0;
  }//Iterator
  function next() {
    if (this.current>this.rows.length) {
       x = this.rows[this.current];
       this.current++;
       return x;
    } else {
       return 0;
    }
  }//next     
  function add(coord) {
    this.rows.push(coord);
  }
} //Row

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
       cid.moveTo(origin.x, origin.y);
       for (var j=0; j<row.length; j++) { 
          cid.lineTo(origin.x+row[j].x, origin.y+row[j].y);
       }//for
    }//for
  } //draw
  //cid.stroke();
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

clkPoints = ClockGen(50, 50, 70, 5);
//document.write("It is farce"+clkPoints[0].x);
//for (var i=0; i<clkPoints.length; i++) {
//  document.write("True <br>");
//  p= clkPoints[i]
//  document.write("X= "+ p.x+" : Y= "+p.y +" <br>");
//}
w = new WaveForm();
w.add(clkPoints, new Point(0, 100));
w.add(clkPoints, new Point(50, 200));
w.draw(ctx);
//ctx.moveTo(0,0);
//ctx.lineTo(100,100);
//ctx.stroke();
ctx.stroke();

</script>

</body>
</html>

