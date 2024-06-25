import { Helmet } from "react-helmet-async";


import UserList from "./UserList";
import useRole from "../../Component/Hook/useRole";



const Statistics = () => {
   const [role] = useRole()
console.log(role);
    return (
        <div>
                <Helmet>
        <title>Statistics</title>
      </Helmet>
           
       



<UserList/>
        </div>
    );
};

export default Statistics;