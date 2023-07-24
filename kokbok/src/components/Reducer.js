const initialState = {
    recipes: [
        {
            name: 'Palak paneer med halloumi',
            ingredients: [
                {
                    amount: 2,
                    measurement: 'port',
                    ingredient: 'Ris'
                },
                {
                    amount: 0.5,
                    measurement: '',
                    ingredient: 'Charlottenlök'
                },
                {
                    amount: 0.5,
                    measurement: 'klyfta',
                    ingredient: 'Vitlök'
                },
                {
                    amount: 0.5,
                    measurement: 'ask',
                    ingredient: 'Tomat'
                },
                {
                    amount: 0,
                    measurement: '',
                    ingredient: 'Riktligt med olivolja'
                },
                {
                    amount: 1,
                    measurement: 'msk riven',
                    ingredient: 'Ingefära'
                },
                {
                    amount: 1,
                    measurement: 'msk',
                    ingredient: 'Tomatpuré'
                },
                {
                    amount: 0.5,
                    measurement: 'msk',
                    ingredient: 'Garam masala'
                },
                {
                    amount: 195,
                    measurement: 'g',
                    ingredient: 'Krossade tomater'
                },
                {
                    amount: 0.5,
                    measurement: 'dl',
                    ingredient: 'Vatten'
                },
                {
                    amount: 1.25,
                    measurement: 'dl',
                    ingredient: 'Vispgrädde'
                },
                {
                    amount: 0.5,
                    measurement: '',
                    ingredient: 'Grönsaksbuljongtärning'
                },
                {
                    amount: 75,
                    measurement: 'g',
                    ingredient: 'Spenat'
                },
                {
                    amount: 200,
                    measurement: 'g',
                    ingredient: 'Grilloumi'
                },
                {
                    amount: 0,
                    measurement: '',
                    ingredient: 'Salt'
                },
            ],
            cooking: [
                {
                    stepNr: 1,
                    step: 'Börja koka riset'
                },
                {
                    stepNr: 2,
                    step: 'Skala och hacka all lök och tomat. Skala och riv ingefäran'
                },
                {
                    stepNr: 3,
                    step: 'Hetta upp olivolja i en stekgryta eller kastrull. Fräs lök, vitlök, ingefära, tomatpuré och garam masala 3-4 minuter'
                },
                {
                    stepNr: 4,
                    step: 'Tillsätt tomater, krossade tomater, vatten, grädde och buljongtärning. Låt sjuda 6-7 minuter. Vänd ner spenaten.'
                },
                {
                    stepNr: 5,
                    step: 'Tärna halloumin och stek den gyllene i resten av olivoljan i en stekpanna'
                },
                {
                    stepNr: 6,
                    step: 'Blanda ner osten i grytan och smaka av med salt. Servera med ris'
                }
            ],
            imgPath: '/src/components/img/palak_paneer.jpg',
            rating: 7
        },
        {
            name: 'Billys panpizza',
            ingredients: [
                {
                    amount: 2,
                    measurement: 'st',
                    ingredient: 'Billys Panpizza'
                }
                
            ],
            cooking: [
                {
                    stepNr: 1,
                    step: 'Klipp ett hål i ena kanten av varje billys påse'
                },
                {
                    stepNr: 2,
                    step: 'Sätt in i micron på full effekt i 3 minuter och 30 sekunder'
                },
                {
                    stepNr: 3,
                    step: 'Ta ut ur påsen och servera. Smaklig måltid!'
                }
            ],
            imgPath: '/src/components/img/billys.jpg',
            rating: 9

        },
        {
            name: 'Köttfärswok med nudlar',
            ingredients: [
                {
                    amount: 250,
                    measurement: 'g',
                    ingredient: 'Köttfärs'
                },
                {
                    amount: 0.5,
                    measurement: 'hel',
                    ingredient: 'Gullök'
                },
                {
                    amount: 125,
                    measurement: 'g',
                    ingredient: 'Vitkål'
                },
                {
                    amount: 125,
                    measurement: 'g',
                    ingredient: 'Rödkål'
                },
                {
                    amount: 75,
                    measurement: 'g',
                    ingredient: 'Morot'
                },
                {
                    amount: 30,
                    measurement: 'ml',
                    ingredient: 'Kycklingfond'
                },
                {
                    amount: 1.5,
                    measurement: 'klyftor',
                    ingredient: 'Vitlök'
                },
                {
                    amount: 2.5,
                    measurement: 'g',
                    ingredient: 'Ingefära'
                },
                {
                    amount: 1,
                    measurement: 'msk',
                    ingredient: 'Soja'
                },
                {
                    amount: 0.5,
                    measurement: 'tsk',
                    ingredient: 'Sesamolja'
                },
                {
                    amount: 0,
                    measurement: '',
                    ingredient: 'Salt'
                },
                {
                    amount: 0,
                    measurement: '',
                    ingredient: 'Peppar'
                },
                {
                    amount: 1,
                    measurement: 'pkt',
                    ingredient: 'Nudlar'
                },
                {
                    amount: 50,
                    measurement: 'g',
                    ingredient: 'Grekisk yoghurt'
                },
                {
                    amount: 1,
                    measurement: 'msk',
                    ingredient: 'Honung'
                },
                {
                    amount: 0.5,
                    measurement: 'msk',
                    ingredient: 'Chili Siracha'
                },
                {
                    amount: 0,
                    measurement: 'Lagom',
                    ingredient: 'Salladslök'
                }
            ],
            cooking: [
                {
                    stepNr: 1,
                    step: 'Börja steka färsen'
                },
                {
                    stepNr: 2,
                    step: 'Hacka gullöken. När färsen börjar bli färdigstekt så lägg i den hackade gullöken'
                },
                {
                    stepNr: 3,
                    step: 'Stek tills gullöken blivit mjuk'
                },
                {
                    stepNr: 4,
                    step: 'Hacka vitkål och rödkål, riv morot , ingefära och pressa vitlöken'
                },
                {
                    stepNr: 5,
                    step: 'Lägg i vitkål, rödkål, morot, ingefära och vitlök'
                },
                {
                    stepNr: 6,
                    step: 'Sänk värmen, lägg på ett lock och låt det stå tills tills allt mjuknat'
                },
                {
                    stepNr: 7,
                    step: 'Börja koka dina nudlar'
                },
                {
                    stepNr: 8,
                    step: 'Häll i fond, soja och sesamolja. Krydda med salt och peppar'
                },
                {
                    stepNr: 9,
                    step: 'Lägg i dina kokta nudlar och rör runt'
                },
                {
                    stepNr: 10,
                    step: 'Ta bort ifrån plattan och börja med såsen'
                },
                {
                    stepNr: 11,
                    step: 'Blanda ihop grekisk yoghurt, honung och chili Siracha'
                },
                {
                    stepNr: 12,
                    step: 'Toppa med salladslök'
                },
            ],
            imgPath: '/src/components/img/eggfella.jpg',
            rating: 10

        },
        {
            name: 'Fried rice',
            ingredients: [
                {
                    amount: 1,
                    measurement: 'portion',
                    ingredient: 'Ris'
                },
                {
                    amount: 0.25,
                    measurement: 'hel',
                    ingredient: 'Broccoli'
                },
                {
                    amount: 1,
                    measurement: 'klyftor',
                    ingredient: 'Vitlök'
                },
                {
                    amount: 1,
                    measurement: 'st',
                    ingredient: 'Salladslök'
                },
                {
                    amount: 50,
                    measurement: 'g',
                    ingredient: 'Vitkål'
                },
                {
                    amount: 0.25,
                    measurement: 'hel',
                    ingredient: 'Gurka'
                },
                {
                    amount: 0.5,
                    measurement: 'msk',
                    ingredient: 'Citronjuice'
                },
                {
                    amount: 0,
                    measurement: 'till topping',
                    ingredient: 'Jordnötter'
                },
                {
                    amount: 0,
                    measurement: 'till topping',
                    ingredient: 'Jalapeño'
                },
                {
                    amount: 0.75,
                    measurement: 'msk',
                    ingredient: 'Chiliolja'
                },
                {
                    amount: 1,
                    measurement: 'krm',
                    ingredient: 'Salt'
                },
                {
                    amount: 0.5,
                    measurement: 'msk',
                    ingredient: 'Soja'
                },
                {
                    amount: 0.5,
                    measurement: 'msk',
                    ingredient: 'Tomatpuré'
                },
                {
                    amount: 0.5,
                    measurement: 'msk',
                    ingredient: 'Vitvinsvinäger'
                },
                {
                    amount: 0.25,
                    measurement: 'tsk',
                    ingredient: 'Socker'
                },
                {
                    amount: 1.5,
                    measurement: 'msk',
                    ingredient: 'Teriyakisås'
                }
                
            ],
            cooking: [
                {
                    stepNr: 1,
                    step: 'Koka riset'
                },
                {
                    stepNr: 2,
                    step: 'Hacka grönsakerna till mindre bitar'
                },
                {
                    stepNr: 2,
                    step: 'Stek grönsakerna i matolja en liten stund. Lägg sedan i riset. Fräs medan du lägger i salkt, soja, tomatpuré, chiliolja, vitvinsvinäger, socker, teriyakisås och hackad vitlök'
                },
                {
                    stepNr: 3,
                    step: 'Skär gurkan tunt. Täck gurkan med citronjuice i ca 10 min'
                },
                {
                    stepNr: 4,
                    step: 'Toppa riset med hackad Jalapeño, salladslök, jordnötter, gurkan och alternativt lite extra chiliolja för extra sting'
                }
            ],
            imgPath: '/src/components/img/happyguy.jpg',
            rating: 8

        }
    ],
    userRecipes: [
        {
            name: 'Billys panpizza',
            ingredients: [
                {
                    amount: 2,
                    measurement: 'st',
                    ingredient: 'Billys Panpizza'
                }
                
            ],
            cooking: [
                {
                    stepNr: 1,
                    step: 'Klipp ett hål i ena kanten av varje billys påse'
                },
                {
                    stepNr: 2,
                    step: 'Sätt in i micron på full effekt i 3 minuter och 30 sekunder'
                },
                {
                    stepNr: 3,
                    step: 'Ta ut ur påsen och servera. Smaklig måltid!'
                }
            ],
            imgPath: '/src/components/img/billys.jpg',
            rating: 9

        }
    ]
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'addToUserRecipes':
            console.log('Lägger till recept i gillade');
            return {
                ...state,
                userRecipes: state.userRecipes.concat([action.payload])
            }
        case 'removeFromUserRecipes':
            return {
                ...state,
                userRecipes: state.userRecipes.filter((recipe) => {
                    if (recipe.name === action.payload.name) {
                        console.log('tog bort receptet ifrån favoriter');
                    }
                    else {
                        return recipe
                    }
                })
            }
            default:
                return state
    }
}

export default reducer