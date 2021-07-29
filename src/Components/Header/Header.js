// ! Title, GitHub Link, About Project, Add New Resources
import { FaGithub, FaInfoCircle } from "react-icons/fa";

export const Header = () => {
  return (
    <nav className="navbar is-light" role="navigation">
      <div className="navbar-brand">
        <div className="navbar-item title">Saved Resources</div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a
              className="button"
              href="https://github.com/joshi-kaushal/saved-resources"
            >
              <FaGithub /> GitHub
            </a>
            <a
              className="button"
              href="https://github.com/joshi-kaushal/saved-resources"
            >
              <FaInfoCircle /> About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
