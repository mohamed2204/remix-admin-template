import { assets } from '../assets/assets';
import NewsLetterBox from '../Components/NewsLetterBox';
import Title from '../Components/Title';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'A PROPOS'} text2={'DE NOUS'} />
      </div>

      <div className="flex flex-col md:flex-row gap-16 my-10">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px] "
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Dans le cadre d’une maison aux menuiseries anciennes, le remplacement de 
            ces dernières assure une meilleure étanchéité. Un bienfait qui permet 
            jusqu’à 15 % d’économie sur le chauffage. Bien plus facile à manipuler 
            que le bois et le PVC, l’aluminium s’adapte très bien aux grandes dimensions 
            et à une multitude de formes sur mesure. Aisément personnalisable, 
            il permet de réaliser des fenêtres conformes aux attentes des clients dans 
            une multitude de couleurs et de finitions. La dépose totale est d’ailleurs 
            une méthode recommandée pour le remplacement de vos fenêtres.
          </p>
          {/* <p>
            Since our inception, we&apos;ve worked firelessly to curate a
            diverse selection of high-quality products that cater to every taste
            and preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from frusted
            brands and suppliers.
          </p> */}
          <b className="text-gray-800">Une installation rigoureuse</b>
          <p>
            {' '}
            En adéquation avec la réglementation thermique 2012, la mise en œuvre de la fenêtre aluminium implique un travail soigné. De la prise de cotations à la préparation de la maçonnerie, des compétences spécifiques sont nécessaires pour fournir des prestations de qualité. À cela s’ajoute la sélection des produits selon le type d’ouvrant et du vitrage, jusqu’à la dernière vérification de chaque vantail. Le recours à un professionnel RGE est préférable à vos clients afin de profiter des diverses aides financières de l’État, des subventions de l’ANAH et de l’éco-prêt à taux zéro.
          </p>
        </div>
      </div>

      <div className="py-4 text-2xl">
        <Title text1={'POURQUOI'} text2={'NOUS CHOISIR'} />
      </div>

      <div className="flex flex-col md:flex-row mb-20 text-sm gap-4">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Assurance qualité</b>
          <p className="text-gray-600">
            Nous sommes fiers de proposer uniquement des produits de la plus haute qualité, 
            répondant à nos exigences rigoureuses en matière de durabilité, de performance 
            et de rapport qualité-prix.{' '}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Pratique</b>
          <p className="text-gray-600">
            Notre site web et notre application mobile, faciles d'utilisation, vous permettent 
            de parcourir, comparer et acheter des produits où que vous soyez.{' '}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Un service client exceptionnel</b>
          <p className="text-gray-600">
            Notre équipe dédiée de conseillers clientèle est disponible 24h/24 et 7j/7 
            pour répondre à toutes vos questions et préoccupations.{' '}
          </p>
        </div>
      </div>

      {/* <NewsLetterBox /> */}
    </div>
  );
};

export default About;
