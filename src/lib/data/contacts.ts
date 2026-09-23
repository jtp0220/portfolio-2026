import { MdOutlineEmail, MdPhone } from "react-icons/md";

import { type ContactData } from "@/lib/types/contacts";

export const contactsData: ContactData[] = [
  {
    label: "Email",
    value: "jeremytranperez@gmail.com",
    href: "mailto:jeremytranperez@gmail.com",
    icon: MdOutlineEmail,
  },
];
