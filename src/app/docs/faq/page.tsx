"use client";

import { Callout } from "@/components/docs/callout";

export default function FAQPage() {
  return (
    <div>
      <h1>FAQ (Pertanyaan yang Sering Ditanyakan)</h1>

      <h2>Umum</h2>

      <h3>Apa itu TeamVora?</h3>
      <p>
        TeamVora adalah platform kolaborasi tim all-in-one yang menyediakan
        fitur keuangan, produktivitas, media, dan blog dalam satu aplikasi.
        Dirancang untuk tim yang ingin mengelola semua aspek kerja dalam satu
        tempat, TeamVora memudahkan pengelolaan keuangan bersama, manajemen
        tugas, penyimpanan dokumen, dan publikasi konten.
      </p>

      <h3>Siapa yang bisa menggunakan TeamVora?</h3>
      <p>
        TeamVora bisa digunakan oleh tim dari berbagai ukuran, mulai dari tim
        kecil (2-5 orang) hingga tim besar. Setiap tim memiliki ketua (Team
        Leader) dan anggota (Member). Selain itu, ada role Super Admin yang
        mengelola seluruh platform.
      </p>

      <h3>Apakah TeamVora gratis?</h3>
      <p>
        Untuk informasi mengenai harga dan paket, silakan kunjungi halaman
        pricing di website resmi TeamVora. Platform ini menyediakan berbagai
        paket sesuai kebutuhan tim.
      </p>

      <h3>Apakah TeamVora bisa diakses dari mobile?</h3>
      <p>
        Ya, TeamVora dirancang responsif dan bisa diakses dari browser di
        perangkat mobile. Semua fitur tersedia tanpa perlu menginstal aplikasi
        tambahan.
      </p>

      <h3>Bagaimana cara menghubungi support?</h3>
      <p>Anda bisa menghubungi support melalui:</p>
      <ul>
        <li>Email: support@teamvora.web.id</li>
        <li>Website: https://teamvora.web.id</li>
        <li>Form kontak yang tersedia di halaman Bantuan</li>
      </ul>

      <hr />

      <h2>Akun &amp; Autentikasi</h2>

      <h3>Bagaimana cara mendaftar akun?</h3>
      <ol>
        <li>Buka halaman registrasi TeamVora</li>
        <li>Isi nama lengkap, alamat email, dan password</li>
        <li>Centang checkbox persetujuan syarat dan ketentuan</li>
        <li>Klik tombol <strong>Daftar</strong></li>
        <li>Buka email untuk verifikasi akun</li>
        <li>Klik link verifikasi untuk mengaktifkan akun</li>
      </ol>

      <Callout variant="info">
        Gunakan email aktif karena semua notifikasi dan verifikasi akan dikirim
        ke email Anda.
      </Callout>

      <h3>Lupa password, bagaimana cara reset?</h3>
      <ol>
        <li>Buka halaman login TeamVora</li>
        <li>Klik <strong>Lupa Password?</strong> di bawah form login</li>
        <li>Masukkan alamat email yang terdaftar</li>
        <li>Klik <strong>Kirim Link Reset</strong></li>
        <li>Buka email dan temukan link reset password</li>
        <li>Klik link tersebut dan buat password baru</li>
        <li>Login dengan password baru Anda</li>
      </ol>

      <h3>Bagaimana cara bergabung dengan tim?</h3>
      <p>Ada dua cara untuk bergabung dengan tim:</p>

      <p><strong>Cara 1: Melalui Undangan Email</strong></p>
      <ol>
        <li>Team Leader mengundang Anda via email</li>
        <li>Buka email undangan dari TeamVora</li>
        <li>Klik tombol <strong>Bergabung dengan Tim</strong></li>
        <li>Login jika belum login</li>
        <li>Anda akan otomatis masuk ke tim</li>
      </ol>

      <p><strong>Cara 2: Membuat Tim Baru</strong></p>
      <ol>
        <li>Login ke akun TeamVora</li>
        <li>Buka Pengaturan &gt; Profil Tim</li>
        <li>Klik <strong>Buat Tim Baru</strong></li>
        <li>Isi nama tim dan deskripsi</li>
        <li>Anda otomatis menjadi Team Leader</li>
      </ol>

      <h3>Bagaimana cara mengganti foto profil?</h3>
      <ol>
        <li>Login ke akun TeamVora</li>
        <li>Buka Pengaturan &gt; Profil</li>
        <li>Klik area foto profil</li>
        <li>Pilih gambar baru dari komputer</li>
        <li>Crop gambar jika diperlukan</li>
        <li>Klik <strong>Simpan</strong></li>
      </ol>

      <h3>Bagaimana cara mengganti password?</h3>
      <ol>
        <li>Login ke akun TeamVora</li>
        <li>Buka Pengaturan &gt; Profil</li>
        <li>Scroll ke bagian <strong>Ubah Password</strong></li>
        <li>Masukkan password saat ini</li>
        <li>Masukkan password baru (minimal 8 karakter)</li>
        <li>Konfirmasi password baru</li>
        <li>Klik <strong>Ubah Password</strong></li>
      </ol>

      <Callout variant="warning">
        Password baru harus minimal 8 karakter. Gunakan kombinasi huruf, angka,
        dan simbol untuk keamanan yang lebih baik.
      </Callout>

      <hr />

      <h2>Keuangan</h2>

      <h3>Apa itu Kas (Cash Book)?</h3>
      <p>
        Cash Book adalah fitur pencatatan keuangan tim yang memungkinkan Anda
        mencatat setiap transaksi masuk (in) dan keluar (out). Setiap transaksi
        bisa dilampiri bukti pembayaran untuk dokumentasi dan verifikasi.
      </p>

      <h3>Bagaimana cara mencatat transaksi?</h3>
      <ol>
        <li>Buka menu Finance &gt; Kas</li>
        <li>Klik <strong>Tambah Transaksi</strong></li>
        <li>Pilih jenis: Masuk (In) atau Keluar (Out)</li>
        <li>Isi judul transaksi (contoh: &quot;Transport ke Klien&quot;)</li>
        <li>Isi jumlah nominal</li>
        <li>Pilih tanggal transaksi</li>
        <li>Tambahkan keterangan (opsional)</li>
        <li>Unggah lampiran bukti (opsional)</li>
        <li>Klik <strong>Simpan</strong></li>
      </ol>

      <h3>Bagaimana cara membuat tagihan split?</h3>
      <ol>
        <li>Buka Finance &gt; Tagihan</li>
        <li>Klik <strong>Buat Tagihan Baru</strong></li>
        <li>Isi judul tagihan (contoh: &quot;Makan Siang Bersama&quot;)</li>
        <li>Isi total jumlah tagihan</li>
        <li>Atur tenggat waktu pembayaran</li>
        <li>
          Tambahkan item tagihan untuk setiap anggota:
          <ul>
            <li>Pilih anggota yang harus membayar</li>
            <li>Isi jumlah yang harus dibayarkan</li>
          </ul>
        </li>
        <li>Ulangi untuk setiap anggota</li>
        <li>Klik <strong>Simpan</strong></li>
      </ol>

      <h3>Apa itu tagihan berulang?</h3>
      <p>
        Tagihan berulang adalah tagihan yang dibuat otomatis secara periodik
        sesuai jadwal yang ditentukan. Cocok untuk pengeluaran rutin seperti
        langganan, sewa, atau gaji. Anda bisa mengatur frekuensi (harian,
        mingguan, bulanan, kuartalan, tahunan) dan tenggat waktu.
      </p>

      <h3>Bagaimana cara membayar tagihan?</h3>
      <ol>
        <li>Buka tagihan yang ditugaskan kepada Anda</li>
        <li>Klik tombol <strong>Bayar</strong></li>
        <li>Unggah bukti pembayaran (foto transfer/screenshot)</li>
        <li>Klik <strong>Kirim</strong></li>
        <li>Menunggu verifikasi dari pembuat tagihan</li>
        <li>Status berubah menjadi <strong>Paid</strong> setelah diverifikasi</li>
      </ol>

      <h3>Apa itu verifikasi tagihan?</h3>
      <p>
        Verifikasi tagihan adalah proses konfirmasi oleh pembuat tagihan bahwa
        pembayaran sudah diterima. Setelah anggota mengunggah bukti pembayaran,
        pembuat tagihan akan memverifikasi dan menandai item sebagai{" "}
        <strong>Paid</strong>.
      </p>

      <hr />

      <h2>Produktivitas</h2>

      <h3>Bagaimana cara menggunakan papan kanban tugas?</h3>
      <ol>
        <li>Buka menu Produktivitas &gt; Tugas</li>
        <li>
          Tugas ditampilkan dalam 3 kolom:
          <ul>
            <li><strong>To Do</strong>: tugas yang belum dikerjakan</li>
            <li><strong>Proses</strong>: tugas yang sedang dikerjakan</li>
            <li><strong>Selesai</strong>: tugas yang sudah selesai</li>
          </ul>
        </li>
        <li><strong>Drag &amp; drop</strong> tugas untuk mengubah status</li>
        <li>Klik tugas untuk melihat detail dan mengedit</li>
      </ol>

      <h3>Bagaimana cara membuat tugas baru?</h3>
      <ol>
        <li>Buka Produktivitas &gt; Tugas</li>
        <li>Klik <strong>Tambah Baru</strong></li>
        <li>Isi judul tugas</li>
        <li>Isi deskripsi (menggunakan editor rich text)</li>
        <li>Pilih penanggung jawab (assignee)</li>
        <li>Pilih prioritas: Rendah, Sedang, atau Tinggi</li>
        <li>Atur tenggat waktu (due date)</li>
        <li>Klik <strong>Simpan</strong></li>
      </ol>

      <h3>Apa itu Log Harian?</h3>
      <p>
        Log Harian adalah fitur pencatatan aktivitas harian anggota tim. Setiap
        anggota bisa membuat log tentang apa yang sudah dikerjakan hari ini,
        lengkap dengan lampiran dan format rich text. Team Leader bisa melihat
        seluruh log dari anggota tim.
      </p>

      <h3>Bagaimana cara membuat Log Harian?</h3>
      <ol>
        <li>Buka Produktivitas &gt; Log Harian</li>
        <li>Klik <strong>Buat Log Baru</strong></li>
        <li>Isi judul log (contoh: &quot;Aktivitas Hari Ini&quot;)</li>
        <li>Isi konten dengan detail pekerjaan yang dilakukan</li>
        <li>Gunakan editor rich text untuk formatting</li>
        <li>Unggah lampiran jika perlu</li>
        <li>Pilih tanggal log</li>
        <li>Klik <strong>Simpan</strong></li>
      </ol>

      <h3>Bagaimana cara export log harian?</h3>
      <ol>
        <li>Buka Log Harian</li>
        <li>Filter berdasarkan tanggal jika diperlukan</li>
        <li>Klik tombol <strong>Export</strong></li>
        <li>Pilih format: PDF</li>
        <li>File akan diunduh secara otomatis</li>
      </ol>

      <hr />

      <h2>Media</h2>

      <h3>Format file apa yang didukung?</h3>

      <p><strong>Dokumen:</strong></p>
      <p>PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, TXT, CSV</p>

      <p><strong>Galeri (Gambar):</strong></p>
      <p>JPG, JPEG, PNG, GIF, SVG, WebP</p>

      <h3>Berapa ukuran maksimal file?</h3>
      <p>Ukuran maksimal per file adalah <strong>10MB</strong>.</p>

      <h3>Bagaimana cara share file ke orang luar?</h3>
      <ol>
        <li>Buka Media &gt; Dokumen atau Galeri</li>
        <li>Temukan file yang ingin di-share</li>
        <li>Klik ikon <strong>Copy URL</strong></li>
        <li>URL akan otomatis disalin ke clipboard</li>
        <li>Bagikan URL tersebut</li>
      </ol>

      <Callout variant="warning">
        URL yang dibagikan bisa diakses oleh siapa saja yang memiliki link.
        Pastikan tidak ada data sensitif yang di-share secara publik.
      </Callout>

      <h3>Bagaimana cara menghapus file?</h3>
      <ol>
        <li>Buka Media &gt; Dokumen atau Galeri</li>
        <li>Temukan file yang ingin dihapus</li>
        <li>Klik ikon <strong>Hapus</strong></li>
        <li>Konfirmasi penghapusan</li>
        <li>File akan dihapus permanen</li>
      </ol>

      <hr />

      <h2>Blog</h2>

      <h3>Siapa yang bisa membuat artikel blog?</h3>
      <p>
        Hanya <strong>Super Admin</strong> dan <strong>Team Leader</strong> yang
        bisa membuat artikel blog. Anggota biasa (Member) tidak memiliki akses
        ke fitur blog.
      </p>

      <h3>Apa bedanya Draft, Published, dan Scheduled?</h3>
      <ul>
        <li>
          <strong>Draft</strong>: Artikel masih dalam proses dan tidak terlihat
          oleh publik
        </li>
        <li>
          <strong>Published</strong>: Artikel sudah dipublikasikan dan terlihat
          di halaman blog
        </li>
        <li>
          <strong>Scheduled</strong>: Artikel akan dipublikasikan otomatis sesuai
          tanggal dan waktu yang ditentukan
        </li>
      </ul>

      <h3>Bagaimana cara mempublikasikan artikel?</h3>
      <ol>
        <li>Buka halaman blog</li>
        <li>Klik artikel yang ingin dipublikasikan</li>
        <li>Ubah status dari <strong>Draft</strong> ke <strong>Published</strong></li>
        <li>Klik <strong>Simpan</strong></li>
        <li>Artikel akan langsung terlihat di halaman blog</li>
      </ol>

      <h3>Bagaimana cara menjadwalkan artikel?</h3>
      <ol>
        <li>Buka halaman blog</li>
        <li>Klik artikel yang ingin dijadwalkan</li>
        <li>Ubah status ke <strong>Scheduled</strong></li>
        <li>Atur tanggal dan waktu publikasi</li>
        <li>Klik <strong>Simpan</strong></li>
        <li>Artikel akan dipublikasikan otomatis sesuai jadwal</li>
      </ol>

      <hr />

      <h2>Pengaturan</h2>

      <h3>Bagaimana cara mengubah nama tim?</h3>
      <ol>
        <li>Login sebagai Team Leader</li>
        <li>Buka Pengaturan &gt; Profil Tim</li>
        <li>Klik edit pada bagian nama tim</li>
        <li>Masukkan nama baru</li>
        <li>Klik <strong>Simpan Perubahan</strong></li>
      </ol>

      <h3>Bagaimana cara mengundang anggota tim?</h3>
      <ol>
        <li>Login sebagai Team Leader</li>
        <li>Buka Pengaturan &gt; Anggota Tim</li>
        <li>Klik <strong>Undang Anggota</strong></li>
        <li>Masukkan alamat email anggota</li>
        <li>Klik <strong>Kirim Undangan</strong></li>
        <li>Anggota akan menerima email undangan</li>
      </ol>

      <h3>Berapa lama undangan berlaku?</h3>
      <p>
        Undangan berlaku selama <strong>7 hari</strong>. Jika belum diterima
        dalam waktu tersebut, Anda bisa mengirim ulang undangan baru.
      </p>

      <h3>Bagaimana cara menghapus anggota dari tim?</h3>
      <ol>
        <li>Login sebagai Team Leader</li>
        <li>Buka Pengaturan &gt; Anggota Tim</li>
        <li>Klik ikon <strong>Hapus</strong> pada anggota</li>
        <li>Konfirmasi penghapusan</li>
        <li>Anggota akan dihapus dari tim</li>
      </ol>

      <Callout variant="danger">
        Penghapusan anggota bersifat permanen. Anggota yang dihapus akan
        kehilangan akses ke semua data tim.
      </Callout>

      <hr />

      <h2>Troubleshooting</h2>

      <h3>Dashboard tidak menampilkan data</h3>
      <p>Pastikan Anda sudah:</p>
      <ol>
        <li>Login dengan akun yang benar</li>
        <li>Berada di tim yang benar</li>
        <li>Memiliki akses ke menu tersebut</li>
        <li>Koneksi internet stabil</li>
      </ol>
      <p>Jika masih bermasalah, hubungi Team Leader atau Super Admin.</p>

      <h3>Error saat upload file</h3>
      <p>Kemungkinan penyebab:</p>
      <ul>
        <li>Ukuran file melebihi batas (10MB)</li>
        <li>Format file tidak didukung</li>
        <li>Koneksi internet lambat</li>
        <li>Storage penuh</li>
      </ul>
      <p>Solusi:</p>
      <ul>
        <li>Kompres file sebelum upload</li>
        <li>Konversi ke format yang didukung</li>
        <li>Coba upload lagi dengan koneksi yang lebih baik</li>
      </ul>

      <h3>Tugas tidak tersimpan</h3>
      <p>Coba:</p>
      <ol>
        <li>Refresh halaman</li>
        <li>Periksa koneksi internet</li>
        <li>Pastikan semua field wajib diisi</li>
        <li>Jika masih bermasalah, coba logout dan login kembali</li>
      </ol>

      <h3>Notifikasi tidak muncul</h3>
      <p>Pastikan:</p>
      <ol>
        <li>Browser mengizinkan notifikasi</li>
        <li>Koneksi internet stabil</li>
        <li>SSE (Server-Sent Events) tidak diblokir</li>
      </ol>

      <h3>Tidak bisa login</h3>
      <ol>
        <li>Pastikan email dan password benar</li>
        <li>CekCaps Lock apakah aktif</li>
        <li>Reset password jika lupa</li>
        <li>Hubungi support jika akun terkunci</li>
      </ol>

      <hr />

      <h2>Form Kontak</h2>

      <h3>Bagaimana cara mengirim pesan melalui form kontak?</h3>
      <p>
        TeamVora menyediakan halaman kontak yang bisa diakses dari website publik. Form kontak
        memungkinkan Anda mengirim pesan, pertanyaan, atau masukan kepada tim TeamVora.
      </p>
      <ol>
        <li>Buka halaman Kontak di website TeamVora (https://teamvora.web.id/kontak)</li>
        <li>Isi kolom <strong>Nama Depan</strong> dan <strong>Nama Belakang</strong></li>
        <li>Isi kolom <strong>Email</strong> dengan alamat email aktif</li>
        <li>Isi kolom <strong>Perusahaan</strong> (opsional)</li>
        <li>Tuliskan pesan Anda di kolom <strong>Pesan</strong></li>
        <li>Klik tombol <strong>Kirim Pesan</strong></li>
      </ol>

      <Callout variant="info" title="Tentang Form Kontak">
        Pesan yang dikirim melalui form kontak akan diterima oleh tim admin TeamVora. Anda akan
        mendapat respons melalui email yang didaftarkan. Gunakan form ini untuk pertanyaan umum,
        permintaan fitur, atau laporan masalah.
      </Callout>

      <h3>Bagaimana cara mengakses halaman kontak?</h3>
      <p>
        Halaman kontak bisa diakses dari menu <strong>Bantuan</strong> di website publik TeamVora.
        Anda juga bisa langsung mengunjungi URL: https://teamvora.web.id/kontak. Tidak perlu
        login untuk mengakses halaman kontak.
      </p>

      <hr />

      <h2>Blog Publik</h2>

      <h3>Bagaimana cara membaca artikel blog TeamVora?</h3>
      <p>
        TeamVora memiliki halaman blog publik yang bisa diakses oleh siapa saja tanpa perlu login.
        Blog berisi artikel, berita, tutorial, dan pengumuman terbaru dari tim TeamVora.
      </p>
      <ol>
        <li>Buka halaman Blog di website TeamVora (https://teamvora.web.id/blog)</li>
        <li>Daftar artikel akan ditampilkan dalam format kartu dengan judul, excerpt, dan tanggal</li>
        <li>Klik pada artikel untuk membaca konten lengkap</li>
        <li>Gunakan pencarian atau filter untuk menemukan artikel tertentu</li>
      </ol>

      <Callout variant="info" title="Tentang Blog Publik">
        Hanya artikel dengan status <strong>Published</strong> yang terlihat di halaman blog publik.
        Artikel berstatus Draft atau Scheduled tidak akan ditampilkan. Blog publik bisa diakses
        oleh siapa saja tanpa autentikasi.
      </Callout>

      <hr />

      <h2>Hubungi Kami</h2>

      <p>Jika pertanyaan Anda tidak terjawab di sini, silakan:</p>

      <ul>
        <li>
          <strong>Email</strong>: support@teamvora.web.id
        </li>
        <li>
          <strong>Website</strong>: https://teamvora.web.id
        </li>
        <li>
          <strong>Form Kontak</strong>: Tersedia di halaman Bantuan
        </li>
      </ul>
    </div>
  );
}
