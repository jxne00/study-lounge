import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const Footer = () => {
  return (
    <div
      className={`${roboto.className} italic absolute bottom-0 left-0 mb-4 ml-4 text-white text-sm`}>
      <p>Made by June &#128516;</p>
    </div>
  );
};

export default Footer;
