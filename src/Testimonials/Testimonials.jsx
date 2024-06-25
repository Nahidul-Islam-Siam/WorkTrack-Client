// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



const Testimonials = () => {
    return (
        <div>
       
            <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            What clients saying
        </h1>

        <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>

        <div className="flex items-start max-w-6xl mx-auto mt-16">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <div>
                <p className="flex items-center text-center text-gray-500 lg:mx-8">
                The Employee Management System provided by this website has revolutionized the way we handle HR tasks. The user-friendly interface makes it easy for our team to manage employee records, track attendance, and process payroll efficiently. The support team is always responsive and helpful, making our experience even better. Highly recommend this system to any business looking to streamline their HR processes!
                </p>

                <div className="flex flex-col items-center justify-center mt-8">
                    <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                    <div className="mt-4 text-center">
                        <h1 className="font-semibold text-gray-800 dark:text-white">Emily Rodriguez,</h1>
                        <span className="text-sm text-gray-500 dark:text-gray-400">CEO of Creative Innovations</span>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide> <div>
                <p className="flex items-center text-center text-gray-500 lg:mx-8">
                "We have been using the Employee Management System for over a year now, and it has significantly improved our workforce management. The ability to generate detailed reports and the seamless integration with our existing software has saved us countless hours. Our employees also appreciate the self-service portal, which gives them access to their own information at any time. This system is a game-changer!"
                </p>

                <div className="flex flex-col items-center justify-center mt-8">
                    <img className="object-cover rounded-full w-14 h-14" src="https://i.ibb.co/Cz5qm7Q/oil.jpg" alt=""/>

                    <div className="mt-4 text-center">
                        <h1 className="font-semibold text-gray-800 dark:text-white">David Lee,</h1>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Operations Director at Greenfield Manufacturing</span>
                    </div>
                </div>
            </div></SwiperSlide>
   
        <SwiperSlide> <div>
                <p className="flex items-center text-center text-gray-500 lg:mx-8">
                "Implementing the Employee Management System from this website was one of the best decisions we made for our company. The system's robust features, including time tracking, performance evaluation, and leave management, have provided us with greater control and insights into our workforce. The implementation was smooth, and the training provided ensured that our staff could use the system effectively from day one. We couldn't be happier with the results!"
                </p>

                <div className="flex flex-col items-center justify-center mt-8">
                    <img className="object-cover rounded-full w-14 h-14" src="https://i.ibb.co/mRSk3Rh/Whats-App-Image-2024-02-05-at-22-41-37-6562fa22.jpg" alt=""/>

                    <div className="mt-4 text-center">
                        <h1 className="font-semibold text-gray-800 dark:text-white">Emily Rodriguez,</h1>
                        <span className="text-sm text-gray-500 dark:text-gray-400">CEO of Creative IT Center</span>
                    </div>
                </div>
            </div></SwiperSlide>
       
      
  
        
      </Swiper>

           

        </div>
    </div>
</section>
        </div>
    );
};

export default Testimonials;