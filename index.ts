//boolean
let isDone: boolean = false;
//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//String 
let color: string = "blue";
color = "red";

let fullName: string = 'Bob Bobbington';
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}`;

//Array
let list: number[] = [1, 2, 3];

//Tuple
let x: [string, number];
x = ["hello", 10];

//Enum
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;

enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Green;

enum Color {
  Red = 1,
  Green = 2,
  BLue = 4,
}


