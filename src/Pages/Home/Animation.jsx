
import Lottie from 'react-lottie';
import animationData from '../../assets/Animation - 1717303008922.json';
import { Link } from 'react-router-dom';


const Animation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <Lottie 
          options={defaultOptions}
          height={500}
          width={500}
        />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Employee time 
				<span className="dark:text-violet-600"> tracking</span>
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Shift helps you monitor the working hours of employees
				<br  className="hidden md:inline lg:hidden" />and manage the time spent by them on their projects or br tasks
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link  to='/login' className="btn btn-outline btn-success">Sign In</Link>
				<Link to='/dashboard'  className="btn btn-outline btn-accent">DashBoard</Link>
			</div>
		</div>
		
	</div>
</section>



      </div>
    );
};

export default Animation;