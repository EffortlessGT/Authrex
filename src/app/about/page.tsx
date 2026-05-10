import { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Founder from "../assets/img/Founder.jpeg";
import "./about.css";

export const metadata: Metadata = {
  title: "About Us - Authrex",
  description: "Adaptive authentication infrastructure built for control, security, and scale.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="about-main-container">
        <section className="about-hero">
          <h1>About AUTHREX</h1>
          <h2>Adaptive authentication infrastructure built for control, security, and scale.</h2>
          <div className="about-hero-content">
            <p>
              AUTHREX exists to give developers and security teams complete control over authentication workflows without compromising on security or user experience. Traditional authentication systems force you into rigid patterns and lock you into specific UI implementations.
            </p>
            <p>
              We built AUTHREX with a security-first philosophy, ensuring every authentication decision is based on real-time risk assessment and contextual signals. Our API-first, headless design means you control the logic, the flow, and the user interface.
            </p>
            <p>
              <strong>AUTHREX is infrastructure-grade authentication that adapts to your needs, not the other way around.</strong>
            </p>
          </div>
        </section>

        <section className="about-philosophy-section">
          <div className="about-philosophy-grid">
            <div className="philosophy-card">
              <i className="fa-solid fa-shield-halved"></i>
              <h3>Security-first by design</h3>
              <p>Every feature is built with security as the foundation, not an afterthought. Our architecture assumes zero trust by default.</p>
            </div>
            <div className="philosophy-card">
              <i className="fa-solid fa-code"></i>
              <h3>Developer-controlled workflows</h3>
              <p>Complete control over authentication logic, policies, and user flows via flexible APIs and comprehensive SDKs.</p>
            </div>
            <div className="philosophy-card">
              <i className="fa-solid fa-brain"></i>
              <h3>Adaptive, risk-aware access</h3>
              <p>Real-time risk assessment that continuously adapts to user behavior, location, and device context to step up security when needed.</p>
            </div>
            <div className="philosophy-card">
              <i className="fa-solid fa-server"></i>
              <h3>Infrastructure-grade reliability</h3>
              <p>Built to scale effortlessly with enterprise-level uptime guarantees, multi-region redundancy, and extreme low latency.</p>
            </div>
          </div>
        </section>

        <section className="about-team-section">
          <h2>Built by Engineer</h2>
          <p>AUTHREX is designed and maintained by engineers focused on secure systems and backend infrastructure.</p>

          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">
                <Image src={Founder} height={50} width={50} alt="Profile" />
              </div>
              <h3>Ganesh Telore</h3>
              <div className="team-role">Founder & Full System Engineer</div>
              <p>Backend Engineer, Specializing in secure backend systems, identity architecture, and highly concurrent distributed systems.</p>
            </div>
          </div>
        </section>

        <section className="about-mission-section">
          <h2>Built by engineers. Designed for trust.</h2>
          <p>
            AUTHREX is built with responsibility, transparency, and long-term security in mind. Every design decision prioritizes trust and system integrity. We believe authentication infrastructure should be reliable, auditable, and firmly under your control.
          </p>
        </section>

      </main>
      <Footer />
    </>
  );
}
