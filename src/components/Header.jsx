import ReactImg from "../assets/react.svg";
function Header() {
  return (
    <header className="flex flex-col justify-center items-center">
      <img src={ReactImg} alt="" />
      <h1 className="text-red-700 text-3xl">The Frontend Quiz</h1>
    </header>
  );
}

export default Header;
