'use client';
import { PrintIcon } from '../Icons';

export function PrintBtn() {
  return (
    <button
      className="inline-flex items-center print:hidden cursor-pointer gap-2 hover:underline"
      onClick={() => globalThis.print()}
    >
      <PrintIcon width={16} />
      <span>Print</span>
    </button>
  );
}
