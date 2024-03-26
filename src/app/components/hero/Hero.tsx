import Image from "next/image";
import Button from "../button/Button";
import heroCar from "../../../../public/assets/images/hero-car.png";
import androidApp from "../../../../public/assets/images/google-play.png";
import iosApp from "../../../../public/assets/images/apple-store.png";
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center ">
      <section className="flex flex-col justify-center gap-y-3 ">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl leading-8">
          Find, book and rent a car{" "}
          <span className="text-red-700">Easily !</span>
        </h1>
        <p className="text-md md:text-lg ">
          Get a car wherever and whenever you need it with your IOS and Android
          device.
        </p>
        <div className="flex gap-x-3 py-3">
          <Image src={androidApp} alt="android"></Image>
          <Image src={iosApp} alt="ios"></Image>
        </div>

        <Button
          name="Explore Cars"
          icons={true}
          style="bg-red-600 font-semibold py-1 px-3 md:py-2 lg:py-3 rounded-2xl text-white"
        />
      </section>
      <section className="">
        <div className="pt-10">
          <Image src={heroCar} alt="hero-car"></Image>
        </div>
      </section>
    </div>
  );
};

export default Hero;
