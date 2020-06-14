//Chapter 9-11
//Question No 1
// var city = prompt("Enter City Name","");
// if(city=="Karachi")
// {
//     document.write("<p>Weclome to The City Of Lights</p>")
// }
// else{
//     document.write("<p>Sorry</p>")

// }

//Question No 2

// var gender = prompt("Enter Your Gender","Gender");
// if(gender == "male")
// {
//     document.write("<q>Good Morning Sir</q>")
// }
// if(gender == "female")
// {
//     document.write("<q>Good Morning Mam</q>")

// }

//Question No 3

// var traffic_colour = prompt("Enter traffic Colour","Colour");
// if(traffic_colour == "Red")
// {
//     document.write("<P>Must Stop</p>")
// }
// if(traffic_colour == "Yellow")
// {
// document.write("<P>Ready To Move</p>")
// }
// if(traffic_colour == "Green")
// {
//     document.write("<P>Move Now</p>")
// }

//Question No 4
// var remaining_fuel = +prompt("Enter Remaining Fuel","Insert");
// if(remaining_fuel == 0.25)
// {
//     document.write("<P>You have Much fuel in your car</P>")
// }
// if(remaining_fuel > 0.25)
// {
//     document.write("<P>Do Not Need fuel In your car</P>")

// }
// if(remaining_fuel < 0.25)
// {
//     document.write("<P>Please refuel The fuwl in your car</P>")

// }


//Question No 5
// var a = 4;
// if(++a === 5)
// {
//     alert("given condition for variable a  is true ");
// }
// var b = 82;
// if(b++ === 83)
// {
//     alert("given condition for variable b  is true ");

// }
// else
// {
//     alert("Not True");
// }
// var c = 12;
// if(c++ === 13)
// {
//     alert("Condition 1 Is true");
// }
// alert(c);
// if(c === 13)
// {
//     alert("Condition 2 Is true");

// }
// if(++c < 14 )
// {
//     alert("Condition 3 Is true");

// }
// alert(c);
// if(c === 14)
// {
//     alert("Condition 4 Is true");

// }

//Question No 6

// var  material_cost = 20000;
// var labour_cost = 2000;
// var total_cost = material_cost + labour_cost;
// if(total_cost === labour_cost + material_cost)
// {
//     alert("The Cost Is Equal");
// }
// else{
//     alert("Not Eqqual");

// }

//Question No 7
// var is_divide = prompt("Insert Number");
// var bool = true;
// var bool1 = false;
// if(is_divide % 2 == 0)
// {
//     alert(bool);
// }
// else{
//     alert(bool1);

// }

//Question No 8
// if("car" < "cat")
// {
    // alert("car is smaller than cat");
// }

//Question No 9
//Marksheet
var English_Obtained = +prompt("Enter Marks");
var Urdu_Obtained = +prompt("Enter Marks");
var Math_Obtained = +prompt("Enter Marks");
var total_marks = +prompt("Total Marks");
var grade = 'A+';
var remarks = "Excellent"; 
var grade1 = 'A';
var remarks1 = "good"; 

var grade2 = 'B';
var remarks = "You Need To Improve"; 

var grade3 = 'Fail';
var remarks = "Sorry"; 

var marks_Obtained = English_Obtained + Urdu_Obtained + Maths_Obtained;
var percentage = (marks_Obtained/total_marks) * 100;
if(percentage >= 80)
{
   document.write("Grade = " + grade);
   document.write("Remarks = " + remarks );
} 
else if (percentage >= 70)
{
    document.write("Grade = " + grade1);
    document.write("Remarks = " + remarks1 );
   
}
else if(percentage >= 60)
{
    document.write("Grade = " + grade2);
    document.write("Remarks = " + remarks2 );
}
else if(percentage< 60)
{
    document.write("Grade = " + grade3);
    document.write("Remarks = " + remarks3 );
}
document.write("<h1>MARKSHEET</h1>")
document.write("Total Marks : " + total_marks);
document.write("Marks Obtained : " + marks_Obtained);
document.write("Percentage : " + percentage);








