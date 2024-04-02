const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-16 pt-[15vh]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            We're here to help. Feel free to reach out to us with any questions, feedback, or inquiries.
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Your Name" className="border border-gray-300 rounded-md px-4 py-2" />
            <input type="email" placeholder="Your Email" className="border border-gray-300 rounded-md px-4 py-2" />
            <input type="text" placeholder="Subject" className="border border-gray-300 rounded-md px-4 py-2 col-span-2" />
            <textarea rows="5" placeholder="Your Message" className="border border-gray-300 rounded-md px-4 py-2 col-span-2"></textarea>
            <button type="submit" className="bg-primary text-white rounded-md px-6 py-2 hover:bg-primary-dark transition-colors duration-300">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
