import Link from "next/link";
import NavLink from "../../ui/navLink/navLink";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="navbar-brand">Vi-Flutech</h3>
      <NavLink href="/app/dashboard" name="Dashboard" />
      <NavLink href="/app/history" name="History" />
      <NavLink href="/app/notifications" name="Notifications" />
      <NavLink href="/app/settings" name="Settings" />
      <NavLink href="/app/help" name="Help & Support" />
    </nav>
  );
};

export default Navbar;
