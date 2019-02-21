/*
5 Primitive Types
Number
String
Boolean
undefined
NULL

All are represented as var.
So:
var x=5;
var x="Hello";
Both are the same variable, and x would now be "Hello"
var a=2;
var b=3;
var c=a+b;
or var c=a++;
or var c=a--;

var pi = Math.PI();
var x = Math.round(5.7); //6
var x = Math.pow(8,2) //8^2
as well as .sqrt .abs .ceil .floor .sin((radians)*90)
.min and .max(10 20 30 40 50)
.random() 0 or 1.

var x = 12;
x.toString(); //Converts to string
x.toExponential(); //Converts to exponential

var x = 9.656;
x.toFixed(0); //10
x.toFixed(1); //9.7

You can also convert strings into numbers

ParseInt("10") //10
ParseInt("10.3") //10
ParseInt("10 20 30") //10
ParseInt("20 years") //20
ParseInt("years 20") //NAN Not a number

There's also a ParseFloat which does the same thing, but the only difference in the above is that the "10.3" would actually be 10.3 this time

var x = "Hello";
var y = "wp";
var c = x + y; //"Hellowp"
Adding a string to any other variable will convert it all into a string

var x = 10;
var y = "20";
var c = x + parseInt(y); //Outputs int 30
var d = x * y; //200 This actually works because the multiplication and division convert strings

var a = 10;
var b = "20";
var c = "wp";
var d = (a+b) * (b+c);
10 + "20" * "20" + "wp"
"10 20" * "20 wp"
10 * 20
200

var x = "Hello";
x.length();
x.indexOf();

var x = "I am";
x.indexOf("am"); //2
x.lastIndexOf() //2
x.search("am") //2 Just finds first appearance of substring

var str = "My name is amy and I am teaching";
str.indexOf("am"); //4
str.indexOf("am",2); //11
str.lastIndexOf("am"); //21
str.search("am"); //4

x.substring(start,end);
x.substr(start,length);

var x = "My name is Maddy";
x.substring(3,5); //"nam"
x.substr(3,5); //"name "
x.replace("string","string");
x.toUpperCase();
x.toLowerCase();
x.split(""); //Splits each letter
x.split(" "); //Splits the words
x.split(","); //Splits at commas
All split use makes an array of strings

document.write("<table></table>");

var str = "My name is Maddy";
var n = str.search("Maddy"); //Finds Maddy
var n1 = str.replace(/maddy/i,"Elsa"); //Ignores case of Maddy, replaces with "Elsa"

i - Search to ve case-insensitive
g - global match; matches all occurences
m - multi line match
The n* quantifier matches any string that contains zero or more occurrences of n.
The n+ quantifier matches any string that contains at least one n.
[abc] - looks only at the characters in the brackets
[0-9] - looks only at the digits, adding {2} to the end ] wil search for two digits together. Can be increseded to whatever
[a-z]*
[a-z]+ + means it looks for one or more letters
[a-z]+ \s [a-z]+ Searching for a two words
\s is a space
\d is a digit
[0-9]+ 1 or more numbers
[a-z]* 0 or more letters
[A-Z][a-z] One capital, one lowercase letter
\d+ One or more digits

I don't know if these work, but supposedly this is how you'd search for an email, both should get the same output:
([a-z A-Z]|[0-9])+@[a-z]+[a-z]{2-,3}
(\w|\d)+@[a-z]+[a-z]{2-,3}

//Functions
function name(para 1, para 2){
	reutrn x;
}
function add(x,y){
	var z = x + y;
	return z;
}
//Can be called like so: var z = add(2,3);

//Problem 1 Searches for zeros in a given array, returns boolean
function noZeros(new Array(nums)){
	convertToString = n.toString();
	if([0].convertToString){
		return true;
	}
	else
		return false;
}
//Problem 2 An array of the average of each row in a given 2D matrix
function rowAverages(mat){
	var result = [];
	for (var i =0; i< mat.length()[0];i++){
		result.push(math.average(mat[i]));
	}
	return result;
}
*/