import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-gray-300 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="mb-2">Follow us on social media for updates and promotions:</p>
            <div className="flex space-x-4">
              <Link href="#" passHref>
                <span className="text-xl cursor-pointer hover:text-gray-200">
                  <i className="fab fa-facebook-square"></i>
                </span>
              </Link>
              <Link href="#" passHref>
                <span className="text-xl cursor-pointer hover:text-gray-200">
                  <i className="fab fa-twitter"></i>
                </span>
              </Link>
              <Link href="#" passHref>
                <span className="text-xl cursor-pointer hover:text-gray-200">
                  <i className="fab fa-instagram"></i>
                </span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" passHref>
                  <span className="hover:text-gray-200 cursor-pointer">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/services" passHref>
                  <span className="hover:text-gray-200 cursor-pointer">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <span className="hover:text-gray-200 cursor-pointer">Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
