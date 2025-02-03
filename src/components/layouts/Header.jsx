import logo from "../../assets/logo.png";
import { nav } from "../../data/routes";
import Container from "../Container";
import { NavLink } from "react-router";
import Button from "../ui/Button";
import MobileDrawer from "../blocks/MobileDrawer";

export default function Header() {
  return (
    <Container disableYPadding={true}>
      <header className="flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className=" hidden lg:flex items-center gap-8">
          <nav>
            <ul className="flex gap-10 font-semibold items-center">
              {nav.map((route, idx) => (
                <li key={idx}>
                  <NavLink className="text-primary/70
                   hover:text-secondary 
                   transition-all 
                   duration-300"
                    to={route.href}>{route.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Button invert={true}>Get Started Free</Button>
        </div>
        <div className="lg:hidden">
          <MobileDrawer data={nav} />
        </div>
      </header>
    </Container>
  );
}
