import "./Footer.style.css";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TbCircleLetterC } from "react-icons/tb";

function Footer() {
  return (
    <footer>
      <div className="logo-footer">
        <TbCircleLetterC size={35} color="#f1f2f6" className="logo-icon" />
      </div>
      <div className="info">
        <p>
          <span>Pagina elaborada por Carlos Guanipa </span>
          <a href="https://github.com/CarlosE-23" target="_blank">
            <FaGithub size={15} className="social-icon" />
            <span>github.com/CarlosE-23</span>
          </a>
          <a href="mailto:carlosgunaipa23@gmail.com" target="_blank">
            <IoMdMail size={15} className="social-icon" />
            <span>carlosgunaipa23@gmail.com</span>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
