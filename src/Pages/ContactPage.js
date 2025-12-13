import { motion } from "framer-motion";
import SectionHeading from "../components/Heading";
import { containerVariants, itemVariants } from "../animations/variants";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast"; // optional, for nice notifications

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hqgs9kw",
        "template_82mjeds",
        form.current,
        "5gxK2x3GaIu5-t4kI"
      )
      .then(
        () => {
          toast.success("Message sent successfully! I'll reply soon.");
          form.current.reset();
        },
        () => {
          toast.error("Failed to send. Please email me directly.");
        }
      );
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="p-5 md:p-10 bg-white min-h-screen"
    >
      {/* <div className="max-w-6xl mx-auto"> */}
      <motion.div variants={itemVariants} className="mb-12">
        <SectionHeading title="Contact" />
        <p className="mt-10 text-justify text-gray-800">
          Got a project in mind or need a reliable developer? <br />
          Drop me a message — I reply fast and I’m available for freelance work.
          Let’s turn your idea into reality!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-3 items-start">
        {/* Left: Contact Info + Map */}
        <motion.div
          variants={itemVariants}
          className="bg-white p-8 rounded-md shadow-xl flex flex-col h-full"
        >
          {/* Contact Info – grows to fill space */}
          <div className="space-y-7 flex-1">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="ml-5">
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p className="text-gray-600 mt-1 mb-1">
                  15-23, Paradise Street, Coventry, CV1 2JU, England, UK
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="ml-5">
                <h3 className="font-semibold text-gray-900">Call Me</h3>
                <p className="text-gray-600 mt-1 mb-3">+94 715198343</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
              <div className="ml-5">
                <h3 className="font-semibold text-gray-900">Email Me</h3>
                <p className="text-gray-600 mt-1 break-all">
                  iboshadi@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Map – fixed at bottom */}
          <div className="mt-8 rounded-md overflow-hidden shadow-lg">
            <iframe
              title="My Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.2056577039166!2d-1.504796823329272!3d52.402948844889025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774bb7af7170af%3A0xd31d2b522c6ed108!2sParadise%20House%2C%2015-23%20Paradise%20St%2C%20Coventry%20CV1%202JU%2C%20UK!5e0!3m2!1sen!2slk!4v1765603136966!5m2!1sen!2slk"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md w-full"
            />
          </div>
        </motion.div>

        {/* Right: Contact Form – stretches full height */}
        <motion.div
          variants={itemVariants}
          className="bg-white p-8 rounded-md shadow-xl flex flex-col h-full"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col h-full space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="px-5 py-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="px-5 py-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="px-5 py-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="flex-1 px-5 py-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none"
            ></textarea>

            {/* Button sticks to bottom */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-md transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* </div> */}
    </motion.div>
  );
};

export default ContactPage;
