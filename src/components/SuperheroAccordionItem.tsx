import {
  Appearance,
  Biography,
  Connections,
  Image,
  Powerstats,
  Work,
} from "@/interfaces/Superhero";

import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Divider,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

interface SuperheroAccordionItemProps {
  title: string;
  section: Image | Appearance | Powerstats | Biography | Work | Connections;
}

const SuperheroAccordionItem = ({
  section,
  title,
}: SuperheroAccordionItemProps) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box
            as="span"
            flex="1"
            textAlign="left"
            fontWeight="bold"
            textTransform="capitalize"
          >
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <List>
          {Object.keys(section).map((detailKey, idx, sectionArray) => {
            const details = section[detailKey as keyof typeof section] as
              | string
              | string[];

            return (
              <ListItem key={detailKey}>
                <Text
                  textTransform="capitalize"
                  fontStyle="italic"
                  fontSize="sm"
                >
                  {detailKey}:
                </Text>
                <Text>
                  {typeof details === "string" ? details : details.join(", ")}
                </Text>
                {idx < sectionArray.length - 1 && <Divider my={2} />}
              </ListItem>
            );
          })}
        </List>
      </AccordionPanel>
    </AccordionItem>
  );
};

export { SuperheroAccordionItem };
