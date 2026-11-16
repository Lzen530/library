import BookCard from '@/components/BookCard';

export default function GenreSection({ label, books }) {
  return (
    <section className="genre-section">
      <h2 className="genre-title">{label} ({books.length})</h2>
      {books.length > 0 ? (
        <div className="book-grid">
          {books.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      ) : (
        <p className="empty-message">아직 등록된 책이 없습니다.</p>
      )}
    </section>
  );
}
