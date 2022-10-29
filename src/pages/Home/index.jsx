import { Cards } from "../../components/Cards";
import { Footer } from "../../components/Footer";
import { Menu } from "./../../components/Menu";
import banner from "./../../imagens/banner.jpg";
import "./style.css";

export const Home = () => {
  return (
    <>
      <Menu paginaAtual={"Home"} />
      <div className="divImageHome">
        <img className="imgHome" src={banner} />
      </div>

      <div className="container">
        <h4 className="text-center">Porque nos escolher?</h4>
        <p className="text-center">Conheça nossos serviços</p>

        <Cards />
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234434.22413786297!2d-53.426317974785704!3d-23.350755481996067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x948d220b8f00b885%3A0xbe7ba58e1c85985c!2sDouradina%20-%20State%20of%20Paran%C3%A1%2C%2087485-000!5e0!3m2!1sen!2sbr!4v1666047669061!5m2!1sen!2sbr"
        width="100%"
        height="450px"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downggrade"
      ></iframe>

      <Footer />
    </>
  );
};
