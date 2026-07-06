"use client"

import { Callout } from "@/components/docs/callout"
import { Steps, Step } from "@/components/docs/steps"


export default function FinancePage() {
  return (
    <>
      <h1>Fitur Finance</h1>

      <p>Panduan lengkap mengelola keuangan tim menggunakan fitur Finance di TeamVora. Fitur ini terdiri dari tiga modul utama: <strong>Kas (Cash Book)</strong> untuk pencatatan transaksi, <strong>Tagihan (Split Bills)</strong> untuk pembagian biaya antar anggota, dan <strong>Tagihan Berulang (Recurring Bills)</strong> untuk pengeluaran rutin.</p>

      <Callout variant="info" title="Tentang Fitur Finance">
        Fitur Finance membantu tim mengelola keuangan secara transparan. Setiap transaksi tercatat otomatis, dan anggota bisa melihat ringkasan saldo kapan saja. Fitur ini mendukung mata uang Rupiah (IDR).
      </Callout>

      <hr />

      <h2>Kas (Cash Book)</h2>

      <h3>Apa itu Kas</h3>

      <p>Cash Book adalah fitur pencatatan keuangan tim yang memungkinkan Anda mencatat setiap transaksi masuk (in) dan keluar (out). Setiap transaksi bisa dilampiri bukti pembayaran untuk dokumentasi dan audit di masa depan. Semua anggota tim dapat membuat catatan kas, namun hanya pemilik catatan yang dapat mengedit atau menghapusnya.</p>

      <p>Fitur Kas menyediakan ringkasan otomatis yang mencakup total pemasukan, total pengeluaran, dan saldo akhir. Dengan demikian, Anda selalu mengetahui kondisi keuangan tim secara real-time tanpa perlu menghitung manual.</p>

      <figure className="my-8"><img src="/images/halaman-kas.png" alt="Halaman Kas" className="w-full rounded-xl border border-border/50" /><figcaption className="mt-3 text-center text-xs text-muted-foreground">Tampilan halaman Kas dengan daftar transaksi dan ringkasan saldo</figcaption></figure>

      <hr />

      <h3>Membuat Transaksi Baru</h3>

      <Steps>
        <Step number={1} title="Buka Menu Kas">
          Navigasi ke menu <strong>Finance → Kas</strong> dari sidebar atau navigasi utama. Halaman Kas akan menampilkan daftar transaksi yang sudah ada beserta ringkasan saldo di bagian atas.
        </Step>
        <Step number={2} title="Klik Tambah Transaksi">
          Tekan tombol <strong>Tambah Transaksi</strong> yang terletak di pojok kanan atas halaman Kas. Formulir pembuatan transaksi baru akan terbuka.
        </Step>
        <Step number={3} title="Pilih Jenis Transaksi">
          Tentukan apakah transaksi ini merupakan uang masuk atau keluar:
          <ul>
            <li><strong>Masuk (In)</strong> — untuk mencatat uang yang diterima tim, seperti donasi, pembayaran dari klien, atau reimbursement</li>
            <li><strong>Keluar (Out)</strong> — untuk mencatat uang yang dikeluarkan tim, seperti pembelian barang, biaya operasional, atau transportasi</li>
          </ul>
        </Step>
        <Step number={4} title="Isi Judul Transaksi">
          Beri nama judul yang jelas dan deskriptif untuk transaksi ini. Contoh: &quot;Pembelian ATK Kantor&quot;, &quot;Donasi dari PT Maju&quot;, &quot;Biaya Transportasi Acara&quot;. Judul yang jelas memudahkan pencarian di kemudian hari.
        </Step>
        <Step number={5} title="Isi Jumlah Nominal">
          Masukkan jumlah nominal transaksi dalam Rupiah (IDR). Pastikan angka yang dimasukkan sudah benar karena nominal akan mempengaruhi perhitungan saldo secara otomatis.
        </Step>
        <Step number={6} title="Pilih Tanggal Transaksi">
          Tentukan tanggal kapan transaksi ini terjadi. Tanggal bisa berbeda dari tanggal saat Anda membuat catatan, misalnya untuk mencatat transaksi yang sudah terjadi beberapa hari lalu.
        </Step>
        <Step number={7} title="Tambahkan Keterangan (Opsional)">
          Isi keterangan tambahan untuk menjelaskan detail transaksi. Keterangan ini bersifat opsional tetapi sangat direkomendasikan untuk memudahkan audit dan pencarian di kemudian hari.
        </Step>
        <Step number={8} title="Unggah Lampiran Bukti (Opsional)">
          Lampirkan bukti pembayaran seperti struk, screenshot transfer, atau dokumen pendukung lainnya. Format yang didukung meliputi gambar (JPG, PNG) dan PDF. Lampiran ini berguna sebagai bukti transaksi untuk audit.
        </Step>
        <Step number={9} title="Simpan Transaksi">
          Klik tombol <strong>Simpan</strong> untuk menyimpan transaksi. Transaksi baru akan langsung muncul di daftar transaksi dan ringkasan saldo akan diperbarui secara otomatis.
        </Step>
      </Steps>

      <hr />

      <h3>Melihat Riwayat Transaksi</h3>

      <p>Halaman Kas menampilkan ringkasan keuangan secara otomatis di bagian atas halaman:</p>

      <table>
        <thead>
          <tr>
            <th>Komponen</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Total Masuk</strong></td>
            <td>Jumlah seluruh transaksi masuk yang sudah dicatat</td>
          </tr>
          <tr>
            <td><strong>Total Keluar</strong></td>
            <td>Jumlah seluruh transaksi keluar yang sudah dicatat</td>
          </tr>
          <tr>
            <td><strong>Saldo</strong></td>
            <td>Selisih antara total masuk dan total keluar</td>
          </tr>
        </tbody>
      </table>

      <Callout variant="info" title="Ringkasan Saldo">
        Ringkasan saldo diperbarui secara otomatis setiap kali ada transaksi baru, edit, atau hapus. Anda tidak perlu menghitung manual.
      </Callout>

      <p><strong>Filter dan Pencarian:</strong></p>

      <ul>
        <li><strong>Filter Jenis</strong> — tampilkan hanya transaksi masuk atau keluar saja</li>
        <li><strong>Filter Tanggal</strong> — pilih rentang tanggal untuk melihat transaksi periode tertentu</li>
        <li><strong>Pencarian</strong> — ketik kata kunci pada kolom pencarian untuk mencari transaksi berdasarkan judul atau keterangan</li>
      </ul>

      <hr />

      <h3>Mengedit dan Menghapus Transaksi</h3>

      <p>Anda hanya bisa mengedit atau menghapus transaksi yang Anda buat sendiri. Berikut langkah-langkahnya:</p>

      <Steps>
        <Step number={1} title="Buka Detail Transaksi">
          Klik pada transaksi yang ingin diubah dari daftar transaksi. Detail transaksi akan terbuka.
        </Step>
        <Step number={2} title="Edit atau Hapus">
          <ul>
            <li>Untuk <strong>mengedit</strong>: ubah field yang diperlukan (judul, nominal, tanggal, dll), lalu klik <strong>Simpan Perubahan</strong></li>
            <li>Untuk <strong>menghapus</strong>: klik tombol <strong>Hapus</strong>, lalu konfirmasi penghapusan</li>
          </ul>
        </Step>
      </Steps>

      <Callout variant="warning" title="Perhatikan">
        Perubahan pada transaksi akan mempengaruhi ringkasan saldo secara otomatis. Pastikan data sudah benar sebelum menyimpan perubahan.
      </Callout>

      <hr />

      <h3>Riwayat Aktivitas Kas</h3>

      <p>Setiap transaksi kas memiliki riwayat aktivitas yang mencatat semua perubahan yang pernah terjadi pada transaksi tersebut. Fitur ini berguna untuk audit dan pelacakan siapa yang melakukan perubahan.</p>

      <Steps>
        <Step number={1} title="Buka Detail Transaksi">
          Klik pada transaksi yang ingin Anda lihat riwayatnya dari daftar transaksi.
        </Step>
        <Step number={2} title="Akses Riwayat Aktivitas">
          Di halaman detail transaksi, cari bagian <strong>Riwayat Aktivitas</strong> atau <strong>Activity Log</strong>. Bagian ini menampilkan semua perubahan yang pernah terjadi pada transaksi.
        </Step>
        <Step number={3} title="Lihat Detail Perubahan">
          Setiap entri riwayat menampilkan:
          <ul>
            <li><strong>Siapa</strong> — nama anggota yang melakukan perubahan</li>
            <li><strong>Kapan</strong> — tanggal dan waktu perubahan terjadi</li>
            <li><strong>Apa yang berubah</strong> — field apa saja yang diubah beserta nilai lama dan baru</li>
          </ul>
        </Step>
      </Steps>

      <Callout variant="info" title="Tentang Audit Trail">
        Riwayat aktivitas menggunakan sistem logging otomatis (Spatie ActivityLog) yang mencatat setiap perubahan pada data kas. Anda tidak perlu mengaktifkan fitur ini secara manual — semua perubahan tercatat otomatis.
      </Callout>

      <hr />

      <h3>Tips Keuangan untuk Kas</h3>

      <Callout variant="tip" title="Tips Keuangan">
        <ul>
          <li><strong>Selalu unggah bukti pembayaran</strong> untuk setiap transaksi sebagai dokumentasi</li>
          <li><strong>Gunakan keterangan yang jelas</strong> untuk memudahkan pencarian dan audit</li>
          <li><strong>Periksa ringkasan saldo secara berkala</strong> untuk memastikan catatan sudah akurat</li>
          <li><strong>Catat transaksi sesegera mungkin</strong> setelah transaksi terjadi agar tidak terlupakan</li>
          <li><strong>Gunakan filter tanggal</strong> untuk melihat laporan keuangan periode tertentu</li>
        </ul>
      </Callout>

      <hr />

      <h2>Tagihan (Split Bills)</h2>

      <h3>Apa itu Tagihan</h3>

      <p>Tagihan adalah fitur untuk membagi tagihan bersama antar anggota tim. Pembuat tagihan bisa menentukan siapa yang harus membayar dan berapa jumlahnya. Setiap anggota yang ditagih akan menerima notifikasi dan wajib mengunggah bukti pembayaran untuk diverifikasi oleh Team Leader.</p>

      <p>Fitur ini sangat berguna untuk pembagian biaya seperti makan bersama, biaya acara, langganan bersama, atau pengeluaran tim lainnya yang perlu dibagi secara merata atau sesuai porsi masing-masing.</p>

      <figure className="my-8"><img src="/images/tagihan-split.png" alt="Tagihan Split" className="w-full rounded-xl border border-border/50" /><figcaption className="mt-3 text-center text-xs text-muted-foreground">Tampilan papan Tagihan dengan kolom status pembayaran</figcaption></figure>

      <hr />

      <h3>Status Tagihan</h3>

      <p>Setiap item tagihan memiliki status yang menunjukkan progres pembayaran:</p>

      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Keterangan</th>
            <th>Warna</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Unpaid</strong></td>
            <td>Anggota belum melakukan pembayaran sama sekali</td>
            <td>Merah</td>
          </tr>
          <tr>
            <td><strong>Pending Verification</strong></td>
            <td>Bukti pembayaran sudah diunggah, menunggu verifikasi dari Team Leader</td>
            <td>Kuning</td>
          </tr>
          <tr>
            <td><strong>Paid</strong></td>
            <td>Pembayaran sudah diverifikasi dan dinyatakan lunas</td>
            <td>Hijau</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h3>Membuat Tagihan</h3>

      <Steps>
        <Step number={1} title="Buka Menu Tagihan">
          Navigasi ke <strong>Finance → Tagihan</strong>. Halaman Tagihan akan menampilkan daftar tagihan yang sudah ada beserta status pembayarannya.
        </Step>
        <Step number={2} title="Klik Buat Tagihan Baru">
          Tekan tombol <strong>Buat Tagihan Baru</strong> atau <strong>Tambah Tagihan</strong>. Formulir pembuatan tagihan akan terbuka.
        </Step>
        <Step number={3} title="Isi Informasi Tagihan">
          Lengkapi informasi dasar tagihan:
          <ul>
            <li><strong>Judul</strong> — nama tagihan (contoh: &quot;Makan Bareng November&quot;, &quot;Listrik Bulanan Kantor&quot;, &quot;Acara Year-End&quot;)</li>
            <li><strong>Total Jumlah</strong> — jumlah total tagihan yang harus dibagi</li>
            <li><strong>Tanggal Jatuh Tempo</strong> — batas waktu pembayaran oleh anggota yang ditagih</li>
          </ul>
        </Step>
        <Step number={4} title="Tambahkan Item Tagihan">
          Untuk setiap anggota yang harus membayar:
          <ul>
            <li>Pilih <strong>anggota</strong> dari daftar anggota tim</li>
            <li>Isi <strong>jumlah</strong> yang harus dibayar oleh anggota tersebut</li>
            <li>Ulangi langkah ini untuk setiap anggota yang ditagih</li>
          </ul>
        </Step>
        <Step number={5} title="Simpan Tagihan">
          Klik <strong>Simpan</strong> untuk membuat tagihan. Anggota yang ditagih akan menerima notifikasi bahwa ada tagihan baru yang harus dibayar.
        </Step>
      </Steps>

      <Callout variant="warning" title="Perhatikan">
        Setelah tagihan dibuat, item dan anggota yang sudah ditagih tidak dapat diubah. Pastikan data sudah benar sebelum menyimpan. Jika ada kesalahan, Anda perlu menghapus tagihan dan membuat yang baru.
      </Callout>

      <hr />

      <h3>Alur Pembayaran</h3>

      <p>Berikut adalah alur pembayaran dari awal hingga selesai:</p>

      <ol>
        <li><strong>Pembuat Tagihan membuat tagihan</strong> — menentukan judul, total, jatuh tempo, dan anggota yang ditagih</li>
        <li><strong>Anggota menerima notifikasi</strong> — anggota yang ditagih mendapat notifikasi bahwa ada tagihan baru</li>
        <li><strong>Anggota mengunggah bukti pembayaran</strong> — anggota membayar dan mengunggah bukti transfer/struk</li>
        <li><strong>Team Leader memverifikasi</strong> — Team Leader memeriksa bukti pembayaran dan menyetujui</li>
        <li><strong>Status berubah menjadi Paid</strong> — setelah diverifikasi, status berubah dari &quot;Pending Verification&quot; menjadi &quot;Lunas&quot;</li>
      </ol>

      <hr />

      <h3>Membayar Tagihan yang Ditugaskan</h3>

      <Steps>
        <Step number={1} title="Buka Detail Tagihan">
          Buka detail tagihan yang ditugaskan kepada Anda. Anda akan melihat item tagihan beserta jumlah yang harus dibayar.
        </Step>
        <Step number={2} title="Klik Bayar">
          Klik tombol <strong>Bayar</strong> pada item tagihan Anda. Formulir pembayaran akan terbuka.
        </Step>
        <Step number={3} title="Unggah Bukti Pembayaran">
          Lampirkan bukti pembayaran berupa gambar (struk, screenshot transfer). Pastikan bukti terlihat jelas dan lengkap.
        </Step>
        <Step number={4} title="Kirim Bukti">
          Klik <strong>Kirim</strong> untuk mengunggah bukti pembayaran. Status item akan berubah dari &quot;Unpaid&quot; menjadi &quot;Pending Verification&quot;.
        </Step>
      </Steps>

      <hr />

      <h3>Memverifikasi Pembayaran</h3>

      <p>Hanya <strong>Team Leader</strong> yang dapat memverifikasi pembayaran tagihan:</p>

      <Steps>
        <Step number={1} title="Lihat Tagihan yang Menunggu Verifikasi">
          Buka halaman Tagihan dan cari item dengan status <strong>Pending Verification</strong>. Item ini menunjukkan anggota yang sudah mengunggah bukti pembayaran.
        </Step>
        <Step number={2} title="Periksa Bukti Pembayaran">
          Klik pada item untuk melihat bukti pembayaran yang diunggah. Pastikan bukti sesuai dengan jumlah yang harus dibayar.
        </Step>
        <Step number={3} title="Verifikasi atau Tolak">
          <ul>
            <li>Jika bukti valid: klik <strong>Verifikasi</strong> → status berubah menjadi <strong>Paid</strong></li>
            <li>Jika bukti tidak sesuai: kembalikan ke status <strong>Unpaid</strong> dan minta anggota mengunggah ulang</li>
          </ul>
        </Step>
      </Steps>

      <figure className="my-8"><img src="/images/verifikasi-tagihan.png" alt="Verifikasi Tagihan" className="w-full rounded-xl border border-border/50" /><figcaption className="mt-3 text-center text-xs text-muted-foreground">Tampilan verifikasi pembayaran dengan bukti lampiran</figcaption></figure>

      <hr />

      <h2>Tagihan Berulang (Recurring Bills)</h2>

      <h3>Apa itu Tagihan Berulang</h3>

      <p>Tagihan Berulang adalah fitur untuk membuat tagihan secara otomatis sesuai jadwal yang ditentukan. Cocok untuk pengeluaran rutin yang memiliki jadwal tetap, seperti sewa tempat, biaya listrik, langganan internet, atau gaji karyawan.</p>

      <p>Sistem akan secara otomatis membuat tagihan baru sesuai frekuensi yang Anda atur, sehingga Anda tidak perlu membuat tagihan secara manual setiap periode. Tagihan yang dihasilkan akan langsung muncul di halaman <strong>Tagihan</strong> sebagai tagihan biasa.</p>

      <figure className="my-8"><img src="/images/tagihan-berulang.png" alt="Tagihan Berulang" className="w-full rounded-xl border border-border/50" /><figcaption className="mt-3 text-center text-xs text-muted-foreground">Form pembuatan Tagihan Berulang dengan opsi frekuensi dan anggota</figcaption></figure>

      <hr />

      <h3>Membuat Tagihan Berulang</h3>

      <Steps>
        <Step number={1} title="Buka Menu Tagihan Berulang">
          Navigasi ke <strong>Finance → Tagihan Berulang</strong>. Halaman ini menampilkan semua tagihan berulang yang sudah dibuat beserta status aktifnya.
        </Step>
        <Step number={2} title="Klik Buat Tagihan Berulang">
          Tekan tombol <strong>Buat Tagihan Berulang</strong> atau <strong>Tambah Tagihan Berulang</strong>. Formulir pembuatan akan terbuka.
        </Step>
        <Step number={3} title="Isi Detail Tagihan">
          Lengkapi semua informasi tagihan berulang:
          <ul>
            <li><strong>Judul</strong> — nama tagihan berulang (contoh: &quot;Sewa Kantor Bulanan&quot;, &quot;Listrik PLN&quot;)</li>
            <li><strong>Deskripsi</strong> — keterangan tambahan tentang tagihan ini (opsional)</li>
            <li><strong>Jumlah Nominal</strong> — jumlah tagihan yang harus dibayar setiap periode</li>
          </ul>
        </Step>
        <Step number={4} title="Pilih Frekuensi">
          Tentukan seberapa sering tagihan ini dibuat:
          <ul>
            <li><strong>Harian</strong> — tagihan dibuat setiap hari</li>
            <li><strong>Mingguan</strong> — tagihan dibuat setiap minggu</li>
            <li><strong>Dua Mingguan</strong> — tagihan dibuat setiap 2 minggu</li>
            <li><strong>Bulanan</strong> — tagihan dibuat setiap bulan</li>
            <li><strong>Kuartalan</strong> — tagihan dibuat setiap 3 bulan</li>
            <li><strong>Tahunan</strong> — tagihan dibuat setiap tahun</li>
          </ul>
        </Step>
        <Step number={5} title="Atur Interval Hari (Opsional)">
          Jika menggunakan frekuensi custom, Anda dapat mengatur interval hari secara spesifik. Misalnya, tagihan yang harus dibayar setiap 10 hari.
        </Step>
        <Step number={6} title="Atur Tanggal Jatuh Tempo">
          Tentukan tanggal jatuh tempo untuk setiap periode tagihan. Tanggal ini adalah batas waktu pembayaran oleh anggota yang ditagih.
        </Step>
        <Step number={7} title="Pilih Anggota yang Ditagih">
          Pilih anggota tim yang wajib membayar tagihan ini setiap periode. Anda bisa memilih lebih dari satu anggota.
        </Step>
        <Step number={8} title="Atur Notifikasi (Opsional)">
          Atur berapa hari sebelum jatuh tempo anggota harus diingatkan. Misalnya, 3 hari sebelum jatuh tempo agar anggota memiliki waktu yang cukup untuk melakukan pembayaran.
        </Step>
        <Step number={9} title="Simpan Tagihan Berulang">
          Klik <strong>Simpan</strong> untuk mengaktifkan tagihan berulang. Sistem akan mulai membuat tagihan sesuai jadwal yang ditentukan.
        </Step>
      </Steps>

      <Callout variant="info" title="Pembuatan Otomatis">
        Tagihan berulang akan dibuat secara otomatis oleh sistem sesuai frekuensi yang ditentukan. Anda tidak perlu membuat tagihan secara manual setiap periode. Tagihan yang dihasilkan akan langsung muncul di halaman <strong>Tagihan</strong> sebagai tagihan biasa.
      </Callout>

      <hr />

      <h3>Mengelola Tagihan Berulang</h3>

      <p>Setelah tagihan berulang dibuat, Anda dapat:</p>

      <ul>
        <li><strong>Mengaktifkan/Menonaktifkan</strong> — nonaktifkan tagihan berulang sementara tanpa menghapusnya</li>
        <li><strong>Melihat Riwayat</strong> — lihat daftar tagihan yang sudah dibuat oleh tagihan berulang ini</li>
        <li><strong>Generate Manual</strong> — buat tagihan manual dari tagihan berulang jika diperlukan sebelum jadwal</li>
        <li><strong>Mengedit</strong> — ubah detail tagihan berulang seperti nominal, frekuensi, atau anggota</li>
        <li><strong>Menghapus</strong> — hapus tagihan berulang jika tidak lagi diperlukan</li>
      </ul>

      <hr />

      <h3>Tips Tagihan Berulang</h3>

      <Callout variant="tip" title="Tips Tagihan Berulang">
        <ul>
          <li><strong>Gunakan untuk pengeluaran yang benar-benar rutin</strong> — jangan gunakan untuk tagihan satu kali</li>
          <li><strong>Atur notifikasi beberapa hari sebelum jatuh tempo</strong> — berikan waktu yang cukup untuk anggota melakukan pembayaran</li>
          <li><strong>Periksa riwayat secara berkala</strong> — pastikan tagihan sudah dibuat sesuai jadwal</li>
          <li><strong>Nonaktifkan sementara jika perlu</strong> — jika ada perubahan sementara, nonaktifkan daripada menghapus</li>
          <li><strong>Gunakan frekuensi yang tepat</strong> — pilih frekuensi yang sesuai dengan jadwal pembayaran aktual</li>
        </ul>
      </Callout>

      <hr />

      <h2>Tips dan Best Practice Keuangan</h2>

      <Callout variant="tip" title="Tips Keuangan Tim">
        <ul>
          <li><strong>Catat semua transaksi</strong> — input setiap pemasukan dan pengeluaran agar saldo selalu akurat</li>
          <li><strong>Gunakan lampiran</strong> — sertakan bukti transaksi untuk memudahkan audit di kemudian hari</li>
          <li><strong>Buat tagihan berulang</strong> untuk pengeluaran rutin agar tidak lupa mencatat setiap periode</li>
          <li><strong>Verifikasi pembayaran segera</strong> agar status tagihan selalu up to date</li>
          <li><strong>Gunakan filter untuk laporan</strong> — manfaatkan filter tanggal dan jenis untuk melihat laporan periode tertentu</li>
        </ul>
      </Callout>

      <h3>Urutan Prioritas Pengelolaan Keuangan</h3>

      <table>
        <thead>
          <tr>
            <th>Prioritas</th>
            <th>Aksi</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Catat transaksi sesegera mungkin</td>
            <td>Jangan tunda pencatatan agar tidak lupa</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Upload bukti pembayaran</td>
            <td>Lakukan setelah melakukan pembayaran</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Verifikasi pembayaran anggota</td>
            <td>Minimal sekali sehari untuk menjaga akurasi</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Review saldo kas secara berkala</td>
            <td>Periksa mingguan untuk memastikan catatan benar</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
