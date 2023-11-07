import { Card, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link to={`/books/${id}`}>
    <Card key={id} my={6} p="20px" borderRadius="20px" style={{ width: "300px", height: "350px" }} cursor='pointer'>
      <VStack alignItems="center" h="100%">
        <Heading size={"md"}>
          {title} ({year})
        </Heading>
        <Text>{author}</Text>
        <Image w={24} h={24} src={`http://localhost:8000/${image}`} />
        <Text>
          <span>Publisher: </span>
          {publisher}
        </Text>
      </VStack>
    </Card>
    </Link>
  );
}