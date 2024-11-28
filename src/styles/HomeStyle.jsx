import { Link } from "react-router-dom";

export const HomeWrap = ({ children }) => (
  <div className="max-w-[1200px] mt-[94px] mx-auto">{children}</div>
);

export const TitleArea = ({ children }) => (
  <section className="w-full text-center mt-8">{children}</section>
);

export const ChooseArea = ({ children }) => (
  <section className="w-full mt-8 flex flex-col items-center">
    {children}
  </section>
);

export const MainTitle = ({ children }) => (
  <h2 className="text-3xl mt-8">{children}</h2>
);

export const SubTitle = ({ children }) => <p className="mt-8">{children}</p>;

export const ChooseTest = ({ children }) => (
  <ul className=" flex">{children}</ul>
);

export const TestAndResult = ({ children }) => (
  <li className="bg-white mx-[2%] p-5 rounded shadow-[1px_3px_3px_#ccc]">
    {children}
  </li>
);
export const ListTitle = ({ children }) => (
  <h3 className="text-lg">{children}</h3>
);

export const ListInfo = ({ children }) => (
  <div className="mt-5 leading-[30px]">{children}</div>
);

export const ButtonArea = ({ children }) => (
  <div className="w-full mt-24 h-[100px] text-center">{children}</div>
);

export const ButtonStyle = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="bg-red-500 py-3 px-5 rounded-[30px] text-white hover:bg-transparent hover:text-red-500 transition-colors duration-200"
  >
    {children}
  </Link>
);
