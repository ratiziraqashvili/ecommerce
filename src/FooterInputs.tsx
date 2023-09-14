type Props = {}

function Footer({}: Props) {
    const customFontStyle = {
        fontFamily: "Plus Jakarta Sans, sans-serif",
      };
  return (
    <div className='bg-black md:ml-[200px] md:mr-[200px] rounded-2xl p-5 flex flex-col justify-between 2xl:justify-around pl-16 pr-16 md:flex-row gap-5 mt-10'>
        <div className=''>
            <h1 className='font-[heavy] text-[25px] text-white w-auto max-w-[500px] leading-tight'>
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h1>
        </div>
        <div className='flex flex-col justify-center gap-3'>
            <input className='rounded-2xl placeholder:text-[12px] py-[7px] px-10 xl:px-20 2xl:px-32 pl-3 outline-none text-[12px] ' placeholder='Enter your email address' type="email" />
            <button style={customFontStyle} className='bg-white text-[12px] rounded-full font-bold py-[8px] '>Subscribe to Newsletter</button>
        </div>
    </div>
  )
}

export default Footer