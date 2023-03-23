// KATEGORI PROGRAMMING C++
// // Programming C++ 0.1 Pengantar Tutorial C++
// let _1_title = '';
// let _1_desc = '';
// let _1_content = ''
// +__
// +''
// +_
// +''

// ;

// Programming C++ 0.6 Memasang Lingkungan Pengembangan Terintegrasi (IDE)
let _10_title = 'Programming C++ 0.6 Memasang Lingkungan Pengembangan Terintegrasi (IDE)';
let _10_desc = '# Diedit pada 22 Maret 2023, Web Arsip';
let _10_content = 'Lingkungan Pengembangan Terintegrasi (IDE) adalah perangkat lunak yang berisi semua hal yang Anda perlukan untuk mengembangkan, mengompilasi, menautkan, dan men-debug program Anda.'
+__
+'Dengan tipikal C++ IDE, Anda mendapatkan editor kode yang melakukan penomoran baris dan penyorotan sintaks. Banyak (namun tidak semua) IDE menyertakan kompiler C++ dan linker, yang mana IDE akan mengetahui cara berinteraksi untuk mengonversi kode sumber Anda menjadi file yang dapat dieksekusi. Dan ketika Anda perlu men-debug program Anda, Anda dapat menggunakan debugger terintegrasi.'
+__
+'Selain itu, IDE biasanya menggabungkan sejumlah fitur pengeditan bermanfaat lainnya, seperti bantuan terintegrasi, pelengkapan nama, pemformatan otomatis, dan terkadang sistem kontrol versi. Jadi, meskipun Anda dapat melakukan semua hal ini secara terpisah, akan jauh lebih mudah untuk memasang IDE dan membuat semuanya dapat diakses dari satu antarmuka.'
+__
+'Jadi mari kita instal satu, Pertanyaan berikutnya yang jelas adalah, "yang mana ?". Banyak IDE gratis (dalam harga), dan Anda dapat menginstal beberapa IDE jika diinginkan, jadi tidak ada "keputusan yang salah" yang harus dibuat di sini. Kami akan merekomendasikan beberapa favorit kami di bawah ini.'
+__
+'Jika Anda memiliki beberapa IDE lain, itu juga bagus. Konsep yang kami tunjukkan dalam tutorial ini umumnya dapat digunakan untuk IDE modern apa pun yang layak. Namun, berbagai IDE menggunakan nama, tata letak, pemetaan kunci yang berbeda, dll… jadi Anda mungkin harus melakukan sedikit pencarian di IDE Anda untuk menemukan fungsionalitas yang setara.'
+__
+'<b>Tips</b>'
+__
+'Untuk mendapatkan manfaat maksimal dari tutorial ini, kami sarankan untuk menginstal IDE yang disertakan dengan kompiler berkemampuan C++17.'
+__
+'Jika Anda dibatasi untuk menggunakan kompiler yang hanya mendukung C++14 atau C++11 (karena kendala pendidikan atau bisnis), sebagian besar pelajaran dan contoh akan tetap berfungsi. Namun, jika Anda menemukan pelajaran yang menggunakan konsep dari C++17 (atau yang lebih baru) dan Anda menggunakan kompiler bahasa lama, Anda harus melewatinya atau menerjemahkannya ke versi Anda, yang mungkin mudah atau tidak mudah.'
+__
+'Anda tidak boleh menggunakan kompiler apa pun yang tidak mendukung setidaknya C++11 (yang biasanya dianggap sebagai spesifikasi minimum modern untuk C++).'
+__
+'Kami merekomendasikan untuk menginstal versi kompiler terbaru. Jika Anda tidak dapat menggunakan versi terbaru, ini adalah versi kompiler minimum mutlak dengan dukungan C++17:'
+__
+'<ul class="list">'
+'  <li class="list_item">GCC/G++ 7</li>'
+'  <li class="list_item">Dentang ++ 8</li>'
+'  <li class="list_item">Visual Studio 2017 15.7</li>'
+'</ul>'
+_
+'<b>Visual Studio (untuk Windows)</b>'
+__
+'Jika Anda mengembangkan di mesin Windows 10, kami sangat menyarankan mengunduh Komunitas Visual Studio 2022. pada laman <span>vstd</span> --> https://www.visualstudio.com/downloads/'
+__
+'Setelah Anda menjalankan penginstal, pada akhirnya Anda akan melihat layar yang menanyakan beban kerja apa yang ingin Anda instal. Pilih pengembangan Desktop dengan C++. Jika Anda tidak melakukan ini, kemampuan C++ tidak akan tersedia.'
+__
+'Opsi default yang dipilih di sisi kanan layar seharusnya baik - baik saja, tetapi harap pastikan bahwa Windows 10 SDK dipilih.'
+__
+'<b>Beban Kerja Visual Studio</b>'
+__
+'Jika ruang disk atau ukuran unduhan merupakan tantangan, maka Microsoft masih menawarkan Visual Studio Express 2017 pada laman <span>vexp</span> --> https://visualstudio.microsoft.com/vs/express/ untuk Windows Desktop, yang dapat Anda temukan di bagian bawah halaman. Microsoft tidak lagi mendukung produk ini dan tidak memiliki banyak kemampuan bahasa C++ yang lebih baru, jadi kami hanya menyarankannya untuk pengguna yang tidak dapat menginstal Visual Studio Community.'
+__
+'<b>Code::Blocks (untuk Linux atau Windows)</b>'
+__
+'Jika Anda mengembangkan di Linux (atau Anda mengembangkan di Windows tetapi ingin menulis program yang dapat Anda porting dengan mudah ke Linux), kami merekomendasikan Code::Blocks pada laman <span>cdbl</span> --> https://www.codeblocks.org/downloads/binaries/. Code::Blocks adalah IDE lintas platform gratis, open source, yang akan berjalan di Linux dan Windows.'
+__
+'<b>Code::Blocks Untuk pengguna Windows</b>'
+__
+'Pastikan untuk mendapatkan versi Code::Blocks yang telah dibundel MinGW (seharusnya versi yang nama filenya diakhiri dengan mingw-setup.exe ). Ini akan menginstal MinGW, yang menyertakan port Windows dari kompiler GCC C++ : '
+__
+'<img src="/img/c++/Kode :: Memblokir unduhan Windows MinGW.png">'
+__
+'Code::Blocks 20.03 dikirimkan dengan versi lama MinGW yang hanya mendukung C++17 (saat ini satu versi kembali dari versi terbaru C++). Jika Anda ingin menggunakan C++ versi terbaru (C++20), Anda perlu memperbarui MinGW. Untuk melakukannya, ikuti prosedur ini : '
+__
+'<ul class="list">'
+'  <li class="list_item">Instal Code::Blocks seperti di atas.</li>'
+'  <li class="list_item">Tutup Code::Blocks jika terbuka.</li>'
+'  <li class="list_item">Buka Windows File Explorer (Pintasan keyboard Win-E ).</li>'
+'  <li class="list_item">Arahkan ke Code::Blocks menginstal direktori Anda (mungkin C:\\Program Files (x86)\\CodeBlocks).</li>'
+'  <li class="list_item">Ubah nama direktori "MinGW" menjadi "MinGW.bak" (jika terjadi kesalahan).</li>'
+'  <li class="list_item">Buka browser dan arahkan ke laman <span>winl</span> --> https://winlibs.com/.</li>'
+'  <li class="list_item">Unduh versi terbaru dari MinGW. Anda mungkin menginginkan yang di bawah Versi Rilis --> UCRT Runtime --> TERBARU --> Win64 -> tanpa LLVM/Clang/LLD/LLDB --> Zip archive.</li>'
+'  <li class="list_item">Ekstrak folder "mingw64" ke direktori pemasangan Code::blocks Anda.</li>'
+'  <li class="list_item">Ubah nama "mingw64" menjadi "MinGW".</li>'
+'</ul>'
+_
+'Setelah Anda mengonfirmasi bahwa kompiler yang diperbarui berfungsi, Anda dapat menghapus folder lama ("MinGW.bak").'
+__
+'<b>Code::Blocks Untuk pengguna Linux</b>'
+__
+'Beberapa instalasi Linux mungkin kehilangan dependensi yang diperlukan untuk menjalankan atau mengkompilasi program dengan Code::Blocks.'
+__
+'Pengguna Linux berbasis Debian (seperti pengguna Mint atau Ubuntu) mungkin perlu menginstal paket build-essential. Untuk melakukannya dari baris perintah terminal, ketik : <b>sudo apt-get install build-essential</b>.'
+__
+'Pengguna Arch Linux mungkin perlu menginstal paket base-devel.'
+__
+'Pengguna pada varian Linux lainnya perlu menentukan pengelola paket dan paket yang setara.'
+__
+'Saat Anda meluncurkan Code::Blocks untuk pertama kalinya, Anda mungkin mendapatkan dialog deteksi otomatis Compiler. Jika ya, pastikan GNU GCC Compiler disetel sebagai kompiler default lalu pilih tombol "OK".'
+__
+'<img src="/img/c++/Dialog_Deteksi_Otomatis_Kompiler.png">'
+__
+'Pertanyaan : Apa yang harus saya lakukan jika saya mendapatkan kesalahan "Tidak dapat menemukan kompiler yang dapat dieksekusi di jalur pencarian yang dikonfigurasi untuk GNU GCC Compiler"?'
+__
+'<ul class="list">'
+'  <li class="list_item">Coba yang berikut ini : '
+'      <ul class="list">'
+'          <li class="list_item">Jika Anda menggunakan Windows, pastikan Anda telah mengunduh versi Code::Blocks WITH MinGW. Itu yang namanya "mingw".</li>'
+'          <li class="list_item">Coba buka pengaturan, kompiler, dan pilih "reset ke default".</li>'
+'          <li class="list_item">Coba buka tab pengaturan, kompiler, toolchain executable, dan pastikan "Direktori instalasi kompiler" diatur ke direktori MinGW (misalnya C:\\Program Files (x86)\\CodeBlocks\\MinGW).</li>'
+'          <li class="list_item">Coba hapus instalasi lengkap, lalu instal ulang.</li>'
+'          <li class="list_item">Coba kompiler lain.</li>'
+'      </ul>'
+'  </li>'
+'</ul>'
+_
+'<b>Visual Studio Code (untuk pengguna Linux, macOS, atau Windows yang berpengalaman)</b>'
+__
+'Visual Studio Code (juga disebut "VS Code", jangan bingung dengan nama serupa "Visual Studio Community") adalah editor kode yang merupakan pilihan populer dengan pengembang berpengalaman karena cepat, fleksibel, sumber terbuka, berfungsi untuk banyak pemrograman bahasa, dan tersedia untuk berbagai platform.'
+__
+'Kelemahannya adalah VS Code jauh lebih sulit untuk dikonfigurasi dengan benar daripada pilihan lain di daftar ini (dan di Windows, lebih sulit untuk diinstal juga). Sebelum melanjutkan, kami sarankan untuk membaca dokumen penginstalan dan konfigurasi yang ditautkan di bawah ini untuk memastikan Anda memahami dan merasa nyaman dengan langkah - langkah yang terlibat.'
+__
+'<b>Catatan penulis</b>'
+__
+'Kami tidak menyarankan opsi ini untuk pemrogram baru, atau bagi mereka yang tidak memiliki pengalaman memodifikasi file .json konfigurasi. Kami tidak dapat memberikan dukungan instalasi atau konfigurasi di situs ini.'
+__
+'<b>Visual Studio Code untuk pengguna Linux</b>'
+__
+'VS code harus diunduh menggunakan manajer paket distribusi Anda. Petunjuk VS Code untuk linux pada laman <span>vstd</span> --> https://code.visualstudio.com/docs/setup/linux  mencakup cara instalasi untuk berbagai distribusi Linux.'
+__
+'Setelah VS Code diinstal, ikuti petunjuk tentang cara mengonfgurasi C++ untuk linux pada laman <span>vstf</span> --> https://code.visualstudio.com/docs/cpp/config-linux'
+__
+'<b>Visual Studio Code untuk pengguna Mac</b>'
+__
+'Petunjuk VS Code untuk Mac pada laman <span>vsmd</span> --> https://code.visualstudio.com/docs/setup/mac merinci cara menginstal dan mengatur VS Code untuk MacOS'
+__
+'Setelah VS Code diinstal, ikuti petunjuk tentang cara mengonfgurasi C++ untuk Mac pada laman <span>vsmf</span> https://code.visualstudio.com/docs/cpp/config-clang-mac.'
+__
+'<b>Visual Studio Code untuk pengguna Windows</b>'
+__
+'Petunjuk VS Code untuk Windows pada laman <span>vswd</span> --> https://code.visualstudio.com/docs/setup/windows merinci cara menginstal dan mengatur VS Code untuk Windows'
+__
+'Setelah VS Code diinstal, ikuti petunjuk tentang cara mengonfgurasi C++ untuk windows pada laman <span>vswf</span> https://code.visualstudio.com/docs/cpp/config-mingw.'
+__
+'<b>IDE MacOS Lainnya</b>'
+__
+'Pilihan Mac populer lainnya termasuk Xcode pada laman <span>xcod</span> --> https://developer.apple.com/xcode/ (jika tersedia untuk Anda) dan editor kode Eclipse pada laman <span>ecpl</span> --> https://www.eclipse.org/ Eclipse tidak diatur untuk menggunakan C++ secara default, dan Anda harus menginstal komponen C++ ini opsional.'
+__
+'Meskipun Visual Studio untuk Mac telah dirilis, per Agustus 2022 tidak mendukung C++, jadi saat ini kami tidak dapat merekomendasikannya.'
+__
+'<b>Kompiler atau platform lain</b>'
+__
+'Pertanyaan : Dapatkah saya menggunakan kompiler berbasis web?'
+__
+'<ul class="list">'
+'  <li class="list_item">Ya, untuk beberapa hal. Saat IDE Anda sedang diunduh (atau jika Anda tidak yakin ingin berkomitmen untuk menginstalnya), Anda dapat melanjutkan tutorial ini menggunakan kompiler berbasis web. Kami merekomendasikan salah satu dari yang berikut : '
+'      <ul class="list">'
+'          <li class="list_item">TutorialsPoint</li>'
+'          <li class="list_item">Wandbox (dapat memilih versi GCC atau Clang yang berbeda)</li>'
+'          <li class="list_item">Godbolt (dapat melihat perakitan)</li>'
+'      </ul>'
+'      <br>'
+'  </li>'
+'  <li class="list_item">Kompiler berbasis web bagus untuk mencoba - coba dan latihan sederhana. Namun, mereka umumnya sangat terbatas dengan fungsinya, banyak yang tidak mengizinkan Anda membuat banyak file atau men-debug program Anda secara efektif. dan Anda dapat bermigrasi ke IDE lengkap saat Anda bisa.</li>'
+'</ul>'
+_
+'Pertanyaan : Dapatkah saya menggunakan kompiler baris perintah (misalnya g++ di Linux) ?'
+__
+'<ul class="list">'
+'  <li class="list_item">Ya, tapi kami tidak merekomendasikannya untuk pemula. Anda harus menemukan editor Anda sendiri dan mencari cara menggunakannya di tempat lain. Menggunakan debugger baris perintah tidak semudah debugger terintegrasi, dan akan mempersulit proses debug program Anda.</li>'
+'</ul>'
+_
+'Pertanyaan : Dapatkah saya menggunakan editor kode atau IDE lain, seperti Eclipse, Sublime, atau Notepad++ ?'
+__
+'<ul class="list">'
+'  <li class="list_item">Ya, tapi kami tidak merekomendasikannya untuk pemula. Ada banyak editor kode dan IDE hebat yang dapat dikonfigurasi untuk mendukung berbagai macam bahasa, dan memungkinkan Anda mencampur dan mencocokkan plugin untuk menyesuaikan pengalaman sesuka Anda. Namun, banyak dari editor dan IDE ini memerlukan konfigurasi tambahan untuk mengompilasi program C++, dan ada banyak kesalahan selama proses tersebut. Untuk pemula, kami merekomendasikan sesuatu yang bekerja di luar kotak, sehingga Anda dapat menghabiskan lebih banyak waktu untuk mempelajari kode dan lebih sedikit waktu untuk mencoba mencari tahu mengapa editor kode Anda tidak berfungsi dengan baik dengan kompiler atau debugger Anda.</li>'
+'</ul>'
+_
+'<b>IDE yang harus Dihindari</b>'
+__
+'Anda harus menghindari IDE berikut karena tidak mendukung setidaknya C++11, tidak mendukung C++ sama sekali, atau tidak lagi didukung atau dipelihara secara aktif : '
+__
+'<ul class="list">'
+'  <li class="list_item">Borland Turbo C++ -- tidak mendukung C++11</li>'
+'  <li class="list_item">Visual Studio untuk Mac -- tidak mendukung C++</li>'
+'</ul>'
+_
+'Tidak ada alasan bagus untuk menggunakan kompiler yang kedaluwarsa atau tidak didukung saat ada alternatif ringan dan gratis yang mendukung C++ modern.'
+__
+'<b>Ketika ada yang salah (alias ketika IDE berarti "Saya bahkan tidak ...")</b>'
+__
+'Instalasi IDE tampaknya menyebabkan masalah yang adil. Penginstalan mungkin langsung gagal (atau penginstalan mungkin berhasil tetapi IDE akan mengalami masalah saat Anda mencoba menggunakannya karena masalah konfigurasi). Jika Anda mengalami masalah seperti itu, coba hapus instalan IDE (jika sudah diinstal sejak awal), reboot mesin Anda, nonaktifkan antivirus atau anti-malware Anda untuk sementara, dan coba instal lagi.'
+__
+'Jika Anda masih mengalami masalah saat ini, Anda memiliki dua opsi. Opsi yang lebih mudah adalah mencoba IDE yang berbeda. Pilihan lainnya adalah memperbaiki masalah. Sayangnya, penyebab kesalahan penginstalan dan konfigurasi bervariasi dan khusus untuk perangkat lunak IDE itu sendiri, dan kami tidak dapat memberi saran secara efektif tentang cara mengatasi masalah tersebut. Dalam hal ini, kami sarankan untuk menyalin pesan kesalahan atau masalah yang Anda alami ke mesin pencari favorit Anda (seperti Google atau DuckDuckGo) dan mencoba menemukan posting forum di tempat lain dari beberapa orang malang yang pasti mengalami masalah yang sama. Seringkali akan ada saran tentang hal - hal yang dapat Anda coba untuk memperbaiki masalah tersebut.'
+__
+'<b>Memulai menulis program</b>'
+__
+'Setelah IDE Anda diinstal (yang dapat menjadi salah satu langkah tersulit jika segala sesuatunya tidak berjalan seperti yang diharapkan), atau jika Anda sementara melanjutkan dengan kompiler berbasis web, Anda siap untuk menulis program pertama Anda,'
+__
+__
+'<b>Next --> Programming C++ 0.7 Mengkompilasi Program Pertama Anda</b>'
+__
;

// Programming C++ 0.5 Pengantar Kompiler, Penghubung, dan Perpustakaan
let _9_title = 'Programming C++ 0.5 Pengantar Kompiler, Penghubung, dan Perpustakaan';
let _9_desc = '# Diedit pada 22 Maret 2023, Web Arsip';
let _9_content = 'Melanjutkan diskusi kita tentang diagram ini dari pelajaran sebelumnya (Programming C++ 0.4 Pengantar pengembangan C++):'
+__
+'<img src="/img/c++/Proses_pengembangan_perangkat_lunak.png">'
+__
+'Mari kita bahas langkah 4-7.'
+__
+'<b>Langkah 4: Mengkompilasi kode sumber Anda</b>'
+__
+'Untuk mengkompilasi program C++, kami menggunakan kompiler C++. Kompiler C++ secara berurutan melewati setiap file kode sumber (.cpp) di program Anda dan melakukan dua tugas penting :'
+__
+'Pertama, ia memeriksa kode Anda untuk memastikannya mengikuti aturan bahasa C++. Jika tidak, kompiler akan memberi Anda kesalahan (dan nomor baris yang sesuai) untuk membantu menunjukkan dengan tepat apa yang perlu diperbaiki. Proses kompilasi juga akan dibatalkan hingga kesalahan diperbaiki.'
+__
+'Kedua, ini menerjemahkan kode sumber C++ Anda menjadi file bahasa mesin yang disebut file objek. File objek biasanya diberi nama contoh.o atau contoh.obj, di mana contoh adalah nama yang sama dengan file .cpp asalnya.'
+__
+'Jika program Anda memiliki 3 file .cpp, kompiler akan menghasilkan 3 file objek:'
+__
+'<img src="/img/c++/proses_kompilasi.png">'
+__
+'Kompiler C++ tersedia untuk banyak sistem operasi yang berbeda. Kami akan segera membahas penginstalan kompiler, jadi tidak perlu melakukannya sekarang.'
+__
+'<b>Langkah 5: Menautkan file objek dan pustaka</b>'
+__
+'Setelah kompiler membuat satu atau lebih file objek, maka program lain yang disebut linker (penghubung) akan bekerja. Tugas linker adalah tiga kali lipat'
+__
+'Pertama, untuk mengambil semua file objek yang dihasilkan oleh kompiler dan menggabungkannya menjadi satu program yang dapat dieksekusi.'
+__
+'<img src="/img/c++/Proses_menghubungkan.png">'
+__
+'Kedua, selain dapat menautkan file objek, linker juga mampu menautkan file pustaka (library). File perpustakaan adalah kumpulan kode yang telah dikompilasi yang telah "dikemas" untuk digunakan kembali di program lain.'
+__
+'Bahasa inti C++ sebenarnya cukup kecil dan ringkas (dan Anda akan mempelajarinya dalam tutorial ini). Namun, C++ juga dilengkapi dengan pustaka ekstensif yang disebut Pustaka Standar C++ (biasanya disingkat menjadi pustaka standar --> standard library) yang menyediakan fungsionalitas tambahan yang dapat Anda gunakan dalam program Anda. Salah satu bagian pustaka standar C++ yang paling umum digunakan adalah pustaka <b>iostream</b>, yang berisi fungsionalitas untuk mencetak teks pada monitor dan mendapatkan input keyboard dari pengguna. Hampir setiap program C++ yang ditulis menggunakan pustaka standar dalam beberapa bentuk, jadi sangat umum bagi pustaka standar untuk ditautkan ke dalam program Anda. Sebagian besar penaut akan menautkan secara otomatis di perpustakaan standar segera setelah Anda menggunakan bagian mana pun darinya, jadi ini biasanya bukan sesuatu yang perlu Anda khawatirkan.'
+__
+'Anda juga dapat secara opsional menautkan di (dari) perpustakaan lain. Misalnya, jika Anda akan menulis sebuah program yang memainkan suara, Anda mungkin tidak ingin menulis kode Anda sendiri untuk membaca file suara dari disk, periksa untuk memastikan validitasnya, atau mencari cara untuk merutekan data suara. ke sistem operasi atau perangkat keras untuk diputar melalui speaker --> itu akan merepotkan, Sebagai gantinya, Anda mungkin mengunduh perpustakaan yang sudah tahu cara melakukan hal - hal itu, dan menggunakannya. Kami akan berbicara tentang cara menautkan di perpustakaan (dan membuat milik Anda sendiri) Di lampiran.'
+__
+'Ketiga, linker memastikan semua dependensi lintas file diselesaikan dengan benar. Misalnya, jika Anda mendefinisikan sesuatu dalam satu file .cpp, lalu menggunakannya di file .cpp lain, linker menghubungkan keduanya. Jika penaut tidak dapat menghubungkan referensi ke sesuatu dengan definisinya, Anda akan mendapatkan kesalahan penaut, dan proses penautan akan dibatalkan.'
+__
+'Setelah linker selesai menautkan semua file objek dan perpustakaan (dengan asumsi semuanya berjalan dengan baik), Anda akan memiliki file yang dapat dieksekusi yang kemudian dapat Anda jalankan!'
+__
+'<b>Untuk pembaca tingkat lanjut</b>'
+__
+'Untuk proyek yang kompleks, beberapa lingkungan pengembangan menggunakan makefile , yaitu file yang menjelaskan cara membangun program (mis. file mana yang akan dikompilasi dan ditautkan, atau diproses dengan berbagai cara). Seluruh buku telah terdapat tentang cara menulis dan memelihara makefile, dan itu bisa menjadi alat yang sangat ampuh. Namun, karena makefile bukan bagian dari bahasa inti C++, Anda juga tidak perlu menggunakannya untuk pembelajaran di tutorial ini, kami tidak akan membahasnya sebagai bagian dari seri tutorial ini.'
+__
+'<b>Langkah 6 & 7: Pengujian dan Debugging</b>'
+__
+'Ini adalah bagian yang menyenangkan (semoga) Anda dapat menjalankan executable Anda dan melihat apakah itu menghasilkan output yang Anda harapkan.'
+__
+'Jika program Anda berjalan tetapi tidak bekerja dengan benar, maka sudah waktunya untuk melakukan debug untuk mencari tahu apa yang salah. Kami akan segera membahas cara menguji program Anda dan cara men-debugnya secara lebih mendetail.'
+__
+'<b>Lingkungan pengembangan terintegrasi (IDE)</b>'
+__
+'Perhatikan bahwa langkah 3, 4, 5, dan 7 semuanya melibatkan perangkat lunak (editor, compiler, linker, debugger). Meskipun Anda dapat menggunakan program terpisah untuk setiap aktivitas ini, paket perangkat lunak yang dikenal sebagai bundel lingkungan pengembangan terintegrasi (IDE) menggabungkan dan mengintegrasikan semua fitur ini bersama - sama. Kami akan membahas IDE, dan menginstalnya, di bagian selanjutnya.'
+__
+__
+'<b>Next --> Programming C++ 0.6 Memasang Lingkungan Pengembangan Terintegrasi (IDE)</b>'
+__
;

// Programming C++ 0.4 Pengantar Pengembangan C++
let _8_title = 'Programming C++ 0.4 Pengantar Pengembangan C++';
let _8_desc = '# Diedit pada 22 Maret 2023, Web Arsip';
let _8_content = 'Sebelum kita dapat menulis dan menjalankan program C++ pertama kita, kita perlu memahami lebih detail bagaimana program C++ dikembangkan. Berikut adalah grafik yang menguraikan pendekatan sederhana :'
+__
+'<img src="/img/c++/Proses_pengembangan_perangkat_lunak.png">'
+__
+'<b>Langkah 1: Tentukan masalah yang ingin Anda selesaikan</b>'
+__
+'Ini adalah langkah "apa", di mana Anda mencari tahu masalah apa yang ingin Anda selesaikan. Muncul dengan ide awal untuk apa yang ingin Anda programkan bisa menjadi langkah termudah, atau tersulit. Tapi secara konseptual, ini adalah yang paling sederhana. Yang Anda butuhkan hanyalah ide yang dapat didefinisikan dengan baik, dan Anda siap untuk langkah selanjutnya.'
+__
+'Berikut beberapa contohnya:'
+__
+'<ul class="list">'
+'  <li class="list_item">"Saya ingin menulis program yang memungkinkan saya memasukkan banyak angka, lalu menghitung rata - ratanya."</li>'
+'  <li class="list_item">"Saya ingin menulis sebuah program yang menghasilkan labirin 2d dan memungkinkan pengguna menavigasi melaluinya. Pengguna menang jika mereka mencapai akhir."</li>'
+'  <li class="list_item">"Saya ingin menulis program yang membaca file harga saham dan memprediksi apakah saham akan naik atau turun."</li>'
+'</ul>'
+_
+'<b>Langkah 2: Tentukan bagaimana Anda akan memecahkan masalah</b>'
+__
+'Ini adalah langkah "bagaimana", di mana Anda menentukan bagaimana Anda akan menyelesaikan masalah yang Anda hadapi di langkah 1. Ini juga merupakan langkah yang paling diabaikan dalam pengembangan perangkat lunak. Inti masalahnya adalah bahwa ada banyak cara untuk memecahkan masalah --> namun, beberapa dari solusi ini baik dan beberapa di antaranya buruk. Terlalu sering, seorang programmer akan mendapatkan ide, duduk, dan segera mulai membuat kode solusi. Ini sering menghasilkan solusi yang termasuk dalam kategori buruk.'
+__
+'Biasanya, solusi yang baik memiliki karakteristik sebagai berikut :'
+__
+'<ul class="list">'
+'  <li class="list_item">Mereka mudah (tidak terlalu rumit atau membingungkan).</li>'
+'  <li class="list_item">Mereka didokumentasikan dengan baik (terutama seputar asumsi yang dibuat atau batasan).</li>'
+'  <li class="list_item">Mereka dibangun secara modular, sehingga bagian dapat digunakan kembali atau diubah nanti tanpa memengaruhi bagian lain dari program.</li>'
+'  <li class="list_item">Mereka kuat, dan dapat memulihkan atau memberikan pesan kesalahan yang berguna ketika sesuatu yang tidak terduga terjadi.</li>'
+'</ul>'
+_
+'Saat Anda duduk dan langsung mulai membuat kode, Anda biasanya berpikir "Saya ingin melakukan <sesuatu>", sehingga Anda menerapkan solusi yang membawa Anda ke sana paling cepat. Hal ini dapat menyebabkan program rapuh, sulit diubah atau diperpanjang di kemudian hari, atau memiliki banyak bug (cacat teknis).'
+__
+'Penelitian telah menunjukkan bahwa hanya 20% dari waktu seorang programmer yang benar - benar dihabiskan untuk menulis program awal. 80% lainnya dihabiskan untuk pemeliharaan, yang dapat terdiri dari debugging (menghapus bug), pembaruan untuk mengatasi perubahan lingkungan (misalnya untuk menjalankan versi OS baru), peningkatan (perubahan kecil untuk meningkatkan kegunaan atau kemampuan), atau perbaikan internal (untuk meningkatkan keandalan atau pemeliharaan).'
+__
+'Oleh karena itu, ada baiknya Anda meluangkan sedikit waktu ekstra di muka (sebelum Anda mulai membuat kode) memikirkan cara terbaik untuk mengatasi masalah, asumsi apa yang Anda buat, dan bagaimana Anda merencanakan masa depan, untuk menyelamatkan diri Anda sendiri. banyak waktu dan masalah di jalan.'
+__
+'Kita akan membahas lebih lanjut tentang cara merancang solusi masalah secara efektif dalam pelajaran mendatang.'
+__
+'<b>Langkah 3: Tulis programnya</b>'
+__
+'Untuk menulis program, kita membutuhkan dua hal : Pertama, kita membutuhkan pengetahuan tentang bahasa pemrograman --> untuk itulah tutorial ini dibuat ! Kedua, kita membutuhkan editor teks untuk menulis dan menyimpan program tertulis kita. Program yang kita tulis menggunakan instruksi C++ disebut kode sumber (sering disingkat menjadi kode saja). Dimungkinkan untuk menulis program menggunakan editor teks apa pun yang Anda inginkan, bahkan sesuatu yang sederhana seperti notepad Windows atau vi atau pico Unix. Namun, kami sangat menganjurkan Anda untuk menggunakan editor yang dirancang untuk pemrograman (disebut editor kode ). Jangan khawatir jika Anda belum memilikinya. Kami akan segera membahas cara menginstal editor kode.'
+__
+'Editor tipikal yang dirancang untuk pengkodean memiliki beberapa fitur yang membuat pemrograman menjadi lebih mudah, termasuk :'
+__
+'<ul class="list">'
+'  <li class="list_item">Penomoran baris. Penomoran baris berguna ketika kompiler memberi kita kesalahan, karena kesalahan kompiler tipikal akan menyatakan : beberapa kode/pesan kesalahan, baris 64 . Tanpa editor yang menunjukkan nomor baris, menemukan baris 64 bisa sangat merepotkan.</li>'
+'  <li class="list_item">Penyorotan sintaksis. Penyorotan sintaks di berbagai bagian program Anda untuk mempermudah mengidentifikasi berbagai komponen program Anda. Berikut adalah contoh program C++ dengan penomoran baris dan penyorotan sintaks : '
+'      <ul class="list">'
+'          <ul class="list_angka">'
+'              <li ><b>&ensp;// contoh programming</b></li>'
+'              <li >&ensp;include < iostream ></li>'
+'              <li >&ensp;&emsp; std::cout << "<b>color text</b>";</li>'
+'              <li >&ensp;&emsp; return 0;</li>'
+'              <li >&ensp;}</li>'
+'          </ul>'
+'          <br>'
+'          <li class="list_item">Contoh yang kami tampilkan dalam tutorial ini akan selalu memiliki penomoran baris dan penyorotan sintaks agar lebih mudah diikuti.</li>'
+'      </ul>'
+'      <br>'
+'  </li>'
+'  <li class="list_item">Font yang tidak ambigu. Font non-pemrograman seringkali menyulitkan untuk membedakan antara angka 0 dan huruf O, atau antara angka 1, huruf l (huruf kecil L), dan huruf I (huruf besar i). Font pemrograman yang baik akan memastikan simbol - simbol ini dibedakan secara visual untuk memastikan salah satu tidak sengaja digunakan menggantikan yang lain. Semua editor kode harus mengaktifkan ini secara default, tetapi editor teks standar mungkin tidak.</li>'
+'</ul>'
+_
+'Program yang Anda tulis biasanya diberi nama : namaProgram.cpp , di mana sesuatu diganti dengan nama program yang Anda pilih (misalnya kalkulator, hi-lo, dll…). Ekstensi .cpp memberi tahu kompiler (dan Anda) bahwa ini adalah file kode sumber C++ yang berisi instruksi C++. Perhatikan bahwa beberapa orang menggunakan ekstensi .cc, bukan .cpp, tetapi sebaiknya Anda menggunakan .cpp.'
+__
+'<b>Praktek terbaik</b>'
+__
+'Beri nama file kode Anda namaProgram.cpp , di mana namaProgram adalah nama yang Anda pilih, dan .cpp adalah ekstensi yang menunjukkan bahwa file tersebut adalah file sumber C++.'
+__
+'Perhatikan juga bahwa banyak program C++ yang kompleks memiliki banyak file .cpp. Meskipun sebagian besar program yang akan Anda buat pada awalnya hanya memiliki satu file .cpp, Anda dapat menulis satu program yang memiliki puluhan atau ratusan file .cpp'
+__
+'Setelah kita menulis program kita, langkah selanjutnya adalah mengubah kode sumber menjadi sesuatu yang dapat kita jalankan, dan kemudian melihat apakah itu berhasil, Kita akan membahas langkah - langkah tersebut (4-7) pada pelajaran selanjutnya.'
+__
+__
+'<b>Next --> Programming C++ 0.5 Pengantar Kompiler, Penghubung, dan Perpustakaan</b>'
+__
;

// Programming C++ 0.3 Pengantar C atau C++
let _7_title = 'Programming C++ 0.3 Pengantar C atau C++';
let _7_desc = '# Diedit pada 22 Maret 2023, Web Arsip';
let _7_content = '<b>Sebelum C++, ada C</b>'
+__
+'Bahasa C dikembangkan pada tahun 1972 oleh Dennis Ritchie di laboratorium Bell Telephone, terutama sebagai bahasa pemrograman sistem (bahasa untuk menulis sistem operasi). Tujuan utama Ritchie adalah menghasilkan bahasa minimalis yang mudah dikompilasi, memungkinkan akses efisien ke memori, menghasilkan kode yang efisien, dan berdiri sendiri (tidak bergantung pada program lain). Untuk bahasa tingkat tinggi, ini dirancang untuk memberi pemrogram banyak kendali, sambil tetap mendorong kemandirian platform (perangkat keras dan sistem operasi) (yaitu, kode tidak harus ditulis ulang untuk setiap platform).'
+__
+'C akhirnya menjadi sangat efisien dan fleksibel sehingga pada tahun 1973, Ritchie dan Ken Thompson menulis ulang sebagian besar sistem operasi Unix menggunakan C. Banyak sistem operasi sebelumnya telah ditulis dalam perakitan. Tidak seperti perakitan, yang menghasilkan program yang hanya dapat dijalankan pada CPU tertentu, C memiliki portabilitas yang sangat baik, memungkinkan Unix untuk dikompilasi ulang dengan mudah pada berbagai jenis komputer dan mempercepat pengadopsiannya. C dan Unix memiliki kekayaan yang saling terkait, dan popularitas C sebagian terkait dengan keberhasilan Unix sebagai sistem operasi.'
+__
+'Pada tahun 1978, Brian Kernighan dan Dennis Ritchie menerbitkan sebuah buku berjudul “The C Programming Language”. Buku ini, yang umumnya dikenal sebagai K&R (setelah nama belakang penulis), memberikan spesifikasi bahasa informal dan menjadi standar de facto. Ketika portabilitas maksimum diperlukan, pemrogram akan tetap berpegang pada rekomendasi di K&R, karena sebagian besar kompiler pada saat itu diimplementasikan dengan standar K&R.'
+__
+'Pada tahun 1983, Institut Standar Nasional Amerika (ANSI) membentuk sebuah komite untuk menetapkan standar formal untuk C. Pada tahun 1989 (komite membutuhkan waktu lama untuk melakukan apa saja), mereka selesai, dan merilis standar C89, lebih dikenal sebagai ANSI C. Pada 1990 Organisasi Internasional untuk Standardisasi (ISO) mengadopsi ANSI C (dengan sedikit modifikasi). Versi C ini dikenal sebagai C90. Kompiler akhirnya sesuai dengan ANSI C/C90, dan program yang menginginkan portabilitas maksimum dikodekan dengan standar ini.'
+__
+'Pada tahun 1999, komite ANSI merilis versi baru C yang disebut C99. C99 mengadopsi banyak fitur yang telah masuk ke kompiler sebagai ekstensi, atau telah diimplementasikan dalam C++.'
+__
+'<b>Bahasa C++</b>'
+__
+'C++ (diucapkan see plus plus) dikembangkan oleh Bjarne Stroustrup di Bell Labs sebagai ekstensi ke C, mulai tahun 1979. C++ menambahkan banyak fitur baru ke bahasa C, dan mungkin paling baik dianggap sebagai superset dari C, meskipun ini adalah tidak sepenuhnya benar (karena C99 memperkenalkan beberapa fitur yang tidak ada di C++). Klaim ketenaran C++ dihasilkan terutama dari fakta bahwa itu adalah bahasa berorientasi objek. Adapun apa itu "objek" dan bagaimana perbedaannya dari metode pemrograman tradisional, kami akan membahasnya di bab selanjutnya.'
+__
+'C++ distandarisasi pada tahun 1998 oleh komite ISO (ini berarti komite standar ISO menyetujui dokumen yang menjelaskan bahasa C++, untuk membantu memastikan semua kompiler mematuhi standar yang sama). Pembaruan kecil untuk bahasa dirilis pada tahun 2003 (disebut C++ 03).'
+__
+'Empat pembaruan utama untuk bahasa C++ (C++11, C++14, C++17, dan C++20) telah dibuat sejak saat itu, masing - masing menambahkan fungsionalitas tambahan. C++ 11 khususnya menambahkan sejumlah besar kemampuan baru, dan secara luas dianggap sebagai versi dasar bahasa yang baru. Pemutakhiran bahasa di masa mendatang diharapkan setiap tiga tahun atau lebih, dengan set fitur untuk C++23 sudah mulai dirumuskan.'
+__
+'Setiap rilis formal bahasa yang baru disebut standar bahasa (atau spesifikasi bahasa ). Standar diberi nama setelah tahun rilisnya. Misalnya, tidak ada C++15, karena tidak ada standar baru di tahun 2015.'
+__
+'<b>Filosofi C dan C++</b>'
+__
+'Filosofi desain yang mendasari C dan C++ dapat diringkas sebagai "percayalah pada pemrogram" --> yang luar biasa sekaligus berbahaya. C++ dirancang untuk memungkinkan programmer memiliki kebebasan tingkat tinggi untuk melakukan apa yang mereka inginkan. Namun, ini juga berarti bahasa sering tidak akan menghentikan Anda melakukan hal - hal yang tidak masuk akal, karena akan menganggap Anda melakukannya karena alasan tertentu yang tidak dimengerti. Ada beberapa jebakan yang kemungkinan besar akan dialami oleh programmer baru jika ketahuan. Ini adalah salah satu alasan utama mengapa mengetahui apa yang tidak boleh Anda lakukan di C/C++ hampir sama pentingnya dengan mengetahui apa yang harus Anda lakukan.'
+__
+'Pertanyaan : Apa kelebihan C++?'
+__
+'<ul class="list">'
+'  <li class="list_item">C ++ unggul dalam situasi di mana kinerja tinggi dan kontrol yang tepat atas memori dan sumber daya lainnya yang diperlukan. Berikut adalah beberapa jenis aplikasi umum yang kemungkinan besar akan ditulis dalam C++ : '
+'      <ul class="list_angka">'
+'          <li class="list_item">Video game</li>'
+'          <li class="list_item">Sistem real-time (misalnya untuk transportasi, manufaktur, dll...)</li>'
+'          <li class="list_item">Aplikasi keuangan berkinerja tinggi (misalnya perdagangan frekuensi tinggi)</li>'
+'          <li class="list_item">Aplikasi grafis dan simulasi</li>'
+'          <li class="list_item">Produktivitas / aplikasi kantor</li>'
+'          <li class="list_item">perangkat lunak tertanam</li>'
+'          <li class="list_item">Pemrosesan audio dan video</li>'
+'          <li class="list_item">Kecerdasan buatan dan jaringan saraf</li>'
+'      </ul>'
+'  </li>'
+'</ul>'
+_
+'Pertanyaan : Apakah saya perlu mengetahui C sebelum melakukan tutorial ini?'
+__
+'<ul class="list">'
+'  <li class="list_item">Tidak, Tidak apa - apa untuk memulai dengan C++, dan kami akan mengajari Anda semua apa yang perlu Anda ketahui (termasuk jebakan (trap) yang harus dihindari) di sepanjang pembelajaran.</li>'
+'</ul>'
+_
+'Setelah Anda mengetahui C++, seharusnya cukup mudah untuk mempelajari C standar jika Anda membutuhkannya. Hari - hari tertentu, C sebagian besar digunakan untuk kasus penggunaan khusus : kode yang berjalan pada perangkat yang disematkan, saat Anda perlu berinteraksi dengan bahasa lain yang hanya dapat berinteraksi dengan C, dll… Untuk sebagian besar kasus lainnya, C++ direkomendasikan.'
+__
+__
+'<b>Next --> Programming C++ 0.4 Pengantar Pengembangan C++</b>'
+__
;

// Programming C++ 0.2 Pengantar Bahasa Pemrograman
let _6_title = 'Programming C++ 0.2 Pengantar Bahasa Pemrograman';
let _6_desc = '# Diedit pada 22 Maret 2023, Web Arsip';
let _6_content = 'Komputer modern sangat cepat, dan semakin cepat setiap saat. Namun, komputer juga memiliki beberapa kendala yang signifikan : mereka hanya memahami sekumpulan perintah secara native, dan harus diberi tahu dengan tepat apa yang harus dilakukan.'
+__
+'Program komputer (juga biasa disebut aplikasi) adalah sekumpulan instruksi yang dapat dilakukan komputer untuk melakukan beberapa tugas. Proses pembuatan program disebut pemrograman. Pemrogram biasanya membuat program dengan menghasilkan kode sumber (biasanya disingkat menjadi code ), yang merupakan daftar perintah yang diketik ke dalam satu atau lebih file teks.'
+__
+'Kumpulan bagian fisik komputer yang menyusun komputer dan menjalankan program disebut perangkat keras (hardware). Ketika sebuah program komputer dimuat ke dalam memori dan perangkat keras mengeksekusi setiap instruksi secara berurutan, ini disebut menjalankan atau mengeksekusi program.'
+__
+'<b>Bahasa mesin</b>'
+__
+'CPU komputer tidak mampu berbicara C++. Seperangkat instruksi terbatas yang dapat dipahami CPU secara langsung disebut kode mesin (atau bahasa mesin atau set instruksi ).'
+__
+'Berikut adalah contoh instruksi bahasa mesin : 10110000 01100001'
+__
+'Kembali ketika komputer pertama kali ditemukan, pemrogram harus menulis program langsung dalam bahasa mesin, yang merupakan hal yang sangat sulit dan memakan waktu untuk dilakukan.'
+__
+'Bagaimana instruksi - instruksi ini disusun berada di luar cakupan pendahuluan ini, tetapi menarik untuk mencatat dua hal. Pertama, setiap instruksi terdiri dari urutan 1 dan 0. Setiap individu 0 atau 1 disebut digit biner, atau disingkat bit. Jumlah bit yang menyusun satu perintah bervariasi misalnya, beberapa instruksi proses CPU selalu sepanjang 32 bit, sementara beberapa CPU lain (seperti keluarga x86, yang mungkin Anda gunakan) memiliki instruksi yang dapat berupa lebih panjang variabel.'
+__
+'Kedua, setiap rangkaian digit biner diinterpretasikan oleh CPU menjadi perintah untuk melakukan pekerjaan yang sangat spesifik, seperti membandingkan dua angka ini, atau meletakkan angka ini di lokasi memori tersebut. Namun, karena CPU yang berbeda memiliki set instruksi yang berbeda, instruksi yang ditulis untuk satu jenis CPU tidak dapat digunakan pada CPU yang tidak menggunakan set instruksi yang sama. Ini berarti program umumnya tidak portabel (dapat digunakan tanpa pengerjaan ulang) untuk berbagai jenis sistem, dan harus ditulis lagi.'
+__
+'<b>Bahasa campuran</b>'
+__
+'Karena bahasa mesin sangat sulit untuk dibaca dan dipahami manusia, bahasa rakitan diciptakan. Dalam bahasa rakitan, setiap instruksi diidentifikasi dengan singkatan pendek (bukan satu set bit), dan nama serta nomor lain dapat digunakan.'
+__
+'Berikut adalah instruksi yang sama seperti di atas dalam bahasa rakitan : mov al, 061h'
+__
+'Ini membuat perakitan lebih mudah dibaca dan ditulis daripada bahasa mesin. Namun, CPU tidak dapat memahami bahasa assembly secara langsung. Sebaliknya, program perakitan harus diterjemahkan ke dalam bahasa mesin sebelum dapat dijalankan oleh komputer. Ini dilakukan dengan menggunakan program yang disebut assembler. Program yang ditulis dalam bahasa rakitan cenderung sangat cepat, dan rakitan masih digunakan saat ini ketika kecepatan sangat penting.'
+__
+'Namun, perakitan masih memiliki beberapa kelemahan. Pertama, bahasa rakitan masih membutuhkan banyak instruksi untuk melakukan tugas - tugas sederhana sekalipun. Meskipun instruksi individu itu sendiri agak dapat dibaca manusia, memahami apa yang dilakukan seluruh program dapat menjadi tantangan (ini seperti mencoba memahami kalimat dengan melihat setiap huruf satu per satu). Kedua, bahasa rakitan masih tidak terlalu portabel --> sebuah program yang ditulis dalam rakitan untuk satu CPU kemungkinan besar tidak akan berfungsi pada perangkat keras yang menggunakan kumpulan instruksi yang berbeda, dan harus ditulis ulang atau dimodifikasi secara ekstensif (Dalam Dictionary of Reading (1983:112) : membaca ekstensif merupakan program membaca yang dilakukan secara luas.).'
+__
+'<b>Bahasa tingkat tinggi</b>'
+__
+'Untuk mengatasi masalah keterbacaan dan portabilitas, bahasa pemrograman baru seperti C, C++, Pascal (dan kemudian, bahasa seperti Java, Javascript, dan Perl) dikembangkan. Bahasa - bahasa ini disebut bahasa tingkat tinggi, karena dirancang untuk memungkinkan pemrogram menulis program tanpa harus khawatir tentang komputer jenis apa program itu akan dijalankan.'
+__
+'Berikut adalah instruksi yang sama seperti di atas dalam C/C++ : a = 97;'
+__
+'Sama seperti program perakitan, program yang ditulis dalam bahasa tingkat tinggi harus diterjemahkan ke dalam format yang dapat dipahami komputer sebelum dapat dijalankan. Ada dua cara utama untuk melakukannya : kompilasi (compiler) dan interpretasi (interpreted).'
+__
+'Kompiler adalah program yang membaca kode sumber dan menghasilkan program yang dapat dieksekusi yang berdiri sendiri yang kemudian dapat dijalankan. Setelah kode Anda diubah menjadi file yang dapat dieksekusi (executable), Anda tidak memerlukan kompiler untuk menjalankan program. Pada awalnya, kompiler masih primitif dan menghasilkan kode yang lambat dan tidak dioptimalkan. Namun, selama bertahun - tahun, kompiler telah menjadi sangat pandai dalam menghasilkan kode yang cepat dan dioptimalkan, dan dalam beberapa kasus dapat melakukan pekerjaan yang lebih baik daripada manusia dalam bahasa rakitan!'
+__
+'Berikut adalah representasi sederhana dari proses kompilasi :'
+__
+'<img src="/img/c++/alur_kompilasi.png">'
+__
+'Karena program C++ umumnya dikompilasi, kita akan segera menjelajahi kompiler secara lebih mendetail.'
+__
+'Interpreter adalah program yang secara langsung mengeksekusi instruksi dalam kode sumber tanpa mengharuskannya untuk dikompilasi menjadi yang dapat dieksekusi terlebih dahulu. Interpreter cenderung lebih fleksibel daripada kompiler, tetapi kurang efisien saat menjalankan program karena proses interpretasi perlu dilakukan setiap kali program dijalankan. Ini berarti interpreter dibutuhkan setiap kali program dijalankan.'
+__
+'Berikut adalah representasi sederhana dari proses interpretasi :'
+__
+'<img src="/img/c++/proses_interpreted.png">'
+__
+'Sebagian besar bahasa dapat dikompilasi atau Interpreted, namun, bahasa tradisional seperti C, C ++, dan Pascal dikompilasi, sedangkan bahasa "scripting" seperti Perl dan Javascript cenderung di Interpreted. Beberapa bahasa, seperti Java, menggunakan campuran keduanya.'
+__
+'Bahasa tingkat tinggi memiliki banyak sifat yang diinginkan.'
+__
+'Pertama, bahasa tingkat tinggi lebih mudah dibaca dan ditulis karena perintahnya lebih mirip dengan bahasa alami yang kita gunakan sehari - hari. Kedua, bahasa tingkat tinggi membutuhkan lebih sedikit instruksi untuk melakukan tugas yang sama seperti bahasa tingkat rendah, membuat program lebih ringkas dan lebih mudah dipahami. Di C++ Anda dapat melakukan sesuatu seperti a = b * 2 + 5; dalam satu baris. Dalam bahasa rakitan, ini membutuhkan 5 atau 6 instruksi berbeda.'
+__
+'Ketiga, program dapat dikompilasi (atau diinterpretasikan) untuk banyak sistem yang berbeda, dan Anda tidak perlu mengubah program untuk berjalan di CPU yang berbeda (Anda cukup mengkompilasi ulang untuk CPU tersebut). Sebagai contoh:'
+__
+'<img src="/img/c++/portabilitas_kompiler.png">'
+__
+'Ada dua pengecualian umum untuk portabilitas. Yang pertama adalah banyak sistem operasi, seperti Microsoft Windows, berisi kemampuan khusus platform yang dapat Anda gunakan dalam kode Anda. Ini dapat membuatnya lebih mudah untuk menulis program untuk sistem operasi tertentu, tetapi dengan mengorbankan portabilitas. Dalam tutorial ini, kami akan menghindari kode khusus platform apa pun.'
+__
+'Beberapa kompiler juga mendukung ekstensi khusus kompiler --> jika Anda menggunakan ini, program Anda tidak akan dapat dikompilasi oleh kompiler lain yang tidak mendukung ekstensi yang sama tanpa modifikasi. Kita akan membahas lebih lanjut tentang ini nanti, setelah Anda menginstal kompiler.'
+__
+'<b>Aturan, Praktik terbaik, dan peringatan</b>'
+__
+'Saat kami melanjutkan tutorial ini, kami akan menyoroti banyak poin penting di bawah tiga kategori berikut : '
+__
+'<ul class="list">'
+'  <li class="list_item">Aturan adalah instruksi yang harus Anda lakukan, seperti yang dipersyaratkan oleh bahasa. Kegagalan untuk mematuhi aturan umumnya akan mengakibatkan program Anda tidak berfungsi.</li>'
+'  <li class="list_item">Praktik terbaik adalah hal - hal yang harus Anda lakukan, karena cara melakukan sesuatu seperti itu umumnya dianggap standar atau sangat dianjurkan. Artinya, setiap orang melakukannya dengan cara itu (dan jika Anda melakukan sebaliknya, Anda akan melakukan sesuatu yang tidak diharapkan orang), atau lebih unggul dari alternatifnya.</li>'
+'  <li class="list_item">Peringatan adalah hal yang tidak boleh Anda lakukan, karena umumnya akan menimbulkan hasil yang tidak terduga.</li>'
+'</ul>'
+_
+__
+'<b>Next --> Programming C++ 0.3 Pengantar C atau C++</b>'
+__
;

// Programming C++ 0.1 Pengantar Tutorial C++
let _5_title = 'Programming C++ 0.1 Pengantar Tutorial C++';
let _5_desc = '# Diedit pada 21 Maret 2023, Web Arsip';
let _5_content = '<b>Selamat datang di Tutorial C++</b>'
+__
+'Tutorial ini bertujuan untuk mempermudah belajar C++, Tidak seperti banyak situs lain, tutorial ini tidak menganggap Anda memiliki pengalaman pemrograman sebelumnya. Kami akan mengajari Anda tentang apa saja yang perlu Anda ketahui saat Anda mempelajarinya, dengan banyak contoh di sepanjang pembelajaran dari tutorial ini.'
+__
+'Baik Anda tertarik mempelajari C++ sebagai hobi atau untuk pengembangan profesional.'
+__
+'<b>Struktur pelajaran</b>'
+__
+'Pelajaran dalam bab pengantar ini ditujukan untuk memberi Anda beberapa konteks tentang apa itu C++, bagaimana hal itu terjadi, bagaimana program bekerja, dan perangkat lunak apa yang perlu Anda pasang (install) untuk membuat program Anda sendiri. Anda bahkan akan menulis program pertama Anda sendiri.'
+__
+'Bab selanjutnya akan mengeksplorasi berbagai bagian dari bahasa C++. Di bab pertama (bab 1), Anda akan mendapatkan ikhtisar yang luas namun dangkal (singkat) tentang konsep dasar C++, sehingga kita dapat mulai menulis beberapa program sederhana. Bab selanjutnya akan mengeksplorasi konsep - konsep tersebut secara mendalam, atau memperkenalkan konsep - konsep baru'
+__
+'Setiap bab memiliki tema, dengan semua bagian di bawahnya umumnya terkait dengan tema tersebut. Tidak ada jumlah waktu yang disarankan yang harus Anda gunakan untuk setiap pelajaran atau bab; Saran : dalam mempelajari materi gunakan kecepatan (waktu) yang nyaman bagi Anda.'
+__
+'<b>Sasaran</b>'
+__
+'Sebelum memulai, mari bahas beberapa tujuan penting untuk tutorial ini :'
+__
+'<ul class="list">'
+'  <li class="list_item">Topik pembelajaran pemrograman dengan C++. Buku teks tradisional melakukan pekerjaan yang cukup baik dalam mengajarkan dasar - dasar bahasa pemrograman tertentu, tetapi seringkali tidak mencakup topik pemrograman yang relevan yang terkait dengan bahasa tersebut. Misalnya, buku akan menghilangkan bagian tentang gaya pemrograman, jebakan (trap) umum, debugging, praktik pemrograman yang baik atau buruk, dan pengujian. Akibatnya, pada saat Anda menyelesaikan buku itu, Anda mungkin mengerti bagaimana memprogram dalam suatu bahasa, tetapi Anda mungkin juga telah mengambil kebiasaan buruk yang akan kembali menggigit Anda nantinya, Salah satu tujuan dari tutorial ini adalah untuk memastikan bahwa semua topik insidental (KBBI : Sesuatu yang terjadi atau dilakukan hanya pada kesempatan atau waktu tertentu saja; tidak secara tetap atau rutin; sewaktu - waktu) ini tercakup di sepanjang pembelajaran, di bagian yang wajar untuk didiskusikan. Setelah selesai, Anda tidak hanya akan tahu cara memprogram di C++, Anda juga akan tahu cara untuk TIDAK memprogram di C++, yang bisa dibilang sama pentingnya.</li>'
+'  <li class="list_item">Memberikan banyak contoh. Kebanyakan orang belajar dari mengikuti contoh sebanyak yang mereka pelajari dari membaca teks. Tutorial ini akan berusaha memberikan banyak contoh yang jelas dan ringkas untuk menunjukkan penerapan konsep yang Anda pelajari. Kami juga akan menghindari (sebanyak mungkin) elips (juga dikenal sebagai … ), di mana bagian yang perlu atau tidak jelas dari sebuah contoh dihilangkan untuk kepentingan ruang, dan konsep baru yang tidak dapat dijelaskan, di mana konsep baru yang merupakan bagian integral (keseluruhannya) dari contoh yang diperkenalkan tanpa menyebutkan apa itu atau bagaimana cara kerjanya. Kedua hal ini cenderung menyebabkan macet (kebingungan).</li>'
+'  <li class="list_item">Menyediakan program latihan. Akhir dari banyak pelajaran dan bagian akan berisi beberapa latihan yang dapat Anda coba jawab sendiri, beserta solusinya. Anda dapat membandingkan solusi Anda dengan solusi kami untuk melihat apa yang kami lakukan secara berbeda, atau, jika Anda mengalami kebuntuan, bagaimana kami memecahkan masalah tersebut. Kemudian Anda dapat kembali dan fokus kembali pada area yang perlu Anda kerjakan lebih lanjut. Yang paling penting : bersenang - senang. Pemrograman bisa sangat menyenangkan, dan jika pada umumnya Anda tidak bersenang - senang, pola pikir Anda tidak benar untuk menjadi pemrograman. Pemrogram yang lelah atau tidak menyenangkan akan membuat kesalahan, dan kode debug cenderung memakan waktu lebih lama daripada menulisnya dengan benar sejak awal, Seringkali Anda dapat menghemat waktu dengan pergi tidur, tidur nyenyak, dan kembali ke masalah di pagi hari.</li>'
+'</ul>'
+_
+'<b>Dapatkan hasil maksimal dari tutorial ini</b>'
+__
+'Saat Anda mengikuti tutorial ini, kami merekomendasikan beberapa praktik untuk memaksimalkan pengalaman belajar Anda:'
+__
+'<ul class="list">'
+'  <li class="list_item">Ketik contoh dengan tangan dan kompilasi sendiri. Jangan salin dan tempel, Ini akan membantu Anda mempelajari di mana Anda biasanya membuat kesalahan, serta menjadi terbiasa dengan peringatan dan kesalahan kompiler. Jangan hanya menyalin program tanpa berpikir --> pikirkan tentang fungsi setiap baris yang Anda ketik, dan bagaimana kontribusinya terhadap keseluruhan program. Jika Anda menemukan sesuatu yang tidak Anda mengerti, itu adalah sesuatu untuk diselidiki lebih lanjut.</li>'
+'  <li class="list_item">Saat Anda membuat kesalahan atau menemukan bug di program Anda, Perbaiki. Cobalah untuk menyelesaikan masalah Anda sendiri sebelum meminta bantuan orang lain. Mempelajari cara menemukan dan memperbaiki kesalahan adalah keterampilan kunci untuk pemrograman yang sukses. Jangan lalai mempelajari cara menggunakan debugger (kami akan menjelaskan caranya di bab mendatang) --> ini adalah alat kunci untuk mencari tahu di mana kesalahan program Anda.</li>'
+'  <li class="list_item">Bereksperimenlah dengan contoh - contohnya. Ubah angka dan teks untuk melihat apa yang terjadi. Ubah program untuk melakukan hal - hal tambahan (misalnya jika sebuah program menambahkan dua angka, buatlah program tersebut menambahkan tiga angka). Cobalah untuk menemukan berbagai cara untuk merusak program (jika sebuah program meminta Anda memasukkan angka, coba masukkan huruf dan lihat apa yang terjadi). Anda akan belajar lebih banyak dengan memodifikasi contoh daripada hanya mengikutinya.</li>'
+'  <li class="list_item">Rencanakan untuk meluangkan waktu dengan kuis. Jika Anda baru mengenal pemrograman, Anda mungkin menganggap ini menantang (dan itu normal, karena otak Anda menyesuaikan diri dengan pola pikir pemrograman). Jangan berkecil hati jika Anda tidak mendapatkan jawaban yang benar pada kali pertama. Anda mungkin perlu mencoba beberapa pendekatan berbeda sebelum menemukan jalan menuju sukses. Tidak apa - apa untuk melihat jawabannya jika Anda benar - benar mandek (tidak tahu jawabannya). Pastikan Anda memahami cara kerja jawaban yang diberikan sebelum melanjutkan.</li>'
+'  <li class="list_item">Tulis program singkat Anda sendiri menggunakan konsep yang telah Anda pelajari. Ini akan memperkuat pembelajaran Anda dan meningkatkan retensi (KBBI : peyimpanan yang ditentukan atas nilai kegunaan) pengetahuan Anda.</li>'
+'</ul>'
+_
+'<b>Pertanyaan umum terkait situs</b>'
+__
+'Pertanyaan : Apakah saya harus mendaftar ke situs ini? Bagaimana cara mendapatkan login?'
+__
+'<ul class="list">'
+'  <li class="list_item">Semua bagian dari situs ini dapat diakses secara anonim --> oleh karena itu, tidak diperlukan akun pengguna atau pendaftaran!</li>'
+'</ul>'
+_
+'Pertanyaan : Apakah ada versi PDF dari situs ini yang tersedia untuk dilihat secara offline?'
+__
+'<ul class="list">'
+'  <li class="list_item">Sayangnya, tidak ada. Situs ini dapat tetap gratis untuk semua orang. Anda dipersilakan untuk mengonversi halaman dari situs web ini ke dalam format PDF (atau lainnya) untuk penggunaan pribadi Anda sendiri, selama Anda tidak mendistribusikannya.</li>'
+'</ul>'
+_
+'Pertanyaan : Apa yang harus saya lakukan jika saya terjebak pada suatu konsep?'
+__
+'<ul class="list">'
+'  <li class="list_item">Jika Anda tidak memahami sesuatu atau merasa mandek (tidak tahu jawaban atas masalah tersebut) : Bacalah komentar. Pembaca lain mungkin mengalami tantangan serupa. Telusuri satu atau dua pelajaran berikutnya dalam seri ini --> pertanyaan Anda mungkin terjawab di sana. Gunakan mesin pencari untuk melihat apakah pertanyaan Anda (atau pesan kesalahan) telah dialamatkan ke tempat lain. Ajukan pertanyaan Anda di situs yang dirancang untuk pemrograman, seperti Stack Overflow. Jika semuanya gagal, lewati materi yang tidak Anda mengerti, dan kembali lagi nanti. Anda mungkin menemukan bahwa sesuatu yang sulit dipahami menjadi lebih mudah dengan pengetahuan dan konteks tambahan yang disediakan oleh artikel lain.</li>'
+'</ul>'
+_
+'Pertanyaan : Apa yang harus saya lakukan jika saya lupa arti sesuatu?'
+__
+'<ul class="list">'
+'  <li class="list_item">Kunjungi laman Explore . Cari topik apa pun yang ingin Anda ketahui lebih lanjut di sana, dan Anda akan menemukan tautan ke pelajaran yang membahas topik tersebut.</li>'
+'</ul>'
+_
+__
+'<b>Next --> Programming C++ 0.2 Pengantar Bahasa Pemrograman</b>'
+__
;