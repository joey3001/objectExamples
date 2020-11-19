class ObjectExample {

  constuctor() {
    this.value = 4;
  }

  valueManipulation(){
    this.value = this.value + 6; 
  }
}

class DifferentObjectExample {

  constuctor() {
    this.string = "this is different";
  }

  stringManipulation(){
    this.string = this.string + "you added something"; 
  }
}

/////// document.ready 

let joe = new ObjectExample(); 
console.log(joe); 

joe = {value: 4}

let brian = new ObjectExample(); 
console.log(brian);

brian = {value: 4}

let svea = new DifferentObjectExample()
console.log(svea) 

svea = {string: "this is different" }

joe.valueManipulation();
joe = {value: 10}

svea.stringManipulation();
svea = {string: "this is

joe.stringManipulation(); //wont work 

brian.valueManipulation(); 
brian.stringManipulation(); 