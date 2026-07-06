"use client"

import { Callout } from "@/components/docs/callout"
import { Steps, Step } from "@/components/docs/steps"


export default function BlogsPage() {
  return (
    <>
      <h1>Fitur Blog</h1>

      <p>Panduan membuat dan mengelola artikel blog di TeamVora. Fitur ini memungkinkan tim mempublikasikan artikel, berita, atau pengumuman kepada publik. Hanya <strong>Super Admin</strong> dan <strong>Team Leader</strong> yang memiliki akses untuk membuat, mengedit, dan menghapus artikel blog.</p>

      <Callout variant="warning" title="Akses Terbatas">
        Fitur Blog hanya tersedia untuk <strong>Team Leader</strong> dan <strong>Super Admin</strong>. Anggota biasa (Member) tidak memiliki akses ke halaman ini. Jika Anda adalah anggota dan ingin membuat artikel, hubungi Team Leader untuk mendapatkan akses atau meminta pembuatan artikel.
      </Callout>

      <hr />

      <h2>Membuat Artikel</h2>

      <h3>Siapa yang Bisa Membuat Artikel</h3>

      <p>Hanya dua role yang memiliki akses untuk membuat artikel blog:</p>

      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Akses</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Super Admin</strong></td>
            <td>Penuh</td>
            <td>Bisa membuat, mengedit, menghapus, dan mempublikasikan artikel dari semua tim</td>
          </tr>
          <tr>
            <td><strong>Team Leader</strong></td>
            <td>Penuh untuk tim sendiri</td>
            <td>Bisa membuat, mengedit, menghapus, dan mempublikasikan artikel untuk timnya</td>
          </tr>
          <tr>
            <td><strong>Member</strong></td>
            <td>Tidak ada akses</td>
            <td>Tidak bisa mengakses halaman blog sama sekali</td>
          </tr>
        </tbody>
      </table>

      <figure className="my-8"><img src="/images/editor-blog.png" alt="Editor Blog" className="w-full rounded-xl border border-border/50" /><figcaption className="mt-3 text-center text-xs text-muted-foreground">Form pembuatan artikel blog dengan editor rich text</figcaption></figure>

      <hr />

      <h3>Langkah Membuat Artikel</h3>

      <Steps>
        <Step number={1} title="Buka Halaman Blog">
          Navigasi ke menu <strong>Blog → Kelola Blog</strong> (untuk Team Leader) atau <strong>Kelola Blog</strong> dari dashboard (untuk Super Admin). Halaman daftar artikel akan ditampilkan.
        </Step>
        <Step number={2} title="Klik Buat Artikel Baru">
          Tekan tombol <strong>Buat Artikel Baru</strong> atau <strong>Tambah Artikel</strong>. Formulir pembuatan artikel akan terbuka dengan tata letak dua kolom.
        </Step>
        <Step number={3} title="Isi Judul Artikel">
          Masukkan judul artikel yang menarik dan deskriptif. Judul adalah hal pertama yang dilihat pembaca, pastikan judul cukup informatif namun tidak terlalu panjang. Disarankan maksimal 65 karakter untuk tampilan optimal.
        </Step>
        <Step number={4} title="Isi Ringkasan Artikel (Opsional)">
          Tuliskan ringkasan singkat tentang isi artikel. Ringkasan ini ditampilkan di daftar artikel dan membantu pembaca memutuskan apakah artikel layak dibaca. Gunakan 1-2 kalimat yang padat dan menarik.
        </Step>
        <Step number={5} title="Isi Konten Artikel">
          Gunakan editor rich text untuk menulis isi artikel. Editor ini mendukung berbagai format untuk membuat artikel yang profesional dan mudah dibaca.
        </Step>
        <Step number={6} title="Tambahkan Gambar Unggulan (Opsional)">
          Pilih gambar unggulan (featured image) untuk artikel. Gambar ini akan ditampilkan di daftar artikel dan di bagian atas artikel saat dibaca. Anda bisa upload langsung dari komputer atau memilih dari Media Gallery tim.
        </Step>
        <Step number={7} title="Pilih Status Artikel">
          Tentukan status artikel sesuai kebutuhan:
          <ul>
            <li><strong>Draft</strong> — artikel masih dalam proses pengerjaan, belum terlihat publik</li>
            <li><strong>Published</strong> — artikel langsung dipublikasikan dan terlihat oleh publik</li>
            <li><strong>Scheduled</strong> — artikel akan dipublikasikan secara otomatis pada waktu yang ditentukan</li>
          </ul>
        </Step>
        <Step number={8} title="Atur Jadwal Publikasi (Jika Scheduled)">
          Jika memilih status <strong>Scheduled</strong>, field tambahan <strong>Tanggal Publikasi</strong> akan muncul. Tentukan tanggal dan waktu kapan artikel harus dipublikasikan secara otomatis.
        </Step>
        <Step number={9} title="Simpan atau Publikasikan">
          Klik <strong>Simpan</strong> untuk menyimpan sebagai Draft, atau klik <strong>Publikasikan</strong> untuk langsung mempublikasikan artikel.
        </Step>
      </Steps>

      <hr />

      <h3>Editor Rich Text</h3>

      <p>Editor rich text menyediakan berbagai fitur formatting untuk membuat artikel yang profesional:</p>

      <p><strong>Format Teks:</strong></p>

      <table>
        <thead>
          <tr>
            <th>Fitur</th>
            <th>Keterangan</th>
            <th>Contoh Penggunaan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Bold</strong></td>
            <td>Teks tebal untuk penekanan</td>
            <td>Kata kunci, istilah penting</td>
          </tr>
          <tr>
            <td><em>Italic</em></td>
            <td>Teks miring untuk penekanan halus</td>
            <td>Judul karya, istilah asing</td>
          </tr>
          <tr>
            <td>Underline</td>
            <td>Teks bergaris bawah</td>
            <td>Penting sekali</td>
          </tr>
          <tr>
            <td>Strikethrough</td>
            <td>Teks coret untuk koreksi</td>
            <td>Informasi yang sudah tidak berlaku</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Struktur Dokumen:</strong></p>

      <table>
        <thead>
          <tr>
            <th>Fitur</th>
            <th>Keterangan</th>
            <th>Contoh Penggunaan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Heading (H1-H6)</td>
            <td>Judul dan sub-judul berbagai level</td>
            <td>Membagi artikel menjadi bagian-bagian</td>
          </tr>
          <tr>
            <td>Bullet List</td>
            <td>List tanpa nomor</td>
            <td>Poin-poin utama, daftar fitur</td>
          </tr>
          <tr>
            <td>Numbered List</td>
            <td>List berurutan</td>
            <td>Langkah-langkah, tutorial</td>
          </tr>
          <tr>
            <td>Blockquote</td>
            <td>Kutipan</td>
            <td>Kutipan dari sumber lain</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Elemen Tambahan:</strong></p>

      <table>
        <thead>
          <tr>
            <th>Fitur</th>
            <th>Keterangan</th>
            <th>Contoh Penggunaan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Link</td>
            <td>Sisipkan tautan ke halaman lain</td>
            <td>Sumber referensi, tautan terkait</td>
          </tr>
          <tr>
            <td>Image</td>
            <td>Sisipkan gambar dalam artikel</td>
            <td>Ilustrasi, screenshot</td>
          </tr>
          <tr>
            <td>Code Block</td>
            <td>Blok kode</td>
            <td>Contoh kode program</td>
          </tr>
          <tr>
            <td>Alignment</td>
            <td>Rata kiri, tengah, kanan, justify</td>
            <td>Penyesuaian tata letak teks</td>
          </tr>
        </tbody>
      </table>

      <Callout variant="info" title="Tips Menulis Artikel">
        Gunakan heading (H2, H3) untuk membagi artikel menjadi bagian-bagian yang terstruktur. Ini tidak hanya memudahkan pembaca tetapi juga membantu SEO agar artikel lebih mudah ditemukan di mesin pencari.
      </Callout>

      <hr />

      <h3>Menambahkan Gambar Unggulan</h3>

      <p>Gambar unggulan adalah gambar utama yang mewakili artikel. Ada dua cara untuk menambahkannya:</p>

      <p><strong>Cara 1 — Upload Langsung:</strong></p>

      <ol>
        <li>Klik area <strong>Gambar Unggulan</strong> di form artikel</li>
        <li>Pilih file gambar dari komputer Anda</li>
        <li>Gambar akan otomatis diunggah dan ditampilkan sebagai preview</li>
      </ol>

      <p><strong>Cara 2 — Media Picker:</strong></p>

      <ol>
        <li>Klik tombol <strong>Pilih dari Media</strong> atau ikon gallery</li>
        <li>Dialog Media Picker akan terbuka menampilkan semua gambar di galeri tim</li>
        <li>Klik gambar yang ingin dipilih</li>
        <li>Gambar akan terpilih dan ditampilkan sebagai preview</li>
      </ol>

      <Callout variant="tip" title="Tips Gambar Unggulan">
        Gunakan gambar dengan resolusi minimal 1200x630 piksel untuk gambar unggulan. Format PNG atau JPG dengan kualitas tinggi direkomendasikan. Hindari gambar yang terlalu ramai karena gambar unggulan biasanya ditampilkan dalam ukuran kecil di daftar artikel.
      </Callout>

      <hr />

      <h2>Mengelola Artikel</h2>

      <h3>Melihat Daftar Artikel</h3>

      <p>Halaman Blog menampilkan semua artikel yang sudah dibuat dalam format daftar. Informasi yang ditampilkan meliputi:</p>

      <table>
        <thead>
          <tr>
            <th>Informasi</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Judul Artikel</strong></td>
            <td>Judul lengkap artikel</td>
          </tr>
          <tr>
            <td><strong>Status</strong></td>
            <td>Draft, Published, atau Scheduled</td>
          </tr>
          <tr>
            <td><strong>Penulis</strong></td>
            <td>Nama anggota yang membuat artikel</td>
          </tr>
          <tr>
            <td><strong>Tanggal Dibuat</strong></td>
            <td>Kapan artikel pertama kali dibuat</td>
          </tr>
          <tr>
            <td><strong>Terakhir Diperbarui</strong></td>
            <td>Kapan artikel terakhir kali diubah</td>
          </tr>
          <tr>
            <td><strong>Ringkasan</strong></td>
            <td>Cuplikan singkat isi artikel</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h3>Filter dan Pencarian</h3>

      <p>Gunakan fitur filter untuk mempersempit daftar artikel:</p>

      <ul>
        <li><strong>Filter Status</strong> — tampilkan hanya artikel dengan status tertentu (Draft, Published, atau Scheduled)</li>
        <li><strong>Pencarian</strong> — cari artikel berdasarkan judul atau konten</li>
      </ul>

      <hr />

      <h3>Mengedit Artikel</h3>

      <Steps>
        <Step number={1} title="Buka Daftar Artikel">
          Navigasi ke halaman Blog dan cari artikel yang ingin diedit. Gunakan filter atau pencarian jika diperlukan.
        </Step>
        <Step number={2} title="Klik Artikel yang Ingin Diedit">
          Klik pada artikel dari daftar. Formulir edit artikel akan terbuka dengan data yang sudah ada.
        </Step>
        <Step number={3} title="Ubah Konten atau Pengaturan">
          Ubah konten, judul, ringkasan, status, atau gambar unggulan sesuai kebutuhan. Anda bisa mengubah salah satu atau beberapa bagian sekaligus.
        </Step>
        <Step number={4} title="Simpan Perubahan">
          Klik <strong>Simpan</strong> untuk menyimpan perubahan. Perubahan akan langsung terlihat tergantung status artikel.
        </Step>
      </Steps>

      <hr />

      <h3>Menghapus Artikel</h3>

      <Steps>
        <Step number={1} title="Buka Daftar Artikel">
          Navigasi ke halaman Blog dan cari artikel yang ingin dihapus.
        </Step>
        <Step number={2} title="Klik Hapus">
          Klik ikon <strong>Hapus</strong> atau tombol <strong>Trash</strong> pada artikel yang ingin dihapus.
        </Step>
        <Step number={3} title="Konfirmasi Penghapusan">
          Konfirmasi bahwa Anda yakin ingin menghapus artikel. Penghapusan bersifat permanen.
        </Step>
      </Steps>

      <Callout variant="danger" title="Peringatan Penghapusan">
        Penghapusan artikel bersifat permanen dan tidak dapat dibatalkan. Pastikan Anda sudah yakin sebelum menghapus. Jika ragu, ubah status artikel menjadi <strong>Draft</strong> terlebih dahulu sebagai cadangan.
      </Callout>

      <hr />

      <h3>Status Blog</h3>

      <p>Artikel memiliki tiga status yang menunjukkan ketersediaan artikel:</p>

      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Keterangan</th>
            <th>Visibilitas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Draft</strong></td>
            <td>Artikel masih dalam proses pengerjaan</td>
            <td>Hanya terlihat oleh penulis dan admin</td>
          </tr>
          <tr>
            <td><strong>Published</strong></td>
            <td>Artikel sudah dipublikasikan</td>
            <td>Terlihat oleh publik di halaman blog</td>
          </tr>
          <tr>
            <td><strong>Scheduled</strong></td>
            <td>Artikel akan dipublikasikan otomatis sesuai jadwal</td>
            <td>Belum terlihat publik, akan muncul saat jadwal tiba</td>
          </tr>
        </tbody>
      </table>

      <Callout variant="info" title="Artikel Terjadwal">
        Ketika memilih status <strong>Scheduled</strong>, artikel tidak akan terlihat oleh publik hingga waktu publikasi yang ditentukan tiba. Sistem akan secara otomatis mengubah status dari Scheduled menjadi Published pada tanggal dan waktu yang sudah diatur. Anda bisa mengedit atau membatalkan jadwal kapan saja selama artikel masih berstatus Scheduled.
      </Callout>

      <hr />

      <h3>Memublikasikan Artikel</h3>

      <p>Artikel dapat dipublikasikan dengan dua cara:</p>

      <p><strong>Publikasi Langsung:</strong></p>

      <ol>
        <li>Buka artikel yang sudah final</li>
        <li>Ubah status dari <strong>Draft</strong> ke <strong>Published</strong></li>
        <li>Klik <strong>Simpan</strong> — artikel langsung terlihat oleh publik</li>
      </ol>

      <p><strong>Publikasi Terjadwal:</strong></p>

      <ol>
        <li>Buka artikel yang sudah final</li>
        <li>Ubah status ke <strong>Scheduled</strong></li>
        <li>Atur tanggal dan waktu publikasi</li>
        <li>Klik <strong>Simpan</strong> — artikel akan dipublikasikan otomatis sesuai jadwal</li>
      </ol>

      <figure className="my-8"><img src="/images/daftar-artikel-blog.png" alt="Daftar Artikel Blog" className="w-full rounded-xl border border-border/50" /><figcaption className="mt-3 text-center text-xs text-muted-foreground">Daftar artikel dengan indikator status dan aksi</figcaption></figure>

      <hr />

      <h2>Tips dan Best Practice Blog</h2>

      <Callout variant="tip" title="Tips Blogging">
        <ul>
          <li><strong>Tulis ringkasan yang menarik</strong> — ringkasan muncul di daftar artikel dan mempengaruhi minat pembaca untuk membuka artikel</li>
          <li><strong>Gunakan gambar unggulan</strong> — artikel dengan gambar lebih menarik perhatian dan memiliki tingkat klik lebih tinggi</li>
          <li><strong>Simpan sebagai Draft dulu</strong> — sebelum dipublikasikan, pastikan konten sudah final dan tidak ada kesalahan</li>
          <li><strong>Gunakan Scheduled untuk konsistensi</strong> — jadwalkan artikel agar rutin dipublikasikan sesuai content calendar</li>
          <li><strong>Manfaatkan Media Picker</strong> — gunakan gambar dari galeri tim untuk konsistensi visual antar artikel</li>
          <li><strong>Gunakan heading yang terstruktur</strong> — H2 untuk bagian utama, H3 untuk sub-bagian</li>
          <li><strong>Tulis judul yang SEO-friendly</strong> — judul yang mengandung kata kunci membantu artikel lebih mudah ditemukan</li>
        </ul>
      </Callout>

      <h3>Ringkasan Status Blog</h3>

      <table>
        <thead>
          <tr>
            <th>Kode</th>
            <th>Label</th>
            <th>Keterangan</th>
            <th>Visibilitas Publik</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>draft</code></td>
            <td>Draft</td>
            <td>Artikel belum siap publikasi</td>
            <td>Tidak terlihat</td>
          </tr>
          <tr>
            <td><code>published</code></td>
            <td>Published</td>
            <td>Artikel sudah terlihat publik</td>
            <td>Terlihat</td>
          </tr>
          <tr>
            <td><code>scheduled</code></td>
            <td>Scheduled</td>
            <td>Menunggu waktu publikasi</td>
            <td>Tidak terlihat (sampai jadwal tiba)</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Blog Publik</h2>

      <p>Selain halaman manajemen blog, TeamVora juga menyediakan halaman blog publik yang bisa diakses oleh siapa saja tanpa perlu login. Blog publik menampilkan artikel yang sudah dipublikasikan oleh seluruh tim di platform.</p>

      <h3>Mengakses Blog Publik</h3>
      <Steps>
        <Step number={1} title="Buka Halaman Blog Publik">
          Kunjungi halaman blog di website TeamVora: <strong>https://teamvora.web.id/blog</strong>. Halaman ini bisa diakses oleh siapa saja tanpa autentikasi.
        </Step>
        <Step number={2} title="Jelajahi Daftar Artikel">
          Semua artikel berstatus <strong>Published</strong> akan ditampilkan dalam format kartu. Setiap kartu menampilkan judul, excerpt singkat, tanggal publikasi, dan gambar unggulan (jika ada).
        </Step>
        <Step number={3} title="Baca Artikel Lengkap">
          Klik pada kartu artikel untuk membuka halaman detail artikel. Di sini Anda bisa membaca konten lengkap, melihat informasi penulis, dan membagikan artikel.
        </Step>
        <Step number={4} title="Cari Artikel">
          Gunakan fitur pencarian untuk menemukan artikel berdasarkan judul atau kata kunci tertentu.
        </Step>
      </Steps>

      <Callout variant="info" title="Tentang Blog Publik">
        Hanya artikel dengan status <strong>Published</strong> yang terlihat di halaman blog publik. Artikel berstatus Draft atau Scheduled tidak akan ditampilkan. Artikel akan otomatis muncul di blog publik setelah dipublikasikan.
      </Callout>

      <h3>Bagi Penulis Blog</h3>
      <p>Jika Anda adalah Team Leader yang membuat artikel, pastikan untuk:</p>
      <ul>
        <li><strong>Gunakan judul yang menarik</strong> — judul adalah hal pertama yang dilihat pembaca</li>
        <li><strong>Tambahkan excerpt</strong> — ringkasan singkat yang muncul di daftar artikel</li>
        <li><strong>Unggah gambar unggulan</strong> — gambar yang menarik meningkatkan jumlah klik</li>
        <li><strong>Review sebelum publish</strong> — pastikan konten sudah benar dan sesuai standar</li>
      </ul>
    </>
  )
}
