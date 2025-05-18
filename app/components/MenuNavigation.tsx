import Link from "next/link";
import { usePathname } from 'next/navigation'

type MenuNavigationProps = {
  setIsMenuOpen: (isOpen: boolean) => void;
};

export default function MenuNavigation({ setIsMenuOpen }: MenuNavigationProps) {
  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Notre philosophie", href: "/philosophy" },
    { name: "Ateliers / spectacles", href: "/projets" },
    { name: "À l'affiche", href: "/news" },
    { name: "Infos pratiques/Contact", href: "/contact" },
  ];

  const pathname = usePathname();

  return (
    <>
      {navigation.map((item) => (
        <li key={item.name}>
          <Link 
            href={item.href} 
            className={`tracking-wide hover:text-red ${pathname === item.href ? 'text-red' : 'text-black'}`}
            onClick={() => {
              setIsMenuOpen(false);
              if (typeof window.plausible === 'function') {
                window.plausible(`click_menu_${item.href.replace('/', '') || 'home'}`);
              }
            }}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </>
  );
}
