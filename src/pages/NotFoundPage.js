import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="not-found-page">
      <div className="not-found-page__container">
        <h2>404 Not Found!</h2>
        <Link
          to="/"
          className="btn btn--green not-found-page__btn"
          onMouseDown={(e) => e.preventDefault()}
        >
          Home
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
