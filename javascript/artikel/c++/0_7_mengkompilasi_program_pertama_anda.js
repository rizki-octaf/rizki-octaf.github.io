// set up text to print, each item in array is new line
let aText = new Array(
    "<h1>Programming C++ 0.7 Mengkompilasi Program Pertama Anda</h1>",
    "Sebelum Anda dapat menulis program pertama, Anda perlu mempelajari cara membuat program baru dalam Integrated Development Environment (IDE) Anda. Dalam pelajaran ini, Anda akan membahas cara melakukannya, dan Anda juga akan mengkompilasi dan menjalankan program pertama Anda",
    "",
    "<b>Proyek (Project)</b>",
    "",
    "Untuk menulis program C++ di dalam IDE, kami biasanya memulai dengan membuat proyek baru (kami akan menunjukkan cara melakukannya). proyek adalah wadah menampung semua file kode sumber, gambar, file data, dan lainnya... yang diperlukan untuk menghasilkan file yang dapat dieksekusi (atau pustaka, situs web, dan lainnya...) yang dapat Anda jalankan atau gunakan. proyek ini juga menyimpan berbagai pengaturan IDE, kompiler, dan tautan, serta mengingat di mana Anda tinggalkan, sehingga saat Anda membuka kembali proyek nanti, status IDE dapat dikembalikan ke mana pun Anda tinggalkan. Saat Anda memilih untuk mengkompilasi program Anda, semua file .cpp dalam proyek akan dikompilasi dan ditautkan.",
    "",
    "Setiap proyek sesuai dengan satu program. Saat Anda siap membuat program kedua, Anda harus membuat proyek baru, atau menimpa kode di proyek yang sudah ada (jika Anda tidak ingin menyimpannya). File proyek umumnya khusus untuk IDE, jadi proyek yang dibuat untuk satu IDE perlu dibuat ulang dalam IDE yang berbeda.",
    "",
    "<b>Praktek Terbaik</b>",
    "",
    "Buat proyek baru untuk setiap program baru yang Anda tulis.",
    "",
    "<b>Proyek Konsol</b>",
    "",
    "Saat Anda membuat proyek baru, biasanya Anda akan ditanya jenis proyek apa yang ingin Anda buat. Semua proyek yang akan kita buat dalam tutorial ini akan menjadi proyek konsol. Proyek konsol berarti kita akan membuat program yang dapat dijalankan dari konsol Windows, Linux, atau Mac.",
    "",
    "Berikut screenshot dari konsol Windows:",
    "",
    "<img src='/image/project_konsol.png' alt='project_konsol' class='image'>",
    "",
    "Secara default, aplikasi konsol tidak memiliki antarmuka pengguna grafis (GUI), mereka mencetak teks ke konsol, membaca input dari keyboard, dan dikompilasi menjadi file yang dapat dieksekusi yang berdiri sendiri. Ini sangat cocok untuk mempelajari C++, karena menjaga kompleksitas seminimal mungkin, dan memastikan segala sesuatunya bekerja pada berbagai macam sistem.",
    "",
    "Jangan khawatir jika Anda belum pernah menggunakan konsol sebelumnya, atau tidak tahu cara mengaksesnya. Kami akan mengkompilasi dan meluncurkan program kami melalui IDE kami (yang akan memanggil konsol bila diperlukan).",
    "",
    "<b>Ruang Kerja atau Solusi</b>",
    "",
    "Saat Anda membuat proyek baru untuk program Anda, banyak IDE akan secara otomatis menambahkan proyek Anda ke 'ruang kerja' atau 'solusi' (istilahnya bervariasi menurut IDE). Ruang kerja atau solusi adalah wadah yang dapat menampung satu atau beberapa proyek terkait. Misalnya, jika Anda sedang menulis game dan ingin memiliki executable terpisah untuk pemain tunggal dan multipemain, Anda harus membuat dua proyek. Tidak masuk akal jika kedua proyek ini sepenuhnya independen --> lagipula, keduanya adalah bagian dari permainan yang sama. Kemungkinan besar, masing - masing akan dikonfigurasi sebagai proyek terpisah dalam satu ruang kerja atau solusi",
    "",
    "Meskipun Anda dapat menambahkan beberapa proyek ke satu solusi, kami biasanya menyarankan untuk membuat ruang kerja atau solusi baru untuk setiap program, terutama saat belajar. Ini lebih sederhana dan kecil kemungkinan terjadi kesalahan",
    "",
    "<b>Menulis Program Pertama Anda</b>",
    "",
    "Secara tradisional, programmer program pertama yang menulis dalam bahasa baru adalah program hello world yang terkenal, dan kami tidak akan menghilangkan pengalaman itu dari Anda, Anda akan berterima kasih kepada kami nanti. Mungkin.",
    "",
    "<b>Membuat Proyek di Visual Studio 2019</b>",
    "",
    "Saat Anda menjalankan Visual Studio 2019, Anda akan melihat dialog yang terlihat seperti ini :",
    "",
    "<img src='/image/vs2019_1.png' class='image'>",
    "",
    "Pilih <b>Create New Project</b>. Anda kemudian akan melihat dialog yang terlihat seperti ini:",
    "",
    "<img src='/image/vs2019_2.png' class='image'>",
    "",
    "Jika Anda telah membuka proyek sebelumnya, Anda dapat mengakses dialog ini melalui menu File --> New --> Project .",
    "",
    "Pilih <b>Windows Desktop Wizard</b> dan klik Next. Jika Anda tidak melihat ini, Anda mungkin lupa memilih untuk menginstal pengembangan Desktop dengan beban kerja C++ saat Anda menginstal Visual Studio. Dalam hal ini, kembali ke pelajaran 0.6 -- Menginstal Lingkungan Pengembangan Terpadu (IDE) dan menginstal ulang Visual Studio Anda seperti yang ditunjukkan (catatan: daripada melakukan penginstalan ulang penuh, Anda dapat menjalankan penginstal Visual Studio dan memodifikasi penginstalan yang ada untuk menambahkan beban kerja C++).",
    "",
    "Selanjutnya, Anda akan melihat dialog yang terlihat seperti ini:",
    "",
    "<img src='/image/vs2019_3.png' class='image'>",
    "",
    "Ganti nama proyek yang ada dengan <b>HelloWorld</b>.",
    "",
    "Sebaiknya Anda juga memeriksa <b>Place solution and project in the same directory</b>, karena ini mengurangi jumlah subdirektori yang dibuat dengan setiap proyek.",
    "",
    "Klik <b>Create</b> untuk melanjutkan.",
    "",
    "Terakhir, Anda akan melihat satu dialog terakhir:",
    "",
    "<img src='/image/vs2019_4.png' class='image'>",
    "",
    "Pastikan jenis Aplikasi ditetapkan sebagai Aplikasi Konsol (.exe) dan opsi Precompiled Header tidak dipilih. Lalu klik Oke .",
    "",
    "Anda sekarang telah membuat proyek, Lompat ke bagian Visual Studio Solution Explorer di bawah untuk melanjutkan Pembelajaran.",
    "",
    "Pertanyaan : Apa yang dimaksud dengan header yang telah dikompilasi dan mengapa kami menonaktifkannya ?",
    "",
    "--> Dalam proyek besar (yang memiliki banyak file kode), header yang telah dikompilasi dapat meningkatkan kecepatan kompilasi dengan menghindari beberapa kompilasi berlebihan yang cenderung terjadi pada proyek yang lebih besar.",
    "",
    "--> Namun, header yang telah dikompilasi memerlukan kerja ekstra untuk digunakan, dan untuk proyek kecil (seperti yang akan Anda buat di tutorial kami) membuat sedikit atau tidak ada perbedaan dalam waktu kompilasi.",
    "",
    "--> Untuk alasan ini, kami sarankan untuk menonaktifkan header yang telah dikompilasi terlebih dahulu, dan hanya mengaktifkannya nanti jika dan ketika Anda merasa kesulitan saat kompilasi.",
    "",
    "<b>Membuat Proyek di Visual Studi0 2017 atau lebih lama</b>",
    "",
    "Untuk membuat proyek baru di Visual Studio 2017 atau lebih lama, buka menu File --> New --> Project. Sebuah kotak dialog akan muncul yang terlihat seperti ini:",
    "",
    "<img src='/image/vs2017_1.png' class='image'>",
    "",
    "Pertama, pastikan Visual C++ terdaftar di sisi kiri. Jika Anda tidak melihat Visual C++, Anda mungkin lupa memilih untuk menginstal pengembangan Desktop dengan beban kerja C++ saat Anda menginstal Visual Studio. Dalam hal ini, kembali ke pelajaran 0.6 Menginstal Lingkungan Pengembangan Terpadu (IDE) dan menginstal ulang Visual Studio Anda seperti yang ditunjukkan (catatan: alih - alih melakukan penginstalan ulang penuh, Anda dapat menjalankan penginstal Visual Studio dan memodifikasi penginstalan yang ada untuk menambahkan beban kerja C++).",
    "",
    "Jika Anda menggunakan Visual Studio 2017 v15.3 atau yang lebih baru, di bawah Visual C++, pilih Windows Desktop lalu pilih Windows Desktop Wizard di jendela utama.",
    "",
    "Jika Anda tidak melihat Windows Desktop sebagai opsi, Anda mungkin menggunakan Visual Studio versi lama. Tidak apa - apa. Sebagai gantinya, pilih Win32 dan kemudian Aplikasi Konsol Win32 di jendela utama.",
    "",
    "Di bawah, di kolom Nama, masukkan nama program Anda (ganti nama yang ada dengan HelloWorld). Di bidang Lokasi, Anda dapat secara opsional memilih lokasi lain untuk penempatan proyek Anda. Standarnya baik - baik saja untuk saat ini.",
    "",
    "Klik Oke. Jika Anda menggunakan Visual Studio versi lama, Biasanya Aplikasi Win32 yang akan diluncurkan. Tekan Berikutnya.",
    "",
    "Pada titik ini, Anda akan melihat dialog wizard yang terlihat seperti ini (Versi Visual Studio yang lebih lama menggunakan gaya yang berbeda, tetapi memiliki sebagian besar opsi yang sama) :",
    "",
    "<img src='/image/vs2017_2.png' class='image'>",
    "",
    "Pastikan Anda menghapus centang Precompiled Header. Kemudian klik Ok atau Selesai. Sekarang proyek Anda dibuat.",
    "",
    "<b>Solution Explorer Visual Studio</b>",
    "",
    "Di sisi kiri atau kanan jendela, Anda akan melihat jendela berjudul Solution Explorer. Di dalam jendela ini, Visual Studio telah membuat solusi untuk Anda (Solution 'HelloWorld'). Di dalamnya, dengan nama yang dicetak tebal, adalah proyek baru Anda (HelloWorld). Di dalam proyek, Visual Studio telah membuat sejumlah file untuk Anda, termasuk HelloWorld.cpp (di bawah item pohon File Sumber). Anda mungkin juga melihat beberapa file .cpp atau .h lainnya, yang dapat Anda abaikan untuk saat ini.",
    "",
    "<img src='/image/vs2017_3.png' class='image'>",
    "",
    "Di editor teks, Anda akan melihat bahwa Visual Studio telah membuka HelloWorld.cpp dan membuat beberapa kode untuk Anda. Pilih dan hapus semua kode, dan ketik kode berikut ke dalam IDE Anda:",
    "",
    "<img src='/image/vscode_1.png' class='image'>",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    
    "",
    "",
    "<b>Next --> Programming C++ 0.8 Beberapa masalah umum C++</b>",
    '',
    );
    
    // ========================================================================
    let iSpeed = 1; // time delay of print out
    let iIndex = 0; // start printing array at this posision
    let iArrLength = aText[0].length; // the length of the text array
    let iScrollAt = 1000; // start scrolling up at this many lines
     
    let iTextPos = 0; // initialise text position
    let sContents = ''; // initialise contents letiable
    let iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     let destination = document.getElementById("text");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "::";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 100);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();