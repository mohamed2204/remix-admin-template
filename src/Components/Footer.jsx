import { assets } from '../assets/assets';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="f">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div className="">
          <img src={assets.logo} alt="" className="mb-5 w-32 " />
          <p className="w-full sm:w-2/3 text-gray-600">
            Faites vos achats chez SamAlim et découvrez le confort du shopping en ligne comme jamais auparavant.
          </p>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">ENTREPRISE</p>

          <ul className="flex flex-col flex-1 text-gray-600 cursor-pointer">
            <li onClick={scrollToTop} className="mb-2">
              Accueil
            </li>
            <li onClick={scrollToTop} className="mb-2">
              A propos de nous
            </li>
            {/* <li onClick={scrollToTop} className="mb-2">
              Delivery
            </li>
            <li onClick={scrollToTop} className="mb-2">
              Privacy policy
            </li> */}
          </ul>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">ENTRER EN CONTACT</p>
          <ul className="flex flex-col flex-1 text-gray-600">
            <li className="mb-2">+212 XXX XXX XXX</li>
            <li className="mb-2">contact@samir-alim.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@samir-alim.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
