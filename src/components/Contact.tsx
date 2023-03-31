import { Container } from "./Container";

import { Title } from "./Title";
import QR_IMAGE from "../assets/qr.webp";
import { InstagramBtn } from "./InstagramBtn";
import { FacebookBtn } from "./FacebookBtn";

export default function Contact() {
  return (
    <Container id="contact-container">
      <Title className="mt-12">Contacto</Title>
      <span className="flex flex-col justify-center items-center">
        <span className="flex flex-col gap-2 bg-white p-4 rounded-lg">
          <ol
            className={`
              text-center text-sm space-y-6 text-neutral-600
              lg:text-base
            `}
          >
            <li>
              • Escanea el codigo QR para hcer{" "}
              <span className="font-semibold">consultas</span> o{" "}
              <span className="font-semibold">encargos</span> por WhatsApp.
            </li>
            <li>
              • Tambien puedes comunicarte con nosotros mediante nuestras{" "}
              <span className="font-semibold">redes sociales</span>:
            </li>
          </ol>

          <span className="flex gap-6 mt-4 justify-center text-red-600">
            <InstagramBtn />
            <FacebookBtn />
          </span>
        </span>
        <img
          src={QR_IMAGE}
          alt="WhatsApp QR Code"
          className={`w-[300px] h-[300px] mt-4 mb-4
            lg:w-[400px] lg:h-[400px]
          `}
        />
        <div className="flex justify-center -mt-6">
          <span className="bg-red-200 py-1 px-4 rounded-lg">
            <a
              className={`flex items-center gap-x-1 text-red-600 text-sm font-semibold
                lg:text-base
              `}
              href="https://wa.me/56945752702?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20los%20productos%20de%20la%20página"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32 32"
                className="w-5 h-5"
              >
                <path d="M13 2c-1.645 0-3 1.355-3 3v11.813l-.656-.688-.25-.219a2.968 2.968 0 0 0-4.188 0 2.968 2.968 0 0 0 0 4.188v.031l8.188 8.094.062.031.031.063a8.307 8.307 0 0 0 5 1.687h1.72a8.17 8.17 0 0 0 8.187-8.188V14c0-1.645-1.356-3-3-3-.426 0-.82.117-1.188.281C23.578 9.981 22.395 9 21 9c-.766 0-1.469.3-2 .781A2.984 2.984 0 0 0 17 9a2.95 2.95 0 0 0-1 .188V5c0-1.645-1.355-3-3-3Zm0 2c.555 0 1 .445 1 1v11h2v-4c0-.555.445-1 1-1 .555 0 1 .445 1 1v4h2v-4c0-.555.445-1 1-1 .555 0 1 .445 1 1v4h2.094v-2c0-.555.445-1 1-1 .554 0 1 .445 1 1v7.813c0 3.464-2.723 6.187-6.188 6.187h-1.718c-1.465 0-2.731-.523-3.782-1.313l-8.094-8c-.445-.445-.445-.93 0-1.375.446-.445.93-.445 1.375 0L12 21.625V5c0-.555.445-1 1-1Z" />
              </svg>
              +56 9 4575 2702
            </a>
          </span>
        </div>
      </span>
    </Container>
  );
}
