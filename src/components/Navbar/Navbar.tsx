import { Image, Title } from '../bulma';

export const Navbar = () => {
  return (
    <nav className="navbar has-background-primary-dark">
      <div className="navbar-brand">
        <a href="/">
          <Image className="ml-5 mt-5" square={64} src="/images/github-icon.svg"/>
        </a>
        <div className="navbar-item">
          <a href="/">
            <Title className="ml-3 mt-2 mb-3">
              <div className="is-size-2">GitHub</div>
              Search
            </Title>
          </a>
        </div>
      </div>
    </nav>
  )
}