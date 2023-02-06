import { API_URL } from "@/config";
import { Superhero } from "@/interfaces/Superhero";
import { GetServerSidePropsContext, NextPage } from "next";
import { Accordion, Box, Center, Container, Text } from "@chakra-ui/react";
import Image from "next/image";
import { SuperheroAccordionItem } from "@/components/SuperheroAccordionItem";
import Link from "next/link";

const SuperheroPage: NextPage<{ details: Superhero }> = ({ details }) => {
  return (
    <Container minH="100vh">
      <Center flexDir="column">
        <Link href="/search">Go back to search</Link>
        <Box w={300} border="2px solid" borderColor="gray.300" rounded="md">
          <Text size="lg" fontWeight="bold" p={2} textAlign="center">
            {details.name}
          </Text>
          <Image
            src={details.image.url}
            alt={details.name}
            width={300}
            height={400}
          />
          <Accordion allowToggle>
            {Object.keys(details).map((detailKey) => {
              const section = details[detailKey as keyof typeof details];

              if (typeof section === "string") return null;

              return (
                <SuperheroAccordionItem
                  key={detailKey}
                  title={detailKey}
                  section={section}
                />
              );
            })}
          </Accordion>
        </Box>
      </Center>
    </Container>
  );
};

export const getServerSideProps = async (
  context?: GetServerSidePropsContext
) => {
  const { query } = context || {};
  const { id } = query || {};

  const res = await fetch(`${API_URL}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const details = await res.json();

  return {
    props: {
      details,
    },
  };
};

export default SuperheroPage;
