// function load(){
//     let hold = document.getElementById("companies");
//     hold.getElementById("companie").value
// }

let companies =[
    {id: 1, name: "Amazon", sales:3000},
    {id: 2, name: "BestBuy", sales: 2000},
    {id: 3, name: "Meijer", sales:4000},
    {id: 4, name: "Kroger", sales:7000},
    {id: 5, name: "Walmart", sales:5000},
    {id: 6, name: "PG", sales: 8000}
];
function display1(){
    let hold = companies
    console.log(hold);
}


    

const display = () =>{
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(let i of companies){
        let tr = "<tr>";
        tr += `<td>${i.id}</td>`;
        tr += `<td>${i.name}</td>`;
        tr += `<td>${i.sales}</td>`;
        tr+= "</tr>";
        tbody.innerHTML += tr;
    }
}


let nbrs = [
    106,    573,    204,    804,    482,
    457,    769,    889,    860,    399,
    599,    824,    346,    851,    450,
    590,    520,    321,    341,    619,
    505,    769,    532,    764,    101
]

const num = () =>{
    let smallest = nbrs[0];
    let largest = smallest;
    for(let i of nbrs){
        if(i > largest){
            largest = i;
        }
        if(i<smallest){
            smallest = i;
        }
    }
    document.getElementById("smallest").value = smallest;
    document.getElementById("largest").value = largest;
}