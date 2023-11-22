import { ContentWraper } from "../components/contentWraper";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <footer className="py-20 bg-layout">
      <ContentWraper>
        <div className="m-auto flex flex-col md:flex-row gap-4 justify-between md:items-center py-10">
          <Logo />
          <div>
            <p>Join our </p>
            <p>Newsetter </p>
          </div>
          <div className="flex border-1px border-gray-200">
            <input
              placeholder="What your are looking for?"
              className="p-2 w-96 bg-layout border-[1px] border-gray-400"
            />
            <button className="bg-primary text-sm font-bold text-black p-2">
              Subscribe
            </button>
          </div>
        </div>
        <div className="border-t-[.1px] border-white opacity-[.25]"></div>
      </ContentWraper>
      <ContentWraper>
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div></div>
          <ul></ul>
          <div></div>
        </div>
      </ContentWraper>
    </footer>
  );
};
