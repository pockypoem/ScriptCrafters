// Encode

{
    //TODO: encode URI dan decodeURI

    const url = 'http://www.contoh.com/?name=Kevin Anggoro Brian';
    console.info(url);

    const encoded = encodeURI(url);
    console.info(encoded);

    const decoded = decodeURI(encoded);
    console.info(decoded);
}

{
    // TODO: encodeURIComponent dan decodeURIComponent

    const value = "Kevin&Anggoro=Herman";
    const url = 'http://www.contoh.com/?name=';

    const encoded = encodeURIComponent(value);
    console.info(url + encoded);

    const decoded = decodeURIComponent(encoded);
    console.info(url + decoded);
}