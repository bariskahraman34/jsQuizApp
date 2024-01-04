const questions = [
    {
        question: "JavaScript'te bir değişkeni tanımlamak için hangi anahtar kelime kullanılır?",
        answers: {
            a: "var",
            b: "let",
            c: "const",
            d: "define"
        },
        correctAnswer: "b"
    },
    {
        question: "JavaScript'te 'typeof' operatörü ne işe yarar?",
        answers: {
            a: "Değişkenin türünü kontrol eder",
            b: "Fonksiyonun türünü kontrol eder",
            c: "Değişkenin tanımlı olup olmadığını kontrol eder",
            d: "Fonksiyonun tanımlı olup olmadığını kontrol eder"
        },
        correctAnswer: "a"
    },
    {
        question: "HTML5 için geçerli olan en yüksek başlık etiketi nedir?",
        answers: {
            a: "<h5>",
            b: "<head>",
            c: "<heading>",
            d: "<h1>"
        },
        correctAnswer: "d"
    },
    {
        question: "CSS'te bir elemente uygulanan 'margin' özelliği hangi birimle ölçülür?",
        answers: {
            a: "Piksel (px)",
            b: "Em",
            c: "Yüzde (%)",
            d: "Santimetre (cm)"
        },
        correctAnswer: "a"
    },
    {
        question: "JavaScript'te 'map()' fonksiyonu ne işe yarar?",
        answers: {
            a: "Dizi elemanlarını filtrelemek",
            b: "Dizi elemanları üzerinde döngü oluşturmak",
            c: "Dizi elemanlarına belirli bir işlemi uygulamak",
            d: "Dizi elemanlarını sıralamak"
        },
        correctAnswer: "c"
    },
    {
        question: "Bootstrap ile gelen ikon kümesi nedir?",
        answers: {
            a: "FontAwesome",
            b: "Glyphicons",
            c: "Material Icons",
            d: "Ionicons"
        },
        correctAnswer: "a"
    },
    {
        question: "Hangi HTML etiketi bir resmi belirtir?",
        answers: {
            a: "<img>",
            b: "<picture>",
            c: "<figure>",
            d: "<image>"
        },
        correctAnswer: "a"
    },
    {
        question: "JavaScript'te 'Promise' nedir?",
        answers: {
            a: "Bir programlama dilidir",
            b: "Asenkron işlemleri yönetmek için kullanılan bir nesnedir",
            c: "CSS kütüphanesidir",
            d: "HTML etiketi"
        },
        correctAnswer: "b"
    },
    {
        question: "React.js nedir?",
        answers: {
            a: "Bir programlama dili",
            b: "Bir CSS framework'ü",
            c: "Bir JavaScript kütüphanesi",
            d: "Bir veritabanı yönetim sistemidir"
        },
        correctAnswer: "c"
    },
    {
        question: "CSS'te bir elemente uygulanan 'padding' özelliği hangi birimle ölçülür?",
        answers: {
            a: "Piksel (px)",
            b: "Em",
            c: "Yüzde (%)",
            d: "Santimetre (cm)"
        },
        correctAnswer: "a"
    },
    {
        question: "JavaScript'te 'localStorage' nedir?",
        answers: {
            a: "Veritabanı yönetim sistemi",
            b: "Tarayıcıda yerel depolama alanı",
            c: "Bir JavaScript framework'ü",
            d: "CSS kütüphanesi"
        },
        correctAnswer: "b"
    },
    {
        question: "React.js'te 'state' nedir?",
        answers: {
            a: "Bir şehir",
            b: "Bir fonksiyon",
            c: "Bir durum nesnesi",
            d: "Bir sayfa"
        },
        correctAnswer: "c"
    },
    {
        question: "Hangi HTML etiketi metin içeriğini italik yapar?",
        answers: {
            a: "<i>",
            b: "<italic>",
            c: "<em>",
            d: "<italics>"
        },
        correctAnswer: "c"
    },
    {
        question: "JavaScript'te 'let' ile 'var' arasındaki fark nedir?",
        answers: {
            a: "'let' block-scope'dur, 'var' ise function-scope'dur",
            b: "'let' function-scope'dur, 'var' ise block-scope'dur",
            c: "'let' ve 'var' arasında fark yoktur",
            d: "'let' ve 'var' ikisi de block-scope'dur"
        },
        correctAnswer: "a"
    },
    {
        question: "CSS'te 'flexbox' nedir?",
        answers: {
            a: "Bir programlama dili",
            b: "Bir düzen modeli",
            c: "Bir veritabanı",
            d: "Bir JavaScript kütüphanesi"
        },
        correctAnswer: "b"
    },
    {
        question: "JavaScript'te bir dizi elemanını kaldırmak için kullanılan metod nedir?",
        answers: {
            a: "delete()",
            b: "remove()",
            c: "splice()",
            d: "erase()"
        },
        correctAnswer: "c"
    },
    {
        question: "HTML'de bir bağlantıyı yeni bir sekmede açmak için kullanılan özellik nedir?",
        answers: {
            a: "target='_blank'",
            b: "href='_new'",
            c: "target='_new'",
            d: "href='_blank'"
        },
        correctAnswer: "a"
    },
    {
        question: "CSS'te 'box-sizing' özelliği ne işe yarar?",
        answers: {
            a: "Kenar çerçevelerini belirlemek",
            b: "Kutu modelini kontrol etmek",
            c: "Dikdörtgenlerin boyutunu belirlemek",
            d: "Şekil içeriğini belirlemek"
        },
        correctAnswer: "b"
    },
    {
        question: "JavaScript'te 'spread' operatörü hangi amaçla kullanılır?",
        answers: {
            a: "Dizi ve nesneleri birleştirmek",
            b: "Döngü oluşturmak",
            c: "Asenkron işlemleri yönetmek",
            d: "Değişken tanımlamak"
        },
        correctAnswer: "a"
    },
    {
        question: "CSS'te 'z-index' özelliği ne işe yarar?",
        answers: {
            a: "Zamanı kontrol etmek",
            b: "Z-index değerini belirlemek",
            c: "Zarif efektler eklemek",
            d: "Zorlu sorunları çözmek"
        },
        correctAnswer: "b"
    },
    {
        question: "React.js'te 'props' nedir?",
        answers: {
            a: "Bir programlama dili",
            b: "Bir state nesnesi",
            c: "Bir durum değişkeni",
            d: "Bir bileşen aracılığıyla iletilen veri"
        },
        correctAnswer: "d"
    },
    {
        question: "HTML5 ile birlikte gelen yeni form elemanlarından biri nedir?",
        answers: {
            a: "<form>",
            b: "<input type='text'>",
            c: "<canvas>",
            d: "<datalist>"
        },
        correctAnswer: "d"
    },
    {
        question: "JavaScript'te 'async' ve 'await' anahtar kelimeleri ne işe yarar?",
        answers: {
            a: "Sesli komutları yakalamak",
            b: "Asenkron kodu düzenlemek",
            c: "Döngü oluşturmak",
            d: "Veritabanı bağlantısını sağlamak"
        },
        correctAnswer: "b"
    },
    {
        question: "CSS'te bir elementin boyutunu belirlemek için kullanılan özellik nedir?",
        answers: {
            a: "size",
            b: "dimension",
            c: "box-size",
            d: "width ve height"
        },
        correctAnswer: "d"
    },
    {
        question: "JavaScript'te 'JSON' nedir?",
        answers: {
            a: "JavaScript için kullanılan bir dil",
            b: "Java Server Object Notation",
            c: "JavaScript Object Notation",
            d: "JavaScript Online Network"
        },
        correctAnswer: "c"
    },
    {
        question: "React.js'te 'component lifecycle' nedir?",
        answers: {
            a: "Bir bileşenin doğum, yaşam ve ölüm aşamaları",
            b: "Bir bileşenin görünen yüzü",
            c: "Bir bileşenin konumu",
            d: "Bir bileşenin dış görünüşü"
        },
        correctAnswer: "a"
    },
    {
        question: "CSS'te bir elementin konumunu belirlemek için kullanılan özellik nedir?",
        answers: {
            a: "position",
            b: "location",
            c: "place",
            d: "positioning"
        },
        correctAnswer: "a"
    },
    {
        question: "JavaScript'te 'closure' nedir?",
        answers: {
            a: "Fonksiyonu kapatma işlemi",
            b: "Kodun sonlanması",
            c: "Döngüyü durdurma",
            d: "Dış kapsam değişkenlerine erişim sağlayan bir yapı"
        },
        correctAnswer: "d"
    }
];