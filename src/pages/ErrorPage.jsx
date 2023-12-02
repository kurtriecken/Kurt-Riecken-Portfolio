import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='container w-75' id="error-page">
      <Link to="/">← Go Back</Link>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
