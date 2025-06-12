// String Methods
// Javascript string are primitive datatype
// that is used to work with texts

// there are 3 ways to use string

//1. Single Qotation==> ''
//2. Double Quotation==> ""
//3. Template literals==>`` (back ticks)

let a = 'Rahman'
let b = "Rahman"
let c = `Rahman`

console.log(a,b,c)

console.log(a[0])//R
console.log(b[1])//a
console.log(c[2])//h

console.log(a.length) //6

// In Javascript its case sensitive 
// a not equal to A
// c is not equal to C
console.log("c" == "c")
console.log("c" == "C")

// In JS to add new lines in string 
// use \n
console.log("I am\nRahman\nArmaan")

//1. charAt
let college = "Global"
console.log(college.charAt(0))
// charAt takes index value and gives output of string elrment
// of that index

//2. indexOf
let fname = "College"
console.log(fname.indexOf("C"))//0
console.log(fname.indexOf("S"))//-1

//3. concat9

let n1 = "Global"
let n2 = " College"
let n3 = n1.concat(n2);
console.log(n3)
console.log(n1.concat(n2))

//4.includes

let msg = "Javascript is fun"
console.log(msg.includes("Java"))

//5.lastindexof

let m1 = "Global"
console.log(m1.indexOf("l"))//1
console.log(m1.lastIndexOf("l"))//5

//6. length

let lang = "Java"
console.log(lang.length)

//7. repeat()

let m2 = "Hi "
console.log(m2.repeat(100))
console.log(m2.repeat(100))

//8.replace()

let m3 = "ball bat"
console.log(m3.replace("b", "c"))

//9.replaceAll
let m4 = "ball bat"
console.log(m3.replaceAll("b", "c"))

// 10.startsWith()
// 11.endsWith()

let m5 = "Javascript is fun"
console.log(m5.startsWith("Java"))//true
console.log(m5.startsWith("fun"))//false

console.log(m5.endsWith("fun"))//true
console.log(m5.endsWith("Java"))//false

//12. toLowerCase
//13. toUpperCase

let m6 = "HELLO"
console.log(m5.toLowerCase())// hello

let m7 = "hello"
console.log(m7.toUpperCase())//HELLO

//14. trim()

let m8 = "  HELLO Global  "
console.log(m8.trim())

//15.Slice  (index,length)

let m9 = "Java"
//index 0123
//length 1234

console.log(m9.slice(2, 4))

//16.split()

let m10 = "Globa;-College-Hyderabad";
//["Global","College","Hyderabad"]
console.log(m10.split(" "))
