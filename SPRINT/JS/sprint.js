var  listContacts = function (contacts){
    document.write('<h1 class="title">SPRINT 10</h1>');
    contacts.forEach(element => {
        document.write('<div class="card ">');
        if (element.number=="141" || element.number=="199" || element.number=="201" ){
            document.write(`<span><h2 class="userstorie fait">USER STORIE : <span class="test">${element.number} </span> | ${element.title} | </h2></span>`);
        }else if (element.number=="194" || element.number=="195" ){
            document.write(`<span><h2 class="userstorie">USER STORIE : <span class="noStart">${element.number} </span> | ${element.title} | </h2></span>`);
        }else if (element.number=="205" ){
            document.write(`<span><h2 class="userstorie">USER STORIE : <span class="pending">${element.number} </span> | ${element.title} | </h2></span>`);
        }
        else{
            document.write(`<span><h2 class="userstorie">USER STORIE : <span class="noStart">${element.number} </span> | ${element.title} | </h2></span>`);
        }
        document.write('<div class="card-content ">');
        document.write('<dl  ">');
        document.write('<dt class="desc ">Description</dt>');
        document.write(`<dd>${element.description}</dd>`);
        document.write(`<hr class="line">`);
        document.write('<dt class="desc ">Critère d\'acceptation</dt>');
        document.write(`<dd>${element.critere.title}</dd>`);
        document.write(`<hr class="line">`);
        document.write('<dt class="desc ">Condition(s)</dt>');
        const keysArray = Object.keys(elements);
        const count = keysArray.length;
        const cb = document.querySelector('#condition');
        for (var i = 0; i<count; i++){
            var cond = element.critere.condition[i];
            // document.write('<div class=condition ">');
            document.write('<div class=condition ">');
            if(cond !== undefined ){
                // document.write(`<dd><label for="condition" >${cond}</label></dd>`);
                document.write(`<dd ><input type="checkbox" class="checked" onclick="validation()"><label for="checked" >${cond}</label></dd>`);
            }
                    document.write('</div  ">');             
        }
    
        document.write(`<hr class="line">`);
        document.write('<dt class="desc">Epic Link</dt>');
        document.write(`<dd>${element.epicLink}</dd>`);
        document.write(`<hr class="line">`);
        document.write('<dt class="desc">Priorité</dt>');
        document.write(`<dd>${element.priority}</dd>`);
        document.write(`<hr class="line">`);
        document.write('<dt class="desc">State</dt>');
        if (element.number=="141" || element.number=="199"){
            document.write(`<dd ">${element.state.dev[3]}</dd>`);
        }else if (element.number=="205" ){
            document.write(`<dd>${element.state.dev[0]}</dd>`);
                    }else if (element.number=="201" ){
                        document.write(`<dd>${element.state.test[3]}</dd>`); 
                    }
        else{
            document.write(`<dd>${element.state.dev[0]}</dd>`);
        }
        document.write('<dl>');
        document.write('</div  ">');
        document.write('</div  ">');        
    });
};

function validation() {
    // Get the checkbox
        var checkBox = document.getElementById("condition");
      
        // If the checkbox is checked, display the output text
        if (checkBox.checked == true){
            document.write(`<dd class="valide"><input type="checkbox" id="condition onclick="validation()"><label for="condition">${cond}</label></dd>`)
        } else {
            document.write(`<dd ><input type="checkbox" id="condition onclick="validation()"><label for="condition">${cond}</label></dd>`)
        }
      }   ;
listContacts(elements)

