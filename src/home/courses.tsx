"use client";
import { useEffect, useState } from "react";
import { ContentWraper } from "../components/contentWraper";
import { CourseCard } from "../components/courseCard";
import { getCourses } from "@/api/courses";
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
  const [data, setData] = useState<
    { attributes: { name: string; description: string } }[]
  >([]);
  const getCoursesList = async () => {
    setData((await getCourses()).data);
  };
  useEffect(() => {
    getCoursesList();
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <ContentWraper>
      <div className="flex flex-col md:flex-row gap-4">
        {data &&
          data.map((course) => {
            return (
              <CourseCard
                key={course.attributes.name}
                title={course.attributes.name}
                description={course.attributes.description}
                url={"#"}
              />
            );
          })}
      </div>
    </ContentWraper>
  );
};
