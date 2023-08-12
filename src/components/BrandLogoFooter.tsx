import Logo from "/public/images/Logo.png";

const BrandLogoFooter = () => {
  return (
    <>
    <div className='flex items-center gap-2'>
        <img src={Logo} alt="Duck book logo"/>
        <h1 className='text-natural-white font-modak text-2xl  md:text-4xl'><a href="" className=''>Duckbook</a></h1>
    </div>
    </>
  )
}

export default BrandLogoFooter