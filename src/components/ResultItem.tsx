import {
  Heading,
  Avatar,
  Box,
  Flex,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";
import { Result } from "@/interfaces/Search";
import Link from "next/link";

interface ResultItemProps {
  result: Result;
}

const ResultItem = ({ result }: ResultItemProps) => {
  return (
    <Box
      w="full"
      p={4}
      boxShadow="sm"
      rounded="md"
      bgColor="white"
      border="1px solid"
      borderColor="gray.100"
    >
      <Flex alignItems="center" gap={4}>
        <Avatar
          size="xl"
          src={result.image.url}
          bgColor="gray.300"
          css={{
            border: "2px solid white",
          }}
        />

        <Box w="full">
          <Stack spacing={0} mb={5}>
            <Heading fontSize="2xl" fontWeight={500} fontFamily="body">
              {result.name}
            </Heading>
            <Text color="gray.500" noOfLines={1}>
              {result.work.occupation}
            </Text>
          </Stack>
          <Button
            as={Link}
            href={`/superhero/${result.id}`}
            w="full"
            bg="#151f21"
            color="white"
            rounded="md"
          >
            View Information
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export { ResultItem };
