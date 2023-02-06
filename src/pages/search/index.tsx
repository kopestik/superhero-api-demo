import { Result, Search } from "@/interfaces/Search";
import {
  Box,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { ResultItem } from "../../components/ResultItem";

let timer: NodeJS.Timeout;

const fetchSuperhero = async (keyword: string): Promise<Search> => {
  const res = await fetch(`/api/search/?name=${keyword}`);

  return res.json();
};

const SearchPage = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const onSearch = (value: string) => {
    setError(undefined);
    setIsLoading(true);

    if (timer) {
      window.clearTimeout(timer);
    }

    if (value) {
      timer = setTimeout(async () => {
        const superHeroResults = await fetchSuperhero(value);

        if (superHeroResults.response === "success") {
          setResults(superHeroResults.results);
        } else {
          setResults([]);
          setError(superHeroResults.error);
        }
        setIsLoading(false);
      }, 500);
    } else {
      setError(undefined);
      setResults([]);
      setIsLoading(false);
    }
  };

  return (
    <Container minH="100vh" py={12}>
      <VStack gap={8}>
        <Box w="full">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
              </svg>
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search a superhero..."
              onChange={(e) => {
                onSearch(e.target.value);
              }}
            />
          </InputGroup>
        </Box>
        <Box w="full">
          <List display="flex" alignItems="center" flexDir="column" gap={4}>
            {isLoading && <Text>Searching superhero...</Text>}

            {!isLoading && !error && results.length === 0 && (
              <Text>Start searching for a superhero.</Text>
            )}

            {!isLoading && error && results.length === 0 && (
              <Text>No superheroes found.</Text>
            )}

            {!isLoading &&
              results.length > 0 &&
              results.map((result) => (
                <ListItem key={result.id} w="full">
                  <ResultItem result={result} />
                </ListItem>
              ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default SearchPage;
