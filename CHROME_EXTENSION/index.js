
let myLeads = [];
let inputBtn = document.getElementById("input-btn");
let inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    console.log(myLeads);
})

for (let i= 0; i<myLeads.length; i++) {
   ulEl.textContent +=myLeads[i] + "";
}