import GenreSection from '@/components/GenreSection';
import books from '@/data/books';

const genres = [
  { id: 'novel', title: '📖 소설' },
  { id: 'essay', title: '✍️ 에세이' },
  { id: 'it', title: '🖥️ IT' },
  { id: 'poem', title: '🌸 시' },
];

export default function Home() {
  const totalBooks = books.length;
  const finishedBooks = books.filter((book) => book.isRead).length;
  const progress = totalBooks === 0 ? 0 : Math.round((finishedBooks / totalBooks) * 100);
  const recommendations = books.filter((book) => book.isBest).map((book) => book.title);

  return (
    <main className="library">
      <header className="library-header">
        <h1><span aria-hidden="true">📚</span> 나의 책장</h1>
      </header>

      <section className="reading-overview" aria-label="독서 현황">
        <div className="summary-grid">
          <p className="summary-item">전체 <strong>{totalBooks}권</strong></p>
          <p className="summary-item">다 읽은 책 <strong>{finishedBooks}권</strong></p>
          <p className="summary-item">독서 진행률 <strong>{progress}%</strong></p>
        </div>
        <div
          className="progress-track"
          role="progressbar"
          aria-label="독서 진행률"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </section>

      {recommendations.length > 0 && (
        <aside className="recommendation">
          <span className="recommendation-star" aria-hidden="true">★</span>
          <p><strong>별점 5점 추천:</strong> {recommendations.join(', ')}</p>
        </aside>
      )}

      {genres.map((genre) => (
        <GenreSection
          key={genre.id}
          label={genre.title}
          books={books.filter((book) => book.genre === genre.id)}
        />
      ))}
    </main>
  );
}
