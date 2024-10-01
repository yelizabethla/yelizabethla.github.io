import { useRouteError } from "react-router-dom";
import { useEffect } from "react";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  useEffect(() => {
    document.title = `${error.status} Error`;
  });

  return (
    <div className="App">
      <div id="error-page" className="container">
        <h1>Oops!
        </h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.status} {error.statusText || error.message}</i>
        </p>
        <a href="/" className="link nav-link">Head Home</a>
      </div>
    </div>
  );
}

export default ErrorPage;