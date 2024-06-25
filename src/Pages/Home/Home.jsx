
import { Helmet } from "react-helmet-async";
import Testimonials from "../../Testimonials/Testimonials";
import Animation from "./Animation";
import Team from "./Team";


const Home = () => {

    return (
        <div>
              <Helmet>
        <title>Home</title>
      </Helmet>
          <Animation/> 
          <Team/>
          <Testimonials/> 
        </div>
    );
};

export default Home;