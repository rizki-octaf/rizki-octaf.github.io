// fungsi command line 
let title = document.getElementById("main_title");
let desc = document.getElementById("main_desc");
let content = document.getElementById("main_content");

function searchInput() {
    let command = document.getElementById('header_search-input').value;

    // ===============================================================
    // laman main content
    // ===============================================================
    if (command == 'home' | command == 1) {
        title.innerHTML = home_title;
        desc.innerHTML = home_desc;
        content.innerHTML = home_content;
        topButton();
    }
    else if (command == 'explore' | command == 2) {
        title.innerHTML = explore_title;
        desc.innerHTML = explore_desc;
        content.innerHTML = explore_content;
        topButton();
    }
    else if (command == 'about' | command == 3) {
        title.innerHTML = about_title;
        desc.innerHTML = about_desc;
        content.innerHTML = about_content;
        topButton();
    }
    else if (command == 'wai') {
        window.open ("https://rizki-octaf.github.io/","_blank")
    }
    else if (command == 'scwai') {
        window.open ("https://github.com/rizki-octaf/rizki-octaf.github.io","_blank")
    }
    else if (command == 'help' | command == 4) {
        title.innerHTML = help_title;
        desc.innerHTML = help_desc;
        content.innerHTML = help_content;
        topButton();
    }
    else if (command == 'contact' | command == 5) {
        title.innerHTML = contact_title;
        desc.innerHTML = contact_desc;
        content.innerHTML = contact_content;
        topButton();
    }
    else if (command == 'smtw') {
        window.open ("https://twitter.com/rizkioctaf","_blank")
    }
    else if (command == 'smgt') {
        window.open ("https://github.com/rizki-octaf","_blank")
    }
    else if (command == 'smyt') {
        window.open ("https://www.youtube.com/@rizki-octaf","_blank")
    }
    else if (command == 'quit' | command == '0') {
        window.close();
    }














    // ===============================================================
    // kategori ubuntu
    // ===============================================================
    else if (command == 'Web Browser Ubuntu 20.04') {
        title.innerHTML = _1_title;
        desc.innerHTML = _1_desc;
        content.innerHTML = _1_content;
        topButton();
    }
    else if (command == 'Compiz Windows Effect di Ubuntu 20.04') {
        title.innerHTML = _2_title;
        desc.innerHTML = _2_desc;
        content.innerHTML = _2_content;
        topButton();
    }
    else if (command == 'VLC Media Player Ubuntu 20.04') {
        title.innerHTML = _3_title;
        desc.innerHTML = _3_desc;
        content.innerHTML = _3_content;
        topButton();
    }
    else if (command == 'Themes dan Icons Ubuntu 20.04') {
        title.innerHTML = _4_title;
        desc.innerHTML = _4_desc;
        content.innerHTML = _4_content;
        topButton();
    }
    else if (command == 'glook') {
        window.open ("https://www.gnome-look.org","_blank")
    }













    

    // ===============================================================
    // kategori programming c++
    // ===============================================================
    else if (command == 'Programming C++ 0.1 Pengantar Tutorial C++') {
        title.innerHTML = _5_title;
        desc.innerHTML = _5_desc;
        content.innerHTML = _5_content;
        topButton();
    }
    else if (command == 'Programming C++ 0.2 Pengantar Bahasa Pemrograman') {
        title.innerHTML = _6_title;
        desc.innerHTML = _6_desc;
        content.innerHTML = _6_content;
        topButton();
    }
    else if (command == 'Programming C++ 0.3 Pengantar C atau C++') {
        title.innerHTML = _7_title;
        desc.innerHTML = _7_desc;
        content.innerHTML = _7_content;
        topButton();
    }
    else if (command == 'Programming C++ 0.4 Pengantar Pengembangan C++') {
        title.innerHTML = _8_title;
        desc.innerHTML = _8_desc;
        content.innerHTML = _8_content;
        topButton();
    }
    else if (command == 'Programming C++ 0.5 Pengantar Kompiler, Penghubung, dan Perpustakaan') {
        title.innerHTML = _9_title;
        desc.innerHTML = _9_desc;
        content.innerHTML = _9_content;
        topButton();
    }
    else if (command == 'Programming C++ 0.6 Memasang Lingkungan Pengembangan Terintegrasi (IDE)') {
        title.innerHTML = _10_title;
        desc.innerHTML = _10_desc;
        content.innerHTML = _10_content;
        topButton();
    }
    else if (command == 'vstd') {
        window.open ("https://www.visualstudio.com/downloads/","_blank")
    }
    else if (command == 'vexp') {
        window.open ("https://visualstudio.microsoft.com/vs/express/","_blank")
    }
    else if (command == 'cdbl') {
        window.open ("https://www.codeblocks.org/downloads/binaries/","_blank")
    }
    else if (command == 'vstf') {
        window.open ("https://code.visualstudio.com/docs/cpp/config-linux","_blank")
    }
    else if (command == 'vstd') {
        window.open ("https://www.visualstudio.com/downloads/","_blank")
    }
    else if (command == 'vsmd') {
        window.open ("https://code.visualstudio.com/docs/setup/mac","_blank")
    }
    else if (command == 'vsmf') {
        window.open ("https://code.visualstudio.com/docs/cpp/config-clang-mac","_blank")
    }
    else if (command == 'vswd') {
        window.open ("https://code.visualstudio.com/docs/setup/windows","_blank")
    }
    else if (command == 'vswf') {
        window.open ("https://code.visualstudio.com/docs/cpp/config-mingw","_blank")
    }
    else if (command == 'xcod') {
        window.open ("https://developer.apple.com/xcode/","_blank")
    }
    else if (command == 'ecpl') {
        window.open ("https://www.eclipse.org/","_blank")
    }
}

