const questions = [
    {
        question: "JavaScript'te bir değişkeni tanımlamak için hangi anahtar kelime kullanılır?",
        answers: {
            a: "function",
            b: "let",
            c: "async",
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
            a: "&lth5&gt",
            b: "&lthead&gt",
            c: "&ltheading&gt",
            d: "&lth1&gt"
        },
        correctAnswer: "d"
    },
    {
        question: "CSS'te bir elemente uygulanan 'margin' özelliği hangi birimle ölçülür?",
        answers: {
            a: "Piksel (px)",
            b: "viev-width (vw)",
            c: "Yüzde (%)",
            d: "Santimetre (cm)"
        },
        correctAnswer: "a"
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
            a: "&ltimg&gt",
            b: "&ltpicture&gt",
            c: "&ltfigure&gt",
            d: "&ltimage&gt"
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
        question: "Hangi HTML etiketi metin içeriğini italik yapar?",
        answers: {
            a: "&ltcanvas&gt",
            b: "&ltitalic&gt",
            c: "&ltem&gt",
            d: "&ltitalics&gt"
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
        question: "HTML5 ile birlikte gelen yeni form elemanlarından biri nedir?",
        answers: {
            a: "&ltform&gt",
            b: "&ltinput type='text'&gt",
            c: "&ltcanvas&gt",
            d: "&ltdatalist&gt"
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
        question: "CSS'te bir elementin konumunu belirlemek için kullanılan özellik nedir?",
        answers: {
            a: "position",
            b: "location",
            c: "place",
            d: "positioning"
        },
        correctAnswer: "a"
    }
];