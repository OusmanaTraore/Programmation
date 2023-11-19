// function mapCategory(){
//     var table = 'kb_knowledge';
//     var article = new GlideRecord(table);
//     article.addEncodedQuery("kb_knowledge_base=7b45de6187b3c5541cec670a0cbb35db");
//     article.setLimit(10);
//     article.query();
//     while (article.next()){
//      
//         *  Définition des nouvelles catégories
//         */

//    /**
//     *  Début switch : si brouillon  , set categorie = " "  
//     */
//         switch(workflow_state){
//             case "draft":
//                 gs.info('DRAFT:');
//                 break;
//                 // gs.info(" Article is in draft: " + workflow_state);
//             // case "retired": 
//             // case "published": 
//             // case "outdated":  
//                 // setCategoryDraft();
//             default:
//                 setCategory();
//                 //  gs.info('Workflow: ' + workflow_state  );
//                 // currentState();
//         }
//     }
//     function currentState(){
//         gs.info('Numéro KB: ' + number  );
//         gs.info('Groupe propriétaire: ' + u_owner_group  );
//         gs.info('Categorie: ' + kb_category  );
//         gs.info('Workflow: ' + workflow_state  );
//         gs.info('Typologie: ' + u_article_typology  );
//         gs.info('Brève description: ' + short_description  );
// }
//   function setCategory(){
//          switch(u_owner_group){
//             case "DSIT_ITSUP-AGILIT-LOT1_SERVICEDESK-GDK": 
//                  gs.info('Groupe 1: '  );
//                  if( kb_category == '')
//                 break;
//             case "DSIT_ITSUP-AGILIT-LOT2_TDC-KM": 
//                 gs.info('Groupe 2: '  );
//                 break;
//             case "DSIT_ITSUP-AGILIT-LOT2-T_TDC-KM": 
//                 gs.info('Groupe 3: '  );
//                 break;
//             case "DSIT_ITSUP-AGILIT-LOT3_RLE_GDC": 
//                 gs.info('Groupe 4: '   );
//                 break;
//             case "Référents Nationaux Poste de travail": 
//                 gs.info('Groupe 5: '   );
//                 break;
//               case "DSIT_ITSUP-AGILIT-LOT1_COCKPIT-KM": 
//                 gs.info('Groupe 6: '   );
//                 break;
//             default:
//              gs.info('Groupe propriétaire: '  + u_owner_group );
//                 // currentState();
//                 // setCategory();
//         }
        
//   }
//    function setCategoryDraft(){
//         var currentCat = kb_category;
//         var nextCat = '';
//         gs.info( 'Current category is : '+ currentCat  );
//         gs.info( 'Next category will be : ' + nextCat  );
//         // return {
//         //     'Current category is : ': currentCat ,
//         //     'Next category will be : ': nextCat 
//         // };
//   }

// }



// mapCategory();


/**
 *  1 - GET ALL CATEGORY ACTIVE 
 *  2 - GET   NEW  CATEGORIES CREATED (CATEGORY 1 and CATEGORY 2
 * 
 *   CATEGORIE 1 ID_PARENT = 56ba7a121b8e95d0152362c5604bcb5c  
 * 
 *  3 - CHECK IF CATEGORY  ALREADY EXIST IN OLD CATEGORY
 *         IF YES 
 *              SET OLD CATEGORY FALSE  AND SET NEW CATEGORY VALUE
 *         ELSE
 *              SET NEW CATEGORY VALUE
 */


function getCategory(){       
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
    const newCategorie = [newCategorie1,newCategorie2];
    var  count = 0;
       newCategorie.forEach(item2 =>{
         count++;
         gs.info(" Cat " + (count) + " : " + item2 );
                });
    }
    //    const keysArray = Object.keys(newCategorie1);
    //    const count = keysArray.length;
    //    for(var i=0 ; i <count ; i++){
    // for( item in newCategorie ){
 
        // var grCat = new GlideRecord('kb_category');
        // grCat.addQuery();
        // grCat.setLimit(2);
        // grCat.query();
        // while(grCat.next()){
                 /**
         * Récupération des  variables actuelles
         */

    //         // gs.info(" Cat " + (i+1) +" : " + newCategorie1[i]);
    //         gs.info('Label: ' + label  );
    //         gs.info('Value: ' + value  );
            // gs.info('Parent_id: ' + parent_id  );
    //         gs.info('active ' + active  );
    //  }


   
    // }

getCategory();

(function() { 
    data.members = []; 
               
	    var groupeMemberSysId = "f8d6eb591b02ed10351241d0b24bcb99"; //SysId du groupe gestionnaire du processus	
      var userId = gs.getUserID();
      var num = 0;
      var group = new GlideRecord('sys_user_group'); 
          group.addQuery('sys_id', groupeMemberSysId); 
          group.query(); 
             if( group.next() )
             { 
                        var group_members = new GlideRecord('sys_user_grmember'); 
							          
                        group_members.addQuery('group', group.getValue('sys_id')); 
							 
                        group_members.query(); 						 
                        		//var groupName=group.getValue('sys_id');
							 								var  groupName=group.name;
              							console.log("Nom de groupe : " + groupName);
                        while( group_members.next() & num <10 )
                        { 
                            var gr = new GlideRecord('sys_user'); 
                            gr.addQuery('sys_id', userId);
                            gr.query(); 
													 
                               if( gr.get(group_members.getValue('user')))
                                { 
                                var member = {};
                                //member.Nom_de_famille= gr.last_name.toString();
																	member.Nom_de_famille= gr.getValue('last_name');
								
                                //member.Prenom= gr.first_name.toString();
																member.Prenom= gr.getValue('first_name')
                                //member.UM= gr.u_um.getDisplayValue();
																	member.UM= gr.getDisplayValue('u_um');
                                member.email=gr.getValue('email');
                                data.members.push(member); 
                                //console.log(member);
                                }   
                                num++;     
                        } 
                        
             } 
				
    }
)();