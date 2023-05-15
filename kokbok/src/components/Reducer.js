const initialState = {
    recipes: [
        {
            name: 'Palak paneer med halloumi',
            ingredients: [
                '4 port ris',
                '1 schalottenlök',
                '1 vitlöksklyfta', 
                '3/4 tomatask', 
                'riktligt med olivolja', 
                '2 msk riven ingefära', 
                '2 msk tomatpuré', 
                '1 msk garam masala', 
                '390 g krossade tomater', 
                '1 dl vatten', 
                '2,5 dl vispgrädde', 
                '1 grönsaksbuljongtärning', 
                '150 g spenat', 
                '400 g grilloumi', 
                'salt till avsmakning'
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
                '4 st billyspanpizza'
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
                '4 st billyspanpizza'
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
            console.log('denna kör');
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