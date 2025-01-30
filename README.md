# 🚀 Employee Management System  
## WorkTrack  

## 📝 Overview  
A well-renowned company wants to monitor the workload of the employees and keep records of salary, contracts, etc. This Employee Management System is designed to address these needs by providing a comprehensive platform for employees to post workflow updates, for HR Executives to monitor workflows and manage payments, and for Admins to oversee employee roles and permissions.

## 🌟 Key Features  

1. **🔐 User Authentication:**  
   - Email and Password-based Authentication  
   - Google/Github Social Login  
   - Role-based Authentication (Employee, HR, Admin)  

2. **📱 Responsive Design:**  
   - Fully responsive for mobile, tablet, and desktop views  
   - Responsive dashboard for all user roles  

3. **👥 User Roles and Permissions:**  
   - Employee: Submit work updates, view payment history  
   - HR Executive: Manage employee verifications, process payments, view employee progress  
   - Admin: Manage all employees, promote employees to HR, adjust salaries, fire employees  

4. **📊 Data Management:**  
   - Use of TanStack Query for data fetching  
   - Reusable and responsive table components  

5. **🔒 Environment Variables:**  
   - Firebase config keys and MongoDB credentials are hidden using environment variables  

6. **🔔 Notification System:**  
   - Sweet Alert/Toast notifications for CRUD operations and authentication processes  
   - No default browser alerts  

7. **🔐 Private Routes:**  
   - Implemented with seamless access after reloading, avoiding redirection to the login page  

8. **📈 Dashboard Functionalities:**  
   - Employee: Work-sheet submission, payment history viewing  
   - HR: Employee list management, payment processing, work progress tracking  
   - Admin: View all employees, promote/fire employees, salary adjustments  

9. **✨ Additional Features:**  
   - Contact Us form for visitors to send messages to Admin  
   - Summation of work hours displayed based on filtered data in the HR dashboard  

10. **🛡️ Security:**  
   - JWT token and middleware functions for role verification in backend operations  

## 🏠 Home Page  
- **📸 Banner/Slider:** Displaying company success stories  
- **🛠️ Services:** Overview of company services  
- **💬 Testimonials:** Slider showcasing customer/client feedback  
- **🔍 Additional Sections:** Two more relevant sections to highlight key aspects of the company  

## 🔗 Navbar  
- **🖼️ Logo:** ![Company logo](https://i.ibb.co/Y7wBDqY/Work-Track-2-removebg-preview.png)  
- **🔄 Conditional Items:** Register, Login (if not logged in); User Photo and Logout (if logged in)  
- **📂 Navigation Items:** Dashboard (Private), Contact Us (Public)  

## 🔑 User Registration and Login  
- **📝 Registration Page:**  
  - Role selection (Employee, HR)  
  - Error handling for password requirements  
- **🔐 Login Page:**  
  - Error handling for incorrect credentials  

## 👨‍💼 Admin Credentials  
- **Admin Email:** `siamnahidul093@gmail.com`  
- **Admin Password:** `Siam1234?!`  

## 🌐 Live Site and Repository Links  
- **Front-end Live Site:** [Employee Management System](https://worktrack-employee-management.netlify.app/)  
- **Client Side GitHub Repository:** [GitHub - Client Side](https://github.com/programming-hero-web-course1/b9a12-client-side-Nahidul-Islam-Siam)  
- **Server Side GitHub Repository:** [GitHub - Server Side](https://github.com/programming-hero-web-course1/b9a12-server-side-Nahidul-Islam-Siam)  

## 🛠️ Installation Guide  
### Prerequisites  
Ensure you have the following installed on your system:  
- Node.js (Latest LTS version)  
- npm or yarn package manager  
- MongoDB (for backend database)  

### Steps to Install  
#### Clone the Repository  
```sh  
git clone https://github.com/programming-hero-web-course1/b9a12-client-side-Nahidul-Islam-Siam.git  
cd worktrack-frontend  
```
```sh  
git clone https://github.com/programming-hero-web-course1/b9a12-server-side-Nahidul-Islam-Siam.git  
cd worktrack-backend  
```

#### Install Dependencies  
For client-side:  
```sh  
npm install  
```
For server-side:  
```sh  
npm install  
```

#### Setup Environment Variables  
Create a `.env` file in both client and server directories and add the necessary credentials (e.g., Firebase config, MongoDB URI, JWT secret).  

#### Run the Application  
Start the frontend:  
```sh  
npm run dev  
```
Start the backend:  
```sh  
npm start  
```

Your Employee Management System should now be running locally! 🚀

