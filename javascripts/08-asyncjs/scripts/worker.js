addEventListener("message", function (message) {
    // console.info(message);

    const total = message.data;
    for (let i = 0; i < total; i++) {
        postMessage(i);
    }

})