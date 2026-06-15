type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dataId: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dataId,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      data-id={dataId}
      className={`flex flex-col gap-3 ${align === "center" ? "items-center text-center" : ""}`}
    >
      {eyebrow ? (
        <span
          data-id={`${dataId}-eyebrow`}
          className="text-xs font-semibold uppercase tracking-[0.18em] text-accent"
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        data-id={`${dataId}-title`}
        className="text-balance text-2xl font-semibold leading-tight tracking-tight text-text-primary sm:text-3xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          data-id={`${dataId}-subtitle`}
          className={`max-w-2xl text-base leading-relaxed text-text-secondary ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
