import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  SimpleGrid,
  CardFooter,
  Button,
} from "@chakra-ui/react";

function QuoteCard() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/quotes").then((quote) => {
      quote.json().then((res) => {
        console.log(res[0].quote);
        setQuote(res);
      });
    });
  }, []);

  return (
    <>
      <SimpleGrid
        spacing={8}
        templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
      >
        {quote.map((quote) => (
          <Card key={quote.id}>
            <CardHeader>
              <Heading size="md"> {quote.quote}</Heading>
            </CardHeader>
            <CardBody>
              <Text>{quote.author}</Text>
            </CardBody>
            <CardFooter>
              <Button bg="blue.300">Edit</Button>
              <Button bg="blue.300">Delete</Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}

export default QuoteCard;
