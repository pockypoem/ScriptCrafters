// Base64

const original = "Jeremyas&Cornelis=Abigail";
console.info(original);

const encoded = btoa(original); // Encode ke base64 dari value
console.info(encoded); 
console.info(typeof encoded); // string

const decoded = atob(encoded); // Decode dari base64 ke value
console.info(decoded);