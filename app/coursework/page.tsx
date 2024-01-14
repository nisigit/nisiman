import { allSemesters } from "@/data/coursework";
import { Course } from "@/interfaces/interfaces";

export default function Coursework() {
  return (
    <>
      <section className="p-4 m-4 sm:m-6 lg:mx-8 lg:my-4 my-2">
        <h2 className="text-xl font-bold leading-tight sm:text-2xl">
          Coursework
        </h2>
        <p className="mt-4 text-base">
          Here is a list of courses I have taken at Edinburgh and online.
        </p>
      </section>

      {/* Courses */}
      {allSemesters.map(
        (
          semester: { semesterName: string; courses: Course[] },
          index: number
        ) => (
          <section
            key={semester.semesterName}
            className={`${
              index < allSemesters.length - 1
                ? "border-b-2 border-neutral-300 dark:border-slate-700"
                : ""
            } p-4 mx-4 sm:m-6 lg:mx-8 lg:my-4 my-6`}
          >
            <h3 className="text-xl md:text-2xl font-bold leading-tight">
              {semester.semesterName}
            </h3>
            <div className="my-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-between place-items-start">
              {semester.courses.map((course: Course) => (
                <div key={course.id} className="w-auto my-3 mr-6">
                  <h4 className="text-base font-semibold leading-tight text-blue-600 dark:text-indigo-500">
                    {course.id}
                  </h4>
                  <p className="text-sm">{course.name}</p>
                </div>
              ))}
            </div>
          </section>
        )
      )}
    </>
  );
}
