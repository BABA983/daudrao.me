// export const ArrowOutwardIcon = (props: React.SVGProps<SVGSVGElement>) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M7 7h10v10" />
//       <path d="M7 17 17 7" />
//     </svg>
//   );
// };
export const ArrowOutwardIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m16.288 7.208l-9.765 9.746q-.14.14-.344.13q-.204-.009-.344-.15q-.14-.14-.14-.334t.14-.335L15.58 6.5H6.788q-.212 0-.356-.144t-.144-.357t.144-.356q.144-.143.356-.143h9.693q.343 0 .575.232q.232.232.232.576V16q0 .213-.143.356t-.357.144q-.213 0-.356-.144T16.288 16z"
      />
    </svg>
  );
};