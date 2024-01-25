alert("Student Marksheet")

var name = prompt("Enter the Student Name: ")
var Father_Name = prompt("Enter the Father Name: ")
var obatained_number = prompt("Enter Obtained Number: ")

document.write(`Name of Student: ${name}`+"<br>")
document.write(`Father Name: ${Father_Name}`+"<br>")
document.write(`Your Number: ${obatained_number}`+"<br>")

if (obatained_number >= 90){
    document.write("The Grade is A+")
} 
else if (obatained_number >= 80){
    document.write("The Grade is A")
} 
else if (obatained_number >= 80){
    document.write("The Grade is A")
} 

else if (obatained_number >= 70){
    document.write("The Grade is B")
} 
else if (obatained_number >= 60){
    document.write("The Grade is C")
} 
else if (obatained_number >= 45){
    document.write("The Grade is D")
} 
else {
    document.write("Failed!"+"<br>"+"Try again")
}