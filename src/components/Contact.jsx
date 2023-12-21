import "../styles/Contact.css"
function Contact() {
  return (
    <>
      <section id="contact">
  <div className="contact-container">
    <div style={{ textAlign: "center" }}>
      <h2>Contact Me</h2>
      <hr className='line' style={{color:'var(--color-hex)',width :"10%"}}/>

    </div>
    <div className="row">
      <div className="column">
        <img src="/bg.png" style={{ width: "100%",border :'2px solid var(--color-ternary)'}} alt=";)" />
      </div>
      <div className="column">
        <form>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />
          <label htmlFor="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: 170 }}
            defaultValue={""}
          />
          <a href="google.com" target="_blank">
            <button className="cnt-btn">Submit</button>
          </a>
        </form>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Contact
