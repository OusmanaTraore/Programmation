
let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteAll = document.getElementById("delete-all");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn =document.getElementById("tab-btn");


console.log(localStorage);
// localStorage.clear();

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads);
}
const tabs  = [
    {
        url:"https://www.linkedin.com/in/ousmanatraore89"
    }
]
tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true,currentWindow: true}, function(tabs){

        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });

})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value ="";
    localStorage.setItem("myLead", JSON.stringify(myLeads));
   render(myLeads);

//    console.log(localStorage.getItem("myLead"));
})

deleteAll.addEventListener("dblclick", function(){
    // myLeads = "";
    // console.log("double clicked");
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})
function render(leads){

    let lisItems = "";
    for (let i= 0; i<leads.length; i++) {
        // lisItems += "<li><a> target='_blank' href='" + myLeads[i] + "'>" ++ "</a></li>";
        lisItems += `
            <li>
                <a href='${leads[i]}' target='_blank'>
                    ${leads[i]}
                </a>
            </li>
        `
    } 
    ulEl.innerHTML = lisItems
}