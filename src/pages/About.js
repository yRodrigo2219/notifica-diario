import { Center, Space, Stack, Title, Anchor, Text } from "@mantine/core";
import { User } from "tabler-icons-react";

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Center style={{ minHeight: "calc(100vh - 8rem)" }}>
      <Stack align="center" spacing="xs">
        <User
          size="20rem"
          color="#ffdf2b"
          style={{ maxWidth: "60vw", height: "auto" }}
        />
        <Title align="center">Rodrigo Santos do Carmo </Title>
        <Space h="lg" />

        <Text fz="xl" fw={600} px="xs" align="center" color="#b591d5">
          Feito durante a disciplina de TSII <Space />
          <Anchor
            href="https://github.com/yRodrigo2219"
            size="xl"
            color="grape"
          >
            Github
          </Anchor>
          <Space h="lg" />
          <Anchor component={Link} to="/" size="xl">
            Voltar...
          </Anchor>
        </Text>
      </Stack>
    </Center>
  );
}
