import { Button, Center, Container } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Container
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Button as={Link} href="/search">
          Click here to go to Search page
        </Button>
      </Container>
    </>
  );
}
