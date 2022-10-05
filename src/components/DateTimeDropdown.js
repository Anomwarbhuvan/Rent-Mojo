 import React, { useState, useContext } from 'react';

 import { HouseContext } from './HouseContext';
 import { Menu } from '@headlessui/react';

 import { RiCalendarEventLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

 const DateTimeDropdown = () => {

     const [isOpen, setIsOpen] = useState(false);
     return (
         <Menu as='div' className='dropdown relative'>
             <Menu.Button 
                 onClick={() => setIsOpen(!isOpen)}
                 className='dropdown-btn w-full'
             >
                 <RiCalendarEventLine className='dropdown-icon-primary'></RiCalendarEventLine>
                 <div>
                    <div className='text-[15px] font-medium leading-tight'>When</div>
                    <div className='text-[13px]'>Select Move-in Date</div>
                 </div>
                 {isOpen ? (
                       <RiArrowUpSLine className='dropdown-icon-secondary' />
                   ) : (
                      <RiArrowDownSLine className='dropdown-icon-secondary' />
                  )}
            </Menu.Button>

        </Menu>
    )



   
}

 export default DateTimeDropdown;


