    // su dung doi voi version 3
    export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
        // khai bao thuoc tinh o day
        // Syntax: key: value
        extend: {
            colors:{
                "mau01":"#223344",
                "mau02":"#113355",
                // thuoc tinh co nhieu sac do
                "mau03":{
                    100 : "#2233cc",
                    500: "#2233ff"
                }
            }
        },
    },
    plugins: [],
 }