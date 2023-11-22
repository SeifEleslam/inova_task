import { ContentWraper } from "../components/contentWraper";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className="header py-6">
      <ContentWraper>
        <div className="logo flex items-center justify-between py-4">
          <Logo />
          <p>Sign in or Sign Up</p>
        </div>
      </ContentWraper>
      <ContentWraper classes={"bg-layout py-2"}>
        <nav className="">
          <ul className="flex flex-row gap-20">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
          </ul>
        </nav>
      </ContentWraper>
    </header>
  );
};
