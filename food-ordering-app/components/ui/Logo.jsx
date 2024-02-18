import Image from 'next/image'
import LogoImage from '../../images/logo.webp';

const Logo = () => {
  return (
    <div>
      <Image src={LogoImage} className=" w-30 bg-aqua" alt='logo'/>
    </div>
  )
}

export default Logo