import Image from "next/image";

import { Heading, Text } from "@ignite-ui/react";
import { Container, Hero, Preview } from "./styles";

import previewImage from "../../assets/appPreview.png";
import { ClaimUsernameForm } from "./components/ClaimUsernameForm";

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento Descomplicado
        </Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </Hero>
      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calendário"
        />
      </Preview>
    </Container>
  );
}
