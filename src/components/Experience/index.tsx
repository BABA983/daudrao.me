import { a11yDate, experienceDate } from "@/utils/date";

const experience = [
  {
    company: "Apifox",
    location: "Guangzhou",
    position: "Fullstack Developer",
    startDate: "2022-03",
    endDate: "now",
    details: (
      <>
        <p></p>
        <p>
          Tech stack: React, TypeScript, Electron, NodeJS, NestJS, Docker,
          Redis, MySQL
        </p>
      </>
    ),
  },
  {
    company: "RongShan Tech",
    location: "FoShan ShunDe",
    position: "Frontend Developer",
    startDate: "2020-07",
    endDate: "2022-02",
    details: (
      <>
        <p>Maintainer of Rong Chain, a financing service platform.</p>
        <p>Tech stack: Vue, JavaScript, single-spa</p>
      </>
    ),
  },
];

export function Experience() {
  return (
    <ul>
      {experience.map(({ company, details, endDate, position, startDate }) => (
        <li
          key={company}
          className="pb-2 pl-0 mb-4 border-b border-stone-200 before:contents"
        >
          <section>
            <h3 className="m-0 text-base font-normal">{position}</h3>
            <div>
              <div className="flex justify-between text-sm text-stone-600">
                <div>{company}</div>
                <div>
                  <time dateTime={a11yDate(startDate)}>
                    {experienceDate(startDate)}
                  </time>
                  {" - "}
                  <time dateTime={a11yDate(endDate)}>
                    {experienceDate(endDate)}
                  </time>
                </div>
              </div>
              <div className="mt-4 text-sm">{details}</div>
            </div>
          </section>
        </li>
      ))}
    </ul>
  );
}
