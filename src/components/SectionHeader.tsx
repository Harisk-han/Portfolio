import { LucideIcon } from "lucide-react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  align?: "left" | "center";
};

const SectionHeader = ({
  eyebrow,
  title,
  description,
  icon: Icon,
  align = "center",
}: SectionHeaderProps) => {
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
        {Icon ? <Icon className="h-3.5 w-3.5" aria-hidden="true" /> : null}
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
