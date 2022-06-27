import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <ul>
        <h1>Home</h1>
        <li>
          <Link to="./about">About</Link>
        </li>
        <li>
          <Link to="./restaurants">Restaurants</Link>
        </li>
        <li>
          <Link to="./xxx">멸망의 길</Link>
        </li>
      </ul>
    </div>
  );
}
