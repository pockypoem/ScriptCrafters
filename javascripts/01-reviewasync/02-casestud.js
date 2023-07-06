// PROMISE

const token = ~~[Math.random() * 12345678]

const pictures = ["1.jpg", "2.jpg", "3.jpg"]

function login(username) {
    console.log("processing token user now......");
    return new Promise((success, failed) => {
        setTimeout(() => {
            if(username != "pocky_poem") failed("sorry, wrong data")
            success({token})
        }, 200)
    })
    
}

function getUser(token) {
    console.log("processing apikey now.....")
    return new Promise((success, failed) => {
        if(!token) failed("sorry, no token!. Cannot Access");
        setTimeout(() => {
            success({apiKey: "xkey123"})
        }, 500)   
    })
}

function getPictures(apiKey) {
    console.log("processing pictures now.....")
    return new Promise((success, failed) => {
        if(!apiKey) failed("sorry, no apiKey!. Cannot see pictures");
        setTimeout(() => {
            success({pic: pictures})
        }, 1500)
    })
    
}

const user = login("pocky_poem");
// console.log(user); -> pending
user.then(function(response) {
    const {token} = response
    getUser(token).then(function(response) {
        const {apiKey} = response;
        getPictures(apiKey).then(function(response) {
            const {pic} = response;
            console.log(pic);
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
}).catch(err => console.log(err));