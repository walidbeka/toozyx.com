interface SectionHeaderProps {
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  description,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} mb-12 sm:mb-16 ${className}`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-500 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
