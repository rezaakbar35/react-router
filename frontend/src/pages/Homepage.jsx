import { VStack, HStack, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooks } from "../modules/fetch";
 


export default function Homepage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getAllBooks();
      setBooks(books);
    };
    fetchBooks();
  }, []);

  return (

  <>
  
  <VStack pt="70px">
    {books?.books?.reduce((bookChunks, book, index) => {
      const chunkIndex = Math.floor(index / 4);
  
      if (!bookChunks[chunkIndex]) {
        bookChunks[chunkIndex] = [];
      }
  
      bookChunks[chunkIndex].push(book);
  
      return bookChunks;
    }, []).map((bookChunk, chunkIndex) => (
      <HStack key={chunkIndex} pt="5px" spacing="100px">
        {bookChunk.map((book) => (
          <Books key={`${book.id} ${book.title}`} {...book} />
        ))}
      </HStack>
    ))}
  </VStack>
  <Box position="fixed" style={{width: '100%',pointerEvents: "none", height: '100%', background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 88%, rgba(0, 0, 0, 0.10) 97%, rgba(0, 0, 0, 0.20) 100%)'}}>
  </Box>
  </>
  
  
  )
}
