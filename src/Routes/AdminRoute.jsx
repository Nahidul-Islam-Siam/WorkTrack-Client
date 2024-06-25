import PropTypes from 'prop-types'
import useRole from '../Component/Hook/useRole';
import LoadingSpinner from '../DashBoard/Menu/LoadingSpinner';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {
  const [role,isLoading] = useRole()
  if(isLoading) return <LoadingSpinner></LoadingSpinner>
  if(role === 'admin') return children
    return <Navigate to='/dashboard'/>
};

export default AdminRoute;
AdminRoute.propTypes = {
    children: PropTypes.element,
  }