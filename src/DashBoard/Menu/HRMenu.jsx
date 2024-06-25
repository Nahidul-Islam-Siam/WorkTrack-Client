
import { GrUserAdmin } from 'react-icons/gr'
import MenuItem from './MenuItems'
import { FaPeopleRobbery } from 'react-icons/fa6'
import { GiProgression } from 'react-icons/gi'


const HRMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaPeopleRobbery}
        label='Employee List'
        address='employee-list'
      />
       <MenuItem
        icon={GiProgression}
        label='Progress'
        address='progress'
      />

     
    </>
  )
}

export default HRMenu