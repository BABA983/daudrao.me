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
import { a11yDate, experienceDate } from '@/utils/date';

const RESUME_DATA = {
  name: '饶启迪',
  location: '佛山，顺德',
  about: '工作经验：4 年',
  summary:
    '主要写 TypeScript、React 和 Node.js，对一切前沿知识保持充分的好奇。',
  contact: {
    email: 'raoqidi@foxmail.com',
    tel: '+8613250363742',
    github: 'https://github.com/BABA983',
    blog: 'https://daudrao.vercel.app',
  },
  education: [
    {
      school: '肇庆学院',
      degree: '软件工程',
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

const experience = [
  {
    company: 'Apifox',
    location: '广州',
    position: '前端工程师',
    startDate: '2022-03',
    endDate: '现在',
    details: (
      <>
        <p>
          Apifox 是一个 API
          设计、开发、测试一体化协作平台，解决研发流程的效率问题。
          <br />
          总用户达千万级，团队日活万级，私有化订单百万级。
        </p>
        <h4 className="mt-2 text-sm">工作职责</h4>
        <p>
          <b>前端：</b>主要负责国内和海外版 Web 端和 Electron
          开发，和设计团队合作开发用户界面。
          <br />
          <b>后端：</b>
          针对需求设计和实现可扩展的 Web 服务和 RESTful API。
          <br />
          <b>测试：</b>用 Apifox
          编写对应功能的测试用例，通过测试用例来保证功能的稳定。
          <br />
          <b>基建：</b>
          维护项目构建的 CI/CD，CLI 工具简化 Web 端和客户端发版流程。
        </p>
        <h4 className="mt-2 text-sm">支付</h4>
        <p className="mb-2">
          国内版接入<b>支付宝</b>和<b>微信支付</b>，海外版集成 <b>Stripe</b>
          ，实现 Apifox 产品商业化的<b>支付</b>
          订阅功能。
          <br />
          海外版支付功能上线半年后 <b>MRR $6k+</b>。
        </p>
        <ul className="list-disc mb-1">
          <li>
            动态配置：支持动态配置下发，用于前端对应功能权限管理和价格页渲染。
          </li>
          <li>积分兑换：用户可以邀请未注册过的用户来获取对应积分。</li>
          <li>
            币种转换：用户可以用积分兑换相应的币种来购买订阅，例如美元或者日元。
          </li>
          <li>订阅切换：订阅可以升级或者降级。</li>
          <li>定时对账：定时任务扫积分和币种兑换的对账，保证准确性。</li>
          <li>
            EDM:
            在对应的关键时间点例如订阅即将到期，会有相关邮件触达到用户邮箱。
          </li>
        </ul>
        <h4 className="mt-2 text-sm">欧洲版</h4>
        <p className="mb-2">
          由于欧洲地区用户对数据问题比较敏感，从原来的海外版再新增一个欧洲版。
          <br />
          负责落地海外欧洲版应用，欧洲版的服务和数据库相关都独立部署。
        </p>
        <ul className="list-disc mb-1">
          <li>引导欧洲地区用户使用欧洲版应用</li>
          <ul className="list-disc pl-4">
            <li>
              基于 Nginx 的 Lua 脚本扩展和 GeoLite2 数据库实现了检测用户 IP
              地址的 API。
            </li>
            <li>开发欧洲版上线的相关邮件，发送邮件触达欧洲用户。</li>
            <li>后端根据不同地区动态下发配置。</li>
          </ul>
          <li>
            为欧洲版应用搭建 CI/CD pipeline，简化构建自动部署到 AWS
            上，支持欧洲版应用的正常运行和营收。
            <ul className="list-disc pl-4">
              <li>
                Web
                端：配置自动化构建脚本，将源代码编译、打包和生成静态资源文件。
              </li>
              <li>
                桌面端：改造不同平台下的打包脚本，支持打包后上传对应制品库。
              </li>
              <li>
                服务端：通过 Dockerfile
                构建出相应镜像，设置自动化测试流程，触发对应的 Apifox
                测试场景对功能进行回归。
                <br />
                通过 HTTP 请求触发 AWS EC2 实例上的 Bash 脚本更新 Docker 容器。
              </li>
            </ul>
          </li>
          <li>
            CLI 工具支持欧洲版客户端发版。
            <ul className="list-disc pl-4">
              <li>支持 Changelog 准备。</li>
              <li>客户端提交到 360 审核。</li>
              <li>安装包上传 AWS S3 和 CDN 缓存刷新。</li>
              <li>桌面端更新配置到管理后台。</li>
              <li>检查对应版本和更新时间。</li>
            </ul>
          </li>
        </ul>
        <h4 className="mt-2 text-sm">桌面端</h4>
        <p className="mb-2">
          应用实现浏览器多 Tab
          的功能，改变用户与应用之间的交互方式，大幅提升用户的使用体验。
          <br />
          定位应用闪退崩溃问题，做相应的性能优化。
        </p>
        <ul className="list-disc mb-1">
          <li>
            Tab 支持相互通信，拖拽，恢复，多开，窗口置顶等功能，进程隔离。
            <ul className="list-disc pl-4">
              <li>唤醒：支持从 Web 端或者在应用未打开的情况把应用唤醒。</li>
              <li>
                恢复：应用正常或异常退出的时候可以恢复 Tab，提升用户体验。
              </li>
              <li>
                多开：支持从 Tab
                中独立出来作为一个独立窗口，提供了更大的灵活性，让用户并行处理任务。
              </li>
              <li>
                进程隔离：Tab 之间独立运行，不会相互干扰，提高稳定性和安全性。
              </li>
              <li>消息同步：Tab 之间通过 IPC 通信保持消息同步和状态更新。</li>
            </ul>
          </li>
          <li>
            对应用 LocalStorage、IndexedDB 和 File
            的读取存储逻辑进行抽象封装，简化跨端开发成本，提升开发效率。
            <ul className="list-disc pl-4">
              <li>
                IPC
                消息通信封装，允许不同进程之间进行通信和数据交换，简化了进程间通信的复杂度，提高跨端开发效率。
                <ul className="list-disc pl-4">
                  <li>Web 端：支持跨 Tab 消息通信，数据同步</li>
                  <li>
                    桌面端：支持 Node 进程和 Electron 进程之间相互通信，消息同步
                  </li>
                </ul>
              </li>
              <li>
                支持消息广播，可以像指定的目标发送消息，例如 Electron 的
                Renderer 或者 Main 进程
              </li>
            </ul>
          </li>
          <li>
            针对桌面端做<b>性能优化</b>
            ，原本请求发起后响应过大导致应用卡死崩溃，优化后最大请求响应从原来的{' '}
            <b>100M</b> 提升到 <b>337M</b> 左右。
          </li>
          <li>
            追踪定位桌面端应用的跨端适配问题，对 Electron
            版本升级，优化用户和开发体验。
          </li>
          <li>
            支持桌面端应用网络流量录制，系统相关信息打印，方便开发人员定位问题。
          </li>
          <li>错误请求上报接入 Sentry，对应日志通过 Webhook 发送到飞书。</li>
        </ul>
        <h4 className="mt-2 text-sm">Web 端</h4>
        <ul className="list-disc mb-1">
          <li>
            优化用户邀请流程，在项目里面可以直接邀请用户作为游客加入团队，每日邀请发起数量提高{' '}
            <b>10%</b>
            ，每日新增团队数量是功能上线前的 <b>1.8 倍</b>。
          </li>
          <li>
            封装 SplitView
            组件，支持方向切换、拖拽调整大小和收起展开，让用户可以最大程度的利用屏幕空间。
          </li>
          <li>请求发起的 URL 编码支持 RFC 3986 和 WHATWG 两种规范。</li>
        </ul>
        <h4 className="mt-2 text-sm">其他</h4>
        <ul className="list-disc mb-1">
          <li>
            将旧的服务端代码从 Egg.js 迁移到 Nest.js
            写的新服务端，编写相应的测试用例。
          </li>
          <li>Code review 其他同事的代码，提供意见反馈。</li>
        </ul>
        <p className="m-0">
          技术栈：React, TypeScript, Electron, Node.js, Nest.js, Docker, Redis,
          MySQL
        </p>
      </>
    ),
  },
  {
    company: '广州融山信息科技有限公司',
    location: '顺德北滘',
    position: '前端工程师',
    startDate: '2020-07',
    endDate: '2022-02',
    details: (
      <>
        <p>
          融山供应链(2021 年放款 22.13
          亿)是一款以碧桂园为核心企业，利用区块链技术在融山供应链平台上，向其供应商签发应付账款凭证，由签发企业到期保兑，帮助中小企业融资。
        </p>
        <p>主要维护融山供应链平台的代码和开发新功能。</p>
        <ul className="list-disc mb-1">
          <li>
            用 TypeScript 对原本的权限系统进行重构，实现动态路由，简化配置。
          </li>
          <li>原有的 Vue CLI 脚手架从 2.0 升级到 4.0。</li>
          <li>
            在 Vue 3 发布后引入 Composition API 方便以后升级到 Vue
            3，并在组内推广用法。
          </li>
          <li>通过 prerender-spa-plugin 和 vue-meta 插件来优化 SEO。</li>
          <li>
            根据公司的 UI 设计规范对 ElementUI 二次封装单独拆出一个 UI 组件库。
          </li>
          <li>用 Node.js 来生成组件模版。</li>
          <li>添加 ESLint、lint-staged 和 husky 来保证代码规范。</li>
          <li>用 marked 库来编写相对应的文档，方便开发查看。</li>
        </ul>
        <p className="m-0">技术栈：Vue, JavaScript, SPA</p>
      </>
    ),
  },
];

function Experience() {
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
              <div className={clsx('mt-4 text-gray-500 text-xs')}>
                {details}
              </div>
            </div>
          </section>
        </li>
      ))}
    </ul>
  );
}

export default function CV() {
  return (
    <section className="container relative print:p-12 print:m-0">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>

            <p className="max-w-md text-pretty font-mono text-sm">
              {RESUME_DATA.about}
            </p>
            <a
              className={clsx(
                'max-w-md items-center text-pretty font-mono text-sm',
                'inline-flex items-center gap-x-1.5 align-baseline leading-none hover:underline',
              )}
            >
              <LocationIcon className="size-4" />
              {RESUME_DATA.location}
            </a>
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
          <h2 className="text-xl font-bold">关于我</h2>
          <p className="text-pretty font-mono text-sm">{RESUME_DATA.summary}</p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">工作经历</h2>
          <Experience />
        </Section>
        <Section>
          <h2 className="text-xl font-bold">教育</h2>
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
        {/*   <h2 className="text-xl font-bold">技能</h2> */}
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
