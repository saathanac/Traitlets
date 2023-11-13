const traitletOptions = {
    //hex is the colour code, this will be used to show the user the colour of the bead
    //if the bead has a unique texture, you can also write the path to an image of the bead --> images/{imageName.imageid} -- ex: images/testPic.png

    "base-beads": [
        {
            "id":"black-wood",
            "name":"Black Wood",
            "hex":"",
            "image":"/images/black-wood.png",
        },
        {
            "id":"ivory-wood",
            "name":"Ivory Wood",
            "hex":"",
            "image":"/images/ivory-wood.png",
        },
    ],
    "accessory-beads": [
        {
            "id":"blue-glass",
            "name":"Blue Glass",
            "hex":"",
            "image":"/images/blue-glass.png",
        },
        {
            "id":"yellow-glass",
            "name":"Yellow Glass",
            "hex":"",
            "image":"/images/yellow-glass.png",
        },
        {
            "id":"craked-red-glass",
            "name":"Cracked Red Glass",
            "hex":"",
            "image":"./images/red-cracked.png",
        },
        {
            "id":"craked-black-glass",
            "name":"Cracked Black Glass",
            "hex":"",
            "image":"/images/black-cracked.png",
        },
        {
            "id":"brown-jasper",
            "name":"Brown Jasper",
            "hex":"",
            "image":"./images/brown-jasper.png",
        },
        {
            "id":"purple-cracked",
            "name":"Cracked Purple Glass",
            "hex":"",
            "image":"./images/purple_cracked.png",
        },
        {
            "id":"rose-quartz",
            "name":"Rose Quartz",
            "hex":"",
            "image":"./images/rose-quartz.png",
        },
        {
            "id":"white-pearl",
            "name":"White Pearl",
            "hex":"",
            "image":"./images/white-pearl.png",
        },
    ],
    "centerpiece": [
        //may require specific image sizes
        {
            "id":"heart",
            "name":"Heart",
            "image":"./images/heart.svg",
        },
        {
            "id":"infinity-heart",
            "name":"Infinity Heart",
            "image":"./images/inf-heart.jpeg",
        },
        {
            "id":"heartbeat",
            "name":"Heartbeat",
            "image":"./images/heart-beat.png",
        },
        {
            "id":"soccer",
            "name":"Soccer Ball",
            "image":"./images/soccer.png",
        },
        {
            "id":"basketball",
            "name":"Basketball",
            "image":"",
        },
        {
            "id":"football",
            "name":"Football",
            "image":"./images/football.jpg",
        },
    ],
    "size": [
        {"name":'XS', "size":'16 cm'},
        {"name":'S', "size":'16.5 cm'},
        {"name":'M', "size":'18 cm'},
        {"name":'L', "size":'20 cm'},
        {"name":'XL', "size":'21 cm'},
    ]
}

export default traitletOptions
  
// orderInformation = {
//     id:,
//     date:,
//     clientInfo: {
//         name:,
//         email:,
//         phoneNumber:,
//         shippingDetails:{
//             address:,
//             city:,
//             province:,
//             country:,
//         }
    // braceletDetails:{
    //     base-beads:,
    //     accessory-beads:,
    //     centrpiece:{
    //         front-side:{
    //             type:,
    //             design:
    //         }
    //         back-side:{
    //             type:,
    //             design:
    //         }
    //     },
    //     size:
    // }
    // }
// }