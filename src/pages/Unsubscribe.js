import { Center, Space, Stack, Title, Button, Flex } from "@mantine/core";
import { Trash } from "tabler-icons-react";

import openInfoModal from "../components/Modals/Info";
import openErrorModal from "../components/Modals/Error";
import { useParams, useNavigate } from "react-router-dom";
import { useModals } from "@mantine/modals";
import { forgetUser } from "../services/api";

export default function NotFound() {
  const { token } = useParams();
  const modals = useModals();
  const navigate = useNavigate();

  return (
    <Center style={{ minHeight: "calc(100vh - 8rem)" }}>
      <Stack align="center" spacing="xs">
        <Trash
          size="20rem"
          color="#ffdf2b"
          style={{ maxWidth: "60vw", height: "auto" }}
        />
        <Title align="center">
          Tem certeza que deseja parar de receber os emails?
        </Title>
        <Space h="xl" />
        <Flex gap="md" justify="space-around" w="80%">
          <Button
            color="red"
            radius="md"
            size="lg"
            onClick={async () => {
              try {
                await forgetUser(token);
                openInfoModal(modals, "Pronto. Você não receberá mais emails");
              } catch (error) {
                openErrorModal(modals, "Usuário inexistente");
              }
            }}
          >
            Parar de receber
          </Button>
          <Button
            color="indigo"
            radius="md"
            size="lg"
            onClick={() => {
              navigate("/");
            }}
          >
            Voltar
          </Button>
        </Flex>
      </Stack>
    </Center>
  );
}
