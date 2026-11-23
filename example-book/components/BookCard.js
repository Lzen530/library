export default function BookCard({ title, author, rating = 0, isRead = false, isBest = false, onToggleRead }) {
  const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);

  return (
    <article className="book-card">
      <h3 className="book-title">
        {title}
        {isBest && <span className="best-badge">BEST</span>}
      </h3>
      <p className="book-author">{author}</p>
      <p className="book-rating" aria-label={`별점 ${rating}점`}>
        {stars}
      </p>
      <button type="button" onClick={onToggleRead} className={`book-status ${isRead ? 'book-status-read' : 'book-status-reading'}`}>
        {isRead ? '✅ 다 읽음' : '📖 읽는 중'}
      </button>
    </article>
  );
}
