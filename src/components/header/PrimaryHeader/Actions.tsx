import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Image from 'next/image';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';

const Actions = () => {
  return <div className='text-secondary-light
            flex justify-between items-center
            space-x-4'>
    <Image
      src="/icons/Notification.svg"
      alt='Notification'
      height={15}
      width={15}
      className='hidden xs:block'
    />
    <Image
      src="/icons/User.svg"
      alt='User'
      height={15}
      width={15}
      className='hidden xs:block'
    />

    <Image
      src="/icons/Search.svg"
      alt='Search'
      height={17}
      width={17}
      className='xs:hidden block'
    />
    <Image
      src="/icons/Menu.svg"
      alt='User'
      height={25}
      width={25}
      className='xs:hidden block'
    />

  </div>;
};

export default Actions;
