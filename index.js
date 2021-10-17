const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

 
client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});
 
client.on('ready', () => {
    console.log('Client is ready!');
});
 
client.on('message', message => {
    console.log(message.body);
    if (message.body === 'Menu') {
        client.sendMessage(message.from, 'Sejarah Covid - Covid Menu - Cek Vaksin Indonesia');
    }
});

client.on('message', message => {
    console.log(message.body);
    if (message.body === 'Sejarah Covid') {
        client.sendMessage(message.from, 'Pandemi COVID-19 adalah peristiwa menyebarnya Penyakit koronavirus 2019 (Bahasa Inggris: Coronavirus disease 2019, disingkat COVID-19) di seluruh dunia untuk semua Negara. Penyakit ini disebabkan oleh koronavirus jenis baru yang diberi nama SARS-CoV-2. Wabah COVID-19 pertama kali dideteksi di Kota Wuhan, Hubei, Tiongkok pada tanggal 1 Desember 2019, dan ditetapkan sebagai pandemi oleh Organisasi Kesehatan Dunia (WHO) pada tanggal 11 Maret 2020. Virus SARS-CoV-2 diduga menyebar di antara orang-orang terutama melalui percikan pernapasan (droplet) yang dihasilkan selama batuk. Percikan ini juga dapat dihasilkan dari bersin dan pernapasan normal. Selain itu, virus dapat menyebar akibat menyentuh permukaan benda yang terkontaminasi dan kemudian menyentuh wajah seseorang. Penyakit COVID-19 paling menular saat orang yang menderitanya memiliki gejala, meskipun penyebaran mungkin saja terjadi sebelum gejala muncul. Periode waktu antara paparan virus dan munculnya gejala biasanya sekitar lima hari, tetapi dapat berkisar dari dua hingga empat belas hari.Gejala umum di antaranya demam, batuk, dan sesak napas.Komplikasi dapat berupa pneumonia dan penyakit pernapasan akut berat.Pengobatan primer yang diberikan berupa terapi simtomatik dan suportif. Langkah-langkah pencegahan yang direkomendasikan di antaranya mencuci tangan, menutup mulut saat batuk, menjaga jarak dari orang lain, serta pemantauan dan isolasi diri untuk orang yang mencurigai bahwa mereka terinfeksi.Meski sekarang sudah terdapat vaksin, namun tidak menangkal 100% virus SARS-CoV-2 bahkan varian virus Corona mulai dari Inggris B.1.1.7 disebut Alpha Varian berasal dari Inggris, B.1.351 disebut Beta berasal dari Afrika Selatan, P1 disebut Gamma Varian berasal dari Brazil, B.1.617 disebut Delta berasal dari India, B.1.427 atau B.1.429 disebut Epsilon berasal dari Amerika, P2 disebut Zeta berasal dari Brazil, B.1525 disebut Eta berasal dari Inggris, P3 disebut Theta berasal dari Filipina, B.1.526 disebut Lota berasal dari Amerika, B.1.617.1 disebut Kappa berasal dari India merupakan varian yang sudah masuk ke Indonesia sampai dengan hari ini.');
    }
});


client.on('message', message => {
    console.log(message.body);
    if (message.body === 'Covid Menu') {
        client.sendMessage(message.from, 'Covid Indonesia - Covid Dunia Positif - Covid Dunia Sembuh - Covid Dunia Meninggal');
    }
});

client.on('message', message => {
    console.log(message.body);
    if (message.body === 'Covid Indonesia') {
       client.sendMessage(message.from, 'https://api.kawalcorona.com/indonesia');
    }
});

client.on('message', message => {
    console.log(message.body);
    if (message.body === 'Covid Dunia Positif') {
        //message.reply('https://api.kawalcorona.com/positif');
        client.sendMessage(message.from, 'https://api.kawalcorona.com/positif');
    }
});

client.on('message', message => {
    console.log(message.body);
    if (message.body === 'Covid Dunia Sembuh') {
        //message.reply('https://api.kawalcorona.com/sembuh');
        client.sendMessage(message.from, 'https://api.kawalcorona.com/sembuh');
    }
});

client.on('message', message => {
    console.log(message.body);
    if (message.body === 'Covid Dunia Meninggal') {
       client.sendMessage(message.from, 'https://api.kawalcorona.com/meninggal');
    }
});

client.on('message', message => {
    console.log(message.body);
    if (message.body === 'Cek Vaksin Indonesia') {
        client.sendMessage(message.from, 'Tenaga Kesehatan (Vaksin 1 : 1.553.404 jiwa ; Vaksin 2 : 1.415.575 jiwa) Lanjut Usia (Vaksin 1 : 21.554.118 jiwa ; Vaksin 2 : 2.758.477 jiwa) Petugas Publik (Vaksin 1 : 23.106.592 jiwa ; Vaksin 2 : 9.296.754 jiwa) Data https://vaksin.kemkes.go.id/#/vaccines');
    }
});


//const covid = async (country = null) => {
//const path = country ? `countries/${country}` : '';
//return Data Covid ${country ? country.toLowerCase() : 'Seluruh Dunia'}_\n\n_Terkonfirmasi : ${data.confirmed.value}_\n_Sembuh : ${data.recovered.value}_\n_Kematian : ${data.deaths.value}`;

client.initialize();