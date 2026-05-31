export default function Contact() {
  return (
    <main>
      <section className="page-hero">
        <h1>Contact</h1>
        <p>Invite Dr. Nishant K. Mishra for lectures, interviews, collaborations, or educational events.</p>
      </section>
      <section className="section copy narrow">
        <h2>General Inquiries</h2>
        <p><strong>info@ivypandit.com</strong></p>
        <h2>Speaking & Collaborations</h2>
        <p><strong>nishant.mishra@ivypandit.com</strong></p>
        <p>Both addresses should be configured in Cloudflare Email Routing to forward to nishmishra@gmail.com.</p>
        <a className="button" href="mailto:nishant.mishra@ivypandit.com">Email Dr. Mishra</a>
      </section>
    </main>
  );
}
