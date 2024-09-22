import Link from "next/link";
import { contentData } from "@/data/content";
import type { Content } from "@/data/content";
import { FaLink } from "react-icons/fa";

type ContentProps = Content;

const Content: React.FC<ContentProps> = ({ title, items }) => {
  return (
    <section className="my-14 text-sm">
      <h3 className="mb-6 text-lg md:text-xl">{title}</h3>
      <div className="flex flex-col gap-6">
        {items.map((item, index) => {
          return (
            <div className="flex" key={index}>
              <div className="text-xs flex-shrink-0 md:text-sm md:mr-8 w-[100px] md:w-[150px] text-slate-800 dark:text-slate-200">
                {item.date}
              </div>
              <div className="flex flex-col flex-2">
                <div className="flex items-center">
                  <h4 className="text-md md:text-lg font-bold inline">
                    {item.title}
                  </h4>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2 inline cursor-pointer text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 hover:text-slate-900 transition-colors duration-200"
                    >
                      <FaLink />
                    </a>
                  ) : null}
                </div>
                <p className="text-sm md:text-md text-gray-700 dark:text-gray-400">
                  {item.subTitle}
                </p>
                {item.description ? (
                  <p className="text-gray-700 dark:text-gray-400 mt-2">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default function CV() {
  return (
    <>
      <main className=" max-w-3xl mx-auto px-3 py-20 relative min-h-screen font-light">
        <section className="flex items-center">
          <div>
            <h1 className="mb-0.5 text-xl md:text-2xl text-slate-900 dark:text-slate-100">
              Nisiman
            </h1>
            <p className="text-slate-700 dark:text-slate-300 text-sm md:text-md">
              Software Engineer
            </p>
            <span className="text-sm text-slate-800 dark:text-slate-400">
              <Link href="/" className="hover:underline">
                nisiman.xyz
              </Link>
            </span>
          </div>
        </section>
        {/* <section className="my-9 text-sm">
          <h3 className="mb-1 text-slate-900 dark:text-slate-100">About</h3>
          <div className="text-slate-600 dark:text-slate-300">
            <p>About para</p>
          </div>
        </section> */}
        {contentData.map((content, index) => {
          return <Content {...content} key={index} />;
        })}
      </main>
    </>
  );
}
