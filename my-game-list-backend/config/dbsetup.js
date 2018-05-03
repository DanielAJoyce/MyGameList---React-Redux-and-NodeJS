//This script is to set up the RealGame database 
//This will allow the server to have locally stored
// games to refer to rather than using a 3rd party api.

/*

Fields required:
name:String,
    yearofrelease:Number,
    platforms:[
        {
            type:String
        }
    ],
    image:String,
    genre:String,
    developer:String,
    publisher:String
*/ 

var dbSetupGames = getGames();

function getGames(){
    return games = [{
        name:"Final Fantasy XV",
        yearofrelease:2017,
        platforms:["PC", "Xbox One", "Playstation 4"],
        image:"https://static.giantbomb.com/uploads/scale_small/0/3699/2903750-final+fantasy+xv+v3.jpg",
        genre:["JRPG", "RPG"],
        developer:"Square Enix",
        publisher:"Square Enix",
        realgameid:1
    },
    {
        name:"Final Fantasy XII The Zodiac Age",
        yearofrelease:2017,
        platforms:["Playstation 4", "PC"],
        image:"https://static.giantbomb.com/uploads/scale_small/0/1992/2944626-screen+shot+2017-06-08+at+8.52.29+pm.png",
        genre:["JRPG", "RPG"],
        developer:"Square Enix",
        publisher:"Square Enix",
        realgameid:2
    },
    {
        name:"Uncharted 4: A Thief's End",
        yearofrelease:2017,
        platforms:["Playstation 4"],
        image:"https://static.giantbomb.com/uploads/scale_small/0/3699/2923434-uncharted+4+-+a+thief%27s+end+v3.jpg",
        genre:["Action-adventure"],
        developer:"Naughty Dog",
        publisher:"Sony",
        realgameid:2
    },
    {
        name:"Fallout 4",
        yearofrelease:2015,
        platforms:["Playstation 4","PC", "Xbox One"],
        image:"https://static.giantbomb.com/uploads/scale_small/8/82063/2795700-2356006370-64616.jpg",
        genre:["Action","RPG"],
        developer:"Naughty Dog",
        publisher:"Sony",
        realgameid:3        
    },
    {
        name:"Call of Duty: WWII",
        yearofrelease:2017,
        platforms:["Playstation 4","PC", "Xbox One"],
        image:"https://static.giantbomb.com/uploads/scale_small/8/82063/2944767-call-of-duty-wwii-key-art.jpg",
        genre:["First-Person Shooter"],
        developer:"Treyarch",
        publisher:"Activision",
        realgameid:4        
    },
    {
        name:"EA Sports UFC",
        yearofrelease:2014,
        platforms:["Playstation 4","Xbox One"],
        image:"https://static.giantbomb.com/uploads/scale_small/8/87790/2701434-box_ufc.jpg",
        genre:["Fighting", "sport"],
        developer:"EA",
        publisher:"EA",
        realgameid:5
    },
    {
        name:"Far Cry 5",
        yearofrelease:2018,
        platforms:["Playstation 4","Xbox One","PC"],
        image:"https://static.giantbomb.com/uploads/scale_small/8/82063/2941053-img_4151ixywp.jpg",
        genre:["Fist-Person Shooter"],
        developer:"Ubisoft",
        publisher:"Ubisoft",
        realgameid:6        
    },
    {
        name:"Grand Theft Auto V",
        yearofrelease:2016,
        platforms:["Playstation 4","Xbox One","PC"],
        image:"https://static.giantbomb.com/uploads/scale_small/0/3699/2463980-grand+theft+auto+v.jpg",
        genre:["Action"],
        developer:"Rockstar Games",
        publisher:"Rockstar Games",
        realgameid:7        
    },
    {
        name:"Tekken 7",
        yearofrelease:2017,
        platforms:["Playstation 4","Xbox One","PC"],
        image:"https://static.giantbomb.com/uploads/scale_small/1/12541/2944848-game-box_24.jpg",
        genre:["Fighting"],
        developer:"Ubisoft",
        publisher:"Ubisoft",
        realgameid:8        
    },
    {
        name:"Dark Souls 3",
        yearofrelease:2016,
        platforms:["Playstation 4","Xbox One","PC"],
        image:"https://static.giantbomb.com/uploads/scale_small/0/1992/2840730-untitled-1.png",
        genre:["Action", "Adventure"],
        developer:"From Software",
        publisher:"Bandai Namco",
        realgameid:9        
    },
    {
        name:"Super Mario Odyssey",
        yearofrelease:2017,
        platforms:["Nintendo Switch"],
        image:"",
        genre:["Platformer"],
        developer:"Nintendo",
        publisher:"Nintendo",
        realgameid:10        
    },
    {
        name:"The Legend of Zelda: Breath of the Wild",
        yearofrelease:2017,
        platforms:["Nintendo Switch"],
        image:"https://static.giantbomb.com/uploads/scale_small/8/82063/2972168-smoboxartfinal.jpg",
        genre:["Action","Adventure"],
        developer:"Nintendo",
        publisher:"Nintendo",
        realgameid:11        
    },
    {
        name:"Overwatch",
        yearofrelease:2016,
        platforms:["PC", "Xbox One", "Playstation 4"],
        image:"https://static.giantbomb.com/uploads/scale_small/8/82063/2852990-overwatch.jpg",
        genre:["First-Person Shooter"],
        developer:"Blizzard",
        publisher:"Blizzard",
        realgameid:12        
    },
    ]
}

module.exports = dbSetupGames;