var elements = [
    {
        number: 199,
        title: 'Formulaire KB - Ordre des champs',
        description: 'Changement de l\'ordre des champs du formulaire',
        critere:{
            title:'Le zoom fonctionne de la même manière que WIZMI',
            condition: {
                0:'Voir capture d\'écran.'
            }
        },
        state:{
            dev: {
                0:'NOT STARTED',
                1:'DEVELOPPEMENT',
                2:'Correction',
                3:'Completed'
        },
            test: {
                1:'TEST',
                2:'KO',
                3:'OK',
                4:'Go recette'
        },
            prod:{
                1:'Production',
                2:'KO',
                3:'OK',
        }
        },
        epicLink:'Gestion de données',
        priority:'MEDIUM',
    },
    {
        number: 194,
        title: 'Evolution gestion des catégories',
        description: 'Gestion des catégories pour que la table soit \
         indépendante du périmètre sans changer l\'organisation du portail.\
         Liste des catégories fixe, qui n\'est plus liée à une chaine de service.',
        critere:{
            title:'Les anciennes catégories seront rendues inactives',
            condition: {
                0:'Les articles en production auront des catégories selon une table de mapping (à définir',
                1:'Le champ "chaine de service" de la catégorie sera rétiré',
                2:'Validation de la nouvelle catégorisation par les représentants métiers',
                3:' Table de mapping des catégories anciennes vs nouvelles'
            }
        },
        state:{
            dev: {
                0:'NOT STARTED',
                1:'DEVELOPPEMENT',
                2:'Correction',
                3:'Completed'
        },
            test: {
                1:'TEST',
                2:'KO',
                3:'OK',
                4:'Go recette'
        },
            prod:{
                1:'Production',
                2:'KO',
                3:'OK',
        }
        },
        epicLink:'Gestion de données',
        priority:'HIGHEST'
    },
    {
        number: 195,
        title: 'Données - script mapping catégories',
        description: 'Mettre à jour les catégories des articles de la base COZMI pour coller à la nouvelle liste.',
        critere:{
            title:'Tous les articles sont sur de nouvelles catégories',
            condition: {
                0:'Tous les articles sont sur de nouvelles catégories',
                1:'Toutes les anciennes catégories sont désactivées'
            }
        },
        state:{
            dev: {
                0:'NOT STARTED',
                1:'DEVELOPPEMENT',
                2:'Correction',
                3:'Completed'
        },
            test: {
                1:'TEST',
                2:'KO',
                3:'OK',
                4:'Go recette'
        },
            prod:{
                1:'Production',
                2:'KO',
                3:'OK',
        }
        },
        epicLink:'Gestion de données',
        priority:'HIGH'
    },
    {
        number: 141,
        title: 'Page favori - uniquement du contenu COZMI',
        description: 'La page favori du portail COZMI remonte des résultats issus de WIZMI et vice-versa. \
        Besoin: Seuls les articles favoris COZMI sont affichés sur cette page Favoris.\
        Un echange doit avoir lieu avec WIZMI pour qu\' ils filtrent les KB visibles de leurs côtés.',
        critere:{
            title:'La page favori ne présente plus de résultats différents de COZMI',
            condition: {
                0:'Le visuel de la page favori reste inchangé',
                1:'Le lien renvoie vers la page article de COZMI (kb_article_view)'
            }
        },
        state:{
            dev: {
                0:'NOT STARTED',
                1:'DEVELOPPEMENT',
                2:'Correction',
                3:'Completed'
        },
            test: {
                1:'TEST',
                2:'KO',
                3:'OK',
                4:'Go recette'
        },
            prod:{
                1:'Production',
                2:'KO',
                3:'OK',
        }
        },
        epicLink:'Gestion des interfaces utilisateurs',
        priority:'LOW'
    },
    {
        number: 205,
        title: 'Ajouter un lien CGU sur le portail',
        description: 'Ajout du lien CGU au niveau du footer (à côté d\'à propos ) qui renvoi sur une page article COZMI simple .\
        SANS PIECE JOINTE , BOUTON ACTION, EN-TÊTE. Ceci est un pré-requis pour l\'unité SEI.',
        critere:{
            title:'CGU portail',
            condition: {
                0:'Lien pointant sur la bonne page article',
                1:'Seul le titre et le corps de l\'article sont visibles',
                2:'Réalisation de l\'article COZMI-CGU'
            }
        },
        state:{
            dev: {
                0:'NOT STARTED',
                1:'DEVELOPPEMENT',
                2:'Correction',
                3:'Completed'
        },
            test: {
                1:'TEST',
                2:'KO',
                3:'OK',
                4:'Go recette'
        },
            prod:{
                1:'Production',
                2:'KO',
                3:'OK',
        }
        },
        epicLink:'Gestion des interfaces utilisateurs',
        priority:'MEDIUM',
    },
    {
        number: 201,
        title: 'Portail - Approbation - Lecture de la KB',
        description: 'La page Article est visible depuis le portail',
        critere:{
            title:'Portail Approbation',
            condition: {
                0:'Aucune regression sur la navigation et le portail',
                1:'Les utilisateurs ne recupèrent des résultats que pour les articles à l\'état publiés',
                2:'La page article s\'ouvre par un nouvel onglet du navigateur',
                3:'Les pièces jointes peuvent être consultées',
                4:'Aucun bouton d\'action (favori, évaluation, action) n\'est visible'
            }
        },
        state:{
            dev: {
                0:'NOT STARTED',
                1:'DEVELOPPEMENT',
                2:'Correction',
                3:'Completed'
        },
            test: {
                1:'TEST',
                2:'KO',
                3:'OK',
                4:'Go recette'
        },
            prod:{
                1:'Production',
                2:'KO',
                3:'OK',
        }
        },
        epicLink:'Gestion des interfaces utilisateurs',
        priority:'MEDIUM',
    }
]



