import HERO from "../assets/hero_cake.png";
import { scrollToElement } from "../utils/scrollToElement";
import { Container } from "./Container";
import { FacebookBtn } from "./FacebookBtn";
import { InstagramBtn } from "./InstagramBtn";

export default function Home() {
  return (
    <Container className="h-screen">
      <nav className="flex items-center justify-between flex-wrap p-6 lg:px-0">
        <span className="text-xl font-bold text-neutral-900">
          Jona<span className="text-red-700">ss</span>
        </span>
        <span className="flex gap-6">
          <InstagramBtn />
          <FacebookBtn />
        </span>
      </nav>

      <div className="h-full flex items-center justify-center">
        <span className="text-center xl:text-left">
          <h1 className="text-[46px] md:text-[60px] lg:text-[64px] font-semibold leading-tight">
            Los mejores
            <br />
            pasteles de Concon
            <br />
            City
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Repostería de Concon a encargo.
          </p>

          <span className="space-x-6">
            <button
              className="bg-red-700 text-neutral-50 font-semibold py-3 px-8 rounded-xl text-sm md:text-md mt-8"
              onClick={scrollToElement("products-container")}
            >
              Pasteles
            </button>
            <button
              className="bg-red-200 text-red-700 font-semibold py-3 px-8 rounded-xl mt-8  text-sm md:text-md"
              onClick={scrollToElement("contact-container")}
            >
              Contacto
            </button>
          </span>
        </span>
        <img
          src={HERO}
          className="hidden w-[370px] h-[458px] lg:ml-16 lg:block"
        />
      </div>
    </Container>
  );
}
