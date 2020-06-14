//Chapter 6
//Question No 1
// var a = 10;
// document.write(++a + "<br>"); //11 
// document.write(a++ + 1 + "<br>"); //12     
// document.write(--a + "<br>"); //11
// document.write(a-- - 1 ); //10

//Question No 2
// var a = 2;
// var b =1;
// var First_stage = --a;
// document.write(First_stage + "<br>");
// var Second_stage = --a - --b;
// document.write(Second_stage + "<br>") ;
// var third_stage = --a - --b + ++b;
// document.write(third_stage + "<br>");
// var fourth_stage = --a - --b + ++b + b--;
// document.write(fourth_stage + "<br>");
// var result = --a - --b + ++b + b--;
// document.write("a is  " + a + "<br>");
// document.write("b is  " + b + "<br>") ;
// document.write("result is  " + result + "<br>");

//Question No 3
// var user = prompt("Enter Your Name","Name");
// document.write("Assalam u alaikum  " + user);

//Question No 4
// var num = prompt("Insert Number");
// if(num == "")
// {
//     for(var i = 1;i<=10;i++)
//     {
//         document.write("5 " + " * " + i + " = "  + i * 5 + "<br>");
//     }
   
// }
// else{

//     for(var i = 1;i<=10;i++)
//     {
//         document.write(num + " x " + i + " = " + num*i + "<br>")
//     }
// }

//Question No 5
var subject1 = prompt("Enter First Subject Name");
var subject2 = prompt("Enter Second Subject Name");
var subject3 = prompt("Enter Third Subject Name");
var subject1_tm = +prompt("Enter Total Marks");
var subject2_tm = +prompt("Enter Total Marks");
var subject3_tm = +prompt("Enter Total Marks");
var subject1_om = +prompt(subject1);
var subject2_om = +prompt(subject2);
var subject3_om = +prompt(subject3);
var total_marks = +subject1_om + +subject2_om + +subject3_om;
document.write("<h1>OBTAINED MARKS</h1>"+"<br>"+total_marks);
var percentage = (total_marks/300) * (100);
document.write("<h1>PERCENTAGE</h1>"+"<br>"+percentage);






