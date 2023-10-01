

const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const connectingString = 'mongodb+srv://lukids092021:Aewx0gWl2XP6cntH@xtar-trak-api.wxezjjh.mongodb.net/?retryWrites=true&w=majority'
const PORT = 8000


app.use(cors())
app.use(express.json())

// const aliens = {
//     'humans': {
//         'speciesName' : 'Humans',
//         'homeWorld' : 'Earth',
//         'features' : 'Rounded ears, hair on head and face (sometimes)',
//         'interestingFacts' : 'Founded the United Federation of Planets after first contact with the Vulcans',
//         'notableExamples' : 'James T. Kirk, Zephram Cochram, Abraham Lincoln',
//         'image' : 'https://static.wikia.nocookie.net/aliens/images/6/68/The_City_on_the_Edge_of_Forever.jpg'

//     },
//     'vulcans': {
//         'speciesName' : 'Vulcans',
//         'homeWorld' : 'Vulcan',
//         'features' : 'Pointed ears, upward-curving eyebrows',
//         'interestingFacts' : 'Practice an extreme form of eotional regulation that focuses on logic above all else, pionered by a Vulcan named Surak',
//         'notableExamples' : 'Spock T"Pol, Sarek',
//         'image' : 'https://static.wikia.nocookie.net/aliens/images/7/75/Vulcans-FirstContact.jpg'
//     },
//     'klingons': {
//         'speciesName' : 'Klingons',
//         'homeWorld' : 'Qo"noS',
//         'features' : 'Large stature, pronouced ridges on the forehead, stylized facial hair',
//         'interestingFacts' : 'Highly Skilled in weapons and battle. Their facial ridges were lost as the result of a virus in 2154, but were subsequently restored by 2269.',
//         'notableExamples' : 'Worf, Kor, Kang',
//         'image' : 'https://static.wikia.nocookie.net/aliens/images/7/74/Kruge.jpg'
//     },
//     'romulas': {
//         'speciesName' : 'Romulans',
//         'homeWorld' : 'Romulus',
//         'features' : 'Pointed ears, upward-curving eyebrows, green tinge to the skin, diagonal smooth forehead ridges (sometimes)',
//         'interestingFacts' : 'Share a common ancestory with Vulcans. though none of the emotional discipline. Romulus has a sister planet, Remus, on which the Remans are seen as lesser beings',
//         'notableExamples' : 'Pardek, Tal"aura, Narissa',
//         'image' : 'https://static.wikia.nocookie.net/aliens/images/1/1d/Zzzd7.jpg'
//     },
//     'borg': {
//         'speciesName' : '(The) Borg',
//         'homeWorld' : 'unknown (Delta Quarant)',
//         'features' : 'pale skin, numerous interior biological modifications',
//         'interestingFacts' : 'No single genetic lingeage, species propagates by assimilating individuals via nanotechnology, led by a hive mindgided by a sinlge "queen" individual. DO NOT APROACH unless under specific diplomatic orders from Starfleet Command',
//         'notableExamples' : 'Borg Queen, Seven of Nine, Locutus',
//         'image' : 'https://static.wikia.nocookie.net/aliens/images/7/76/Borg.jpg'
//     },
//     'gorn': {
//         'speciesName' : 'Gorn',
//         'homeWorld' : 'unknow (ALpha Quadraut)',
//         'features' : 'scaly green skin, large , iridescent eyes, powerful build, sharp teeth',
//         'interestingFacts' : 'Extremely militaristic and driven to conquer, but also posses advanced scientific knowledge allowing for superior bio-weapons.',
//         'notableExamples' : 'Gorn Captain',
//         'image' : 'https://static.wikia.nocookie.net/aliens/images/9/9b/Gorn.jpg'
//     },

//     'trill': {
//         'speciesName' : 'Trill',
//         'homeWorld' : 'Trill',
//         'features' : 'Outward appearance similar to humans, aside from distinct dark pigment marks running symmetrically down both sides of the face and body',
//         'interestingFacts' : 'Some Trill are willin host to long-lived invertibrate symboite that merges wit the host to create a distinct personality.',
//         'notableExamples' : 'Jadzia Dax Ezri Dax, Curzon Dax',
//         'image' : 'https://static.wikia.nocookie.net/aliens/images/4/42/EzriDax.jpg'
//     },
//     'unknown': {
//         'speciesName' : 'Uknown',
//         'homeWorld' : 'Uknown',
//         'features' : 'Uknown',
//         'interestingFacts' : 'Uknown',
//         'notableExamples' : 'Uknown',
//         'image' : 'https://snworksceo.imgix.net/dtc/3f037af6-87ce-4a37-bb37-55b48029727d.sized-1000x1000.jpg?w=1000'
//     }

// }


//

// Setting up Mongo


MongoClient.connect(connectingString, {useUnifiedTopology:true, useNewUrlParser: true}) // I can use this instead (connectingString)
    .then(client => {
        console.log("connected to Mongo dataBase")
        const db = client.db('xtar-trek-api-data')
        const infoCollection = db.collection('xtar-trek')
    
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html')
    })

    app.get('/api/:alienName', (req, res) => {
    const alienName = req.params.alienName.toLowerCase()
    
        if (aliens[alienName]) {
            return res.json(aliens[alienName]); // Return the entire object for the alien species
        } else {
            return res.json(aliens['unknown']); // Return default data for humans if alien not found
        }
    })
})

app.listen(process.env.PORT || PORT, () => {
    console.log('The server is running!!!')
})