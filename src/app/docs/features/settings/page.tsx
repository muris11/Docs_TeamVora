"use client"

import { Callout } from "@/components/docs/callout"
import { Steps, Step } from "@/components/docs/steps"


export default function SettingsPage() {
  return (
    <>
      <h1>Fitur Pengaturan</h1>

      <p>Panduan mengelola profil pribadi dan pengaturan tim di TeamVora. Fitur ini mencakup pengelolaan profil anggota, profil tim, manajemen anggota, dan Media Picker untuk memilih gambar dari galeri tim.</p>

      <Callout variant="info" title="Tentang Pengaturan">
        Pengaturan dibagi menjadi beberapa bagian: <strong>Profil</strong> untuk pengaturan pribadi, <strong>Profil Tim</strong> untuk pengaturan identitas tim, dan <strong>Anggota Tim</strong> untuk manajemen keanggotaan. Beberapa pengaturan hanya bisa diakses oleh Team Leader atau Super Admin.
      </Callout>

      <hr />

      <h2>Profil</h2>

      <h3>Mengubah Profil</h3>

      <p>Setiap anggota dapat mengelola informasi profil pribadi mereka. Profil mencakup informasi dasar seperti nama, email, dan nomor telepon yang digunakan di seluruh sistem TeamVora.</p>

      <Steps>
        <Step number={1} title="Buka Halaman Profil">
          Navigasi ke <strong>Pengaturan → Profil</strong> dari sidebar atau menu pengaturan. Halaman profil akan menampilkan kartu informasi di sisi kiri dan form edit di sisi kanan.
        </Step>
        <Step number={2} title="Lihat Informasi Profil Saat Ini">
          Di sisi kiri halaman, Anda akan melihat kartu profil yang menampilkan:
          <ul>
            <li>Foto profil (avatar) saat ini</li>
            <li>Nama lengkap</li>
            <li>Alamat email</li>
            <li>Role akun (badge: Super Admin, Team Leader, atau Member)</li>
          </ul>
        </Step>
        <Step number={3} title="Ubah Informasi Profil">
          Di form sebelah kanan, ubah informasi yang ingin diperbarui:
          <ul>
            <li><strong>Nama Lengkap</strong> — nama tampilan Anda di seluruh sistem</li>
            <li><strong>Alamat Email</strong> — alamat email akun (pastikan email aktif untuk notifikasi)</li>
            <li><strong>Nomor Telepon</strong> — nomor telepon yang bisa dihubungi</li>
          </ul>
        </Step>
        <Step number={4} title="Unggah Foto Profil Baru (Opsional)">
          Klik pada area foto profil untuk mengunggah foto baru. Gunakan gambar dengan resolusi minimal 200x200 piksel untuk hasil terbaik. Format yang didukung: JPG, PNG.
        </Step>
        <Step number={5} title="Simpan Perubahan">
          Klik <strong>Simpan Perubahan</strong> untuk menyimpan pembaruan profil. Perubahan akan langsung terlihat di seluruh sistem.
        </Step>
      </Steps>

      <Callout variant="info" title="Role Akun">
        Role akun ditentukan oleh administrator dan tidak dapat diubah sendiri. Hubungi Team Leader jika ingin mengubah role Anda dari Member menjadi Team Leader, atau sebaliknya.
      </Callout>

      <figure className="my-8"><img src="/images/halaman-profil.png" alt="Halaman Pengaturan Profil" className="w-full rounded-xl border border-border/50" /><figcaption className="mt-3 text-center text-xs text-muted-foreground">Halaman Profil dengan kartu informasi dan form edit</figcaption></figure>

      <hr />

      <h3>Mengubah Password</h3>

      <p>Mengganti password secara berkala adalah praktik keamanan yang baik. Pastikan Anda menggunakan password yang kuat dan unik.</p>

      <Steps>
        <Step number={1} title="Buka Halaman Profil">
          Navigasi ke <strong>Pengaturan → Profil</strong>.
        </Step>
        <Step number={2} title="Scroll ke Bagian Ubah Password">
          Gulir ke bawah hingga menemukan bagian <strong>Ubah Password</strong> di halaman profil.
        </Step>
        <Step number={3} title="Masukkan Password Saat Ini">
          Masukkan password Anda yang masih berlaku saat ini untuk verifikasi keamanan.
        </Step>
        <Step number={4} title="Masukkan Password Baru">
          Ketik password baru yang kuat. Gunakan kombinasi huruf besar, huruf kecil, angka, dan simbol.
        </Step>
        <Step number={5} title="Konfirmasi Password Baru">
          Ketik ulang password baru di kolom konfirmasi untuk memastikan tidak ada kesalahan ketik.
        </Step>
        <Step number={6} title="Klik Ubah Password">
          Tekan tombol <strong>Ubah Password</strong> untuk menyimpan. Anda akan diminta login ulang dengan password baru.
        </Step>
      </Steps>

      <Callout variant="warning" title="Persyaratan Password">
        Password harus memenuhi kriteria keamanan berikut:
        <ul>
          <li>Minimal <strong>8 karakter</strong></li>
          <li>Mengandung setidaknya <strong>1 huruf besar</strong> (A-Z)</li>
          <li>Mengandung setidaknya <strong>1 huruf kecil</strong> (a-z)</li>
          <li>Mengandung setidaknya <strong>1 angka</strong> (0-9)</li>
          <li>Disarankan menggunakan <strong>simbol</strong> (!@#$%^&amp;*) untuk keamanan tambahan</li>
          <li><strong>Jangan</strong> menggunakan informasi pribadi seperti nama atau tanggal lahir</li>
        </ul>
      </Callout>

      <hr />

      <h2>Profil Tim</h2>

      <h3>Mengubah Informasi Tim</h3>

      <p>Profil Tim hanya dapat diakses dan diubah oleh <strong>Team Leader</strong>. Bagian ini mengatur identitas dan informasi publik tim.</p>

      <Steps>
        <Step number={1} title="Buka Halaman Profil Tim">
          Navigasi ke <strong>Pengaturan → Profil Tim</strong> dari sidebar. Halaman ini menampilkan informasi tim beserta logo.
        </Step>
        <Step number={2} title="Lihat Informasi Tim Saat Ini">
          Informasi yang ditampilkan meliputi:
          <ul>
            <li>Logo tim</li>
            <li>Nama tim</li>
            <li>Slug (identifier unik tim, digunakan di URL)</li>
            <li>Tanggal tim dibuat</li>
            <li>Nama Team Leader yang mengelola tim</li>
          </ul>
        </Step>
        <Step number={3} title="Ubah Informasi Tim">
          Edit informasi tim yang ingin diperbarui:
          <ul>
            <li><strong>Nama Tim</strong> — nama tim (minimal 2 karakter, maksimal 50 karakter)</li>
            <li><strong>Deskripsi Tim</strong> — deskripsi singkat tentang tim, visi, atau fokus kerja</li>
            <li><strong>Logo Tim</strong> — upload logo baru atau pilih dari Media Picker</li>
          </ul>
        </Step>
        <Step number={4} title="Simpan Perubahan">
          Klik <strong>Simpan Perubahan</strong> untuk menyimpan. Perubahan akan langsung terlihat di seluruh sistem.
        </Step>
      </Steps>

      <hr />

      <h3>Mengubah Logo Tim</h3>

      <p>Logo tim bisa ditambahkan atau diubah dengan dua cara:</p>

      <p><strong>Cara 1 — Upload Langsung:</strong></p>

      <ol>
        <li>Klik area logo tim atau tombol <strong>Upload Logo</strong></li>
        <li>Pilih file gambar dari komputer Anda</li>
        <li>Logo akan otomatis diunggah dan ditampilkan sebagai preview</li>
      </ol>

      <p><strong>Cara 2 — Media Picker:</strong></p>

      <ol>
        <li>Klik tombol <strong>Pilih dari Media</strong> atau ikon gallery</li>
        <li>Dialog Media Picker akan terbuka menampilkan semua gambar di galeri tim</li>
        <li>Klik gambar yang ingin dijadikan logo</li>
        <li>Logo akan terpilih dan ditampilkan sebagai preview</li>
      </ol>

      <Callout variant="tip" title="Tips Logo Tim">
        Gunakan gambar berformat PNG atau SVG dengan latar belakang transparan untuk hasil terbaik. Ukuran yang disarankan: <strong>512x512 piksel</strong>. Pastikan logo terlihat jelas baik dalam ukuran kecil maupun besar. Hindari teks terlalu kecil pada logo karena akan sulit dibaca saat ditampilkan dalam ukuran kecil.
      </Callout>

      <figure className="my-8"><img src="/images/profil-tim.png" alt="Halaman Pengaturan Profil Tim" className="w-full rounded-xl border border-border/50" /><figcaption className="mt-3 text-center text-xs text-muted-foreground">Halaman Profil Tim dengan logo dan informasi tim</figcaption></figure>

      <hr />

      <h2>Anggota Tim</h2>

      <h3>Melihat Daftar Anggota</h3>

      <p>Manajemen anggota tim hanya dapat diakses oleh <strong>Team Leader</strong>. Halaman ini menampilkan semua anggota yang tergabung dalam tim beserta informasi dan aksi yang tersedia.</p>

      <p><strong>Informasi yang Ditampilkan:</strong></p>

      <table>
        <thead>
          <tr>
            <th>Kolom</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Avatar</strong></td>
            <td>Foto profil anggota</td>
          </tr>
          <tr>
            <td><strong>Nama</strong></td>
            <td>Nama lengkap anggota</td>
          </tr>
          <tr>
            <td><strong>Email</strong></td>
            <td>Alamat email anggota</td>
          </tr>
          <tr>
            <td><strong>Role</strong></td>
            <td>Badge role (Super Admin, Team Leader, Member)</td>
          </tr>
          <tr>
            <td><strong>Aksi</strong></td>
            <td>Tombol edit dan hapus</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h3>Mengundang Anggota Baru</h3>

      <Steps>
        <Step number={1} title="Buka Halaman Anggota Tim">
          Navigasi ke <strong>Pengaturan → Anggota Tim</strong> dari sidebar. Daftar anggota akan ditampilkan.
        </Step>
        <Step number={2} title="Klik Undang Anggota">
          Tekan tombol <strong>Undang Anggota</strong> yang terletak di pojok kanan atas halaman.
        </Step>
        <Step number={3} title="Masukkan Email Anggota">
          Ketik alamat email anggota yang ingin diundang. Pastikan email sudah benar dan aktif.
        </Step>
        <Step number={4} title="Kirim Undangan">
          Klik <strong>Kirim Undangan</strong> untuk mengirim undangan. Anggota akan menerima email undangan dan bisa bergabung ke tim.
        </Step>
      </Steps>

      <Callout variant="info" title="Proses Undangan">
        Setelah undangan dikirim, anggota akan menerima email berisi tautan untuk bergabung ke tim. Anggota perlu membuat akun atau login terlebih dahulu sebelum bisa menerima undangan dan menjadi bagian dari tim.
      </Callout>

      <hr />

      <h3>Mengubah Peran Anggota</h3>

      <Steps>
        <Step number={1} title="Pilih Anggota">
          Di daftar anggota, klik ikon <strong>Edit</strong> atau nama anggota yang ingin diubah perannya.
        </Step>
        <Step number={2} title="Ubah Role">
          Pilih role baru dari dropdown yang tersedia:
          <ul>
            <li><strong>Team Leader</strong> — memberikan akses penuh ke pengelolaan tim</li>
            <li><strong>Member</strong> — akses terbatas sesuai permission yang diberikan</li>
          </ul>
        </Step>
        <Step number={3} title="Simpan Perubahan">
          Klik <strong>Simpan</strong> untuk menyimpan perubahan role. Perubahan akan langsung berlaku.
        </Step>
      </Steps>

      <Callout variant="warning" title="Hati-hati Mengubah Role">
        Mengubah role dari Team Leader ke Member akan menghilangkan akses pengelolaan tim dari anggota tersebut. Pastikan selalu ada minimal satu Team Leader yang aktif di tim.
      </Callout>

      <hr />

      <h3>Menghapus Anggota</h3>

      <Steps>
        <Step number={1} title="Pilih Anggota">
          Di daftar anggota, klik ikon <strong>Hapus</strong> pada anggota yang ingin dikeluarkan dari tim.
        </Step>
        <Step number={2} title="Konfirmasi Penghapusan">
          Konfirmasi bahwa Anda yakin ingin menghapus anggota. Anggota akan dikeluarkan dari tim secara permanen.
        </Step>
      </Steps>

      <Callout variant="danger" title="Pembatasan Penghapusan">
        <strong>Team Leader tidak dapat dihapus</strong> dari tim oleh anggota lain. Jika Anda ingin mengganti Team Leader, ubah role anggota lain menjadi Team Leader terlebih dahulu, baru kemudian role lama bisa diubah atau dihapus.
      </Callout>

      <hr />

      <h3>Permission per Role</h3>

      <p>Berikut adalah rincian hak akses untuk setiap role di TeamVora:</p>

      <table>
        <thead>
          <tr>
            <th>Fitur</th>
            <th>Super Admin</th>
            <th>Team Leader</th>
            <th>Member</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Edit Profil Sendiri</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Ubah Password Sendiri</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Kelola Profil Tim</td>
            <td>✅</td>
            <td>✅</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Kelola Anggota Tim</td>
            <td>✅</td>
            <td>✅</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Kelola Blog</td>
            <td>✅</td>
            <td>✅</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Verifikasi Pembayaran Tagihan</td>
            <td>✅</td>
            <td>✅</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>Buat Tugas</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Mengerjakan Tugas</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Buat Log Harian</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Catat Kas</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Bayar Tagihan</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Upload Dokumen &amp; Gambar</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
        </tbody>
      </table>

      <Callout variant="info" title="Manajemen Permission">
        Permission diatur berdasarkan role dan tidak bisa diustomisasi per anggota. Jika Anda membutuhkan akses khusus, hubungi Team Leader atau Super Admin untuk mendiskusikan kebutuhan Anda.
      </Callout>

      <figure className="my-8"><img src="/images/tabel-anggota-tim.png" alt="Tabel Anggota Tim" className="w-full rounded-xl border border-border/50" /><figcaption className="mt-3 text-center text-xs text-muted-foreground">Daftar anggota tim dengan role dan aksi yang tersedia</figcaption></figure>

      <hr />

      <h2>Media Picker</h2>

      <h3>Apa itu Media Picker</h3>

      <p>Media Picker adalah dialog untuk memilih gambar dari galeri media tim. Fitur ini digunakan di beberapa halaman untuk memilih gambar yang sudah ada di galeri tanpa perlu mengunggah ulang.</p>

      <p><strong>Halaman yang Menggunakan Media Picker:</strong></p>

      <table>
        <thead>
          <tr>
            <th>Halaman</th>
            <th>Kegunaan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Blog</strong></td>
            <td>Memilih gambar unggulan artikel</td>
          </tr>
          <tr>
            <td><strong>Profil Tim</strong></td>
            <td>Memilih logo tim</td>
          </tr>
          <tr>
            <td><strong>Pengaturan Admin</strong></td>
            <td>Memilih favicon, logo, dan gambar Open Graph (OG)</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h3>Cara Menggunakan Media Picker</h3>

      <Steps>
        <Step number={1} title="Klik Tombol Pilih">
          Klik tombol <strong>Pilih</strong> atau area input Media Picker di halaman yang membutuhkan gambar.
        </Step>
        <Step number={2} title="Jelajahi Galeri">
          Dialog galeri akan terbuka menampilkan semua gambar yang sudah diunggah ke galeri tim. Jelajahi gambar yang tersedia.
        </Step>
        <Step number={3} title="Pilih Gambar">
          Klik gambar yang ingin dipilih. Gambar akan ditandai sebagai terpilih.
        </Step>
        <Step number={4} title="Konfirmasi Pilihan">
          Klik <strong>Pilih</strong> atau <strong>OK</strong> untuk mengonfirmasi. URL gambar akan otomatis terisi di field yang tersedia.
        </Step>
      </Steps>

      <Callout variant="info" title="Galeri Media">
        Media Picker hanya menampilkan gambar dari galeri tim. Pastikan gambar sudah diunggah ke <strong>Media → Galeri</strong> sebelum menggunakan Media Picker. Jika galeri kosong, unggah gambar terlebih dahulu.
      </Callout>

      <hr />

      <h2>Tips dan Best Practice Pengaturan</h2>

      <Callout variant="tip" title="Tips Pengaturan Tim">
        <ul>
          <li><strong>Lengkapi profil sebelum menggunakan fitur lain</strong> — pastikan nama, email, dan nomor telepon sudah benar</li>
          <li><strong>Gunakan foto profil yang jelas</strong> — foto profil membantu anggota lain mengenali Anda</li>
          <li><strong>Atur nama tim yang deskriptif</strong> — nama tim yang jelas membantu identitas dan branding</li>
          <li><strong>Kelola anggota secara berkala</strong> — tambahkan anggota baru, hapus yang sudah tidak aktif</li>
          <li><strong>Tetapkan role dengan tepat</strong> — berikan role sesuai tanggung jawab masing-masing anggota</li>
          <li><strong>Gunakan logo tim yang profesional</strong> — logo membantu identitas visual tim di hadapan klien atau publik</li>
          <li><strong>Ganti password secara berkala</strong> — praktik keamanan untuk melindungi akun</li>
        </ul>
      </Callout>

      <h3>Ringkasan Permission per Role</h3>

      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Keterangan</th>
            <th>Utama</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Super Admin</strong></td>
            <td>Administrator platform</td>
            <td>Akses penuh ke semua fitur dan pengaturan</td>
          </tr>
          <tr>
            <td><strong>Team Leader</strong></td>
            <td>Pemimpin tim</td>
            <td>Mengelola anggota, profil tim, memverifikasi pembayaran, mengelola blog</td>
          </tr>
          <tr>
            <td><strong>Member</strong></td>
            <td>Anggota tim biasa</td>
            <td>Mengelola tugas pribadi, log harian, kas, membayar tagihan, upload file</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
