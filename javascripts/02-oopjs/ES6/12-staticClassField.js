// Static Class Field
// Ketika kita membuat field atau method, maka secara otomatis field akan menjadi property di instance object
// dan method akan menjadi function di prototype
// Jika menambahkan static, maka hal itu tidak terjadi

// Static Class Field bersifat global, tidak peduli diakses dimana atau siapa yang mengakses, hasilnya akan sama
// static digunakan jika kita ingin membuat utility field atau function


class Configuration {

    static name = "Khataman Javascript";
    static version = 1.0;
    static learner = "pocky poem";

}

const config = new Configuration();
console.info(config);

Configuration.author = "Pockyyy"; // change or create new can be like this

// Akses Static Class Field
console.info(Configuration.name);
console.info(Configuration.version);
console.info(Configuration.learner);
console.info(Configuration.author);