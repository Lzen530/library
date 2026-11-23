'use client';

import { useState } from 'react';
import GenreSection from '@/components/GenreSection';

const genres = [
  { id: 'novel', name: '소설', title: '📖 소설' },
  { id: 'essay', name: '에세이', title: '✍️ 에세이' },
  { id: 'it', name: 'IT', title: '🖥️ IT' },
  { id: 'poem', name: '시', title: '🌸 시' },
];

export default function BookShelf({ books }) {
  const [query, setQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [shelfBooks, setShelfBooks] = useState(books);

  const searchTerm = query.trim().toLowerCase();
  const filteredBooks = shelfBooks.filter((book) =>
    (selectedGenre === 'all' || book.genre === selectedGenre) &&
    book.title.toLowerCase().includes(searchTerm)
  );
  const totalBooks = shelfBooks.length;
  const finishedBooks = shelfBooks.filter((book) => book.isRead).length;
  const progress = totalBooks === 0 ? 0 : Math.round((finishedBooks / totalBooks) * 100);
  const recommendations = shelfBooks.filter((book) => book.isBest).map((book) => book.title);

  function toggleRead(id) {
    setShelfBooks((currentBooks) => currentBooks.map((book) =>
      book.id === id ? { ...book, isRead: !book.isRead } : book
    ));
  }

  return (
    <>
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

      <div className="shelf-controls">
        <label htmlFor="book-search">책 제목 검색</label>
        <input
          id="book-search"
          type="search"
          placeholder="책 제목을 입력하세요"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="genre-tabs" role="group" aria-label="장르 선택">
          {[{ id: 'all', name: '전체' }, ...genres].map(({ id, name }) => (
            <button
              key={id}
              type="button"
              aria-pressed={selectedGenre === id}
              onClick={() => setSelectedGenre(id)}
            >
              {name}
            </button>
          ))}
        </div>
        <p role="status">
          검색 결과 {filteredBooks.length}권
          {filteredBooks.length === 0 && (
            <span className="empty-message">조건에 맞는 책이 없습니다.</span>
          )}
        </p>
      </div>

      {filteredBooks.length > 0 && genres
        .filter((genre) => selectedGenre === 'all' || genre.id === selectedGenre)
        .map((genre) => (
          <GenreSection
            key={genre.id}
            label={genre.title}
            books={filteredBooks.filter((book) => book.genre === genre.id)}
            onToggleRead={toggleRead}
          />
        ))}
    </>
  );
}
