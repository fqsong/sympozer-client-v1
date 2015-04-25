define([],function() {

    var labels = {
        'EN' : {
            'noResults' : 'No results found',
            'navBar' : {
                'schedule' : 'Schedule',
                'persons' : 'Persons',
                "organizations" : 'Organizations',
                "publications" : 'Publications',
                "affiliations" : 'Organizations',
                "made" : 'Publications'

            },
            'publication' : {
                'allPublication' : 'Publications',
                'abstract' : 'Abstract',
                'authors' : 'Authors',
                'publishDate' : 'Published date',
                'url' : 'Url',
                'topics' : 'Topics',
                'publishBy' : 'Published by'

            },
            'otherPublication' : {
                'year' : 'Year',
                'authors' : 'Authors',
                "title" : 'Title',
                'reference' : 'Reference',
                'publisher' : 'Publisher',
                'link' : 'Link'

            },
            'person' : {
                'contact' : 'Contact',
                'website' : 'Most probable homepage',
                'description' : 'Description',
                'homepage' : 'Homepage',
                "affiliations" : 'Organization(s)',
                "made" :'Conference publication(s)',
                'otherPublications' :'Other publication(s)',
                'holdsRole': 'Role(s)'
            },

            'organization' : {

                'abstract' : 'Abstract',
                'homepage' : 'Homepage',
                'country' : 'Country',
                'members' : 'Members'

            },

            'conference' : {
                'description' : 'Description',
                'homepage' : 'Homepage',
                'comment' : 'Comment',
                'location' : 'Location'


            },
            'event' : {

                'startAt' : 'Starts at',
                'startAtLe' : 'Starts at',
                'endAt' : 'Ends at',
                'endAtLe' : 'Ends at',
                'parentEvent' : 'Parent event',
                'subEvent' : 'Sub events',
                'duration' : 'Duration',
                'location' : 'Location',
                'description' : 'Description',
                'relatedDocument' : 'Related document(s)',
                'comment' : 'Comment',
                'homepage': 'Homepage',
                'contact': 'Contact',
                'topic': 'Topics',
                'from' : 'from',
                'to' : 'to',
                'last' : 'Last'

            },

            'topic' : {

                'relatedPublications' : 'Related publications',
                'relatedEvents' : 'Related events'

            },

            'role' : {

                'ProgrammCommiteeMember': 'Programm Commitee Member',
                'Presenter': 'Presenter',
                'Chair': 'Chair',
                'Delegate': 'Delegate'
            },

            'category' : {
                'sessionEvent' : "Session",
                'conferenceEvent' : "Conference",
                'trackEvent' : "Track",
                'talkEvent' : "Talk",
                'panelEvent' : "Panel",
                'mealEvent' : "Meal",
                'socialEvent' : "Social event",
                'workshopEvent' : "Workshop",
                'keynoteEvent' : "Keynote",
                'tutorialEvent' : "Tutorial",
                'posterEvent' : "Poster session",
                'phdSymposiumEvent' : "PhD symposium",
                'challengeEvent' : "Challenge",
                'presentationEvent' : "Presentation",
                'breakEvent' : "Break"
            },

            'search' : {

                'searchByName' :'by name',
                'searchByRole' :'by role',
                'searchByOrganization' :'by organization',
                'searchByTitle' :'by title',
                'searchByAuthor' :'by author',
                'searchByTopic' :'by topic',
                'searchByPerson' :'by person',
                'searchByLocation' :'by location',
                'searchByCategory' :'by category'

            },

            'settingsPanel' : {
                'storage' : 'Storage',
                'on' : 'On',
                'off' : 'Off'
            },

            'pageTitles' : {
                'conference' : 'Conference',
                'schedule' : 'Schedule',
                'whatsnext' : 'What\'s next ?',
                'event' : 'Event',
                'publication' : 'Publication',
                'organization' : 'Organization',
                'recommendation' : 'Recommendation',
                'category' : 'Category',
                'person' : 'Person',
                'topic' : 'Topic',
                'allRole' : 'Roles',
                'allTopic' : 'Topics',
                'allCategory' : 'Categories',
                'allEvent' : 'Events',
                'allOrganization' : 'Organizations',
                'allCountry' : 'Countries',
                'allPerson' : 'Persons',
                'allAuthor' : 'Authors',
                'allLocation' : 'Locations',
                'allPublication' : 'Publications',
                'searchByCategory' : 'Search by category',
                'externalPublication' : 'External publication',
                'searchPerson' : 'Search a person',
                'searchTopic' : 'search a topic',
                'searchOrganization' : 'Search an organization',
                'searchPublication' : 'Search a publication',
                'searchEvent' :'Search an event'

            },

            'specialButtons' : {
                'addToCal' : 'Add to my cal'
            }


        },

        'FR' : {

            'noResults' : 'Aucun résultat trouvé',
            'navBar' : {
                'schedule' : 'Planning',
                'persons' : 'Participants',
                "affiliations" : 'Organisations',
                "made" : 'Publications'

            },
            'publication' : {
                'abstract' : 'Résumé',
                'authors' : 'Auteurs',
                'publishDate' : 'Date de publication',
                'url' : 'Url',
                'topics' : 'Themes',
                'publishBy' : 'Publié par'
            },
            'otherPublication' : {
                'year' : 'Année',
                'authors' : 'Auteurs',
                "title" : 'Titre',
                'reference' : 'Reference',
                'publisher' : 'Editeur',
                'link' : 'Lien'

            },
            'person' : {
                'contact' : 'Contact',
                'website' : 'Site web probable',
                'description' : 'Description',
                'homepage' : 'Homepage',
                "affiliations" : 'Organisations',
                "made" :'Publication(s) de la conférence',
                'otherPublications' :'Autre(s) publication(s)',
                'holdsRole': 'Rôle(s)'
            },

            'organization' : {

                'abstract' : 'Résumé',
                'homepage' : 'Site web',
                'country' : 'Pays',
                'members' : 'Membres'

            },

            'conference' : {
                'description' : 'Description',
                'homepage' : 'Site web',
                'comment' : 'Commentaire',
                'location' : 'Localisation'


            },
            'event' : {
                'startAt' : 'Débute à',
                'startAtLe' : 'Débute le',
                'endAt' : 'Finit à',
                'endAtLe' : 'Finit le',
                'parentEvent' : 'Événement parent',
                'subEvent' : 'Sous événements',
                'duration' : 'Durée',
                'location' : 'Localisation',
                'description' : 'Description',
                'relatedDocument' : 'Documents liés',
                'comment' : 'Commentaire',
                'homepage': 'Site web',
                'contact': 'Contact',
                'topic': 'Theme',
                'from' : 'du',
                'to' : 'au',
                'last' : 'Durée'

            },

            'topic' : {
                'allTopic' : 'Themes',
                'relatedPublications' : 'Publications',
                'relatedEvents' : 'Evènements'

            },

            'role' : {

                'ProgrammCommiteeMember': 'Membre du commité d\'organisation',
                'Presenter': 'Presenter',
                'Chair': 'Chair',
                'Delegate': 'Delegate'
            },

            'category' : {
                'sessionEvent' : "Session",
                'conferenceEvent' : "Conference",
                'trackEvent' : "Track",
                'talkEvent' : "Talk",
                'panelEvent' : "Panel",
                'mealEvent' : "Meal",
                'socialEvent' : "Social event",
                'workshopEvent' : "Workshop",
                'keynoteEvent' : "Keynote",
                'tutorialEvent' : "Tutorial",
                'posterEvent' : "Poster session",
                'phdSymposiumEvent' : "PhD symposium",
                'challengeEvent' : "Challenge",
                'presentationEvent' : "Presentation",
                'breakEvent' : "Break"
            },

            'search' : {

                'searchByName' :'par nom',
                'searchByRole' :'par rôle',
                'searchByOrganization' :'par organisation',
                'searchByTitle' :'par titre',
                'searchByAuthor' :'par auteur',
                'searchByTopic' :'par theme',
                'searchByPerson' :'par participant',
                'searchByLocation' :'par salle',
                'searchByCategory' :'par catégorie'

            },

            'settingsPanel' : {
                'storage' : 'Storage',
                'on' : 'Activer',
                'off' : 'Désactiver'
            },

            'pageTitles' : {
                'conference' : 'Conference',
                'schedule' : 'Planning',
                'whatsnext' : 'What\'s next ?',
                'event' : 'Event',
                'publication' : 'Publication',
                'organization' : 'Organization',
                'recommendation' : 'Recommendation',
                'category' : 'Category',
                'person' : 'Person',
                'topic' : 'Thème',
                'allRole' : 'Roles',
                'allTopic' : 'Thèmes',
                'allCategory' : 'Categories',
                'allEvent' : 'Evènements',
                'allOrganization' : 'Organisations',
                'allCountry' : 'Pays',
                'allPerson' : 'Participants',
                'allAuthor' : 'Auteurs',
                'allLocation' : 'Locations',
                'allPublication' : 'Publications',
                'searchByCategory' : 'Search by category',
                'externalPublication' : 'External publication',
                'searchPerson' : 'Rechercher un participant',
                'searchTopic' : 'Rechercher un thème',
                'searchOrganization' : 'Rechercher une organisation',
                'searchPublication' : 'Rechercher une publication',
                'searchEvent' :'Filtrer les évènements'
            },

            'specialButtons' : {
                'addToCal' : 'Ajouter à mon calendrier'
            }

        }

    }

    return labels;
})

