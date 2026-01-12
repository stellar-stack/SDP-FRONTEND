import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/homepage.css";
// import "./Hero.css";

export default function HomePage() {
  return (
    <div className="app dark">
      <Header />

      <main className="main">
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-content">
            <span className="badge">Welcome to Voyage</span>

            <h1>
              Collaborate, Learn, Grow. <br />
              <span>Your Academic & Professional Hub.</span>
            </h1>

            <p>
              Dive into a knowledge-sharing ecosystem designed for students,
              researchers, and professionals.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">Join Voyage Now</button>
              <button className="btn-secondary">Explore Communities</button>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="features">
          <div className="feature-card">
            <h3>Discuss & Debate</h3>
            <p>Engage in high-quality discussions with peers.</p>
          </div>

          <div className="feature-card">
            <h3>Share Knowledge</h3>
            <p>Access and contribute academic resources.</p>
          </div>

          <div className="feature-card">
            <h3>Grow Your Career</h3>
            <p>Network and discover opportunities.</p>
          </div>
        </section>

        {/* POSTS */}
        <section className="posts">
          <h2>Latest from our communities</h2>

          <article className="post">
            <h3>Best practices for React hooks in 2025</h3>
            <span>ITProfessionals • 2h ago</span>
          </article>

          <article className="post">
            <h3>New standardized frameworks for thesis defense</h3>
            <span>AcademicResearch • 5h ago</span>
          </article>

          <article className="post">
            <h3>Understanding sleep cycles and memory</h3>
            <span>CognitiveScience • 8h ago</span>
          </article>

          <div className="cta-box">
            <h3>Ready to join the conversation?</h3><br/>
            <p>Create an account today to customize your feed.</p><br/>
            <button className="btn-light">Sign Up for Free</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
