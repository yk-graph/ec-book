import Book from "@/components/Book";
import { getAllBooks } from "@/libs/microcms/client";

export default async function Home() {
  const { contents: books } = await getAllBooks();

  return (
    <main className="flex flex-wrap justify-center items-center md:mt-20 mt-20">
      <h2 className="text-center w-full font-bold text-3xl mb-2">
        Book Commerce
      </h2>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </main>
  );
}
