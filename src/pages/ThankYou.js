import { Center, Space, Stack, Title, Anchor, Text } from "@mantine/core";
import { HeartHandshake } from "tabler-icons-react";

import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <Center style={{ minHeight: "calc(100vh - 8rem)" }}>
      <Stack align="center" spacing="xs">
        <HeartHandshake
          size="20rem"
          color="#ffdf2b"
          style={{ maxWidth: "60vw", height: "auto" }}
        />
        <Title align="center">Registrado com Sucesso!</Title>
        <Space h="lg" />

        <Text fz="xl" fw={600} px="xs" align="center" color="#b591d5">
          Em breve você ira começar a receber notificações sobre os documentos
          publicados no Diário Oficial da Bahia! <Space />
          <Anchor component={Link} to="/" size="xl">
            Voltar...
          </Anchor>
        </Text>
      </Stack>
    </Center>
  );
}
