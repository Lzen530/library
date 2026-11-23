import BookShelf from '@/components/BookShelf';
import books from '@/data/books';

export default function Home() {
  return (
    <main className="library">
      <header className="library-header">
        <h1><span aria-hidden="true">📚</span> 나의 책장</h1>
      </header>

      <BookShelf books={books} />
    </main>
  );
}
