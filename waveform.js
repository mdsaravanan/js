<!DOCTYPE html>
<html>
<body>

<script>
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
  this.rows = new Array()
  this.current = 0;

  function Iterator() {
    this.current = 0;
  }

  function next() {
    if (this.current>this.rows.length) {
       x = this.rows[this.current];
       this.current++;
       return x;
    } else {
       return None;
    }
  }     

  function add(coord) {
    this.rows.push(coord);
  }
} //Row

function WaveForm() {
  this.rungs = new Array();

  function add(row, point) {
    this.rungs.push(
  


  
person={firstname:"John",lastname:"Doe",age:50,eyecolor:"blue"}

document.write(person.firstname + " is " + person.age + " years old.");
</script>

</body>
</html>

