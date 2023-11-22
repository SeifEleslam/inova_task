import { ContentWraper } from "../components/contentWraper";
import { Courses } from "./courses";

export const ExploreCoursesSec = () => {
  return (
    <ContentWraper>
      <div className="text-center py-4">
        <p className="font-bold text-white text-2xl">EXPLORE OUR COURSES</p>
        <Courses />
      </div>
    </ContentWraper>
  );
};
