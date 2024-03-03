import Link from 'next/link';

export const Footer = () => {
  return (
    <footer>
      <small className="flex mt-10 mb-6 m-auto print:hidden">
        <span className="text-sm opacity-50">
          <Link
            className="cursor-help underline"
            target="_blank"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          >
            CC BY-NC-SA 4.0
          </Link>{' '}
          2023-PRESENT © Daud Rao
        </span>
        <div className="flex-auto" />
      </small>
    </footer>
  );
};
