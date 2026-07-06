"use client";

import { Callout } from "@/components/docs/callout";
import { Steps, Step } from "@/components/docs/steps";

export default function GettingStartedPage() {
  return (
    <>
      <h2>Apa itu TeamVora</h2>

      <p>
        TeamVora adalah platform manajemen tim all-in-one yang dirancang khusus untuk membantu
        tim bekerja sama secara lebih efektif dan terorganisir. Dengan menggabungkan fitur
        keuangan, produktivitas, dan media dalam satu aplikasi, TeamVora menghilangkan kebutuhan
        untuk menggunakan banyak aplikasi terpisah yang seringkali menyulitkan sinkronisasi data
        antar tim.
      </p>

      <p>
        Platform ini mendukung tiga peran pengguna yang berbeda untuk memastikan struktur
        kepengurusan tim yang jelas:
      </p>

      <ul>
        <li>
          <strong>Super Admin</strong> — memiliki akses penuh ke seluruh fitur dan pengaturan
          sistem, termasuk manajemen pengguna global dan konfigurasi platform
        </li>
        <li>
          <strong>Team Leader</strong> — bertanggung jawab mengelola timnya sendiri, termasuk
          mengundang anggota, menugaskan tugas, mengelola keuangan tim, dan memantau log harian
          anggota
        </li>
        <li>
          <strong>Member</strong> — dapat mengakses fitur yang diizinkan oleh tim, mengerjakan
          tugas yang ditugaskan, mencatat pengeluaran, dan berkontribusi dalam aktivitas tim
        </li>
      </ul>

      <h3>Fitur Utama</h3>

      <p>
        TeamVora menyediakan rangkaian fitur lengkap yang mencakup berbagai aspek pengelolaan
        tim:
      </p>

      <p>
        <strong>Keuangan</strong> — lacak seluruh arus kas tim Anda dengan fitur kas digital
        untuk mencatat pemasukan dan pengeluaran. Fitur split bills memungkinkan pembagian
        tagihan secara adil antar anggota, sementara tagihan berulang memudahkan pencatatan
        pengeluaran rutin seperti sewa, langganan, atau iuran bulanan.
      </p>

      <p>
        <strong>Produktivitas</strong> — kelola proyek dan tugas tim menggunakan papan kanban
        yang intuitif. Setiap tugas dapat ditugaskan kepada anggota tertentu dengan batas waktu,
        prioritas, dan deskripsi lengkap. Fitur log harian memungkinkan anggota mencatat aktivitas
        harian mereka untuk pelaporan dan pemantauan kemajuan.
      </p>

      <p>
        <strong>Media</strong> — simpan, bagikan, dan akses dokumen serta aset tim dalam satu
        tempat terpusat. Galeri media memungkinkan pengelolaan gambar, foto, dan file lainnya
        dengan mudah tanpa perlu bergantung pada layanan penyimpanan cloud pihak ketiga.
      </p>

      <p>
        <strong>Blog</strong> — buat dan publikasikan artikel atau pengumuman untuk seluruh
        anggota tim atau pihak eksternal. Fitur blog membantu menyebarkan informasi penting secara
        terstruktur dan profesional.
      </p>

      <p>
        <strong>Pengaturan</strong> — konfigurasi profil pribadi, pengaturan tim, dan preferensi
        aplikasi sesuai kebutuhan Anda. Termasuk pengelolaan anggota tim, perubahan peran, dan
        penyesuaian notifikasi.
      </p>

      <h2>System Requirements</h2>

      <p>
        Sebelum memulai menggunakan TeamVora, pastikan perangkat Anda memenuhi persyaratan
        minimum berikut untuk pengalaman penggunaan yang optimal:
      </p>

      <h3>Perangkat Keras</h3>

      <ul>
        <li>
          <strong>Prosesor:</strong> Prosesor modern dengan kecepatan minimal 1 GHz. Tidak
          diperlukan spesifikasi tinggi karena TeamVora berbasis web dan sebagian besar
          pemrosesan dilakukan di server
        </li>
        <li>
          <strong>RAM:</strong> Minimal 2 GB RAM untuk menjalankan browser dengan lancar.
          Disarankan 4 GB atau lebih untuk pengalaman yang lebih nyaman
        </li>
        <li>
          <strong>Penyimpanan:</strong> Tidak diperlukan ruang penyimpanan khusus karena semua
          data tersimpan di cloud. Namun, pastikan Anda memiliki ruang yang cukup untuk browser
          cache
        </li>
        <li>
          <strong>Layar:</strong> Resolusi layar minimal 1280x720 pixel. Resolusi yang lebih
          tinggi seperti 1920x1080 akan memberikan tampilan yang lebih optimal
        </li>
      </ul>

      <h3>Perangkat Lunak</h3>

      <ul>
        <li>
          <strong>Browser Web Modern:</strong> TeamVora mendukung berbagai browser web terkini
          termasuk:
          <ul>
            <li>Google Chrome versi 90 atau lebih baru</li>
            <li>Mozilla Firefox versi 88 atau lebih baru</li>
            <li>Apple Safari versi 14 atau lebih baru</li>
            <li>Microsoft Edge versi 90 atau lebih baru</li>
          </ul>
        </li>
        <li>
          <strong>Koneksi Internet:</strong> Koneksi internet yang stabil diperlukan untuk
          mengakses seluruh fitur TeamVora. Kecepatan minimal 1 Mbps disarankan untuk
          pengalaman yang lancar
        </li>
        <li>
          <strong>Sistem Operasi:</strong> Tidak ada batasan sistem operasi spesifik karena
          TeamVora dapat diakses melalui browser web di Windows, macOS, Linux, atau sistem operasi
          lainnya
        </li>
      </ul>

      <h3>Fitur Tambahan</h3>

      <ul>
        <li>
          <strong>JavaScript:</strong> Pastikan JavaScript diaktifkan di browser Anda. Fitur
          JavaScript diperlukan untuk menjalankan seluruh fungsi aplikasi
        </li>
        <li>
          <strong>Cookies:</strong> Aktifkan cookies di browser untuk memungkinkan sesi login
          yang berkelanjutan
        </li>
        <li>
          <strong>Pop-up Blocker:</strong> Nonaktifkan pop-up blocker untuk domain TeamVora agar
          tidak mengganggu alur kerja tertentu
        </li>
        <li>
          <strong>LocalStorage:</strong> Pastikan localStorage tersedia di browser Anda untuk
          penyimpanan data sementara
        </li>
      </ul>

      <Callout variant="info">
        TeamVora dirancang responsif dan dapat diakses dari perangkat mobile. Namun, untuk
        pengalaman terbaik, gunakan browser di desktop atau laptop dengan resolusi layar yang
        memadai.
      </Callout>

      <h2>Registrasi Akun</h2>

      <p>
        Untuk mulai menggunakan TeamVora, Anda perlu membuat akun terlebih dahulu. Proses
        registrasi dirancang sederhana dan cepat. Ikuti langkah-langkah berikut dengan teliti:
      </p>

      <Steps>
        <Step number={1} title="Buka browser dan kunjungi website TeamVora">
          Luncurkan browser web favorit Anda (Chrome, Firefox, Safari, atau Edge) dan kunjungi
          alamat website resmi TeamVora. Pastikan Anda mengakses URL yang benar dan bukan website
          palsu. Perhatikan ikon gembok di address bar yang menandakan koneksi aman (HTTPS).
        </Step>
        <Step number={2} title="Klik tombol Daftar atau Register">
          Di halaman utama website TeamVora, cari dan klik tombol <strong>Daftar</strong> atau{" "}
          <strong>Register</strong> yang biasanya terletak di bagian atas halaman atau di pojok
          kanan atas. Tombol ini akan mengarahkan Anda ke halaman formulir registrasi.
        </Step>
        <Step number={3} title="Isi formulir registrasi dengan lengkap">
          Isi seluruh kolom formulir registrasi dengan data yang benar dan lengkap:
          <ul>
            <li>
              <strong>Nama Lengkap</strong> — masukkan nama lengkap Anda sesuai dengan identitas
              resmi. Nama ini akan ditampilkan di profil dan digunakan oleh anggota tim lain untuk
              mengenali Anda
            </li>
            <li>
              <strong>Alamat Email</strong> — masukkan alamat email aktif yang masih Anda
              gunakan. Email ini akan menjadi identitas utama untuk login dan komunikasi. Pastikan
              email ini valid karena akan digunakan untuk verifikasi akun
            </li>
            <li>
              <strong>Password</strong> — buat password yang kuat dengan kombinasi huruf besar,
              huruf kecil, angka, dan karakter khusus. Minimal 8 karakter. Hindari menggunakan
              informasi pribadi yang mudah ditebak seperti tanggal lahir atau nama hewan
              peliharaan
            </li>
            <li>
              <strong>Konfirmasi Password</strong> — ketik ulang password yang sama dengan kolom
              sebelumnya untuk memastikan tidak ada kesalahan pengetikan
            </li>
          </ul>
        </Step>
        <Step number={4} title="Setujui syarat dan ketentuan">
          Centang checkbox yang menandakan Anda telah membaca dan menyetujui syarat dan ketentuan
          penggunaan TeamVora serta kebijakan privasi. Disarankan untuk membaca dokumen ini
          terlebih dahulu untuk memahami hak dan kewajiban Anda sebagai pengguna platform.
        </Step>
        <Step number={5} title="Kirim formulir registrasi">
          Klik tombol <strong>Daftar</strong> atau <strong>Register</strong> di bagian bawah
          formulir untuk mengirim data registrasi Anda. Tunggu beberapa saat hingga proses
          pengiriman selesai. Jika terjadi kesalahan, periksa kembali isian formulir dan perbaiki
          kolom yang ditandai dengan pesan error.
        </Step>
        <Step number={6} title="Cek email inbox Anda">
          Buka email client Anda dan periksa inbox email yang telah didaftarkan. Cari email dari
          TeamVora dengan subjek verifikasi akun. Jika email tidak muncul di inbox, periksa
          folder Spam atau Junk Mail. Tunggu beberapa menit jika email belum datang.
        </Step>
        <Step number={7} title="Klik link verifikasi di email">
          Buka email verifikasi dari TeamVora dan klik tombol atau link{" "}
          <strong>Verifikasi Akun</strong> di dalamnya. Link ini akan membuka halaman baru yang
          mengonfirmasi bahwa akun Anda telah berhasil diaktifkan. Link verifikasi biasanya
          memiliki batas waktu tertentu, jadi segera verifikasi setelah menerima email.
        </Step>
        <Step number={8} title="Akun aktif dan siap digunakan">
          Setelah verifikasi berhasil, akun Anda resmi aktif. Anda akan diarahkan ke halaman
          login atau dashboard tergantung pengaturan sistem. Akun Anda kini siap digunakan untuk
          login, membuat tim, atau bergabung dengan tim yang sudah ada.
        </Step>
      </Steps>

      <Callout variant="warning">
        <strong>Penting:</strong> Gunakan alamat email yang valid dan masih aktif saat
        registrasi. Email ini akan digunakan untuk verifikasi akun, pemulihan password, dan
        notifikasi penting lainnya. Jika Anda menggunakan email palsu atau tidak aktif, Anda tidak
        akan bisa mengakses akun jika lupa password.
      </Callout>

      <h2>Login ke Akun</h2>

      <p>
        Setelah berhasil mendaftar dan memverifikasi akun, Anda dapat masuk ke TeamVora kapan saja
        menggunakan email dan password yang telah didaftarkan. Berikut panduan langkah demi
        langkah untuk login:
      </p>

      <Steps>
        <Step number={1} title="Buka halaman login TeamVora">
          Luncurkan browser web Anda dan kunjungi halaman login TeamVora. Anda dapat mengakses
          halaman login melalui tombol <strong>Masuk</strong> atau <strong>Login</strong> di
          halaman utama, atau langsung mengunjungi URL login jika Anda sudah mengetahuinya.
        </Step>
        <Step number={2} title="Masukkan alamat email">
          Ketik alamat email yang telah Anda daftarkan sebelumnya ke kolom <strong>Email</strong>
          . Pastikan penulisan email benar termasuk huruf besar/kecil dan domain email (contoh:
          nama@domain.com). Perhatikan bahwa alamat email bersifat case-sensitive pada beberapa
          bagian sistem.
        </Step>
        <Step number={3} title="Masukkan password">
          Ketik password yang benar ke kolom <strong>Password</strong>. Perhatikan huruf besar dan
          kecil karena password bersifat case-sensitive. Jika ingin memastikan password yang
          diketik benar, Anda dapat mengklik ikon mata di sebelah kolom password untuk menampilkan
          teks password sementara.
        </Step>
        <Step number={4} title="Aktifkan opsi Ingat saya (opsional)">
          Jika Anda ingin tetap login di perangkat ini untuk penggunaan berikutnya tanpa perlu
          login ulang, centang checkbox <strong>Ingat saya</strong> atau <strong>Remember me</strong>
          . Fitur ini menggunakan cookies untuk mempertahankan sesi login Anda. Hindari
          mengaktifkan opsi ini di perangkat umum atau bersama yang tidak aman.
        </Step>
        <Step number={5} title="Klik tombol Masuk">
          Klik tombol <strong>Masuk</strong> atau <strong>Login</strong> untuk mengirim data
          kredensial Anda ke server. Tunggu beberapa saat hingga proses autentikasi selesai. Jika
          kredensial benar, Anda akan diarahkan ke dashboard utama TeamVora sesuai dengan peran
          dan tim yang Anda miliki.
        </Step>
        <Step number={6} title="Verifikasi ke dashboard">
          Setelah berhasil login, periksa bahwa Anda berada di halaman dashboard yang benar. Anda
          akan melihat ringkasan aktivitas tim, statistik, dan menu navigasi di sidebar. Jika Anda
          tergabung dalam beberapa tim, Anda mungkin perlu memilih tim mana yang ingin diakses
          terlebih dahulu.
        </Step>
      </Steps>

      <Callout variant="info">
        <strong>Lupa Password?</strong> Jika Anda lupa password, jangan khawatir. Klik link{" "}
        <strong>Lupa Password?</strong> di halaman login untuk memulai proses pemulihan password.
        Timbangan akan mengirimkan email berisi link reset password ke alamat email yang terdaftar.
        Pastikan Anda memiliki akses ke email tersebut.
      </Callout>

      <h2>Lupa Password</h2>

      <p>
        Jika Anda lupa password akun TeamVora, Anda dapat memulihkannya melalui proses reset
        password yang aman. Ikuti langkah-langkah berikut untuk mendapatkan akses kembali ke
        akun Anda:
      </p>

      <Steps>
        <Step number={1} title="Akses halaman reset password">
          Di halaman login TeamVora, cari dan klik link <strong>Lupa Password?</strong> yang
          terletak di bawah kolom password. Link ini akan mengarahkan Anda ke halaman pemulihan
          password di mana Anda dapat memulai proses reset.
        </Step>
        <Step number={2} title="Masukkan alamat email terdaftar">
          Ketik alamat email yang Anda gunakan saat registrasi akun ke kolom yang tersedia.
          Pastikan email yang dimasukkan benar-benar email yang terdaftar di sistem TeamVora. Jika
          email tidak ditemukan di database, proses reset tidak akan berhasil.
        </Step>
        <Step number={3} title="Kirim permintaan reset password">
          Klik tombol <strong>Kirim Link Reset</strong> atau <strong>Send Reset Link</strong>{" "}
          untuk mengirim permintaan pemulihan password ke server. Sistem akan memverifikasi email
          Anda dan mengirimkan email berisi link reset password. Tunggu beberapa menit hingga
          email tiba di inbox Anda.
        </Step>
        <Step number={4} title="Buka email dari TeamVora">
          Periksa inbox email Anda untuk pesan dari TeamVora dengan subjek terkait reset password.
          Jika email tidak muncul di inbox utama, periksa folder Spam, Junk, atau Promotions.
          Email reset password biasanya dikirim dalam waktu 1-2 menit setelah permintaan.
        </Step>
        <Step number={5} title="Klik link reset password di email">
          Buka email tersebut dan klik tombol atau link <strong>Reset Password</strong> di
          dalamnya. Link ini bersifat rahasia dan hanya boleh diakses oleh Anda. Link reset
          password memiliki masa berlaku terbatas, biasanya 1 jam hingga 24 jam tergantung
          pengaturan keamanan sistem.
        </Step>
        <Step number={6} title="Buat password baru yang kuat">
          Di halaman reset password, masukkan password baru Anda. Pastikan password memenuhi
          kriteria keamanan: minimal 8 karakter, mengandung kombinasi huruf besar, huruf kecil,
          angka, dan ideally karakter kuspel seperti tanda baca. Hindari menggunakan password
          yang sama dengan password sebelumnya.
        </Step>
        <Step number={7} title="Konfirmasi password baru">
          Ketik ulang password baru yang sama di kolom <strong>Konfirmasi Password</strong>. Kolom
          ini memastikan Anda tidak membuat kesalahan pengetikan saat membuat password baru. Jika
          kedua kolom tidak cocok, sistem akan menampilkan pesan error.
        </Step>
        <Step number={8} title="Selesaikan reset dan login">
          Klik tombol <strong>Reset Password</strong> atau <strong>Submit</strong> untuk menyimpan
          password baru Anda. Setelah berhasil, Anda akan diarahkan ke halaman login. Gunakan
          email dan password baru Anda untuk masuk ke akun TeamVora. Pastikan untuk mengingat
          atau menyimpan password baru di tempat yang aman.
        </Step>
      </Steps>

      <Callout variant="warning">
        Link reset password hanya berlaku untuk satu kali penggunaan dan memiliki batas waktu.
        Jika link sudah kedaluwarsa atau sudah digunakan, Anda perlu mengulangi proses dari langkah
        pertama untuk mendapatkan link baru. Jika Anda tidak menerima email reset dalam waktu 5
        menit, periksa folder spam atau minta link baru.
      </Callout>

      <h2>Bergabung dengan Tim</h2>

      <p>
        TeamVora memungkinkan Anda bergabung dengan tim yang sudah ada atau membuat tim baru
        sendiri. Terdapat dua cara utama untuk memulai kolaborasi dengan tim:
      </p>

      <h3>Cara 1: Melalui Undangan Email</h3>

      <p>
        Cara ini digunakan ketika Anda diundang oleh Team Leader yang sudah memiliki tim di
        TeamVora. Prosesnya cepat dan mudah:
      </p>

      <Steps>
        <Step number={1} title="Menerima email undangan dari Team Leader">
          Team Leader akan mengundang Anda melalui email yang dikirim dari sistem TeamVora. Email
          undangan berisi informasi tentang tim yang mengundang Anda, termasuk nama tim dan
          deskripsi singkat. Email ini dikirim ke alamat email yang Anda gunakan saat registrasi
          akun TeamVora.
        </Step>
        <Step number={2} title="Buka email undangan dan klik tombol Bergabung">
          Buka email undangan dari TeamVora dan cari tombol atau link{" "}
          <strong>Bergabung dengan Tim</strong> atau <strong>Join Team</strong>. Tombol ini akan
          mengarahkan Anda ke halaman konfirmasi keanggotaan tim. Link undangan memiliki masa
          berlaku, jadi segera setelah Anda menerima email.
        </Step>
        <Step number={3} title="Login jika belum login ke akun">
          Jika Anda belum login ke akun TeamVora, sistem akan meminta Anda untuk login terlebih
          dahulu sebelum dapat bergabung dengan tim. Masukkan email dan password yang benar, lalu
          Anda akan diarahkan ke halaman konfirmasi keanggotaan tim.
        </Step>
        <Step number={4} title="Konfirmasi keanggotaan tim">
          Setelah login, Anda akan melihat halaman konfirmasi yang menampilkan informasi tim yang
          mengundang Anda, termasuk nama tim, deskripsi, dan jumlah anggota saat ini. Klik tombol{" "}
          <strong>Ya, Saya Bergabung</strong> atau <strong>Confirm Join</strong> untuk menyelesaikan
          proses bergabung dengan tim.
        </Step>
        <Step number={5} title="Akses dashboard tim yang baru">
          Setelah konfirmasi berhasil, Anda akan otomatis diarahkan ke dashboard tim yang baru Anda
          gabungi. Anda kini dapat melihat seluruh aktivitas tim, mengerjakan tugas, mengakses
          keuangan, dan berkolaborasi dengan anggota tim lainnya.
        </Step>
      </Steps>

      <Callout variant="warning">
        Jika link undangan sudah kedaluwarsa atau tidak berfungsi, minta Team Leader untuk
        mengirim ulang undangan baru. Link undangan biasanya berlaku selama 7 hari sebelum
        kedaluwarsa.
      </Callout>

      <h3>Cara 2: Membuat Tim Baru</h3>

      <p>
        Jika Anda ingin memulai tim baru sendiri tanpa menunggu undangan, Anda dapat membuat tim
        baru langsung dari akun Anda. Dengan membuat tim baru, Anda akan otomatis menjadi Team
        Leader dengan hak akses penuh untuk mengelola tim.
      </p>

      <Steps>
        <Step number={1} title="Login ke akun TeamVora">
          Masuk ke akun TeamVora Anda menggunakan email dan password yang benar. Pastikan Anda
          berada di dashboard utama sebelum melanjutkan ke langkah berikutnya.
        </Step>
        <Step number={2} title="Buka menu Pengaturan">
          Di sidebar navigasi sebelah kiri, cari dan klik menu <strong>Pengaturan</strong> atau{" "}
          <strong>Settings</strong>. Menu ini berisi berbagai opsi konfigurasi untuk profil Anda
          dan pengaturan tim. Pastikan Anda mengakses menu yang benar untuk membuat tim baru.
        </Step>
        <Step number={3} title="Pilih opsi Buat Tim Baru">
          Di dalam halaman Pengaturan, cari tombol atau link <strong>Buat Tim Baru</strong> atau{" "}
          <strong>Create New Team</strong>. Opsi ini akan membuka formulir pembuatan tim baru di
          mana Anda dapat mengisi detail tim yang akan dibuat.
        </Step>
        <Step number={4} title="Isi detail tim yang akan dibuat">
          Lengkapi formulir pembuatan tim dengan informasi berikut:
          <ul>
            <li>
              <strong>Nama Tim</strong> — pilih nama yang deskriptif dan mudah diingat oleh anggota
              tim. Nama tim akan ditampilkan di seluruh aplikasi dan digunakan untuk identifikasi
              tim
            </li>
            <li>
              <strong>Deskripsi Tim</strong> — tuliskan deskripsi singkat tentang tujuan atau
              fungsi tim. Deskripsi ini membantu anggota baru memahami konteks tim sebelum bergabung
            </li>
            <li>
              <strong>Ikon atau Avatar Tim (opsional)</strong> — unggah gambar ikon atau avatar
              untuk tim Anda agar lebih mudah dikenali
            </li>
          </ul>
        </Step>
        <Step number={5} title="Konfirmasi pembuatan tim">
          Setelah mengisi seluruh informasi yang diperlukan, klik tombol <strong>Buat Tim</strong>{" "}
          atau <strong>Create Team</strong> untuk mengirim formulir. Sistem akan memproses
          permintaan Anda dan membuat tim baru dalam beberapa saat.
        </Step>
        <Step number={6} title="Tim berhasil dibuat dengan Anda sebagai Team Leader">
          Setelah tim berhasil dibuat, Anda akan otomatis menjadi Team Leader dengan hak akses
          penuh untuk mengelola tim. Anda dapat mulai mengundang anggota baru, membuat tugas,
          mengelola keuangan tim, dan menjalankan aktivitas lainnya. Tim baru Anda akan muncul di
          daftar tim di sidebar navigasi.
        </Step>
      </Steps>

      <Callout variant="info">
        Sebagai Team Leader, Anda memiliki tanggung jawab untuk mengelola anggota tim, menugaskan
        tugas, memantau keuangan, dan memastikan kelancaran operasional tim. Pastikan untuk
        mengundang anggota yang tepat dan memberikan peran yang sesuai.
      </Callout>

      <h2>Interface Overview</h2>

      <p>
        Setelah berhasil login ke TeamVora, Anda akan disambut oleh antarmuka yang dirancang
        intuitif dan mudah navigasi. Berikut penjelasan detail tentang komponen-komponen utama
        interface TeamVora:
      </p>

      <h3>Sidebar Navigasi</h3>

      <p>
        Sidebar navigasi terletak di sebelah kiri layar dan berisi seluruh menu navigasi utama
        TeamVora. Sidebar ini menjadi pusat navigasi yang memungkinkan Anda berpindah antar
        halaman dan fitur dengan cepat. Berikut komponen-komponen yang tersedia di sidebar:
      </p>

      <ul>
        <li>
          <strong>Dashboard</strong> — halaman utama yang menampilkan ringkasan aktivitas dan
          statistik tim secara keseluruhan. Dashboard memberikan gambaran cepat tentang kondisi
          tim saat ini termasuk saldo kas, jumlah tugas aktif, dan aktivitas terbaru anggota
        </li>
        <li>
          <strong>Finance</strong> — submenu keuangan yang berisi:
          <ul>
            <li>
              <strong>Kas</strong> — pencatatan pemasukan dan pengeluaran tim secara detail dengan
              tanggal, keterangan, dan kategori
            </li>
            <li>
              <strong>Tagihan</strong> — daftar tagihan yang perlu dibayar beserta status
              pembayaran dan tenggat waktu
            </li>
            <li>
              <strong>Tagihan Berulang</strong> — pengelolaan tagihan rutin yang terjadi secara
              berkala seperti sewa, langganan, atau iuran
            </li>
          </ul>
        </li>
        <li>
          <strong>Produktivitas</strong> — submenu produktivitas yang berisi:
          <ul>
            <li>
              <strong>Tugas</strong> — papan kanban untuk mengelola tugas-tugas tim dengan status,
              prioritas, dan penanggung jawab
            </li>
            <li>
              <strong>Log Harian</strong> — catatan aktivitas harian anggota tim untuk pelaporan
              dan pemantauan kemajuan
            </li>
          </ul>
        </li>
        <li>
          <strong>Media</strong> — submenu media yang berisi:
          <ul>
            <li>
              <strong>Dokumen</strong> — penyimpanan dan pengelolaan dokumen penting tim seperti
              kontrak, proposal, atau laporan
            </li>
            <li>
              <strong>Galeri</strong> — galeri gambar dan file media lainnya yang dibagikan dalam
              tim
            </li>
          </ul>
        </li>
        <li>
          <strong>Pengaturan</strong> — submenu pengaturan yang berisi:
          <ul>
            <li>
              <strong>Profil</strong> — pengaturan profil pribadi termasuk nama, foto, dan
              informasi kontak
            </li>
            <li>
              <strong>Profil Tim</strong> — pengaturan detail tim termasuk nama, deskripsi, dan
              ikon tim
            </li>
            <li>
              <strong>Anggota Tim</strong> — manajemen anggota tim termasuk penambahan,
              penghapusan, dan perubahan peran
            </li>
          </ul>
        </li>
      </ul>

      <h3>Header</h3>

      <p>
        Header terletak di bagian atas halaman dan berisi elemen-elemen navigasi dan informasi
        penting:
      </p>

      <ul>
        <li>
          <strong>Tombol Hamburger</strong> — tombol toggle untuk membuka atau menutup sidebar
          navigasi, terutama berguna pada tampilan mobile di mana sidebar tersembunyi secara default
        </li>
        <li>
          <strong>Pencarian Global</strong> — fitur pencarian yang memungkinkan Anda mencari
          konten di seluruh aplikasi termasuk tugas, dokumen, anggota tim, atau transaksi keuangan
          (jika tersedia)
        </li>
        <li>
          <strong>Notifikasi Real-time</strong> — ikon lonceng yang menampilkan jumlah notifikasi
          baru yang belum dibaca. Klik untuk membuka panel notifikasi yang berisi daftar
          pemberitahuan terbaru dari tim
        </li>
        <li>
          <strong>Menu Profil User</strong> — dropdown menu yang menampilkan informasi profil
          singkat Anda dan akses ke opsi seperti edit profil, pengaturan akun, dan logout
        </li>
      </ul>

      <h3>Dashboard</h3>

      <p>
        Dashboard adalah halaman utama yang Anda lihat setelah login. Dashboard dirancang untuk
        memberikan gambaran komprehensif tentang kondisi tim secara sekilas:
      </p>

      <ul>
        <li>
          <strong>Kartu Statistik</strong> — beberapa kartu yang menampilkan metrik penting seperti
          saldo kas tim saat ini, total pemasukan bulan ini, total pengeluaran bulan ini, dan
          jumlah anggota tim yang aktif
        </li>
        <li>
          <strong>Daftar Tagihan Belum Dibayar</strong> — daftar tagihan yang masih menunggu
          pembayaran dengan informasi jatuh tempo, jumlah tagihan, dan siapa yang bertanggung
          jawab atas pembayaran
        </li>
        <li>
          <strong>Daftar Tugas Aktif</strong> — daftar tugas yang sedang berjalan atau belum
          selesai, diurutkan berdasarkan prioritas dan tenggat waktu. Menampilkan siapa yang
          menangani tugas dan kapan deadline-nya
        </li>
        <li>
          <strong>Akses Cepat</strong> — tombol shortcut untuk mengakses fitur-fitur utama yang
          sering digunakan seperti menambah transaksi kas, membuat tugas baru, atau mengunggah
          dokumen
        </li>
        <li>
          <strong>Log Harian Terbaru</strong> (untuk Team Leader) — ringkasan aktivitas harian
          anggota tim yang paling baru dicatat. Memungkinkan Team Leader memantau progres tanpa
          perlu membuka setiap profil anggota
        </li>
        <li>
          <strong>Tagihan Mendatang</strong> (untuk Team Leader) — daftar tagihan yang akan jatuh
          tempo dalam beberapa hari ke depan, membantu Team Leader melakukan perencanaan keuangan
          dan menghindari keterlambatan pembayaran
        </li>
      </ul>

      <h3>Notifikasi</h3>

      <p>
        TeamVora mendukung notifikasi real-time melalui teknologi SSE (Server-Sent Events) yang
        memastikan Anda selalu mendapat informasi terbaru tanpa perlu memuat ulang halaman:
      </p>

      <ul>
        <li>
          <strong>Notifikasi Tugas Baru</strong> — pemberitahuan ketika Team Leader menugaskan
          tugas baru kepada Anda. Notifikasi ini mencakup nama tugas, deskripsi singkat, dan
          tenggat waktu
        </li>
        <li>
          <strong>Notifikasi Tagihan Baru</strong> — pemberitahuan ketika tagihan baru dibuat atau
          ditugaskan kepada Anda untuk pembayaran
        </li>
        <li>
          <strong>Pembaruan Data Tim</strong> — notifikasi tentang perubahan informasi tim seperti
          penambahan anggota baru, perubahan peran, atau pembaruan pengaturan tim
        </li>
        <li>
          <strong>Notifikasi Log Harian</strong> — pemberitahuan ketika anggota tim mencatat log
          harian baru (untuk Team Leader)
        </li>
        <li>
          <strong>Notifikasi Komentar</strong> — pemberitahuan ketika seseorang mengomentari
          tugas, dokumen, atau log harian yang terkait dengan Anda
        </li>
      </ul>

      <p>
        Notifikasi akan muncul di header sebagai angka pada ikon lonceng. Klik ikon tersebut untuk
        melihat daftar lengkap notifikasi. Setiap notifikasi dapat ditandai sebagai sudah dibaca
        dengan mengkliknya atau menggunakan tombol{" "}
        <strong>Tandai Semua Sudah Dibaca</strong>.
      </p>

      <Callout variant="info">
        Notifikasi real-time bekerja selama Anda terhubung ke internet dan browser terbuka di tab
        TeamVora. Jika Anda membuka banyak tab, notifikasi hanya akan muncul di satu tab untuk
        menghindari duplikasi.
      </Callout>

      <h2>Tips Penggunaan Pertama Kali</h2>

      <p>
        Berikut beberapa tips dan rekomendasi untuk membantu Anda memulai penggunaan TeamVora
        secara optimal sejak pertama kali login:
      </p>

      <ul>
        <li>
          <strong>Lengkapi Profil Anda Terlebih Dahulu</strong> — sebelum mulai beraktivitas,
          lengkapi profil Anda dengan informasi lengkap termasuk nama lengkap, foto profil, nomor
          telepon, dan bio singkat. Profil yang lengkap memudahkan anggota tim lain mengenali Anda
          dan membangun kepercayaan dalam tim
        </li>
        <li>
          <strong>Jika Anda Team Leader, Buat Tim dan Undang Anggota</strong> — jika Anda adalah
          Team Leader, mulailah dengan membuat tim baru yang sudah dijelaskan di bagian sebelumnya.
          Setelah tim dibuat, undang anggota melalui email untuk mulai berkolaborasi. Pastikan
          untuk memberikan deskripsi tim yang jelas agar anggota memahami tujuan tim
        </li>
        <li>
          <strong>Jika Anda Member, Bergabung dengan Tim yang Sudah Ada</strong> — jika Anda
          diundang oleh Team Leader, ikuti langkah-langkah bergabung dengan tim yang sudah
          dijelaskan di bagian sebelumnya. Setelah bergabung, perkenalkan diri Anda di log harian
          atau melalui fitur komunikasi tim
        </li>
        <li>
          <strong>Mulai Mencatat Keuangan dengan Fitur Kas</strong> — mulailah mencatat setiap
          transaksi keuangan tim menggunakan fitur Kas. Catat pemasukan dari donasi, pendapatan,
          atau kontribusi anggota, serta pengeluaran untuk operasional tim. Pencatatan yang
          konsisten sejak awal akan memudahkan pelaporan keuangan di masa depan
        </li>
        <li>
          <strong>Buat Tugas Pertama Anda di Papan Kanban</strong> — manfaatkan fitur papan kanban
          untuk membuat tugas-tugas yang perlu dikerjakan. Buat tugas dengan judul yang jelas,
          deskripsi lengkap, prioritas yang sesuai, dan tenggat waktu yang realistis. Tugaskan
          tugas kepada anggota yang tepat untuk distribusi kerja yang merata
        </li>
        <li>
          <strong>Unggah Dokumen Penting ke Media</strong> — unggah dokumen-dokumen penting tim
          seperti kontrak kerja, proposal proyek, laporan keuangan, atau file desain ke folder
          Media. Organisasi dokumen yang baik sejak awal akan menghemat waktu pencarian di
          kemudian hari
        </li>
        <li>
          <strong>Jelajahi Semua Fitur</strong> — luangkan waktu untuk menjelajahi seluruh fitur
          yang tersedia di TeamVora. Buka setiap menu di sidebar, coba setiap submenu, dan
          familiarize diri dengan alur kerja masing-masing fitur. Semakin cepat Anda mengenal
          seluruh fitur, semakin efektif penggunaan platform ini
        </li>
      </ul>

      <Callout variant="info">
        <strong>Desain Responsif:</strong> TeamVora dirancang responsif dan dapat diakses dengan
        nyaman dari berbagai ukuran layar, mulai dari desktop, laptop, tablet, hingga perangkat
        mobile. Fitur sidebar navigasi akan otomatis berubah menjadi menu hamburger di layar yang
        lebih kecil untuk memaksimalkan ruang tampilan. Seluruh fitur utama tetap dapat diakses
        meskipun dari perangkat mobile, meskipun beberapa fitur kompleks mungkin lebih nyaman
        digunakan di layar yang lebih besar.
      </Callout>
    </>
  );
}
