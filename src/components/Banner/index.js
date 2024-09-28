import "./Banner.css";

function Banner() {
  //JSX: Como o react trabalha com essa parte visual
  return (
    <header className="banner">
      <img
        src="/imagens/banner.png"
        alt="Banner principal da página do Organo"
      />
    </header>
  );
}

export default Banner;
