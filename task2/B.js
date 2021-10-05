function Robot(name) {
  this.name = name;
}

function add(op1, op2) {
  this.name = this.name || "Human";
  return this.name + " can count to " + (op1 + op2);
}

const voltron = new Robot("Voltron");

const operation1 = add.call({}, 0, 1);
const operation2 = add.bind(voltron)(1, 2);
const operation3 = add.call(voltron, 20, 30);
console.log(operation1);
console.log(operation2);
console.log(operation3);
("Human can count to 1"); //0 + 1
("Voltron can count to 3"); //1 + 2
("Voltron can count to 50"); //20 + 30
