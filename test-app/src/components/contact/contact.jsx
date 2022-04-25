import "./contact.css"
export default function Contact() {
    return (
    <div className="contact" id="contact">
        <header>Let's Get in Touch!</header>
 <form>
 <div className="formcontent">
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">Submit</button>
    </div>
    </form>
    </div>
  );
    };
