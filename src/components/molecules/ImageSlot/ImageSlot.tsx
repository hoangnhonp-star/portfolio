import { Icon } from "@/components/Icon/Icon";

type ImageSlotProps = {
  /** Đường dẫn ảnh không-chữ; bỏ trống → hiện placeholder */
  src?: string;
  alt?: string;
  /** tỉ lệ khung, vd "16/9", "4/3", "21/9" */
  ratio?: string;
  placeholderLabel: string;
  rounded?: "md" | "lg" | "xl";
  dataId: string;
};

export function ImageSlot({
  src,
  alt = "",
  ratio = "16/9",
  placeholderLabel,
  rounded = "lg",
  dataId,
}: ImageSlotProps) {
  const roundedClass = rounded === "xl" ? "rounded-xl" : rounded === "md" ? "rounded-md" : "rounded-lg";

  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        data-id={dataId}
        src={src}
        alt={alt}
        style={{ aspectRatio: ratio }}
        className={`w-full ${roundedClass} border border-border-light object-cover`}
      />
    );
  }

  return (
    <div
      data-id={dataId}
      style={{ aspectRatio: ratio }}
      className={`flex w-full flex-col items-center justify-center gap-2 ${roundedClass} border border-dashed border-border-light bg-bg-surface text-text-muted`}
    >
      <Icon name="image" size={28} />
      <span className="text-xs font-medium tracking-wide">{placeholderLabel}</span>
    </div>
  );
}
