//Chapter 5
//Question no 1
var a = 3;
var b = 5;
var c = a+b;
var d = a-b;
var e = a*b;
var f  = a/b;

document.write("Sum of  " +  a + " & " + b + " is " + c + "<br>" + "<br>" );
document.write("Subtraction of  " +  a + " & " + b + " is " + d + "<br>" + "<br>");
document.write("Multiplication of  " +  a + " & " + b + " is " + e + "<br>" + "<br>");
document.write("Division of  " +  a + " & " + b + " is " + f + "<br>" + "<br>");
 
//Question no 2
var a = 5;
document.write("Initialization Value is " + a + "<br>");

var b = ++a;

document.write("Value After Increment  " + b + "<br>");

var c = b + 7;
document.write("After Addition is " + c + "<br>")

var d = --c;
document.write("Value After Deccrement  " + d + "<br>");

var e = d%2;
document.write("Modulus is " + e + "<br>");

//Question no 3
var ticket = 500;
var cost_ticket = 6*ticket;
document.write("Total Cost Of Buying Ticket is " +cost_ticket);

//Question no 4
var n  = 4;
for(var i = 1;i<=10;i++)
{
    document.writeln("4"+ "x" + i +  "=" + n*i + "<br>")
}

//Question no 5
var celcius = 25;
var farhenite = 70;
var celcius_formula = (farhenite-32)*5/9;
var farhenite_formula = (celcius*9/5)+32;
document.write("when celcius temprature is 25 degree so the farhenite becomes " + farhenite_formula+"F"+ "<br>") ;
document.write("when farhenite temprature is 70 degree so the celcius becomes" + celcius_formula+"C"+ "<br>")

//Question no 6
var poi_1 = 650;
var poi_2 = 100;
var qoi_1 = 3;
var qoi_2 = 7;
var sc = 100;
var total_1 = poi_1*qoi_1;
var total_2 = poi_2*qoi_2;
var total_cost = total_1+total_2+sc;
document.write("Total Cost Of Your Order Is " + total_cost);

//Question no 7
var total_marks = 980;
var marks_obtained = 804;
var percentage = (marks_obtained/total_marks) * (100);
document.write("Percentage " + percentage);

//Question no 8
var us_dollar = 104.80;
var convert_dollar = 10*us_dollar;
var saudi_riyal = 28;
var convert_riyal = 25*saudi_riyal;
var total_currency = convert_dollar+convert_riyal;
document.write("Total Currency In PKR " + total_currency);

//Question no 9
var n = 5;
var ad = n+5;
var mul = n*10;
var div = n/2;
document.write("Arithmetic Calculations " + ad + "   " + mul + "  " + div);

//Question no 10
var current_year = 2020;
var birth_year = 2000;
var age_find = current_year-birth_year;
document.write("My Age Is " + age_find);

//Question no 11
var radius  = 20;
var pi = 3.14;
var circumference = 2*pi*radius;
var area = pi*(radius*radius);
document.write("Circumference of Circle : " + circumference + "<br>");
document.write("Area of Circle : " + area + "<br>");

//Question no 12
var favourite_snacks = "lays";
var current_age = 20;
var maximum_age = 65;
var snacks_per_day = 5;
var current = current_age*snacks_per_day;
var maximum = maximum_age*snacks_per_day;
var total = maximum-current;
document.write("you will need " + total  + favourite_snacks +  " to last you until the ripe old age of " + maximum_age);




