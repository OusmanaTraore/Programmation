var tableKN= 'kb_knowledge';
var tableKC ='kb_category';


/**
* Récupération des  variables actuelles BASE DE CONNAISSANCES COZMI
*/
//     var article = new GlideRecord(table);
	var kb_category = article.getDisplayValue('kb_category');
    var workflow_state = article.getValue('workflow_state');
	var u_owner_group = article.getDisplayValue('u_owner_group');
	var u_article_typology = article.getValue('u_article_typology');
	var short_description = article.getValue('short_description');
	var number = article.getValue('number');

/**
* Récupération des  variables actuelles  CATEGORIES 
*/
      // var grCat = new GlideRecord('kb_category');
	         var label = grCat.getDisplayValue('label');
             var value = grCat.getValue('value');
	         var parent_id = grCat.getValue('parent_id');
	         var active = grCat.getValue('active');

/**
* Récupération des  variables actuelles ANCIENNES CATEGORIES 
*/

/**
* Récupération des  variables actuelles  NOUVELLES CATEGORIES 
*/