import { ReactNode } from "react";

export const CourseCard = ({
  title,
  description,
  url,
}: {
  title?: string | ReactNode;
  description?: string | ReactNode;
  url?: string;
}) => {
  return (
    <div className="flex-col gap-4 flex max-w-full shadow-2xl px-2 py-4 card-background text-left">
      <h1 className="text-2xl font-bold my-4">{title}</h1>
      <div>{description}</div>
      <div>
        <a href={url}>
          <button className="bg-primary text-black p-2 font-bold text-sm">
            See All
          </button>
        </a>
      </div>
    </div>
  );
};
