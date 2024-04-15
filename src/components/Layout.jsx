import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">PecoPic</Link>
          </li>
          <li>
            <Link
              to="https://liaopeichen.github.io/i-am-liaopeichen/"
              target="blank"
            >
              I am liaopeichen
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </div>
  );
}
