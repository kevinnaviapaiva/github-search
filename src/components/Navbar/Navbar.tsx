import { Image, Title } from '../bulma';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Image src="/images/github-icon.svg"/>
        <Title>GitHub </Title>
        <Title size={4} margin="mt-1 ml-2"> Search</Title>
      </div>
    </nav>
  )
}