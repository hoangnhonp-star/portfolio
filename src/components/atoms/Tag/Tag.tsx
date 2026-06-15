export function Tag({ children, dataId }: { children: React.ReactNode; dataId: string }) {
  return (
    <span
      data-id={dataId}
      className="inline-flex items-center rounded-full border border-border-light bg-bg-surface px-3 py-1 text-xs font-medium text-text-secondary"
    >
      {children}
    </span>
  );
}
