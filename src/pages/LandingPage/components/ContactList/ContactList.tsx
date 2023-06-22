import { IconGithub, IconLinkedin, IconMail, IconPhone } from "constants/svgs";
import { ContactListWrapperStyled } from "./ContactList.styled";

const CONTACT_INFO = [
  {
    icon: <IconPhone />,
    href: "tel:+84352222637",
    content: "+84352222637",
  },
  {
    icon: <IconMail />,
    href: "mailto:ductoan2010200@gmail.com",
    content: "ductoan2010200@gmail",
  },
  {
    icon: <IconGithub />,
    href: "https://github.com/ductoan212",
    content: "github.com/ductoan212",
  },
  {
    icon: <IconLinkedin />,
    href: "https://www.linkedin.com/in/ductoan212",
    content: "linkedin.com/in/ductoan212",
  },
];

function ContactList() {
  return (
    <ContactListWrapperStyled>
      {CONTACT_INFO.map((info, index) => (
        <li key={`${info.href}-${index}`} className="contact-info-item">
          <a href={info.href} target="_blank" rel="noreferrer">
            <span className="contact-icon">{info.icon}</span>
            {info.content}
          </a>
        </li>
      ))}
    </ContactListWrapperStyled>
  );
}

export { ContactList };
