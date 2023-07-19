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