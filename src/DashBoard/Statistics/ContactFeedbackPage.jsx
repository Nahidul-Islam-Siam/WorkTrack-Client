
import useContact from '../../Component/Hook/useContact'; // Adjust path as per your project structure
import { Helmet } from "react-helmet-async";
const ContactFeedbackPage = () => {
  const [contact, refetch] = useContact();

  console.log(contact); // Verify data in console

  return (
   <div>
             <Helmet>
        <title>Feed-Back</title>
      </Helmet>
     <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-6 text-center text-primary">Messages Summary</h2>
      <p className="text-lg mb-4 text-center text-secondary">Total Messages: {contact.length}</p>

      <h2 className="text-4xl font-bold mb-6 text-center text-primary">Messages Status</h2>
      <div className="overflow-x-auto">
        <table className="table w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-primary text-white">
            <tr>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Message</th>
              <th className="py-3 px-6 text-left">Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {contact.map((message, index) => (
              <tr
                key={message._id}
                className={`border-b border-gray-200 hover:bg-gradient-to-r ${
                  index % 2 === 0
                    ? 'hover:from-green-100 hover:to-green-200'
                    : 'hover:from-blue-100 hover:to-blue-200'
                }`}
              >
                <td className={`py-3 px-6 text-${index % 2 === 0 ? 'green-700' : 'blue-700'}`}>{message.email}</td>
                <td className={`py-3 px-6 text-${index % 2 === 0 ? 'green-600' : 'blue-600'}`}>{message.message}</td>
                <td className={`py-3 px-6 text-${index % 2 === 0 ? 'green-500' : 'blue-500'}`}>{new Date(message.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
   </div>
  );
};

export default ContactFeedbackPage;
