"use client";

import { Callout } from "@/components/docs/callout";
import { Steps, Step } from "@/components/docs/steps";
import { PlaceholderImage } from "@/components/docs/placeholder-image";

export default function MemberGuidePage() {
  return (
    <>
      <h1>Panduan Anggota (Member)</h1>

      <h2>Apa itu Anggota</h2>
      <p>
        Anggota adalah role dasar di TeamVora. Sebagai anggota, Anda bisa menggunakan fitur keuangan, produktivitas, dan media yang tersedia di tim Anda. Anda bisa mencatat transaksi kas, membuat dan mengerjakan tugas, mengelola log harian, serta mengunggah dan mengakses dokumen tim.
      </p>
      <p>
        Peran anggota dirancang untuk setiap individu yang bergabung dalam sebuah tim di TeamVora. Tidak seperti Team Leader yang memiliki akses penuh untuk mengelola anggota dan pengaturan tim, anggota memiliki fokus pada eksekusi dan kontribusi langsung terhadap pekerjaan tim.
      </p>
      <p>
        Fitur media juga tersedia untuk anggota guna menyimpan dan berbagi dokumen penting. Semua file yang diunggah bisa diakses oleh seluruh anggota tim, sehingga kolaborasi menjadi lebih mudah tanpa perlu bergantung pada layanan cloud pihak ketiga.
      </p>

      <Callout variant="info" title="Tentang Role Anggota">
        Setiap pengguna yang bergabung dengan tim di TeamVora secara otomatis mendapatkan role anggota. Role ini bisa ditingkatkan menjadi Team Leader oleh pemilik tim jika diperlukan.
      </Callout>

      <h2>Dashboard Anggota</h2>
      <p>
        Dashboard anggota adalah halaman utama yang Anda lihat setelah login dan bergabung dengan tim. Dashboard ini dirancang untuk memberikan gambaran singkat tentang kondisi Anda dalam tim, termasuk status keuangan, tugas yang perlu dikerjakan, dan notifikasi penting lainnya.
      </p>
      <p>
        Bagian pertama dari dashboard adalah kartu statistik yang menampilkan informasi keuangan pribadi Anda. Kartu ini menunjukkan saldo kas pribadi Anda saat ini, total pemasukan yang telah Anda catat selama periode tertentu, serta total pengeluaran yang telah dikeluarkan.
      </p>
      <p>
        Di bagian bawah kartu statistik, terdapat daftar tugas yang ditugaskan kepada Anda. Daftar ini menampilkan tugas-tugas yang perlu Anda kerjakan beserta informasi singkat seperti judul tugas, prioritas, dan tenggat waktu.
      </p>

      <PlaceholderImage alt="Dashboard Anggota TeamVora" />

      <h2>Menggunakan Fitur Finance</h2>
      <p>
        Fitur keuangan membantu Anda melacak dan mengelola aspek finansial tim secara terperinci. Sebagai anggota, Anda memiliki akses untuk mencatat transaksi kas, melihat riwayat transaksi, mengedit atau menghapus transaksi yang telah Anda buat, serta membuat dan membayar tagihan.
      </p>

      <h3>Mencatat Transaksi Kas</h3>
      <Steps>
        <Step number={1} title="Buka menu Finance &gt; Kas">
          Klik menu <strong>Finance</strong> di sidebar, lalu pilih submenu <strong>Kas</strong> untuk membuka halaman pencatatan transaksi kas tim.
        </Step>
        <Step number={2} title="Klik tombol Tambah Transaksi">
          Tekan tombol <strong>+ Tambah Transaksi</strong> yang terletak di pojok kanan atas halaman kas untuk membuka formulir pencatatan transaksi baru.
        </Step>
        <Step number={3} title="Pilih jenis transaksi">
          Pilih apakah transaksi ini merupakan pemasukan (<strong>Masuk / In</strong>) atau pengeluaran (<strong>Keluar / Out</strong>). Pastikan jenis transaksi sesuai dengan kenyataan agar laporan keuangan akurat.
        </Step>
        <Step number={4} title="Isi judul transaksi">
          Masukkan judul yang jelas dan deskriptif untuk transaksi ini, contoh: &quot;Transport project X&quot; atau &quot;Beli perlengkapan kantor&quot;.
        </Step>
        <Step number={5} title="Isi jumlah nominal">
          Masukkan jumlah uang yang terkait dengan transaksi ini. Gunakan format angka tanpa simbol mata uang, misalnya 50000 untuk Rp50.000.
        </Step>
        <Step number={6} title="Pilih tanggal transaksi">
          Pilih tanggal kapan transaksi ini terjadi menggunakan date picker yang tersedia.
        </Step>
        <Step number={7} title="Tambahkan keterangan">
          Isi kolom deskripsi dengan informasi tambahan tentang transaksi ini. Ini bersifat opsional tetapi sangat disarankan.
        </Step>
        <Step number={8} title="Unggah lampiran bukti">
          Jika ada bukti pembayaran seperti struk, screenshot transfer, atau faktur, unggah lampiran tersebut. Format yang didukung adalah gambar (JPG, PNG) dan PDF.
        </Step>
        <Step number={9} title="Klik Simpan">
          Setelah semua data terisi dengan benar, klik tombol <strong>Simpan</strong> untuk menyimpan transaksi ke dalam sistem.
        </Step>
      </Steps>

      <Callout variant="info" title="Tentang Lampiran">
        Lampiran bukti pembayaran sangat berguna untuk memverifikasi transaksi. Jika terjadi perbedaan data atau sengketa keuangan, bukti lampiran bisa menjadi referensi utama untuk menyelesaikan masalah.
      </Callout>

      <h3>Melihat Riwayat Transaksi</h3>
      <p>
        Semua transaksi yang telah dicatat oleh anggota tim akan ditampilkan dalam daftar riwayat transaksi. Daftar ini mencakup semua jenis transaksi, baik masuk maupun keluar, dari seluruh anggota tim. Setiap entri menampilkan informasi singkat seperti judul transaksi, jumlah nominal, tanggal, jenis transaksi, dan nama anggota yang mencatat transaksi tersebut.
      </p>
      <p>
        Anda bisa menggunakan fitur filter untuk mempersempit tampilan transaksi. Filter tersedia berdasarkan jenis transaksi (masuk atau keluar), rentang tanggal tertentu, serta kolom pencarian untuk mencari transaksi berdasarkan judul atau keterangan.
      </p>

      <h3>Mengedit dan Menghapus Transaksi</h3>
      <Callout variant="warning" title="Perhatian">
        Anda hanya bisa mengedit atau menghapus transaksi yang Anda buat sendiri. Transaksi yang dibuat oleh anggota lain tidak bisa diubah atau dihapus oleh Anda untuk menjaga integritas data keuangan tim.
      </Callout>
      <p>
        Untuk mengedit transaksi, klik transaksi yang ingin Anda ubah dari daftar riwayat, lalu klik tombol <strong>Edit</strong> yang tersedia di halaman detail transaksi. Ubah field yang perlu diperbarui, lalu klik <strong>Simpan Perubahan</strong>. Untuk menghapus transaksi, klik tombol <strong>Hapus</strong> di halaman yang sama, lalu konfirmasi penghapusan pada dialog yang muncul.
      </p>

      <h3>Membuat Tagihan Split</h3>
      <p>
        Tagihan split memungkinkan Anda membagi biaya tertentu kepada beberapa anggota tim secara proporsional. Fitur ini sangat berguna untuk pengeluaran bersama seperti makan bersama, sewa ruangan, atau pembelian perlengkapan tim.
      </p>
      <Steps>
        <Step number={1} title="Buka Finance &gt; Tagihan">
          Klik menu <strong>Finance</strong> di sidebar, lalu pilih submenu <strong>Tagihan</strong> untuk membuka halaman pengelolaan tagihan.
        </Step>
        <Step number={2} title="Klik Buat Tagihan Baru">
          Tekan tombol <strong>+ Buat Tagihan Baru</strong> di pojok kanan atas halaman tagihan untuk memulai proses pembuatan tagihan.
        </Step>
        <Step number={3} title="Isi judul tagihan">
          Masukkan judul yang menjelaskan tagihan ini, contoh: &quot;Makan Siang Bersama&quot; atau &quot;Sewa Ruang Rapat Bulan Juni&quot;.
        </Step>
        <Step number={4} title="Isi total jumlah tagihan">
          Masukkan total jumlah uang yang harus dibayarkan oleh seluruh anggota yang terlibat dalam tagihan ini.
        </Step>
        <Step number={5} title="Pilih tenggat waktu pembayaran">
          Pilih tanggal tenggat waktu kapan semua anggota harus menyelesaikan pembayaran tagihan ini.
        </Step>
        <Step number={6} title="Tambahkan item tagihan">
          Untuk setiap anggota yang harus membayar, tambahkan item tagihan. Anda bisa membagi secara merata atau menentukan jumlah berbeda untuk setiap anggota.
        </Step>
        <Step number={7} title="Pilih anggota yang harus membayar">
          Centang nama-nama anggota yang harus membayar bagian mereka dari tagihan ini.
        </Step>
        <Step number={8} title="Isi jumlah per anggota">
          Tentukan jumlah pasti yang harus dibayarkan oleh setiap anggota. Jika dibagi merata, sistem akan menghitung otomatis berdasarkan jumlah anggota.
        </Step>
        <Step number={9} title="Klik Simpan">
          Setelah semua data terisi, klik <strong>Simpan</strong> untuk membuat tagihan. Sistem akan mengirimkan notifikasi kepada setiap anggota yang harus membayar.
        </Step>
      </Steps>

      <Callout variant="tip" title="Tips Membagi Tagihan">
        Bagilah tagihan secara adil berdasarkan kontribusi atau pemanfaatan masing-masing anggota. Komunikasi yang jelas tentang siapa yang harus membayar berapa sangat penting untuk menghindari kesalahpahaman.
      </Callout>

      <h3>Membayar Tagihan</h3>
      <p>
        Ketika Anda menerima tagihan dari anggota lain, Anda perlu menandai bahwa Anda sudah membayar bagian Anda.
      </p>
      <Steps>
        <Step number={1} title="Buka tagihan yang ditugaskan">
          Buka halaman <strong>Finance &gt; Tagihan</strong> dan cari tagihan yang memiliki status &quot;Belum Dibayar&quot; untuk Anda.
        </Step>
        <Step number={2} title="Klik tombol Bayar">
          Klik tombol <strong>Bayar</strong> pada tagihan tersebut untuk membuka formulir konfirmasi pembayaran.
        </Step>
        <Step number={3} title="Unggah bukti pembayaran">
          Unggah bukti pembayaran berupa foto bukti transfer, screenshot dari aplikasi perbankan, atau struk pembayaran.
        </Step>
        <Step number={4} title="Klik Kirim">
          Setelah bukti terunggah, klik tombol <strong>Kirim</strong> untuk menandai bahwa Anda sudah melakukan pembayaran.
        </Step>
        <Step number={5} title="Menunggu verifikasi">
          Pembuat tagihan akan memverifikasi bukti pembayaran Anda. Setelah diverifikasi, status tagihan akan berubah menjadi &quot;Lunas&quot;.
        </Step>
      </Steps>

      <h3>Tagihan Berulang</h3>
      <p>
        Tagihan berulang adalah tagihan yang dibuat otomatis oleh sistem sesuai dengan jadwal yang telah ditentukan. Fitur ini sangat berguna untuk pengeluaran rutin yang terjadi secara berkala, seperti iuran bulanan, langganan layanan, atau sewa tempat.
      </p>
      <p>
        Tagihan berulang bisa dikonfigurasi dengan frekuensi harian, mingguan, bulanan, kuartalan, atau tahunan. Setiap kali jadwal tiba, sistem akan secara otomatis membuat tagihan baru untuk anggota yang ditentukan.
      </p>

      <h2>Menggunakan Fitur Produktivitas</h2>
      <p>
        Fitur produktivitas membantu Anda mengelola tugas dan proyek secara efektif. Sebagai anggota, Anda bisa melihat tugas yang ditugaskan kepada Anda, memperbarui status pengerjaan, serta membuat dan mengelola log harian.
      </p>

      <h3>Melihat Tugas</h3>
      <Steps>
        <Step number={1} title="Buka menu Produktivitas &gt; Tugas">
          Klik menu <strong>Produktivitas</strong> di sidebar, lalu pilih submenu <strong>Tugas</strong> untuk membuka halaman papan kerja tugas.
        </Step>
        <Step number={2} title="Tugas ditampilkan dalam papan kanban 3 kolom">
          Papan kanban terdiri dari tiga kolom utama: <strong>To Do</strong> untuk tugas yang belum dikerjakan, <strong>Proses</strong> untuk tugas yang sedang dikerjakan, dan <strong>Selesai</strong> untuk tugas yang sudah selesai.
        </Step>
        <Step number={3} title="Filter dan cari tugas">
          Gunakan fitur pencarian dan filter untuk menemukan tugas berdasarkan prioritas, tenggat waktu, atau kata kunci tertentu.
        </Step>
      </Steps>

      <PlaceholderImage alt="Papan Kanban Tugas" />

      <h3>Mengerjakan Tugas</h3>
      <Steps>
        <Step number={1} title="Klik tugas yang ingin dikerjakan">
          Klik kartu tugas dari papan kanban untuk membuka halaman detail tugas yang berisi informasi lengkap.
        </Step>
        <Step number={2} title="Lihat detail tugas">
          Perhatikan informasi detail: judul tugas, deskripsi pekerjaan, penanggung jawab, level prioritas, dan tenggat waktu pengerjaan.
        </Step>
        <Step number={3} title="Mulai mengerjakan tugas">
          Jika sudah mulai mengerjakan, geser kartu tugas dari kolom <strong>To Do</strong> ke kolom <strong>Proses</strong> dengan cara menyeret kartu tugas.
        </Step>
        <Step number={4} title="Tandai tugas selesai">
          Jika sudah selesai mengerjakan, geser kartu tugas ke kolom <strong>Selesai</strong>. Tim akan otomatis diberitahu bahwa tugas ini telah diselesaikan.
        </Step>
      </Steps>

      <Callout variant="tip" title="Tips Mengerjakan Tugas">
        Selalu periksa prioritas dan tenggat waktu tugas sebelum mulai mengerjakan. Kerjakan tugas dengan prioritas lebih tinggi terlebih dahulu. Jika ada kendala dalam pengerjaan, komunikasikan kepada Team Leader.
      </Callout>

      <h3>Membuat Log Harian</h3>
      <p>
        Log harian adalah catatan aktivitas kerja harian yang membantu Team Leader memantau progres Anda dan memastikan pekerjaan berjalan sesuai rencana.
      </p>
      <Steps>
        <Step number={1} title="Buka Produktivitas &gt; Log Harian">
          Klik menu <strong>Produktivitas</strong> di sidebar, lalu pilih submenu <strong>Log Harian</strong> untuk membuka halaman pengelolaan log harian.
        </Step>
        <Step number={2} title="Klik Buat Log Baru">
          Tekan tombol <strong>+ Buat Log Baru</strong> di pojok kanan atas halaman log harian.
        </Step>
        <Step number={3} title="Isi judul log">
          Masukkan judul yang menjelaskan isi log harian Anda, contoh: &quot;Aktivitas Hari Ini&quot; atau &quot;Progres Development Modul Login&quot;.
        </Step>
        <Step number={4} title="Isi konten log">
          Jelaskan secara rinci aktivitas apa saja yang telah Anda kerjakan hari ini. Sertakan detail seperti fitur yang sedang dikembangkan, bug yang sedang diperbaiki, atau pertemuan yang telah dihadiri.
        </Step>
        <Step number={5} title="Gunakan editor rich text">
          Manfaatkan fitur formatting seperti <strong>bold</strong> untuk penekanan, <em>italic</em> untuk istilah teknis, dan daftar bullet untuk merinci aktivitas.
        </Step>
        <Step number={6} title="Tambahkan lampiran jika perlu">
          Lampirkan screenshot, dokumen pendukung, atau file lain yang relevan dengan aktivitas hari ini.
        </Step>
        <Step number={7} title="Pilih tanggal log">
          Pilih tanggal aktivitas yang dicatat dalam log ini menggunakan date picker.
        </Step>
        <Step number={8} title="Klik Simpan">
          Setelah semua data terisi, klik tombol <strong>Simpan</strong> untuk menyimpan log harian. Log akan langsung muncul dalam daftar log harian.
        </Step>
      </Steps>

      <Callout variant="info" title="Tentang Visibilitas Log Harian">
        Semua log harian yang Anda buat bisa dilihat oleh Team Leader dan seluruh anggota tim. Ini memastikan transparansi dalam pekerjaan dan membantu tim tetap sinkron.
      </Callout>

      <h2>Menggunakan Fitur Media</h2>
      <p>
        Fitur media memungkinkan Anda menyimpan dan berbagi dokumen serta gambar dengan seluruh anggota tim. Semua file yang diunggah tersimpan aman di cloud dan bisa diakses dari perangkat mana pun dengan koneksi internet.
      </p>

      <h3>Mengunggah Dokumen</h3>
      <Steps>
        <Step number={1} title="Buka Media &gt; Dokumen">
          Klik menu <strong>Media</strong> di sidebar, lalu pilih submenu <strong>Dokumen</strong> untuk membuka halaman pengelolaan dokumen tim.
        </Step>
        <Step number={2} title="Klik Unggah Dokumen">
          Tekan tombol <strong>+ Unggah Dokumen</strong> di pojok kanan atas halaman dokumen.
        </Step>
        <Step number={3} title="Pilih file dari komputer">
          Gunakan file browser untuk memilih file dokumen yang ingin diunggah.
        </Step>
        <Step number={4} title="Beri nama dokumen">
          Masukkan nama deskriptif untuk dokumen agar mudah dikenali dan dicari oleh anggota tim lainnya.
        </Step>
        <Step number={5} title="Klik Unggah">
          Klik tombol <strong>Unggah</strong> untuk memulai proses unggahan file. Dokumen akan tersimpan dan bisa diakses oleh seluruh anggota tim.
        </Step>
      </Steps>

      <h3>Mengakses Galeri</h3>
      <Steps>
        <Step number={1} title="Buka Media &gt; Galeri">
          Klik menu <strong>Media</strong> di sidebar, lalu pilih submenu <strong>Galeri</strong> untuk membuka tampilan galeri semua gambar tim.
        </Step>
        <Step number={2} title="Galeri menampilkan semua gambar">
          Semua gambar dari seluruh anggota tim ditampilkan dalam tampilan grid yang rapi. Gambar diurutkan berdasarkan waktu unggahan.
        </Step>
        <Step number={3} title="Klik gambar untuk melihat ukuran penuh">
          Klik pada gambar apa pun untuk membukanya dalam tampilan ukuran penuh.
        </Step>
        <Step number={4} title="Salin URL gambar untuk dibagikan">
          Salin URL gambar dari browser atau gunakan tombol bagikan untuk mendistribusikan gambar kepada anggota tim lain.
        </Step>
      </Steps>

      <h3>Format yang Didukung</h3>
      <ul>
        <li><strong>Dokumen:</strong> PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, TXT, CSV</li>
        <li><strong>Gambar:</strong> JPG, JPEG, PNG, GIF, SVG, WebP</li>
        <li><strong>Ukuran maksimal:</strong> 10MB per file</li>
      </ul>

      <h2>Mengelola Profil</h2>
      <p>
        Mengelola profil memungkinkan Anda memperbarui informasi pribadi yang ditampilkan kepada anggota tim lainnya. Profil yang lengkap dan akurat membantu anggota tim lain mengenal Anda lebih baik dan memudahkan komunikasi dalam tim.
      </p>
      <Steps>
        <Step number={1} title="Buka Pengaturan &gt; Profil">
          Klik menu <strong>Pengaturan</strong> di sidebar, lalu pilih submenu <strong>Profil</strong> untuk membuka halaman pengaturan profil Anda.
        </Step>
        <Step number={2} title="Ubah nama, email, nomor telepon">
          Perbarui informasi kontak Anda termasuk nama lengkap, alamat email aktif, dan nomor telepon yang bisa dihubungi.
        </Step>
        <Step number={3} title="Unggah foto profil baru">
          Klik area foto profil untuk mengunggah foto baru. Gunakan foto yang jelas dan profesional.
        </Step>
        <Step number={4} title="Ubah password jika diperlukan">
          Jika ingin mengubah password, masukkan password lama di kolom yang tersedia, lalu masukkan password baru dan konfirmasi password baru.
        </Step>
        <Step number={5} title="Klik Simpan Perubahan">
          Setelah semua perubahan diperbarui, klik tombol <strong>Simpan Perubahan</strong> untuk menyimpan pembaruan profil.
        </Step>
      </Steps>

      <Callout variant="warning" title="Keamanan Akun">
        Jangan pernah membagikan password Anda kepada siapa pun. Gunakan password yang kuat dan berbeda dari akun lain. Jika mencurigai akun Anda telah disalahgunakan, segera ubah password dan hubungi Team Leader.
      </Callout>

      <h2>Tips untuk Anggota</h2>
      <ul>
        <li><strong>Rajin membuat log harian</strong> agar Team Leader bisa memantau progres pekerjaan Anda secara real-time dan memberikan umpan balik yang tepat waktu.</li>
        <li><strong>Unggah bukti pembayaran</strong> saat membayar tagihan untuk mempercepat proses verifikasi dan menjaga catatan keuangan tetap akurat.</li>
        <li><strong>Gunakan label prioritas</strong> untuk mengatur urutan pengerjaan tugas. Kerjakan tugas berprioritas tinggi terlebih dahulu.</li>
        <li><strong>Manfaatkan media</strong> untuk menyimpan dokumen penting tim. Unggah file-file relevan agar semua anggota tim bisa mengaksesnya dengan mudah.</li>
        <li><strong>Periksa notifikasi secara berkala</strong> untuk tugas baru, tagihan yang perlu dibayar, dan pesan dari anggota tim lainnya.</li>
        <li><strong>Komunikasikan kendala</strong> kepada Team Leader atau anggota tim jika mengalami kesulitan dalam mengerjakan tugas.</li>
        <li><strong>Jaga konsistensi</strong> dalam mencatat transaksi, mengerjakan tugas, dan membuat log harian.</li>
      </ul>
    </>
  );
}
