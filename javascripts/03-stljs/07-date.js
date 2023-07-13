// Date

{
    // Membuat Object Date
    // urutan bulan dari 0 sampai 11

    const date1 = new Date();
    console.info(date1);

    const date2 = new Date(2020, 10, 10);
    console.info(date2);

    const date3 = new Date(2020, 10, 10, 1, 0, 0, 0);
    console.info(date3);

    const date4 = new Date(1689213303148);
    console.info(date4);
}

{
    // Unix Timestamp

    // Untuk mendapatkan waktu saat ini dalam epoch & unix timestamp
    const timestamp = Date.now();
    console.info(timestamp);

    const dateUnix = new Date(timestamp);
    console.info(dateUnix);

    // Untuk mengubah dari object date ke epoch & unix timestamp
    console.info(dateUnix.getTime());
}

{
    // Parsing Date

    const parseTimeStamp = Date.parse("2020-12-18T10:10:10.123+07:00")
    console.info(parseTimeStamp);

    const parseDate = new Date(parseTimeStamp);
    console.info(parseDate);
}


{
    // Date Getter dan Setter

    const date = new Date();
    date.setFullYear(2020);

    console.info(date);
    
    console.info(date.getFullYear());
    console.info(date.getMonth());
    console.info(date.getDate());
    console.info(date.getHours());
    console.info(date.getMinutes());
    console.info(date.getSeconds());
    console.info(date.getMilliseconds());
    console.info(date.getTimezoneOffset()); // untuk sampai di UTC dikurangi berapa? that's why untuk GMT+7 = -420 (konversi ke menit)
}