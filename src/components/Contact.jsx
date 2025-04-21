// src/components/Contact.jsx
function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>If you’d like to work together, collaborate, or just say hi — feel free to reach out!</p>
      
      <form 
        name="contact" 
        method="POST" 
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        {/* Hidden field for Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out if you're human: 
            <input name="bot-field" />
          </label>
        </p>

        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" required />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" rows="5" required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
