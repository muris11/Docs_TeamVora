"use client";

import { Callout } from "@/components/docs/callout";
import { Steps, Step } from "@/components/docs/steps";


export default function TeamLeaderGuidePage() {
  return (
    <>
      <h2>Membuat Tim</h2>

      <p>
        Sebagai Team Leader, Anda dapat membuat tim baru untuk mulai bekerja
        sama.
      </p>

      <Steps>
        <Step number={1} title="Buka menu tim">
          Klik ikon tim di sidebar, lalu pilih <strong>Buat Tim Baru</strong>.
        </Step>
        <Step number={2} title="Isi detail tim">
          Masukkan nama tim, deskripsi singkat, dan pilih kategori yang sesuai.
        </Step>
        <Step number={3} title="Konfigurasi pengaturan">
          Atur pengaturan visibilitas tim (publik atau privat) dan preferensi
          notifikasi.
        </Step>
        <Step number={4} title="Selesai">
          Tim Anda sudah dibuat. Anda akan otomatis menjadi Team Leader.
        </Step>
      </Steps>

      <img src="/images/form-buat-tim.png" alt="Formulir pembuatan tim baru" className="w-full rounded-xl border border-border/50" />

      <Callout variant="tip">
        Pilih nama tim yang jelas dan deskriptif agar anggota baru mudah
        mengenali tim Anda.
      </Callout>

      <h2>Mengundang Anggota</h2>

      <p>
        Setelah tim dibuat, Anda bisa mengundang anggota untuk bergabung.
      </p>

      <Steps>
        <Step number={1} title="Buka pengaturan tim">
          Navigasi ke <strong>Pengaturan Tim</strong> → <strong>Anggota</strong>.
        </Step>
        <Step number={2} title="Klik Undang Anggota">
          Klik tombol <strong>Undang Anggota</strong> di pojok kanan atas.
        </Step>
        <Step number={3} title="Masukkan email">
          Masukkan alamat email anggota yang ingin diundang. Anda bisa mengundang
          beberapa sekaligus.
        </Step>
        <Step number={4} title="Pilih peran">
          Tentukan peran untuk setiap anggota: <strong>Admin</strong>,{" "}
          <strong>Member</strong>, atau <strong>Viewer</strong>.
        </Step>
        <Step number={5} title="Kirim undangan">
          Klik <strong>Kirim Undangan</strong>. Anggota akan menerima email
          undangan.
        </Step>
      </Steps>

      <img src="/images/halaman-undang-anggota.png" alt="Halaman undang anggota tim" className="w-full rounded-xl border border-border/50" />

      <h2>Mengelola Anggota Tim</h2>

      <p>Anda memiliki kontrol penuh atas keanggotaan tim.</p>

      <h3>Peran dan Izin</h3>

      <table>
        <thead>
          <tr>
            <th>Peran</th>
            <th>Izin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Team Leader</strong>
            </td>
            <td>Akses penuh, kelola semua aspek tim</td>
          </tr>
          <tr>
            <td>
              <strong>Admin</strong>
            </td>
            <td>Kelola anggota, pengaturan, dan konten</td>
          </tr>
          <tr>
            <td>
              <strong>Member</strong>
            </td>
            <td>Akses fitur inti, kelola tugas dan konten sendiri</td>
          </tr>
          <tr>
            <td>
              <strong>Viewer</strong>
            </td>
            <td>Hanya melihat, tidak dapat mengubah</td>
          </tr>
        </tbody>
      </table>

      <h3>Mengubah Peran Anggota</h3>

      <Steps>
        <Step number={1} title="Buka daftar anggota">
          Navigasi ke <strong>Pengaturan Tim</strong> → <strong>Anggota</strong>.
        </Step>
        <Step number={2} title="Pilih anggota">
          Klik nama anggota yang ingin diubah perannya.
        </Step>
        <Step number={3} title="Ubah peran">
          Pilih peran baru dari dropdown, lalu klik <strong>Simpan</strong>.
        </Step>
      </Steps>

      <h3>Menghapus Anggota</h3>

      <Callout variant="warning">
        Menghapus anggota dari tim bersifat permanen. Anggota yang dihapus akan
        kehilangan akses ke semua konten tim.
      </Callout>

      <p>
        Untuk menghapus anggota, buka daftar anggota → pilih anggota → klik{" "}
        <strong>Hapus dari Tim</strong>.
      </p>

      <h2>Dashboard Team Leader</h2>

      <p>
        Sebagai Team Leader, Anda memiliki tampilan dashboard yang lebih
        lengkap.
      </p>

      <img src="/images/dashboard-team-leader.png" alt="Dashboard Team Leader" className="w-full rounded-xl border border-border/50" />

      <h3>Yang Anda Lihat</h3>

      <ul>
        <li>
          <strong>Ringkasan Tim</strong> — jumlah anggota, tugas aktif, dan
          anggaran
        </li>
        <li>
          <strong>Aktivitas Terbaru</strong> — alur aktivitas dari seluruh
          anggota tim
        </li>
        <li>
          <strong>Tugas Mendatang</strong> — deadline yang perlu diperhatikan
        </li>
        <li>
          <strong>Laporan Keuangan</strong> — ringkasan pengeluaran dan anggaran
          tim
        </li>
        <li>
          <strong>Notifikasi</strong> — permintaan akses, undangan baru, dan
          pembaruan penting
        </li>
      </ul>

      <h3>Statistik Performa</h3>

      <p>Dashboard menampilkan metrik performa tim:</p>

      <ul>
        <li>Tingkat penyelesaian tugas</li>
        <li>Penggunaan anggaran vs alokasi</li>
        <li>Tingkat partisipasi anggota</li>
        <li>Timeline proyek aktif</li>
      </ul>

      <h2>Mengelola Profil Tim</h2>

      <p>Anda dapat memperbarui informasi tim kapan saja.</p>

      <Steps>
        <Step number={1} title="Buka pengaturan tim">
          Klik <strong>Pengaturan Tim</strong> di sidebar.
        </Step>
        <Step number={2} title="Edit informasi">
          Ubah nama tim, deskripsi, logo, atau pengaturan lainnya.
        </Step>
        <Step number={3} title="Simpan perubahan">
          Klik <strong>Simpan</strong> untuk menerapkan perubahan.
        </Step>
      </Steps>

      <Callout variant="info">
        Perubahan pada profil tim akan terlihat oleh semua anggota secara
        real-time.
      </Callout>
    </>
  );
}
