// src/Components/Common/Footer/Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-sm">
            We are dedicated to providing the best service in the industry. Our
            team is passionate about bringing value and excellence to every
            project.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Connect With Us</h2>
          <div className="flex space-x-4 mb-4">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6 fill-current text-gray-200 hover:text-blue-600 transition duration-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22,12C22,6.5,17.5,2,12,2S2,6.5,2,12c0,5,3.7,9.1,8.5,9.9v-7H8v-3h2.5V9.7c0-2.5,1.5-3.9,3.7-3.9c1.1,0,2,0.1,2.3,0.1v2.6h-1.6c-1.3,0-1.6,0.8-1.6,1.5v1.8h3.1l-0.5,3H14.3v7C19.3,21.1,22,17,22,12z" />
              </svg>
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6 fill-current text-gray-200 hover:text-blue-400 transition duration-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.8c-1,0.6-2,1-3.2,1.3C19.3,2.9,18.1,2,16.7,2c-2.6,0-4.7,2.1-4.7,4.7c0,0.4,0,0.8,0.1,1.1C8,7.7,4.3,5.8,1.7,2.9C1.3,3.6,1,4.4,1,5.3c0,1.6,0.8,3,2.1,3.8C2.4,9,1.6,8.8,1,8.5c0,0,0,0.1,0,0.1c0,2.2,1.6,4,3.6,4.4C4.2,13,3.7,13.1,3.2,13.1c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.2,3,2.2c-1.1,0.9-2.5,1.4-4,1.4c-0.3,0-0.6,0-0.9-0.1c1.4,0.9,3,1.4,4.8,1.4c5.8,0,9-4.8,9-9c0-0.1,0-0.3,0-0.4C22.6,6.5,23.4,5.6,24,4.6z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                className="w-6 h-6 fill-current text-gray-200 hover:text-pink-500 transition duration-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12,2.2c3.2,0,3.6,0,4.9,0.1c1.3,0.1,2,0.3,2.5,0.5c0.6,0.2,1,0.5,1.5,1c0.5,0.5,0.8,0.9,1,1.5c0.2,0.5,0.4,1.2,0.5,2.5c0.1,1.3,0.1,1.7,0.1,4.9s0,3.6-0.1,4.9c-0.1,1.3-0.3,2-0.5,2.5c-0.2,0.6-0.5,1-1,1.5c-0.5,0.5-0.9,0.8-1.5,1c-0.5,0.2-1.2,0.4-2.5,0.5c-1.3,0.1-1.7,0.1-4.9,0.1s-3.6,0-4.9-0.1c-1.3-0.1-2-0.3-2.5-0.5c-0.6-0.2-1-0.5-1.5-1c-0.5-0.5-0.8-0.9-1-1.5c-0.2-0.5-0.4-1.2-0.5-2.5C2.2,15.6,2.2,15.2,2.2,12S2.2,8.4,2.3,7.1c0.1-1.3,0.3-2,0.5-2.5c0.2-0.6,0.5-1,1-1.5c0.5-0.5,0.9-0.8,1.5-1c0.5-0.2,1.2-0.4,2.5-0.5C8.4,2.2,8.8,2.2,12,2.2 M12,0C8.7,0,8.3,0,7,0.1C5.7,0.2,4.7,0.4,3.9,0.7C3.1,1,2.3,1.5,1.6,2.2C0.9,2.9,0.4,3.7,0.1,4.5C-0.2,5.3,0,6.3,0,7.6c-0.1,1.3-0.1,1.7-0.1,4.9s0,3.6,0.1,4.9c0.1,1.3,0.3,2,0.5,2.5c0.2,0.6,0.5,1,1,1.5c0.5,0.5,0.9,0.8,1.5,1c0.5,0.2,1.2,0.4,2.5,0.5C8.4,24,8.8,24,12,24s3.6
          0,4.9-0.1,4.9c-1.3,0.1-2,0.3-2.5,0.5c-0.6,0.2-1,0.5-1.5,1
          c-0.5,0.5-0.9,0.8-1.5,1c-0.5,0.2-1.2,0.4-2.5,0.5C8.4,24,8.8,24,12,24s3.6,0,4.9-0.1c1.3-0.1,2-0.3,2.5-0.5
          c0.6-0.2,1-0.5,1.5-1c0.5-0.5,0.8-0.9,1-1.5c0.2-0.5,0.4-1.2,0.5-2.5c0.1-1.3,0.1-1.7,0.1-4.9S12.1,4.8,12,0z M12,5.8
          c-3.4,0-6.2,2.7-6.2,6.2s2.7,6.2,6.2,6.2s6.2-2.7,6.2-6.2S15.4,5.8,12,5.8z M19.5,4.6c-0.8,0-1.5-0.7-1.5-1.5
          s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S20.3,4.6,19.5,4.6z"
                />
              </svg>
            </a>
          </div>

          {/* Contact Information */}
          <div>
            <p className="text-sm">Phone: +1 (234) 567-890</p>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Address: 1234 Example St, City, Country</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-700 text-center py-4 mt-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
