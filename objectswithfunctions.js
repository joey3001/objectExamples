function ExampleObject() {
  this.value = 4; 
}

function DifferentExampleObject() {
  this.string = "this is different"; 
}

ExampleObject.prototype.valueManipulation = function() {
  this.value = this.value + 6; 
}

DifferentExampleObject.prototype.stringManipulation = function() {
  this.string = this.string + "you added something";
}

let joe = new ExampleObject(); 
joe.valueManipulation(); 
console.log(joe)

let brian = new ExampleObject(); 
brian.valueManipulation(); 
console.log(brian)

let svea = new DifferentExampleObject(); 
svea.stringManipulatoin(); 

svea.valueManipulation(); // no no, wont work 
joe.stringManipulation(); // no no, wont work 

