class Student{
    name;
    favcolor;
    favnumber

    constructor(name,color,number){
        this.name = name;
        this.favcolor = color;
        this.favnumber = number;
    }
    log(){
        console.log(this.name,this.favcolor, this.favnumber);
    }
}
let students = [
    new Student("Fred","Green","8"),
    new Student("Wilma", "Red", "1"),
    new Student("Barney", "blue", 7),
    new Student("Betty", "orange", 3),
    new Student("Pebbles", "pink", 2)
];
function forStudents(){
    let tbody = document.getElementById("students");
    tbody.innerHTML = "";
    for(let i of students){
        let tr = "<tr>";
        tr += `<td>${i.name}</td>`;
        tr += `<td>${i.favcolor}</td>`;
        tr += `<td>${i.favnumber}</td>`;
        tr += "</td>";
        tbody.innerHTML += tr;
    }
}

const forStudent = (studentInput) => {
    let tbody = document.getElementById("students");
    let tr = "<tr>";
    tr += `<td>${studentInput.name}</td>`;
    tr += `<td>${studentInput.favcolor}</td>`;
    tr += `<td>${studentInput.favnumber}</td>`;
    tr += "</td>";
    tbody.innerHTML += tr;
}
const newStudent = () => {
    let hold = new Student();
    hold.name = document.getElementById("name").value;
    hold.favcolor = document.getElementById("favcolor").value;
    hold.favnumber = Number(document.getElementById("favnumber").value);
    document.getElementById("name").value = "";
    document.getElementById("favcolor").value = "";
    document.getElementById("favnumber").value = "";
    document.getElementById("new student").value = "Student Name: "+ hold.name + " Favorite Color: " + hold.favcolor +" Favorite Number: " + hold.favnumber; 
    students.push(hold);
    forStudent(hold);
}