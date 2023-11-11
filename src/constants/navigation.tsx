import { NavigationItem } from "@interfaces/navigation";
import { BiPlusCircle, BiSolidHeart } from "react-icons/bi";

export const navigationItems: NavigationItem[] = [
    {
        id: "navigation.new-contact",
        title: "Añadir contacto",
        icon: <BiPlusCircle />,
        href: "?add",
    },
];

export default { navigationItems };
