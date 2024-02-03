// import {
//   SandpackProvider,
//   SandpackCodeEditor,
//   SandpackProviderProps,
//   SandpackPreview,
//   SandpackLayout,
// } from '@codesandbox/sandpack-react';
// import styles from './index.module.css';
//
// interface SandboxProps {
//   files: SandpackProviderProps['files'];
// }
// export const Sandbox = ({ files }: SandboxProps) => {
//   return (
//     <section>
//       <SandpackProvider
//         template="react"
//         files={files}
//         options={{
//           autorun: true,
//           classes: { 'sp-preview-container': styles['preview-container'] },
//         }}
//       >
//         <SandpackLayout className="flex-col">
//           <SandpackCodeEditor key="code-editor" showRunButton={false} />
//           <SandpackPreview showOpenInCodeSandbox={false} />
//         </SandpackLayout>
//       </SandpackProvider>
//     </section>
//   );
// };
//
