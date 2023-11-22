import { ContentWraper } from "../components/contentWraper";
import { CourseCard } from "../components/courseCard";
const courses = [
  {
    id: 1,
    title: "Course1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, laudantium maxime ea error consequatur tenetur deleniti nihil optio animi officiis.",
    url: "#",
  },
  {
    id: 1,
    title: "Course2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, laudantium maxime ea error consequatur tenetur deleniti nihil optio animi officiis.",
    url: "#",
  },
  {
    id: 1,
    title: "Course3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, laudantium maxime ea error consequatur tenetur deleniti nihil optio animi officiis.",
    url: "#",
  },
];
export const Courses = () => {
  return (
    <ContentWraper>
      <div className="flex flex-col md:flex-row gap-4">
        {courses.map((course) => {
          return (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              url={course.url}
            />
          );
        })}
      </div>
    </ContentWraper>
  );
};
