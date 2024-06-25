import { Helmet } from "react-helmet-async";
import useAuth from "../../Component/Hook/UseAuth";
import axios from "axios";
import toast from "react-hot-toast";

const ContactUs = () => {
  const { loading, setLoading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    console.log({ name, email, message });

    try {
      setLoading(false);

      const messageData = { name, message, email };
      const response = await axios.post("https://work-track-server.vercel.app/contact", messageData);

      if (response.status === 200) {
        console.log(response.data);
        toast.success("Contact data saved successfully");
      } else {
        toast.error("Failed to save user data");
        console.error("Failed to save user data", response);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <section className="bg-gradient-to-br from-green-400 to-blue-500 text-gray-800 dark:text-gray-100">
        <div className="container px-6 py-12 mx-auto">
          <div>
            <p className="font-medium text-yellow-300 dark:text-yellow-400">Contact us</p>
            <h1 className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white md:text-3xl">
              Chat to our friendly team
            </h1>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              We’d love to hear from you. Please fill out this form or shoot us an email.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <span className="inline-block p-3 text-blue-800 rounded-full bg-blue-200 dark:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-900 dark:text-white">Email</h2>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">Our friendly team is here to help.</p>
                <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">hello@merakiui.com</p>
              </div>

              <div>
                <span className="inline-block p-3 text-blue-800 rounded-full bg-blue-200 dark:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-900 dark:text-white">Live chat</h2>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">Our friendly team is here to help.</p>
                <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">Start new chat</p>
              </div>

              <div>
                <span className="inline-block p-3 text-blue-800 rounded-full bg-blue-200 dark:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-900 dark:text-white">Office</h2>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">Come say hello at our office HQ.</p>
                <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">100 Smith Street Collingwood VIC 3066 AU</p>
              </div>

              <div>
                <span className="inline-block p-3 text-blue-800 rounded-full bg-blue-200 dark:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-900 dark:text-white">Phone</h2>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">+1 (555) 000-0000</p>
              </div>
            </div>

            <div className="p-4 py-6 rounded-lg bg-gradient-to-bl from-pink-400 to-purple-500 md:p-8">
              <form onSubmit={handleSubmit}>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label htmlFor="name" className="block mb-2 text-sm text-gray-800 dark:text-gray-200">
                      Enter Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-pink-400 dark:focus:border-pink-400 focus:ring-pink-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm text-gray-800 dark:text-gray-200">Email address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-pink-400 dark:focus:border-pink-400 focus:ring-pink-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-800 dark:text-gray-200">Message</label>
                  <textarea
                    name="message"
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-pink-400 dark:focus:border-pink-400 focus:ring-pink-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-pink-600 rounded-lg hover:bg-pink-500 focus:outline-none focus:ring focus:ring-pink-300 focus:ring-opacity-50">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
