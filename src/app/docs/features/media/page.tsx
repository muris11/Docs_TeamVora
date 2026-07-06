"use client"

import { Callout } from "@/components/docs/callout"
import { Steps, Step } from "@/components/docs/steps"


export default function MediaPage() {
  return (
    <>
      <h1>Fitur Media</h1>

      <p>Panduan mengelola dokumen dan galeri tim di TeamVora. Fitur ini menyediakan penyimpanan terpusat untuk semua file yang dibutuhkan tim, mulai dari dokumen kerja hingga gambar untuk keperluan publikasi. Semua anggota tim bisa mengunggah, mengelola, dan mengakses file yang tersimpan.</p>

      <Callout variant="info" title="Tentang Fitur Media">
        Fitur Media dibagi menjadi dua bagian: <strong>Dokumen</strong> untuk file non-gambar (PDF, Word, Excel) dan <strong>Galeri</strong> untuk gambar (JPG, PNG, GIF). Keduanya menyediakan penyimpanan terpusat yang bisa diakses oleh seluruh anggota tim.
      </Callout>

      <hr />

      <h2>Dokumen</h2>

      <h3>Apa itu Dokumen</h3>

      <p>Dokumen adalah fitur penyimpanan file untuk tim. Anda bisa mengunggah dokumen penting seperti kontrak kerja, laporan keuangan, proposal proyek, atau file kerja lainnya. Semua anggota tim bisa mengakses dokumen yang diunggah, sehingga tidak ada dokumen yang tersembunyi atau sulit ditemukan.</p>

      <p>Fitur Dokumen menampilkan semua file dalam format grid kartu yang rapi. Setiap kartu menampilkan informasi lengkap tentang file, termasuk nama, ukuran, tipe file, dan siapa yang mengunggahnya.</p>

      <figure className="my-8"><img src="/images/halaman-dokumen.png" alt="Halaman Dokumen" className="w-full rounded-xl border border-border/50" /><figcaption className="mt-3 text-center text-xs text-muted-foreground">Tampilan halaman Dokumen dengan grid kartu file</figcaption></figure>

      <hr />

      <h3>Mengunggah Dokumen</h3>

      <Steps>
        <Step number={1} title="Buka Menu Dokumen">
          Navigasi ke menu <strong>Media → Dokumen</strong> dari sidebar. Halaman Dokumen akan menampilkan daftar semua dokumen yang sudah diunggah oleh anggota tim.
        </Step>
        <Step number={2} title="Klik Unggah Dokumen">
          Tekan tombol <strong>Unggah Dokumen</strong> atau <strong>Unggah</strong> yang terletak di pojok kanan atas. Anda juga bisa menyeret file langsung ke area upload.
        </Step>
        <Step number={3} title="Pilih File dari Komputer">
          Pilih file dokumen yang ingin diunggah dari komputer Anda. Pastikan file sesuai dengan format yang didukung dan tidak melebihi batas ukuran maksimal.
        </Step>
        <Step number={4} title="Beri Nama Dokumen">
          Setelah file dipilih, beri nama tampilan yang deskriptif untuk dokumen ini. Nama yang jelas memudahkan anggota lain menemukan dokumen yang dibutuhkan.
        </Step>
        <Step number={5} title="Unggah dan Tunggu Proses">
          Klik <strong>Unggah</strong> untuk memulai proses unggah. Tunggu hingga proses selesai. Dokumen baru akan langsung muncul di daftar dokumen.
        </Step>
      </Steps>

      <hr />

      <h3>Mengelola Dokumen</h3>

      <p>Setiap dokumen memiliki beberapa aksi yang tersedia:</p>

      <table>
        <thead>
          <tr>
            <th>Aksi</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Edit (Rename)</strong></td>
            <td>Mengubah nama tampilan dokumen tanpa mengubah file asli</td>
          </tr>
          <tr>
            <td><strong>Salin URL</strong></td>
            <td>Menyalin link langsung ke dokumen untuk dibagikan ke anggota lain</td>
          </tr>
          <tr>
            <td><strong>Hapus</strong></td>
            <td>Menghapus dokumen dari penyimpanan secara permanen</td>
          </tr>
          <tr>
            <td><strong>Buka</strong></td>
            <td>Membuka dokumen di tab baru browser untuk melihat isinya</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Informasi yang Tersedia pada Setiap Dokumen:</strong></p>

      <ul>
        <li><strong>Nama File</strong> — nama file seperti yang diunggah</li>
        <li><strong>Diunggah Oleh</strong> — nama anggota yang mengunggah file</li>
        <li><strong>Ukuran</strong> — ukuran file dalam MB atau KB</li>
        <li><strong>Tipe File</strong> — MIME type (contoh: <code>application/pdf</code>, <code>application/msword</code>)</li>
        <li><strong>Tanggal Unggah</strong> — kapan file diunggah ke sistem</li>
      </ul>

      <Callout variant="info" title="Membuka Dokumen">
        Klik kartu dokumen untuk membuka file di tab baru browser. Pastikan browser Anda mendukung preview format file yang diunggah. Misalnya, browser modern sudah mendukung preview PDF dan gambar secara native.
      </Callout>

      <hr />

      <h3>Format Dokumen yang Didukung</h3>

      <table>
        <thead>
          <tr>
            <th>Format</th>
            <th>Ekstensi</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PDF</td>
            <td><code>.pdf</code></td>
            <td>Dokumen Portable Document Format</td>
          </tr>
          <tr>
            <td>Microsoft Word</td>
            <td><code>.doc</code>, <code>.docx</code></td>
            <td>Dokumen Word dari Microsoft Office</td>
          </tr>
          <tr>
            <td>Microsoft Excel</td>
            <td><code>.xls</code>, <code>.xlsx</code></td>
            <td>Spreadsheet dari Microsoft Office</td>
          </tr>
          <tr>
            <td>Microsoft PowerPoint</td>
            <td><code>.ppt</code>, <code>.pptx</code></td>
            <td>Presentasi dari Microsoft Office</td>
          </tr>
          <tr>
            <td>Teks</td>
            <td><code>.txt</code></td>
            <td>File teks biasa tanpa format</td>
          </tr>
          <tr>
            <td>CSV</td>
            <td><code>.csv</code></td>
            <td>Comma-Separated Values untuk data tabular</td>
          </tr>
        </tbody>
      </table>

      <Callout variant="warning" title="Batas Ukuran File">
        Ukuran maksimal setiap file adalah <strong>10MB</strong>. Pastikan ukuran file tidak melebihi batas ini sebelum mengunggah. Jika file terlalu besar, kompres terlebih dahulu atau bagi menjadi beberapa bagian kecil.
      </Callout>

      <hr />

      <h3>Tips Mengelola Dokumen</h3>

      <Callout variant="tip" title="Tips Dokumen">
        <ul>
          <li><strong>Beri nama deskriptif</strong> — gunakan nama yang jelas dan terstruktur (contoh: &quot;Laporan-Keuangan-November-2024.pdf&quot;)</li>
          <li><strong>Gunakan format yang konsisten</strong> — pilih format standar untuk setiap jenis dokumen</li>
          <li><strong>Hapus dokumen yang tidak diperlukan</strong> — jaga agar penyimpanan tetap rapi dan tidak penuh</li>
          <li><strong>Salin URL untuk dibagikan</strong> — gunakan fitur Salin URL untuk membagikan file ke anggota lain atau di luar tim</li>
          <li><strong>Periksa ukuran file</strong> — pastikan ukuran file sesuai batas upload sebelum mengunggah</li>
        </ul>
      </Callout>

      <hr />

      <h2>Galeri</h2>

      <h3>Apa itu Galeri</h3>

      <p>Galeri adalah fitur penyimpanan gambar untuk tim. Gambar yang diunggah bisa digunakan untuk blog, profil tim, postingan media sosial, atau keperluan lainnya. Galeri menyediakan tampilan grid yang optimal untuk preview gambar, termasuk fitur lightbox untuk melihat gambar dalam ukuran penuh.</p>

      <p>Berbeda dengan Dokumen yang fokus pada file kerja, Galeri dioptimasi khusus untuk gambar sehingga Anda bisa melihat preview sebelum mengunduh atau menggunakannya.</p>

      <figure className="my-8"><img src="/images/galeri-media.png" alt="Galeri Media" className="w-full rounded-xl border border-border/50" /><figcaption className="mt-3 text-center text-xs text-muted-foreground">Tampilan Galeri dengan grid gambar responsif dan preview</figcaption></figure>

      <hr />

      <h3>Mengunggah Gambar</h3>

      <Steps>
        <Step number={1} title="Buka Menu Galeri">
          Navigasi ke <strong>Media → Galeri</strong> dari sidebar. Halaman Galeri akan menampilkan semua gambar yang sudah diunggah dalam format grid.
        </Step>
        <Step number={2} title="Klik Unggah Gambar">
          Tekan tombol <strong>Unggah Gambar</strong> atau <strong>Unggah</strong>. Anda juga bisa menyeret gambar langsung ke area upload.
        </Step>
        <Step number={3} title="Pilih Gambar dari Komputer">
          Pilih gambar yang ingin diunggah. Pastikan gambar dalam format yang didukung dan tidak melebihi batas ukuran.
        </Step>
        <Step number={4} title="Beri Nama Gambar">
          Beri nama tampilan yang deskriptif untuk gambar. Nama yang jelas memudahkan pencarian di kemudian hari.
        </Step>
        <Step number={5} title="Unggah dan Tunggu Proses">
          Klik <strong>Unggah</strong> untuk memulai proses. Tunggu hingga gambar berhasil diunggah dan muncul di galeri.
        </Step>
      </Steps>

      <hr />

      <h3>Melihat Gambar di Galeri</h3>

      <p>Galeri menyediakan beberapa cara untuk melihat gambar:</p>

      <p><strong>Tampilan Grid:</strong></p>

      <ul>
        <li>Gambar ditampilkan dalam grid responsif (2-4 kolom tergantung ukuran layar)</li>
        <li>Setiap gambar menampilkan preview thumbnail</li>
        <li>Nama file ditampilkan di bawah thumbnail</li>
      </ul>

      <p><strong>Lightbox (Tampilan Penuh):</strong></p>

      <ol>
        <li>Klik pada gambar di galeri</li>
        <li>Lightbox akan terbuka menampilkan gambar dalam ukuran penuh</li>
        <li>Di lightbox Anda bisa melihat:
          <ul>
            <li>Gambar dalam resolusi penuh</li>
            <li>Nama file</li>
            <li>Diunggah oleh siapa</li>
            <li>Tanggal upload</li>
          </ul>
        </li>
        <li>Klik tombol <strong>X</strong> atau area luar gambar untuk menutup lightbox</li>
      </ol>

      <hr />

      <h3>Aksi pada Gambar</h3>

      <table>
        <thead>
          <tr>
            <th>Aksi</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Edit (Rename)</strong></td>
            <td>Mengubah nama tampilan gambar tanpa mengubah file asli</td>
          </tr>
          <tr>
            <td><strong>Salin URL</strong></td>
            <td>Menyalin link langsung ke gambar untuk digunakan di blog, profil, atau keperluan lain</td>
          </tr>
          <tr>
            <td><strong>Hapus</strong></td>
            <td>Menghapus gambar dari galeri secara permanen</td>
          </tr>
          <tr>
            <td><strong>Lihat</strong></td>
            <td>Membuka lightbox untuk melihat gambar dalam ukuran penuh</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h3>Format Gambar yang Didukung</h3>

      <table>
        <thead>
          <tr>
            <th>Format</th>
            <th>Ekstensi</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>JPEG</td>
            <td><code>.jpg</code>, <code>.jpeg</code></td>
            <td>Format gambar standar untuk foto</td>
          </tr>
          <tr>
            <td>PNG</td>
            <td><code>.png</code></td>
            <td>Gambar dengan dukungan transparansi</td>
          </tr>
          <tr>
            <td>GIF</td>
            <td><code>.gif</code></td>
            <td>Gambar animasi atau statis</td>
          </tr>
          <tr>
            <td>WebP</td>
            <td><code>.webp</code></td>
            <td>Format gambar modern dengan kompresi lebih baik</td>
          </tr>
          <tr>
            <td>SVG</td>
            <td><code>.svg</code></td>
            <td>Gambar vektor untuk logo dan ikon</td>
          </tr>
        </tbody>
      </table>

      <Callout variant="info" title="Format SVG">
        Format SVG (Scalable Vector Graphics) sangat direkomendasikan untuk logo dan ikon karena bisa diubah ukurannya tanpa kehilangan kualitas. Gunakan SVG untuk logo tim atau gambar vektor lainnya.
      </Callout>

      <hr />

      <h3>Tips Galeri</h3>

      <Callout variant="tip" title="Tips Galeri">
        <ul>
          <li><strong>Gunakan Galeri untuk semua gambar</strong> — gambar di Galeri memiliki preview yang lebih baik dibanding Dokumen</li>
          <li><strong>Salin URL untuk digunakan di blog</strong> — gambar dari Galeri bisa langsung disisipkan ke artikel blog</li>
          <li><strong>Kompres gambar sebelum upload</strong> — ukuran yang lebih kecil membuat upload lebih cepat</li>
          <li><strong>Gunakan format yang tepat</strong> — JPG untuk foto, PNG untuk gambar transparan, SVG untuk logo</li>
          <li><strong>Hapus gambar yang sudah tidak dipakai</strong> — jaga agar galeri tetap rapi</li>
        </ul>
      </Callout>

      <hr />

      <h2>Format yang Didukung Secara Lengkap</h2>

      <h3>Dokumen</h3>

      <table>
        <thead>
          <tr>
            <th>Format</th>
            <th>Ekstensi</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PDF</td>
            <td><code>.pdf</code></td>
            <td>Dokumen PDF</td>
          </tr>
          <tr>
            <td>Microsoft Word</td>
            <td><code>.doc</code>, <code>.docx</code></td>
            <td>Dokumen Word</td>
          </tr>
          <tr>
            <td>Microsoft Excel</td>
            <td><code>.xls</code>, <code>.xlsx</code></td>
            <td>Spreadsheet</td>
          </tr>
          <tr>
            <td>Microsoft PowerPoint</td>
            <td><code>.ppt</code>, <code>.pptx</code></td>
            <td>Presentasi</td>
          </tr>
          <tr>
            <td>Teks</td>
            <td><code>.txt</code></td>
            <td>File teks biasa</td>
          </tr>
          <tr>
            <td>CSV</td>
            <td><code>.csv</code></td>
            <td>Data tabular</td>
          </tr>
        </tbody>
      </table>

      <h3>Gambar (Galeri)</h3>

      <table>
        <thead>
          <tr>
            <th>Format</th>
            <th>Ekstensi</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>JPEG</td>
            <td><code>.jpg</code>, <code>.jpeg</code></td>
            <td>Foto standar</td>
          </tr>
          <tr>
            <td>PNG</td>
            <td><code>.png</code></td>
            <td>Gambar dengan transparansi</td>
          </tr>
          <tr>
            <td>GIF</td>
            <td><code>.gif</code></td>
            <td>Gambar animasi</td>
          </tr>
          <tr>
            <td>WebP</td>
            <td><code>.webp</code></td>
            <td>Format gambar modern</td>
          </tr>
          <tr>
            <td>SVG</td>
            <td><code>.svg</code></td>
            <td>Gambar vektor</td>
          </tr>
        </tbody>
      </table>

      <h3>Lampiran Log Harian</h3>

      <table>
        <thead>
          <tr>
            <th>Format</th>
            <th>Ekstensi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PDF</td>
            <td><code>.pdf</code></td>
          </tr>
          <tr>
            <td>Microsoft Word</td>
            <td><code>.doc</code>, <code>.docx</code></td>
          </tr>
          <tr>
            <td>JPEG</td>
            <td><code>.jpg</code>, <code>.jpeg</code></td>
          </tr>
          <tr>
            <td>PNG</td>
            <td><code>.png</code></td>
          </tr>
        </tbody>
      </table>

      <Callout variant="warning" title="Batas Ukuran File">
        Untuk semua jenis file, ukuran maksimal adalah <strong>10MB per file</strong>. Pastikan ukuran file sesuai batas ini sebelum mengunggah. Jika file terlalu besar, gunakan tools kompresi untuk memperkecil ukuran.
      </Callout>

      <hr />

      <h2>Tips dan Best Practice Media</h2>

      <Callout variant="tip" title="Tips Media Tim">
        <ul>
          <li><strong>Beri nama deskriptif</strong> — gunakan nama yang jelas agar mudah ditemukan (contoh: &quot;Laporan-Keuangan-November-2024.pdf&quot;)</li>
          <li><strong>Gunakan Galeri untuk gambar</strong> — gambar di Galeri memiliki preview yang lebih baik dan fitur lightbox</li>
          <li><strong>Salin URL untuk dibagikan</strong> — gunakan fitur Salin URL untuk membagikan file ke anggota lain</li>
          <li><strong>Hapus file yang tidak diperlukan</strong> — jaga agar galeri dan dokumen tetap rapi dan tidak penuh</li>
          <li><strong>Periksa ukuran file</strong> — pastikan ukuran file sesuai batas upload sebelum mengunggah</li>
        </ul>
      </Callout>
    </>
  )
}
