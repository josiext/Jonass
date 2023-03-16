import { Container } from "./Container";
import { QR } from "./QR";
import { Title } from "./Title";

export default function Contact() {
  return (
    <Container className="pb-16">
      <Title>Contacto</Title>
      <span className="flex flex-col justify-center items-center">
        <QR />
        <span>+56 9 1111 1111</span>
      </span>
    </Container>
  );
}
