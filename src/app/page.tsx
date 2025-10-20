import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Menggunakan react-icons yang sudah diinstal

export default function Home() {
  return (
    <div className="portfolio-container">
      {/* Bagian Header/Intro */}
      <header className="hero-section">
        <img src="https://via.placeholder.com/150" alt="Foto Profil Anda" className="profile-picture" />
        <h1>Halo, Saya [Nama Anda]</h1>
        <p className="tagline">Pengembang Web | [Spesialisasi Anda, misal: Frontend Developer]</p>
        <div className="social-links">
          <a href="https://github.com/nama_github_anda" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/nama_linkedin_anda" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:email_anda@example.com">
            <FaEnvelope size={30} />
          </a>
        </div>
      </header>

      {/* Bagian About Me */}
      <section className="about-me-section">
        <h2>Tentang Saya</h2>
        <p>
          Saya adalah seorang pengembang web yang antusias dengan pengalaman dalam membangun aplikasi web yang responsif dan berkinerja tinggi. Saya suka belajar teknologi baru dan menciptakan solusi yang elegan dan efisien.
        </p>
        <p>
          [Tambahkan lebih banyak detail tentang diri Anda, passion, atau tujuan karir Anda di sini.]
        </p>
      </section>

      {/* Bagian Keahlian */}
      <section className="skills-section">
        <h2>Keahlian</h2>
        <div className="skills-grid">
          <span>React.js</span>
          <span>Next.js</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>Git & GitHub</span>
          {/* Tambahkan keahlian lain Anda */}
        </div>
      </section>

      {/* Bagian Proyek */}
      <section className="projects-section">
        <h2>Proyek Saya</h2>
        <div className="projects-grid">
          {/* Contoh Proyek 1 */}
          <div className="project-card">
            <h3>Nama Proyek 1</h3>
            <p>Deskripsi singkat proyek ini. Apa yang Anda lakukan dan teknologi apa yang digunakan.</p>
            <a href="https://github.com/link_proyek_1" target="_blank" rel="noopener noreferrer" className="project-link">Lihat di GitHub <FaGithub /></a>
          </div>
          {/* Contoh Proyek 2 */}
          <div className="project-card">
            <h3>Nama Proyek 2</h3>
            <p>Deskripsi singkat proyek ini. Fokus pada fitur atau tantangan yang diatasi.</p>
            <a href="https://github.com/link_proyek_2" target="_blank" rel="noopener noreferrer" className="project-link">Lihat di GitHub <FaGithub /></a>
          </div>
          {/* Tambahkan lebih banyak proyek sesuai keinginan */}
        </div>
      </section>

      {/* Bagian Footer/Kontak */}
      <footer className="contact-section">
        <h2>Hubungi Saya</h2>
        <p>Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi!</p>
        <p>Email: <a href="mailto:email_anda@example.com">email_anda@example.com</a></p>
        <p>Telepon: [Nomor Telepon Anda (opsional)]</p>
        <p>&copy; {new Date().getFullYear()} [Nama Anda]. All rights reserved.</p>
      </footer>
    </div>
  );
}