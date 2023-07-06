// Async Await

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

async function UserDisplay() {
    try {
        const {token}= await login("pocky_poem"); // tunggu dulu eksekusi baru tampilin di console.log
        const {apiKey} = await getUser(token);
        const {pic} = await getPictures(apiKey);

        console.log(`
        token anda adalah: ${token}
        apiKey anda adalah: ${apiKey}
        request gambar anda berikut ini: ${pic}
        `)
    } catch (err) {
        console.log(err)
    }

}

UserDisplay();

