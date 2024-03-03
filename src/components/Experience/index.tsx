import { a11yDate, experienceDate } from '@/utils/date';
import clsx from 'clsx';
import styles from './index.module.css';

const experience = [
  {
    company: 'Apifox',
    location: 'Guangzhou',
    position: 'Fullstack Developer',
    startDate: '2022-03',
    endDate: 'Present',
    details: (
      <>
        <p>
          Apifox is an API integrated collaboration platform for design,
          development, and testing to address the efficiency of the R&D process.
          <br />
          With millions of total users, tens of thousands of daily active users.
        </p>
        <p>
          First time as full-stack engineer, I have been responsible for a wide
          range of tasks in different areas.
          <br />
          <b>Frontend: </b>Primarily involved in the development of the domestic
          and international web versions and Electron applications,
          collaborating with the design team to develop user interfaces.
          <br />
          <b>Backend: </b>
          Design and implement scalable Web services and RESTful APIs.
          <br />
          <b>Testing: </b>Utilized Apifox to write test cases for corresponding
          functionalities, troubleshoot bugs, and perform error fixes.
          <br />
          <b>Infrastructure: </b>
          Maintained CI/CD for project builds and developed CLI tools to
          streamline the release process for web and desktop applications.
        </p>
        <ul className="list-disc mb-1">
          <li>
            Integrated Stripe to enable subscription-based payment
            functionality, including features such as credit redemption,
            currency conversion, subscription plan switching, reconciliation,
            and EDM. Achieved an MRR (Monthly Recurring Revenue) of <b>$6k+</b>{' '}
            within six months of deployment.
          </li>
          <li>
            Optimized the user invitation process, resulting in a <b>10%</b>{' '}
            increase in daily invitation initiations and a <b>1.8x</b> increase
            in daily new team registrations.
          </li>
          <li>
            Addressing data-related requirements from European users,
            implemented an API to detect users{"'"} IP addresses using an Nginx
            Lua script extension and GeoDB, guiding European users to utilize
            the European version of the application. Set up a CI/CD pipeline for
            the European version, including Web, Desktop, and Node.js servers,
            to simplify automated deployment on AWS and ensure smooth operation
            and revenue generation for the European version.
          </li>
          <li>
            Enhanced the user experience by implementing a browser-like
            interface for the desktop application, ensuring process isolation
            between different tab pages for improved stability.
          </li>
          <li>
            Resolved application freezing and crashing issues caused by large
            responses after initiating requests on the desktop application,
            optimizing memory usage from around 100MB to 337MB.
          </li>
          <li>
            Abstracted and encapsulated the logic for reading and writing data
            in LocalStorage, IndexedDB, and File, reducing the development cost
            and improving efficiency for cross-platform development.
          </li>
          <li>
            Migrated the legacy server-side code from Egg.js to Nest.js and
            developed corresponding test cases for the new server.
          </li>
        </ul>
        <p>
          Tech stack: React, TypeScript, Electron, NodeJS, NestJS, Docker,
          Redis, MySQL
        </p>
      </>
    ),
  },
  {
    company: 'RongShan Tech',
    location: 'FoShan ShunDe',
    position: 'Frontend Developer',
    startDate: '2020-07',
    endDate: '2022-02',
    details: (
      <>
        <p>
          Rongshan Supply Chain (with a loan amount of 2.213 billion in 2021) is
          a blockchain-based platform centered around Country Garden, issuing
          accounts payable vouchers to its suppliers on the Rongshan Supply
          Chain platform and providing end-to-end guarantees. It aims to
          facilitate financing for small and medium-sized enterprises.
        </p>
        <p>
          As a developer, my primary responsibilities included maintaining the
          codebase of the Rongshan Supply Chain platform and developing new
          features.
        </p>
        <ul className="list-disc mb-1">
          <li>
            Refactored the existing permission system using TypeScript to
            implement dynamic routing and simplify configuration.
          </li>
          <li>Upgraded the Vue CLI scaffolding from version 2.0 to 4.0. </li>
          <li>
            Introduced the Composition API after the release of Vue 3 to
            facilitate future upgrades and promoted its usage within the team.
          </li>
          <li>
            Optimized SEO using the prerender-spa-plugin and vue-meta plugins.
          </li>
          <li>
            Developed a separate UI component library by customizing ElementUI
            based on the company{"'"}s UI design guidelines.
          </li>
          <li>
            Generated component templates using Node.js. Implemented ESLint,
            lint-staged, and husky to ensure code quality and adherence to
            coding standards.
          </li>
          <li>
            Utilized the marked library to write corresponding documentation for
            easy reference during development.
          </li>
        </ul>
        <p>Tech stack: Vue, JavaScript, SPA</p>
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
                  {' - '}
                  <time dateTime={a11yDate(endDate)}>
                    {experienceDate(endDate)}
                  </time>
                </div>
              </div>
              <div
                className={clsx('mt-4 text-gray-500 text-xs', styles.details)}
              >
                {details}
              </div>
            </div>
          </section>
        </li>
      ))}
    </ul>
  );
}
