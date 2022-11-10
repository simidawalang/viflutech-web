import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps {
  href: string;
  name: string;
  className?: string;
}

const NavLink = ({ href, name }: NavLinkProps) => {
  const router = useRouter();
  return (
    <Link href={href} passHref>
      <a
        className={`nav-link ${router.pathname.includes(href) ? "active" : ""}`}
      >
        {name}
      </a>
    </Link>
  );
};

export default NavLink;
