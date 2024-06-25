import PropTypes from 'prop-types'


import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../DashBoard/Menu/LoadingSpinner';
import useRole from '../Component/Hook/useRole';

const HRroute = ({children}) => {
  const [role,isLoading] = useRole()
  if(isLoading) return <LoadingSpinner></LoadingSpinner>
  if(role === 'hr') return children
    return <Navigate to='/dashboard'/>
};

export default HRroute;
HRroute.propTypes = {
    children: PropTypes.element,
  }