import { Experience } from '@/components/Experience';
import {
  GitHubIcon,
  LocationIcon,
  MailIcon,
  RSSIcon,
  XIcon,
} from '@/components/Icons';
import { PhoneIcon } from '@/components/Icons/Phone';
import { PrintBtn } from '@/components/PrintBtn';
import clsx from 'clsx';
import { Metadata } from 'next';

// https://github.com/BartoszJarocki/cv
const RESUME_DATA = {
  name: 'RaoQiDi',
  location: 'FoShan, China, CST (UTC-8)',
  locationLink: 'https://www.google.com/maps/place/FoShan',
  about:
    'Full Stack Enginner trying to learn how to design a good user interface',
  summary: `I work mostly with TypeScript, React, Node.js. Currently I am interested in Rust, Go and how to design a good user interface. Prefer to read articles written by other people's blogs. Articles are generally shorter and more purposeful than videos or presentations.`,
  contact: {
    email: 'raoqidi@foxmail.com',
    tel: '+8613250363742',
    github: 'https://github.com/BABA983',
    x: 'https://twitter.com/_BABA983',
    blog: 'https://daudrao.vercel.app',
  },
  education: [
    {
      school: 'Zhaoqing University',
      degree: "Bachelor's degree in software engineering",
      start: '2016',
      end: '2020',
    },
  ],
  stacks: {
    Frontend: [
      'React',
      'Vue',
      'Next.js',
      'Webpack',
      'Vite',
      'Redux',
      'Zustand',
    ],
    Backend: ['Node.js', 'Nest.js', 'MySQL', 'Redis', 'Nginx', 'Docker'],
    Desktop: ['Electron'],
    DevOps: ['Amazon Web Services (AWS)', 'Jenkins'],
    Languages: ['TypeScript', 'JavaScript', 'Lua', 'Go'],
  },
} as const;

function Section({ className, ...props }: any) {
  return (
    <section
      className={clsx('flex min-h-0 flex-col gap-y-3', className)}
      {...props}
    />
  );
}

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function CV() {
  return (
    <section className="container relative print:p-12">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">
              <ruby>
                Rao<rt>饶</rt>
              </ruby>
              <ruby className="ml-0">
                Qidi<rt>启迪</rt>
              </ruby>
            </h1>

            <p className="max-w-md text-pretty font-mono text-sm">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs">
              <a
                className="inline-flex items-center gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <LocationIcon className="size-4" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex flex-col gap-1 pt-1 font-mono text-sm">
              <div className={clsx('flex items-center gap-1')}>
                <MailIcon className="size-4" />
                <a
                  className="hover:underline"
                  href={`mailto:${RESUME_DATA.contact.email}`}
                  target="_blank"
                >
                  {RESUME_DATA.contact.email}
                </a>
              </div>
              <div className={clsx('flex items-center gap-1')}>
                <PhoneIcon className="size-4" />
                <a
                  className="hover:underline"
                  href={`tel:${RESUME_DATA.contact.tel}`}
                  target="_blank"
                >
                  {RESUME_DATA.contact.tel}
                </a>
              </div>
              <div className={clsx('flex items-center gap-1')}>
                <GitHubIcon className="size-4" />
                <a
                  className="hover:underline"
                  href={RESUME_DATA.contact.github}
                  target="_blank"
                >
                  {RESUME_DATA.contact.github}
                </a>
              </div>
              <div className={clsx('flex items-center gap-1')}>
                <XIcon className="size-4" />
                <a
                  className="hover:underline"
                  href={RESUME_DATA.contact.x}
                  target="_blank"
                >
                  {RESUME_DATA.contact.x}
                </a>
              </div>
              <div className={clsx('flex items-center gap-1')}>
                <RSSIcon className="size-4" />
                <a
                  className="hover:underline"
                  href={RESUME_DATA.contact.blog}
                  target="_blank"
                >
                  {RESUME_DATA.contact.blog}
                </a>
              </div>
            </div>
          </div>
        </div>
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm">{RESUME_DATA.summary}</p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Experience</h2>
          <Experience />
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <div key={education.school}>
                <div>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="text-base font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-sm">{education.degree}</p>
              </div>
            );
          })}
        </Section>
        {/* <Section> */}
        {/*   <h2 className="text-xl font-bold">Stacks</h2> */}
        {/*   {Object.entries(RESUME_DATA.stacks).map(([k, v]) => ( */}
        {/*     <div key={k} className="flex gap-2"> */}
        {/*       <b>{k}:</b> */}
        {/*       <span>{v.join(', ')}</span> */}
        {/*     </div> */}
        {/*   ))} */}
        {/* </Section> */}

        <Section>
          <PrintBtn />
        </Section>
      </section>
    </section>
  );
}
