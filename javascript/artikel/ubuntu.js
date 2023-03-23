// KATEGORI UBUNTU 20.04
// Themes dan Icons di Ubuntu 20.04
let _4_title = 'Themes dan Icons di Ubuntu 20.04';
let _4_desc = '# Diedit pada 21 Maret 2023, Web Arsip';
let _4_content = 'Website Kumpulan themes dan icons in Ubuntu 20.04 (Gnome DE) --> <span>glook</span> --> https://www.gnome-look.org'
+__
+'<b>Unduh file themes dan icons</b>'
+__
+'<ul class="list_angka">'
+'  <li class="list_item">Buka web browser --> Kunjungi website gnome-look</li>' 
+'  <li class="list_item">Cari Themes dan icons --> unduh file (pada bagian file) --> nama_themes_atau_icon.tar.xz</li>'
+'  <li class="list_item">Extrak file yang telah di unduh.</li>'
+'</ul>'
+_
+'<b>Install Gnome Shell Extension di Ubuntu 20.04</b>'
+__
+'<ul class="list_angka">'
+'  <li class="list_item">Buka terminal atau CTRL + ALT + T</li>'
+'  <li class="list_item">Update repositori --> <b>sudo apt update</b></li>'
+'  <li class="list_item">Install gnome shell extension --> <b>sudo apt install gnome-shell-extensions</b></li>'
+'  <li class="list_item">Tunggu hingga selesai</li>'
+'</ul>'
+_
+'<b>Install Gnome Tweak Tool di Ubuntu 20.04</b>'
+__
+'<ul class="list_angka">'
+'  <li class="list_item">Buka terminal atau CTRL + ALT + T</li>'
+'  <li class="list_item">Update repositori --> <b>sudo apt update</b></li>'
+'  <li class="list_item">Install gnome tweak tool --> <b>sudo apt install gnome-tweak-tool</b></li>'
+'  <li class="list_item">Tunggu hingga selesai</li>'
+'</ul>'
+_
+'<b>Folder tempat menyimpan themes dan icons</b>'
+__
+'<ul class="list_angka">'
+'  <li class="list_item">Buka aplikasi "Files" pada Ubuntu 20.04</li>'
+'  <li class="list_item">Pergi ke bagian "Home Directory" (folder)</li>'
+'  <li class="list_item">Pilih menu "tools" (kanan atas sebelah menu close_min_max) --> Centang bagian "Show hidden files"</li>'
+'  <li class="list_item">buat folder baru (CTRL + SHIFT + N) di "Home Directory" --> Dengan nama ".themes" dan ".icons"</li>'
+'  <li class="list_item">Copy file themes dan icons yang telah di extrak sebelumnya ke folder ".themes" dan ".icons"'
+'      <ul class="list">'
+'          <li class="list_item">file themes ke folder ".themes"</li>'
+'          <li class="list_item">file icons ke folder ".icons"</li>'
+'      </ul>'
+'      <br>'
+'  </li>'
+'  <li class="list_item">Buka aplikasi "Tweaks"</li>'
+'  <li class="list_item">PIlih pada bagian "Appearance" --> Pada bagian "Application" dan "icons" --> Pilih themes dan icons</li>'
+'</ul>'
+_
+'<b>Catatan</b> : Cara pemasangan di atas menggunakan user biasa (bukan user root) jadi jika membuka aplikasi yang menggunakan akses root themes dan icons tidak akan berubah (kembali ke themes dan icons default) dan jika themes dan icons juga berubah pada akses root file themes dan icons diletakkan di user root.'
+__
+'<b>Pemasangan themes dan icons di user root</b>'
+__
+'<ul class="list_angka">'
+'  <li class="list_item">Masuk ke folder ".Themes" yang telah di buat sebelumnya</li>'
+'  <li class="list_item">"Select all" (CTRL + A) folder themes --> Klik kanan pilih "Properties" --> pilih "Permissions"</li>'
+'  <li class="list_item">Ubah Permissions Owner, Group, dan Others menjadi : '
+'      <ul class="list">'
+'          <li class="list_item">Owner : Tidak perlu diubah</li>'
+'          <li class="list_item">Create dan delete files</li>'
+'          <br>'
+'          <li class="list_item">Group : Tidak perlu diubah</li>'
+'          <li class="list_item">Access: Create dan delete files</li>'
+'          <br>'
+'          <li class="list_item">Others: Tidak perlu diubah</li>'
+'          <li class="list_item">Access: Access files</li>'
+'      </ul>'
+'      <br>'
+'  </li>'
+'  <li class="list_item">Pilih "Change Permissions for Enclosed files..." --> Pilih "Change"</li>'
+'  <li class="list_item">Klik kanan di area kosong pada folder ".themes" --> Pilih "Open in Terminal"</li>'
+'  <li class="list_item">Masuk ke user root --> <b>sudo su</b></li>'
+'  <li class="list_item">Ubah Owner dan Group file themes menjadi root : '
+'      <ul class="list">'
+'          <li class="list_item"><b>chown root nama_file_themes</b></li>'
+'          <li class="list_item"><b>chgrp root nama_file_themes</b></li>'
+'      </ul>'
+'      <br>'
+'  </li>'
+'  <li class="list_item">Pindahkan file themes yang telah diubah ke folder /usr/share/themes/ '
+'      <ul class="list">'
+'          <li class="list_item"><b>mv nama_file_themes /usr/share/themes/</b></li>'
+'          <li class="list_item"><b>Catatan</b> : jika file telah diubah maka akan ada bertanda silang di folder themes pada aplikasi "Files"</li>'
+'      </ul>'
+'      <br>'
+'  </li>'
+'  <li class="list_item">Untuk Pemasangan icons sama seperti pemasangan themes</li>'
+'  <li class="list_item">(Perbedaan) Pindahkan file icon yang telah diubah ke folder /usr/share/icons/ '
+'      <ul class="list">'
+'          <li class="list_item"><b>mv nama_file_themes /usr/share/icons/</b></li>'
+'      </ul>'
+'      <br>'
+'  </li>'
+'  <li class="list_item">Buka kembali aplikasi "Tweaks"</li>'
+'  <li class="list_item">PIlih pada bagian "Appearance" --> Pada bagian "Application" dan "icons" --> Pilih themes dan icons"</li>'
+'  <li class="list_item">Test pada aplikasi yang menggunakan root akses (Contoh : Bleachbit as root, dll).</li>'
+'</ul>'
+__
;

// VLC Media Player di ubuntu 20.04
let _3_title = 'VLC Media Player di ubuntu 20.04';
let _3_desc = '# Diedit pada 20 Maret 2023, Web Arsip';
let _3_content = 'Instalasi VLC di ubuntu 20.04 dapat dilakukan dengan dua cara :'
+ __
+'<ul class="list_angka">'
+'  <li class="list_item">Mengunakan APT (versi focal, 3.0.9.2-1 amd64)</li>'
+'  <li class="list_item">Menggunakan Snap Store (versi latest/stable, 3.0.18)</li>'
+'</ul>'
+ _
+'<b>Install menggunakan APT</b>'
+ __
+'<ul class="list_angka">'
+'  <li class="list_item">Buka Terminal atau CTRL + ALT + T</li>'
+'  <li class="list_item">Update repositori Ubuntu 20.04 --> <b>sudo apt update</b> --> Enter</li>'
+'  <li class="list_item">Cari dan Check versi VLC yang akan di install --> <b>apt search vlc</b> --> Enter</li>'
+'  <li class="list_item">Instalasi VLC pada perangkat --> <b>sudo apt install vlc</b> --> Enter</li>'
+'  <li class="list_item">Tunggu Hingga Selesai.</li>'
+'</ul>'
+ _
+'<b>Catatan</b> : Aplikasi VLC yang di install mengunakan APT akan mendownload file sebesar > 71 MB dan versi yang di sediakan di APT relatif menyesuaikan dengan update dari repository (terkadang akan mendapatkan versi yang lama) tetapi versi yang disediakan tetap versi yang stable.'
+ __
+'<b>Install menggunakan Snap Store</b>'
+ __
+'--> Melalui terminal'
+ __
+'<ul class="list_angka">'
+'  <li class="list_item">Buka Terminal atau CTRL + ALT + T</li>'
+'  <li class="list_item">Update repositori Ubuntu 20.04 --> <b>sudo apt update</b> --> Enter</li>'
+'  <li class="list_item">Cari dan Check versi VLC yang akan di install --> <b>snap find vlc</b> --> Enter</li>'
+'  <li class="list_item">Instalasi VLC pada perangkat --> <b>sudo snap install vlc</b> --> Enter</li>'
+'  <li class="list_item">Tunggu Hingga Selesai.</li>'
+'</ul>'
+ _
+'--> Melalui Ubuntu Software'
+ __
+'<ul class="list_angka">'
+'  <li class="list_item">Buka "Ubuntu Software"</li>'
+'  <li class="list_item">Cari VLC pada kolom pencarian Aplikasi</li>'
+'  <li class="list_item">Pilih versi aplication yang ingin di install pada bagian atas kanan layar</li>'
+'  <li class="list_item">Klik Install --> Tunggu hingga selesai</li>'
+'</ul>'
+ _
+'<b>Catatan</b> : Aplikasi VLC yang di install mengunakan Snap Store akan mendownload file sebesar > 300 MB dan versi yang di sediakan di Snap Store merupakan versi terbaru dari VLC'
+ __
+'<b>Configurasi VLC pada Versi focal, 3.0.9.2-1 amd64</b>'
+ __
+'<ul class="list_angka">'
+'  <li class="list_item">Klik kanan pada area kosong --> Tools --> Preferences</li>'
+'  <li class="list_item">Hapus Centang pada bagian --> Show controls in full screen mode</li>'
+'  <li class="list_item">Centang pada bagian --> Integrate video in interface</li>'
+'  <li class="list_item">Centang pada bagian --> Start in minimal view mode</li>'
+'  <li class="list_item">Hapus Centang pada bagian --> show systray icon</li>'
+'  <li class="list_item">Pada bagian bawah kiri menu "Show Settings" --> pilih "All"</li>'
+'  <li class="list_item">Kemudian pilih "Input / Codecs" --> Video Codecs</li>'
+'  <li class="list_item">Lihat pada bagian "Preferred Decoders list" dan "Preferred Encoders list" [kosong]</li>'
+'  <li class="list_item">Isi pada salah bagian "Preferred Decoders list" atau keduanya --> avcodec --> tekan "Save"</li>'
+'  <li class="list_item">Kemudian close (tutup) Aplikasi VLC --> dan VLC siap digunakan</li>'
+'</ul>'
+ _
+'<b>Catatan</b> : Penggunaan avcodec pada "Input / Codecs" untuk mengatur decoder preferred list dan encoder preferred list dari file video, images atau video + audio karena pada VLC versi focal, 3.0.9.2-1 amd64 di Ubuntu 20.04 terdapat beberapa file video yang berformat MKV tidak dapat mengeluarkan audio.'
;

// compiz_windows_effect_di_ubuntu_20.04
let _2_title = 'Compiz Windows Effect di Ubuntu 20.04';
let _2_desc = '# Diedit pada 19 Maret 2023, Web Arsip';
let _2_content = 'Compiz windows effect merupakan extension dari gnome shell dan juga merupakan compiz plugin engine serta tidak memerlukan library eksternal dalam penginstallannya. sebelum memasang extension ini anda harus menginstall gnome-shell-extensions untuk dapat terhubung dengan gnome shell dari web browser yang anda gunakan.'
+__
+'<b>Install Gnome Shell Extension di Ubuntu 20.04</b>'
+__
+'<ul class="list_angka">'
+'  <li class="list_item">Buka terminal atau CTRL + ALT + T</li>'
+'  <li class="list_item">Update repositori --> <b>sudo apt update</b></li>'
+'  <li class="list_item">Install gnome shell extension --> <b>sudo apt install gnome-shell-extensions</b></li>'
+'  <li class="list_item">Tunggu hingga selesai.</li>'
+'</ul>'
+_
+'<b>Install Gnome Tweak Tool di Ubuntu 20.04</b>'
+__
+'<ul class="list_angka">'
+'  <li class="list_item">Buka terminal atau CTRL + ALT + T</li>'
+'  <li class="list_item">Update repositori --> <b>sudo apt update</b></li>'
+'  <li class="list_item">Install gnome tweak tool --> <b>sudo apt install gnome-tweak-tool</b></li>'
+'  <li class="list_item">Tunggu hingga selesai.</li>'
+'</ul>'
+_
+'<b>Cara memasang plugin Compiz windows effect</b>'
+__
+'<ul class="list_angka">'
+'  <li class="list_item">Buka Web Browser</li>'
+'  <li class="list_item">Kunjungi halaman web Gnome Extension.</li>'
+'  <li class="list_item">Pasang ektensi gnome extension di web browser.</li>'
+'  <li class="list_item">Cari "Compiz windows effect"</li>'
+'  <li class="list_item">klik pada bagian ON/OFF plugin</li>'
+'  <li class="list_item">Jika muncul konfirmasi install --> klik "Install"</li>'
+'</ul>'
+_
+'<b>Cara mengatur configurasi Compiz windows effect</b>'
+__
+'<ul class="list_angka">'
+'  <li class="list_item">Buka menu --> Cari "Extensions" --> klik logo pengaturan pada menu Compiz windows effect</li>'
+'  <li class="list_item">Pada bagian Friction --> atur pada point 7.5</li>'
+'  <li class="list_item">Pada bagian Spring --> atur pada point 7.5</li>'
+'  <li class="list_item">Pada bagian Speedup Factor --> atur pada point 7.5</li>'
+'  <li class="list_item">Pada bagian Mass --> atur pada point 50</li>'
+'  <li class="list_item">Pada bagian X Tiles --> atur pada point 6</li>'
+'  <li class="list_item">Pada bagian Y Tiles --> atur pada point 6</li>'
+'  <li class="list_item">Pada bagian Maximize --> matikan (opsional)</li>'
+'  <li class="list_item">Pada bagian Resize Effect --> matikan (opsional)</li>'
+'</ul>'
;

// web_browser_di_ubuntu_20.04
let _1_title = 'Web Browser di ubuntu 20.04';
let _1_desc = '# Diedit pada 18 Maret 2023, Web Arsip';
let _1_content = '<b>Web Browser yang familiar di ubuntu 20.04</b>'
+ __
+'<ul class="list">'
+'  <li class="list_item">Google Chrome</li>'
+'  <li class="list_item">Mozilla Firefox</li>'
+'</ul>'
+ _
+'<b>Install Google Chrome</b>'
+ __ 
+'--> Versi Non Open Source'
+ __
+'<ul class="list_angka">'
+'  <li class="list_item">Unduh file Google Chrome.</li>'
+'  <li class="list_item">Buka aplikasi Files di Ubuntu --> Cari file yang telah diunduh.</li>'
+'  <li class="list_item">klik kanan pada area kosong--> pilih Open In Terminal.</li>'
+'  <li class="list_item">ketik <b>sudo dpkg -i nama_file.deb</b> --> Enter --> Masukkan Password user --> Enter</li>'
+'  <li class="list_item">Jika proses instalasi gagal gunakan perintah berikut untuk install file yang hilang (harus terkoneksi internet)</li>'
+'  <li class="list_item">ketik <b>sudo apt instal -f</b> --> Enter</li>'
+'  <li class="list_item">Tunggu hingga proses instalasi selesai dan Google Chrome siap digunakan.</li>'
+'</ul>'
+ _ 
+'--> Versi Open source'
+ __ 
+'<ul class="list_angka">'
+'  <li class="list_item">Buka aplikasi Terminal atau CTRL + T.</li>'
+'  <li class="list_item">Update repositori dengan perintah berikut.</li>'
+'  <li class="list_item">Ketik <b>sudo apt update</b> --> Enter</li>'
+'  <li class="list_item">kelik <b>sudo apt install -y chromium-browser</b> --> Enter</li>'
+'  <li class="list_item">Tunggu hingga selesai.</li>'
+'</ul>'
+ _ 
+'<b>Install Firefox</b>'
+ __
+'--> Dengan Apt  Repository'
+ __ 
+'<ul class="list_angka">'
+'  <li class="list_item">Buka aplikasi Terminal atau CTRL + T.</li>'
+'  <li class="list_item">Update repositori dengan perintah berikut.</li>'
+'  <li class="list_item">Ketik <b>sudo apt update</b> --> Enter</li>'
+'  <li class="list_item">Lalu ketik <b>apt search firefox</b> --> Enter '
+'      <ul class="list">'
+'          <li class="list_item"><b>Catatan</b> : Untuk melihat file firefox di repositori jika tidak ada bisa menggunakan snap.</li>'
+'      </ul>'
+'      <br>'
+'  </li>'
+'  <li class="list_item">Ketik <b>sudo apt install firefox -y</b> --> Enter</li>'
+'  <li class="list_item">Tunggu hingga selesai.</li>'
+'</ul>'
+ _ 
+'--> Dengan Snap / Ubuntu Softwere'
+ __
+'<ul class="list_angka">'
+'  <li class="list_item">buka aplikai Ubuntu Software</li>'
+'  <li class="list_item">klik pada bagian Search --> Kemudia cari Firefox --> klik Install.</li>'
+'  <li class="list_item">Tunggu hingga selesai</li>'
+'</ul>'
+ _ 
+'<b>List Web Browser yang dapat di install di Ubuntu 20.04</b>'
+ __ 
+'--> Menggunakan GUI'
+ __
+'<ul class="list">'
+'  <li class="list_item">Firefox</li>'
+'  <li class="list_item">Google Chrome</li>'
+'  <li class="list_item">Opera</li>'
+'  <li class="list_item">Tor Browser</li>'
+'  <li class="list_item">Vivaldi</li>'
+'  <li class="list_item">Iceweasel</li>'
+'  <li class="list_item">Khrom</li>'
+'  <li class="list_item">Midori</li>'
+'  <li class="list_item">Chromium</li>'
+'</ul>'
+ _ 
+'--> Tidak Menggunakan GUI'
+ __ 
+'<ul class="list">'
+'  <li class="list_item">W3M --> <b>sudo apt install w3m w3m-img</b></li>'
+'  <li class="list_item">Lynx --> <b>sudo apt install lynx</b></li>'
+'  <li class="list_item">Links2 --> <b>sudo apt install links2</b></li>'
+'  <li class="list_item">eLinks --> <b>sudo apt install elinks</b></li>'
+'</ul>'
;
