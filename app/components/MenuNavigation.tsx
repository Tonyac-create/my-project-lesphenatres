import Link from "next/link";
import { usePathname } from 'next/navigation'

type MenuNavigationProps = {
  setIsMenuOpen: (isOpen: boolean) => void;
};

export default function MenuNavigation({ setIsMenuOpen }: MenuNavigationProps) {
  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Notre troupe", href: "/troupe" },
    { name: "Nos projets", href: "/projets" },
    { name: "L'équipe", href: "/equipe" },
    { name: "Contact", href: "/contact" },
  ];

  const pathname = usePathname();

  return (
    <>
      {navigation.map((item) => (
        <li key={item.name} onClick={() => setIsMenuOpen(false)}>
          <Link href={item.href} className={`hover:text-red ${pathname === item.href ? 'text-red' : 'text-black'}`}>{item.name}</Link>
        </li>
      ))}
    </>
  );
}
