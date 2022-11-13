import heroImg from '../assets/images/illustration-hero.svg';

const CardHero = () => {
  return (
    <div>
      <img src={heroImg} className="max-h-full object-cover" />
    </div>
  );
};
export default CardHero;
