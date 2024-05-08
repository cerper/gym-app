import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section
      className="z-20  h-[80svh] bg-hero bg-cover bg-center bg-no-repeat text-white md:h-[900px] lg:h-[800px]"
      id="home"
    >
      <div className="container mx-auto h-full">
        <HeroSlider />
      </div>
    </section>
  );
};
export default Hero;
