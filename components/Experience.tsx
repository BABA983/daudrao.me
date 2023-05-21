import { a11yDate, visibleDate } from '@/utils/date';

const experience = [
  {
    company: 'Apifox',
    location: 'Guangzhou',
    position: 'Fullstack Developer',
    startDate: 'March, 2022',
    endDate: 'now',
    details: (
      <>
        <p>

        </p>
        <p>Tech stack: React, TypeScript, Electron, NodeJS, NestJS</p>
      </>
    ),
  },
  {
    company: 'RongShan Tech',
    location: 'FoShan ShunDe',
    position: 'Frontend Developer',
    startDate: 'July, 2020',
    endDate: 'Feb, 2022',
    details: (
      <>
        <p>Maintainer of Rong Chain, a financing service platform.</p>
        <p>Tech stack: Vue, TypeScript, single-spa</p>
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
          className="pb-2 pl-0 mb-4 border-b dark:border-stone-900 border-stone-200 before:contents"
        >
          <section>
            <h3 className="m-0 text-base font-normal">{position}</h3>
            <div>
              <div className="flex justify-between text-sm text-stone-600 dark:text-stone-400 ">
                <div>{company}</div>
                <div>
                  <time dateTime={a11yDate(startDate)}>
                    {visibleDate(startDate)}
                  </time>
                  {' - '}
                  <time dateTime={a11yDate(endDate)}>
                    {visibleDate(endDate)}
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
