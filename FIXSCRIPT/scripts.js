/**
 *   QUERY THE KNOWLEDGE TABLE
 */

var grKK = new GlideRecord('kb_knowledge');
grKK.addEncodedQuery("kb_knowledge_base=7b45de6187b3c5541cec670a0cbb35db");
// grKK.addQuery('kb_category' ,'!=','null')
// grKK.orderBy('kb_category');
grKK.setLimit(100);
grKK.query();
while (grKK.next()) {
    gs.info('|| =============NEW  ITEM ================== ||');
     gs.info('   =============NEW  KB  ================== ');
    gs.info('number: ' + grKK.getValue('number'));
    // gs.info('kb_knowledge_base: ' + grKK.getDisplayValue('kb_knowledge_base'));
    gs.info('short_description: ' + grKK.getValue('short_description'));
    gs.info('kb_category: ' + grKK.getDisplayValue('kb_category'));
    gs.info('workflow_state: ' + grKK.getValue('workflow_state'));
    gs.info('u_article_typology: ' + grKK.getValue('u_article_typology'));
    gs.info('u_owner_group: ' + grKK.getDisplayValue('u_owner_group'));
    gs.info('active KB: ' + grKK.getDisplayValue('active'));
     
    /**
     *  QUERY THE CATEGORY TABLE
     */
    var grKC = new GlideRecord('kb_category');
        grKC.addEncodedQuery("");
        // grKC.orderBy('label');
        // grKC.setLimit(100);
        grKC.query();
    if (grKC.next()) 
    {
        gs.info('   =========== NEW  CATEGORIE  ============= ');
        // gs.info('label: ' + grKC.getValue('label'));
        // gs.info('value: ' + grKC.getValue('value'));
        gs.info('parent_id: ' + grKC.getDisplayValue('parent_id'));
        gs.info('active Catégorie: ' + grKC.getDisplayValue('active'));
    }
    
}
 