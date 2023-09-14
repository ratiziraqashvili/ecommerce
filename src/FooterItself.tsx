import Logo from './images/SHOPCO.svg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

type Props = {};

function FooterSection({ title, items }: { title: string; items: string[] }) {
  const customFontStyle = {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 style={customFontStyle} className="tracking-[2px] font-semibold">
        {title}
      </h1>
      {items.map((item, index) => (
        <span
          key={index}
          style={customFontStyle}
          className="font-thin cursor-pointer"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function FooterItself({}: Props) {
  const customFontStyle = {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  };

  const sections = [
    { title: 'COMPANY', items: ['About', 'Features', 'Works', 'Career'] },
    { title: 'HELP', items: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'] },
    { title: 'FAQ', items: ['Account', 'Manage Deliveries', 'Orders', 'Payment'] },
    { title: 'RESOURCES', items: ['Free eBook', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'] },
  ];

  return (
    <footer className="bg-[#F2F0F1] flex flex-col sm:flex-row flex-wrap gap-9 sm:gap-14 lg:p-16 p-8 lg:justify-between">
      <div className="flex flex-col gap-5">
        <img className="w-[200px] md:w-[230px] " src={Logo} alt="Company Logo" />
        <span style={customFontStyle} className="font-thin sm:w-[300px] w-[270px]">
          We have clothes that suit your style and which you’re proud to wear. From women to men.
        </span>
        <div className=''>
          <IconButton>
            <a href='https://www.linkedin.com/in/rati-ziraqashvili-52098a280/'>
            <LinkedInIcon className="text-black cursor-pointer" />
            </a>
          </IconButton>
          <a href='https://www.facebook.com/profile.php?id=100009081171231'>
          <IconButton>
            <FacebookIcon className="text-black cursor-pointer" />
          </IconButton>
          </a>
          <a href='https://www.instagram.com/rati_3333/'>
          <IconButton>
            <InstagramIcon className="text-black cursor-pointer" />
          </IconButton>
          </a>
          <a href='https://github.com/ratiziraqashvili'>
          <IconButton>
            <GitHubIcon className="text-black cursor-pointer" />
          </IconButton>
          </a>
        </div>
      </div>
      {sections.map((section, index) => (
        <FooterSection key={index} title={section.title} items={section.items} />
      ))}
    </footer>
  );
}

export default FooterItself;
