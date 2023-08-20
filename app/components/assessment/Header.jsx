import React, { useEffect } from 'react'
import SidebarMob from '../sidebar/SidebarMob'

const Header = ({setOpen}) => {

  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleItemClick = (item) => {
    // console.log('click')
    setSelectedItem(item);
  };

  const getItemClassName = (item) => {
    if (selectedItem === item) {
      return ' myassessment-selected';
    }
    return '';
  };

  useEffect(() => {
    if (selectedItem === 'myassessment') {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [selectedItem])


  return (
    <>
      <div className='flex justify-start items-center md:border-b-2 w-screen h-12 p-0 md:p-4 gap-4'>
        <div className='h-12 px-0 md:px-4 py-0 md:py-2'>
          <span className='inline-block md:hidden'>
            <SidebarMob />
          </span>
          <span className='logo'>
            Assessment
          </span>
        </div>
        <div className='md:border-l-2 h-10'></div>
        <div onClick={()=>handleItemClick('myassessment')} className={`h-12 px-0 md:px-4 py-0 md:py-4 hidden md:block myassessment ${getItemClassName('myassessment')}`}>My Assessments</div>
      </div>
      <div className='flex justify-start items-center w-screen gap-2 overflow-hidden mt-4 p-0 border-b-2 md:hidden'>
        <span onClick={()=>handleItemClick('myassessment')} className={`w-5/12 text-center pb-2 myassessment ${getItemClassName('myassessment')}`}>My Assessments</span>
        <span onClick={()=>handleItemClick('unstopassessment')} className={`w-6/12 text-center pb-2 myassessment ${getItemClassName('unstopassessment')}`}>Unstop Assessments</span>
      </div>
    </>
  )
}

export default Header