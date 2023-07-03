import "./footer.css";
import { PhoneIcon } from "../Icons/PhoneIcon";
import { MailIcon } from "../Icons/MailIcon";

function Footer() {
  return (
    <div className="Footer">
      <div className="adress">
        <p>
          <strong>Markus Scheuermann</strong>
        </p>
        <p>Luitpold-Lipp-Weg 2</p>
        <p>86871 Rammingen</p>
        <br />
        <hr />
        <br />
        <div className="contactData"><PhoneIcon /><p>+49 159 01274662</p></div>
        <div className="contactData"><MailIcon /><p>scheuermann-markus@gmx.de</p></div>
      </div>
    </div>
  ); 
}

export default Footer;
