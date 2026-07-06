"use client"

import { Callout } from "@/components/docs/callout"
import { Steps, Step } from "@/components/docs/steps"
import { PlaceholderImage } from "@/components/docs/placeholder-image"

export default function ProductivityPage() {
  return (
    <>
      <h1>Fitur Produktivitas</h1>

      <p>Panduan mengelola produktivitas tim menggunakan fitur <strong>Tugas (Tasks)</strong> dan <strong>Log Harian (Daily Log)</strong> di TeamVora. Fitur ini membantu tim melacak pekerjaan, memantau progres, dan mendokumentasikan aktivitas harian secara terstruktur.</p>

      <Callout variant="info" title="Tentang Fitur Produktivitas">
        Fitur Produktivitas dirancang untuk membantu tim tetap terorganisir. Dengan papan Kanban interaktif dan log harian, setiap anggota bisa melihat apa yang sedang dikerjakan, siapa yang mengerjakannya, dan kapan harus selesai.
      </Callout>

      <hr />

      <h2>Tugas (Tasks)</h2>

      <h3>Apa itu Tugas</h3>

      <p>Tugas adalah fitur manajemen proyek berbasis papan Kanban. Tugas ditampilkan dalam 3 kolom: <strong>To Do</strong>, <strong>Proses</strong>, dan <strong>Selesai</strong>. Anda bisa memindahkan tugas dengan drag and drop untuk mengubah statusnya. Setiap tugas memiliki informasi lengkap meliputi judul, deskripsi, penanggung jawab, prioritas, dan tenggat waktu.</p>

      <p>Fitur Tugas sangat membantu tim dalam mengorganisasikan pekerjaan, memprioritaskan tugas mendesak, dan memantau progres secara visual. Dengan tampilan Kanban, semua anggota bisa melihat gambaran besar pekerjaan tim dalam satu halaman.</p>

      <PlaceholderImage alt="Papan Kanban Tugas" caption="Tampilan papan Kanban dengan kolom To Do, Proses, dan Selesai" />

      <hr />

      <h3>Papan Kanban</h3>

      <p>Papan Tugas terdiri dari tiga kolom yang merepresentasikan alur kerja tugas:</p>

      <table>
        <thead>
          <tr>
            <th>Kolom</th>
            <th>Status</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>To Do</strong></td>
            <td><code>todo</code></td>
            <td>Tugas yang belum dikerjakan. Ini adalah tempat tugas baru pertama kali muncul.</td>
          </tr>
          <tr>
            <td><strong>Proses</strong></td>
            <td><code>in_progress</code></td>
            <td>Tugas yang sedang dikerjakan oleh penanggung jawab.</td>
          </tr>
          <tr>
            <td><strong>Selesai</strong></td>
            <td><code>done</code></td>
            <td>Tugas yang sudah selesai dikerjakan dan diverifikasi.</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h3>Prioritas Tugas</h3>

      <p>Setiap tugas bisa diberi prioritas untuk membantu anggota memahami urutan kepentingan:</p>

      <table>
        <thead>
          <tr>
            <th>Prioritas</th>
            <th>Label</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rendah (<code>low</code>)</td>
            <td>Abu-abu</td>
            <td>Tidak mendesak, bisa dikerjakan kapan saja ketika ada waktu luang</td>
          </tr>
          <tr>
            <td>Sedang (<code>medium</code>)</td>
            <td>Kuning</td>
            <td>Perlu dikerjakan dalam waktu dekat, ada tenggat waktu yang harus diperhatikan</td>
          </tr>
          <tr>
            <td>Tinggi (<code>high</code>)</td>
            <td>Merah</td>
            <td>Mendesak, harus segera dikerjakan dan diselesaikan secepat mungkin</td>
          </tr>
        </tbody>
      </table>

      <Callout variant="warning" title="Prioritas Tinggi">
        Tugas dengan prioritas Tinggi ditandai dengan warna merah dan harus mendapat perhatian utama. Pastikan tugas prioritas tinggi selalu diproses terlebih dahulu sebelum tugas lainnya.
      </Callout>

      <hr />

      <h3>Membuat Tugas Baru</h3>

      <Steps>
        <Step number={1} title="Buka Menu Tugas">
          Navigasi ke menu <strong>Produktivitas → Tugas</strong> dari sidebar. Halaman papan Kanban akan ditampilkan dengan tiga kolom yang sudah tersedia.
        </Step>
        <Step number={2} title="Klik Tambah Tugas">
          Tekan tombol <strong>Tambah Tugas</strong> atau <strong>Tambah Baru</strong> yang terletak di pojok kanan atas halaman. Formulir pembuatan tugas akan terbuka.
        </Step>
        <Step number={3} title="Isi Judul Tugas">
          Beri nama judul yang jelas dan deskriptif untuk tugas ini. Judul harus ringkas namun cukup informatif agar anggota lain bisa memahami inti tugas hanya dari judul.
        </Step>
        <Step number={4} title="Isi Deskripsi Tugas">
          Tuliskan deskripsi detail tentang tugas ini menggunakan editor rich text. Anda bisa menggunakan format <strong>bold</strong>, <em>italic</em>, list, dan heading untuk menjelaskan detail pekerjaan, persyaratan, dan hasil yang diharapkan.
        </Step>
        <Step number={5} title="Pilih Penanggung Jawab">
          Pilih anggota tim yang akan mengerjakan tugas ini dari dropdown penanggung jawab. Penanggung jawab bertanggung jawab untuk menyelesaikan tugas sesuai tenggat waktu.
        </Step>
        <Step number={6} title="Tentukan Prioritas">
          Pilih salah satu dari tiga level prioritas: <strong>Rendah</strong>, <strong>Sedang</strong>, atau <strong>Tinggi</strong>. Sesuaikan prioritas dengan urgensi dan pentingnya tugas tersebut.
        </Step>
        <Step number={7} title="Atur Tenggat Waktu (Opsional)">
          Tetapkan batas waktu pengerjaan tugas. Tenggat waktu membantu penanggung jawab mengatur jadwal kerja dan menghindari keterlambatan.
        </Step>
        <Step number={8} title="Simpan Tugas">
          Klik <strong>Simpan</strong> untuk membuat tugas. Tugas baru akan langsung muncul di kolom <strong>To Do</strong> pada papan Kanban.
        </Step>
      </Steps>

      <hr />

      <h3>Memindahkan Tugas</h3>

      <p>Anda bisa mengubah status tugas dengan dua cara:</p>

      <p><strong>Drag &amp; Drop (Cepat):</strong></p>

      <ol>
        <li>Klik dan tahan kartu tugas di kolom asal</li>
        <li>Seret kartu ke kolom tujuan yang diinginkan</li>
        <li>Lepaskan kartu — status tugas akan otomatis berubah</li>
      </ol>

      <p><strong>Mengubah Status dari Dropdown:</strong></p>

      <ol>
        <li>Klik kartu tugas yang ingin diubah</li>
        <li>Ubah status dari dropdown yang tersedia</li>
        <li>Klik <strong>Simpan</strong> — tugas akan pindah ke kolom yang sesuai</li>
      </ol>

      <p><strong>Pemindahan yang Umum:</strong></p>

      <ul>
        <li><strong>To Do → Proses</strong> — mulai mengerjakan tugas</li>
        <li><strong>Proses → Selesai</strong> — tugas sudah selesai dikerjakan</li>
        <li><strong>Selesai → Proses</strong> — jika tugas perlu dikerjakan ulang</li>
        <li><strong>Proses → To Do</strong> — jika tugas perlu ditunda</li>
      </ul>

      <Callout variant="info" title="Posisi Tugas dalam Kolom">
        Posisi tugas dalam satu kolom juga bisa diatur dengan drag and drop. Sistem akan otomatis menyimpan urutan posisi setiap kartu. Refresh halaman untuk melihat urutan terbaru.
      </Callout>

      <hr />

      <h3>Mengedit Tugas</h3>

      <Steps>
        <Step number={1} title="Buka Detail Tugas">
          Klik kartu tugas yang ingin diedit dari papan Kanban. Detail tugas akan terbuka dalam modal atau halaman detail.
        </Step>
        <Step number={2} title="Ubah Data yang Diperlukan">
          Edit field yang ingin diubah, seperti judul, deskripsi, penanggung jawab, prioritas, atau tenggat waktu. Anda bisa mengubah salah satu atau beberapa field sekaligus.
        </Step>
        <Step number={3} title="Simpan Perubahan">
          Klik <strong>Simpan Perubahan</strong> untuk menyimpan. Perubahan akan langsung terlihat di papan Kanban.
        </Step>
      </Steps>

      <hr />

      <h3>Menghapus Tugas</h3>

      <Steps>
        <Step number={1} title="Buka Detail Tugas">
          Klik kartu tugas yang ingin dihapus dari papan Kanban.
        </Step>
        <Step number={2} title="Klik Hapus">
          Tekan tombol <strong>Hapus</strong> atau ikon <strong>Trash</strong> yang tersedia di detail tugas.
        </Step>
        <Step number={3} title="Konfirmasi Penghapusan">
          Konfirmasi bahwa Anda yakin ingin menghapus tugas. Penghapusan bersifat permanen dan tidak dapat dibatalkan.
        </Step>
      </Steps>

      <Callout variant="danger" title="Hati-hati">
        Penghapusan tugas bersifat permanen dan tidak dapat dibatalkan. Pastikan Anda sudah yakin sebelum menghapus tugas dari papan Kanban.
      </Callout>

      <hr />

      <h3>Tips Mengelola Tugas</h3>

      <Callout variant="tip" title="Tips Tugas">
        <ul>
          <li><strong>Gunakan prioritas untuk mengatur urutan</strong> — kerjakan tugas prioritas Tinggi terlebih dahulu</li>
          <li><strong>Atur tenggat waktu untuk setiap tugas</strong> — tugas tanpa deadline cenderung tertunda</li>
          <li><strong>Deskripsi yang jelas membantu penanggung jawab</strong> — jelaskan persyaratan dan hasil yang diharapkan</li>
          <li><strong>Pindahkan tugas ke &quot;Selesai&quot; setelah dikerjakan</strong> — agar progres tim selalu terlihat akurat</li>
          <li><strong>Gunakan drag and drop untuk efisiensi</strong> — lebih cepat dari mengubah status melalui form edit</li>
        </ul>
      </Callout>

      <hr />

      <h2>Log Harian (Daily Log)</h2>

      <h3>Apa itu Log Harian</h3>

      <p>Log Harian adalah fitur pencatatan aktivitas harian anggota tim. Setiap anggota bisa membuat log tentang apa yang sudah dikerjakan hari ini, lengkap dengan lampiran dan format rich text. Log harian sangat berguna untuk dokumentasi pekerjaan, tracking progress, dan laporan kegiatan kepada pimpinan.</p>

      <p>Dengan log harian, Team Leader dapat melihat ringkasan aktivitas seluruh anggota tanpa perlu bertanya satu per satu. Anggota juga memiliki catatan pribadi tentang pencapaian mereka selama bekerja.</p>

      <PlaceholderImage alt="Log Harian" caption="Tampilan kartu Log Harian dengan avatar penulis dan preview konten" />

      <hr />

      <h3>Membuat Log Harian</h3>

      <Steps>
        <Step number={1} title="Buka Menu Log Harian">
          Navigasi ke <strong>Produktivitas → Log Harian</strong> dari sidebar. Halaman log harian akan menampilkan log dari seluruh anggota tim dalam format grid kartu.
        </Step>
        <Step number={2} title="Klik Buat Log Baru">
          Tekan tombol <strong>Buat Log Baru</strong> atau <strong>Tambah Log</strong>. Formulir pembuatan log akan terbuka.
        </Step>
        <Step number={3} title="Isi Judul Log">
          Beri judul yang ringkas namun deskriptif untuk log hari ini. Contoh: &quot;Pengerjaan Fitur Login&quot;, &quot;Meeting dengan Klien&quot;, &quot;Perbaikan Bug Dashboard&quot;.
        </Step>
        <Step number={4} title="Isi Konten Log">
          Gunakan editor rich text untuk menulis detail aktivitas hari ini. Anda bisa menggunakan:
          <ul>
            <li><strong>Bold</strong> untuk poin penting</li>
            <li><em>Italic</em> untuk catatan tambahan</li>
            <li><strong>List</strong> untuk merincikan aktivitas</li>
            <li><strong>Heading</strong> untuk membagi bagian</li>
          </ul>
        </Step>
        <Step number={5} title="Unggah Lampiran (Opsional)">
          Lampirkan file pendukung jika diperlukan, seperti foto kegiatan, screenshot hasil kerja, atau dokumen pendukung. Format yang didukung: PDF, DOC, DOCX, PNG, JPG, JPEG.
        </Step>
        <Step number={6} title="Pilih Tanggal Log">
          Tanggal log otomatis terisi hari ini. Anda bisa mengubah tanggal jika ingin mencatat aktivitas di hari yang berbeda.
        </Step>
        <Step number={7} title="Simpan Log">
          Klik <strong>Simpan</strong> untuk menyimpan log harian. Log akan langsung muncul di halaman log harian.
        </Step>
      </Steps>

      <hr />

      <h3>Melihat Log Harian</h3>

      <p>Halaman Log Harian menampilkan log dari seluruh anggota tim dalam format grid 2-3 kolom. Setiap kartu log menampilkan:</p>

      <table>
        <thead>
          <tr>
            <th>Informasi</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Avatar Penulis</strong></td>
            <td>Foto profil anggota yang membuat log</td>
          </tr>
          <tr>
            <td><strong>Nama Penulis</strong></td>
            <td>Nama lengkap anggota</td>
          </tr>
          <tr>
            <td><strong>Tanggal</strong></td>
            <td>Tanggal log dibuat</td>
          </tr>
          <tr>
            <td><strong>Judul Log</strong></td>
            <td>Judul ringkasan aktivitas</td>
          </tr>
          <tr>
            <td><strong>Preview Konten</strong></td>
            <td>Cuplikan singkat dari isi log</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h3>Filter dan Pencarian Log</h3>

      <p>Anda bisa mempersempit tampilan log dengan menggunakan filter yang tersedia:</p>

      <ul>
        <li><strong>FilterTanggal</strong> — pilih rentang tanggal (start_date dan end_date) untuk melihat log periode tertentu</li>
        <li><strong>Filter Anggota</strong> — tampilkan log dari anggota tertentu saja</li>
        <li><strong>Pencarian</strong> — cari log berdasarkan judul atau konten</li>
      </ul>

      <hr />

      <h3>Export Log Harian</h3>

      <p>Anda bisa mengekspor log harian untuk keperluan laporan atau dokumentasi:</p>

      <Steps>
        <Step number={1} title="Buka Halaman Log Harian">
          Navigasi ke <strong>Produktivitas → Log Harian</strong>. Pastikan filter sudah sesuai dengan log yang ingin diekspor.
        </Step>
        <Step number={2} title="Klik Tombol Export">
          Tekan tombol <strong>Export</strong> yang tersedia di halaman log harian. File akan diunduh dalam format yang tersedia (PDF atau format lainnya).
        </Step>
        <Step number={3} title="Gunakan File Export">
          File yang sudah diunduh bisa digunakan untuk laporan periodik, presentasi, atau dokumentasi resmi tim.
        </Step>
      </Steps>

      <Callout variant="info" title="Akses Log Harian">
        Semua anggota tim bisa melihat log dari anggota lain. Namun, hanya pemilik log yang bisa mengedit atau menghapus log miliknya sendiri. Team Leader memiliki akses penuh ke semua log anggota.
      </Callout>

      <hr />

      <h3>Tips Log Harian</h3>

      <Callout variant="tip" title="Tips Log Harian">
        <ul>
          <li><strong>Isi log setiap hari secara konsisten</strong> — kebiasaan ini membantu tracking dan evaluasi kerja</li>
          <li><strong>Gunakan format yang konsisten</strong> — agar mudah dibaca oleh Team Leader dan anggota lain</li>
          <li><strong>Lampirkan bukti jika ada</strong> — screenshot atau foto membantu memperkuat laporan</li>
          <li><strong>Tulis secara spesifik</strong> — hindari deskripsi terlalu umum seperti &quot;bekerja hari ini&quot;</li>
          <li><strong>Manfaatkan fitur export</strong> — gunakan untuk laporan periodik kepada pimpinan</li>
        </ul>
      </Callout>

      <hr />

      <h2>Tips dan Best Practice Produktivitas</h2>

      <Callout variant="tip" title="Tips Produktivitas Tim">
        <ul>
          <li><strong>Update status tugas secara real-time</strong> — seret kartu ke kolom yang sesuai agar semua anggota tahu progres</li>
          <li><strong>Buat log harian setiap hari</strong> — kebiasaan ini membantu tracking, evaluasi, dan laporan kerja</li>
          <li><strong>Gunakan deskripsi rich text</strong> — format teks membuat penjelasan tugas lebih jelas dan mudah dipahami</li>
          <li><strong>Atur tenggat waktu untuk semua tugas</strong> — tugas tanpa deadline cenderung tertunda dan tidak selesai</li>
          <li><strong>Review log secara berkala</strong> — manfaatkan fitur export untuk laporan periodik kepada pimpinan</li>
        </ul>
      </Callout>

      <h3>Format Status dan Kode yang Digunakan</h3>

      <table>
        <thead>
          <tr>
            <th>Kode</th>
            <th>Label</th>
            <th>Warna</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>todo</code></td>
            <td>To Do</td>
            <td>Abu-abu</td>
            <td>Tugas belum dikerjakan</td>
          </tr>
          <tr>
            <td><code>in_progress</code></td>
            <td>Proses</td>
            <td>Biru</td>
            <td>Tugas sedang dikerjakan</td>
          </tr>
          <tr>
            <td><code>done</code></td>
            <td>Selesai</td>
            <td>Hijau</td>
            <td>Tugas sudah selesai</td>
          </tr>
          <tr>
            <td><code>low</code></td>
            <td>Rendah</td>
            <td>Abu-abu</td>
            <td>Tidak mendesak</td>
          </tr>
          <tr>
            <td><code>medium</code></td>
            <td>Sedang</td>
            <td>Kuning</td>
            <td>Perlu dikerjakan segera</td>
          </tr>
          <tr>
            <td><code>high</code></td>
            <td>Tinggi</td>
            <td>Merah</td>
            <td>Mendesak, harus sekarang</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
