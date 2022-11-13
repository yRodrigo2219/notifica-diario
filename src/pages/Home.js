import {
  Container,
  Stack,
  Space,
  Flex,
  Text,
  Group,
  Button,
  Badge,
  ActionIcon,
  TextInput,
  Image,
  Title,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { At, X, Key, Plus } from "tabler-icons-react";

import Hero from "../assets/Hero.png";
import Worry from "../assets/Worry.png";
import Computer from "../assets/Computer.png";
import Boom from "../assets/Boom.png";

export default function Home() {
  const { height, width } = useViewportSize();
  const badges = [
    { name: "Rodrigo" },
    { name: "Rodrigo" },
    { name: "Rodrigo" },
    { name: "Rodrigo" },
    { name: "Rodrigo" },
    { name: "Rodrigo" },
    { name: "Rodrigo" },
    { name: "Rodrigo" },
    { name: "Rodrigo" },
    { name: "Rodrigo" },
  ];

  const removeButton = (
    <ActionIcon size="xs" radius="xl" variant="transparent">
      <X size={20} color="white" />
    </ActionIcon>
  );

  return (
    <Container size="xl" pb="xl">
      {width >= 1024 ? (
        <Image src={Hero} alt="Notifica Diário" />
      ) : (
        <>
          <Space h="xl" style={{ height: "4rem" }} />
          <Container size="md" pw="xl">
            <Flex
              gap="md"
              direction="row"
              justify="space-between"
              align="center"
            >
              <Stack>
                <Title size={54} ta="center">
                  NOTIFICA DIÁRIO
                </Title>
                <Text fw={600} color="#b591d5" size={18} ta="center">
                  NÃO PERCA MAIS NENHUMA INFORMAÇÃO IMPORTANTE DO DIÁRIO OFICIAL
                  DA BAHIA
                </Text>
              </Stack>
              <Image
                src={Boom}
                alt=""
                style={{
                  maxWidth: "200px",
                  width: "100%",
                }}
              />
            </Flex>
          </Container>
        </>
      )}
      <Stack spacing="xl">
        <Space h="xl" style={{ height: "15rem" }} />
        <Flex gap="md" direction="row" justify="space-around" wrap="wrap">
          <Image
            src={Worry}
            alt=""
            style={{ maxWidth: "320px", maxHeight: "360px", width: "100%" }}
          />
          <Stack style={{ maxWidth: "600px" }}>
            <Title size={36} ta="center">
              Pare de se <u>preocupar</u>
            </Title>
            <Text fz="xl" fw={600} color="#b591d5">
              &nbsp;&nbsp;&nbsp;&nbsp;Não tem porque ficar preocupado(a) em
              olhar o Diário Oficial da Bahia todos os dias.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;É só se inscrever e a nossa ferramenta vai
              te avisar quando encontrar algum documento de seu interesse!
            </Text>
          </Stack>
        </Flex>
        <Space h="xl" style={{ height: "10rem" }} />
        <Flex
          gap="md"
          direction="row"
          justify="space-around"
          wrap="wrap-reverse"
        >
          <Stack style={{ maxWidth: "600px" }}>
            <Title size={36} ta="center">
              É completamente <u>automático</u>
            </Title>
            <Text fz="xl" fw={600} color="#b591d5">
              &nbsp;&nbsp;&nbsp;&nbsp;O nosso sistema irá analizar todos os
              documentos postados no Diário Oficial da Bahia e te mandar uma
              notificação com o documento caso seja algo do seu interesse.
            </Text>
          </Stack>
          <Image
            src={Computer}
            alt=""
            style={{ maxWidth: "440px", maxHeight: "300px", width: "100%" }}
          />
        </Flex>
        <Space h="xl" style={{ height: "15rem" }} />
        <Title size={48} ta="center">
          Registre-se e receba as noticias
        </Title>
        <Space h="xl" />
        <Flex
          gap="xl"
          direction="column"
          justify="space-around"
          align="center"
          wrap="wrap"
        >
          <Stack style={{ minWidth: "40%" }}>
            <TextInput
              icon={<At />}
              placeholder="meu-email@gmail.com"
              radius="md"
              label="Seu email"
              size="lg"
              style={{ maxWidth: "600px" }}
            />
            <Flex align="flex-end" gap="md">
              <TextInput
                icon={<Key />}
                placeholder="PalavraX"
                radius="md"
                label="Palavra chave"
                size="lg"
              />
              <Button color="grape" radius="lg" size="lg">
                <Plus />
              </Button>
            </Flex>
            <Group>
              {badges.map((badge) => (
                <Badge
                  size="xl"
                  sx={{ paddingRight: 7 }}
                  rightSection={removeButton}
                  color="violet"
                  variant="filled"
                >
                  {badge.name}
                </Badge>
              ))}
            </Group>
          </Stack>
          <Space h="xl" />
          <Button
            color="grape"
            radius="lg"
            size="xl"
            style={{ maxWidth: "280px" }}
          >
            Quero me Inscrever!
          </Button>
        </Flex>
        <Space h="xl" style={{ height: "10rem" }} />
      </Stack>
    </Container>
  );
}
