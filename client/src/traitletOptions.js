const traitletOptions = {
    //hex is the colour code, this will be used to show the user the colour of the bead
    //if the bead has a unique texture, you can also write the path to an image of the bead --> images/{imageName.imageid} -- ex: images/testPic.png

    "base-beads": [
        {
            "id":"black-wood",
            "name":"Black Wood",
            "hex":"",
            "image":"",
        },
        {
            "id":"ivory-wood",
            "name":"Ivory Wood",
            "hex":"",
            "image":"",
        },
    ],
    "accessory-beads": [
        {
            "id":"blue-glass",
            "name":"Blue Glass",
            "hex":"",
            "image":"",
        },
        {
            "id":"yellow-glass",
            "name":"Yellow Glass",
            "hex":"",
            "image":"",
        },
        {
            "id":"craked-red-glass",
            "name":"Cracked Red Glass",
            "hex":"",
            "image":"",
        },
        {
            "id":"craked-black-glass",
            "name":"Cracked Black Glass",
            "hex":"",
            "image":"",
        }
    ],
    "centerpiece": [
        //may require specific image sizes
        {
            "id":"text",
            "name":"Text",
            "maxLength": 7,
        },
        {
            "id":"heart",
            "name":"Heart",
            "image":"",
        },
        {
            "id":"infinity-heart",
            "name":"Infinity Heart",
            "image":"",
        },
        {
            "id":"heartbeat",
            "name":"Heartbeat",
            "image":"",
        },
        {
            "id":"soccer",
            "name":"Soccer Ball",
            "image":"",
        },
        {
            "id":"basketball",
            "name":"Basketball",
            "image":"",
        },
        {
            "id":"football",
            "name":"Football",
            "image":"",
        },
    ],
    "size": [
        //in the final form do we need both size in letters and numbers? could we just have nums in the final form
        {"XS":'xs - 16cm'},
        {"S":'s - 16.5cm'},
        {"M":'m - 18cm'},
        {"L":'l - 20cm'},
        {"XL":'xl - 21cm'},
    ]
}

export default traitletOptions
  