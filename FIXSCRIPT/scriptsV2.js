function mapCategory(){
    var grKK = new GlideRecord('kb_knowledge');
    grKK.addEncodedQuery("kb_knowledge_base=7b45de6187b3c5541cec670a0cbb35db");
    grKK.setLimit(10);
    grKK.query();
    while (grKK.next()) {
        var number = grKK.getValue('number');
        var short_description = grKK.getValue('short_description');
        var kb_category = grKK.getDisplayValue('kb_category');
        var workflow_state = grKK.getValue('workflow_state');
        var u_article_typology = grKK.getValue('u_article_typology');
        var u_owner_group = grKK.getDisplayValue('u_owner_group');
        var active = grKK.getDisplayValue('active');
    
    
        var grKC = new GlideRecord('kb_category');
            grKC.addEncodedQuery("");
            grKC.query();
        if (grKC.next()) 
        {
            var parent_id = grKC.getDisplayValue('parent_id');
            var activeCat = grKC.getDisplayValue('active');
        }
        gs.info('|| =============NEW  ITEM ================== ||');
        // gs.info('   =============NEW  KB  ================== ');
        gs.info('number: ' + number );
        gs.info('short_description: ' + short_description );
        gs.info('kb_category: ' + kb_category );
        gs.info('workflow_state: ' +  workflow_state );
        gs.info('u_article_typology: ' + u_article_typology );
        gs.info('u_owner_group: ' + u_owner_group );
        gs.info('active KB: ' + active );
        // gs.info('   =========== NEW  CATEGORIE  ============= ');
        gs.info('parent_id: ' + parent_id);
        gs.info('active Catégorie: ' + activeCat);
    }
    //   return activeCat
    }
    mapCategory();
    /**
 *  DEFINITION DE VARIABLES ET FONCTIONS
 */
function checkCategory(argcat){       
    var newCategorie1 = [
        "Centre de service", 
        "Gestion de la sécurité SI",
        "Développement et logiciels",
        "Gestion_demandes",
        "Surveillance et gestion_évènements",
        "Gestion_Incidents",
        "Gestion_actifs",
        "Gestion_livraisons",
        "Gestion_Connaissances"

    ];
      var newCategorie2 = [
        "Processus du parcours",
        "Assist. Multi-Canal",
        "SN1",
        "Gestion parc et conformité",
        "Référentiel",
        "Proximité",
        "Appro. / stock Nat",
        "Distribution",
        "Gestion stocks proxi et flux",
        "COZMI"
    ];

    check1 = newCategorie1.indexOf(argcat);
    check2 = newCategorie2.indexOf(argcat);
    var response = '';

        if(check1 !== -1 && check2 ==-1){
            // gs.info( argcat  + " it's includes in newCategorie1");
            response = "CATEGORY 1";
        }else if(check2 !== -1 && check1 ==-1){
            // gs.info( argcat  + " it's includes in newCategorie2");
            response = "CATEGORY 2";
        }else if(check1 !== -1 && check2 !==-1){
            // gs.info( argcat  + " it's includes in newCategorie1 and newCategorie2");
            response = "CONFLICT : THIS CATEGORY EXIST EITHER IN CATEGORY 1 AND CATEGORY 2";
        }else{
            //  gs.info(  argcat  + " IT'S NOT EXIST");
            response = "NOT EXIST YET"
        }
        gs.info(response);
}
checkCategory("Gestion_demandes")

function getAllCategory(){
    var allCategory = [];
    var nombre = 0;
    var grKK = new GlideRecord('kb_knowledge');
    grKK.addEncodedQuery("kb_knowledge_base=7b45de6187b3c5541cec670a0cbb35db");
    grKK.orderByDesc('kb_category');
    // grKK.groupBy('kb_category');
    // grKK.setLimit(1000);
    grKK.query();
    while (grKK.next()) {
            var kb_category = grKK.getDisplayValue('kb_category');
            // var number = grKK.getValue('number');
            // var short_description = grKK.getValue('short_description');
            // var workflow_state = grKK.getValue('workflow_state');
            // var u_article_typology = grKK.getValue('u_article_typology');
            // var u_owner_group = grKK.getDisplayValue('u_owner_group');
            // var active = grKK.getDisplayValue('active');   
            var check1 = allCategory.indexOf(kb_category);
            if(check1 ==-1){
            allCategory.push(kb_category);
            nombre++
                        }
    }
    gs.info("Nombre Total de  Catégories  : " + nombre )
    gs.info("Liste de toutes les Catégories  : " + allCategory )
    }   
    getAllCategory();

    /**
     *  PARENT ID VIDE 
     */
    function getLabelPID_Null(){
        var allCategory = [];
        var nombre = 0;
        var grKC = new GlideRecord('kb_category');
        grKC.addEncodedQuery("active=true^parent_id=NULL");
        grKC.orderBy('label');
        grKC.setLimit(100);
        grKC.query();
        while (grKC.next()) {
            var label = grKC.getDisplayValue('label');
              var check1 = allCategory.indexOf(label);
                    if(check1 ==-1){
                    allCategory.push(label);
                    var array_null_parent_id = JSON.stringify(allCategory)
                    nombre++
                    }
        }
            gs.info("Nombre Total d'étiquettes dont les parent_id sont vides : " + nombre )
            gs.info("Liste de toutes les étiquettes  : " + array_null_parent_id )
        
        }
        getLabelPID_Null();