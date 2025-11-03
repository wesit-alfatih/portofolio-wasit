import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Menggunakan react-icons yang sudah diinstal
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    // <navbar />
    <div className="portfolio-container">
      {}
      <header className="hero-section">
        <img src="fotoberdiri,jpg" alt="Foto Profil Anda" className="profile-picture" />
        <h1>Hi! I am Wesitstiven 🙇</h1>
        <p className="tagline">Creative Enthusiast | Ready for take your a Moment</p>
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
        <Navbar />
      {}
      <section className="about-me-section">
        <h2>Tentang Saya</h2>
        <p>
          Saya adalah seorang yang suka mengabadikan moment dan saya menyukai moment yang saya abadikan.
        </p>
        <p>
          
        </p>
      </section>

      {}
      <section className="skills-section">
        <h2>Keahlian</h2>
        <div className="skills-grid">
          <span>Editing Video</span>
          <span>Desain</span>
          <span>Typography</span>
          <span>Feed Nyambung</span>
          {}
        </div>
      </section>

      {}
      <section className="projects-section">
        <h2>Proyek Saya</h2>
        <div className="projects-grid">
          {}
          <div className="project-card">
            <h3>Creative Video</h3>
            <p>Membuat Video kreative setiap moment di organisasi .</p>
            <a href="https://www.instagram.com/reel/DB3LZ7ly_iq/?igsh=MTJ5OGF6azcwNGR6Ng==" target="_blank" rel="noopener noreferrer" className="project-link">Lihat feed video</a>
          </div>
          {}
          <div className="project-card">
            <h3>Frelance</h3>
            <p>Mengabadikan event Engagement and Wedding.</p>
            <a href="https://vt.tiktok.com/ZSUgKtErE/" target="_blank" rel="noopener noreferrer" className="project-link">Lihat portoVideo</a>
          </div>
          {}
        </div>
      </section>

      {}
      <footer className="contact-section">
        <h2>Hubungi Saya</h2>
        <p>Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi!</p>
        <p>Email: <a href="mailto:email_abdulwesit08@gmail.com">email_abdulwesit08.com</a></p>
        <p>WhatsApp: 083128740608</p>
        <p>Instagram: eunola.05</p>
        <p>Tiktok: @wesitstiven_</p>
        <p>&copy; {new Date().getFullYear()} Wesitstvn. All rights reserved.</p>
      </footer>
    </div>
  );
}