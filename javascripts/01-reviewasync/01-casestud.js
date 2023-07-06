// CALLBACK

const token = ~~[Math.random() * 12345678]

const pictures = ["1.jpg", "2.jpg", "3.jpg"]

function login(username, callback) {
    console.log("processing token user now......");
    setTimeout(() => {
        callback({token, username}) 
    }, 200)
}

function getUser(token, callback) {
    console.log("processing apikey now.....")
    if(token) 
    setTimeout(() => {
        callback({apiKey: "xkey123"})
    }, 500)
}

function getPictures(apiKey, callback) {
    console.log("processing pictures now.....")
    if(apiKey)
    setTimeout(() => {
        callback({pic: pictures})
    }, 1500)
}

// NESTED CALLBACK
const user = login("pocky_poem", function(response) {
    const {token} = response;
    // console.log("token => ", token);
    // const apiKey = getUser(token);
    // console.log({apiKey});
    getUser(token, function(response) {
        const {apiKey} = response
        getPictures(apiKey, function(response) {
            const {pic} = response;
            console.log(pic);
        })
    })

    


});

// console.log("user adalah = ", user); // undefined

// const user = login("pocky_poem");
// console.log(user.token)

// const {apiKey} = getUser(user.token);
// console.log(apiKey);

// const getUserPicture = getPictures(apiKey);
// console.log(getUserPicture);