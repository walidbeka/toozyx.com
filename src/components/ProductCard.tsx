import Card from "./Card";

interface ProductCardProps {
  name: string;
  description: string;
  cta: string;
  href: string;
  index: number;
}

export default function ProductCard({
  name,
  description,
  cta,
  href,
  index,
}: ProductCardProps) {
  const gradients = [
    "from-[#3D49A8] to-[#6874E8]",
    "from-[#6874E8] to-[#8d95d7]",
    "from-[#3D49A8] to-[#8d95d7]",
  ];

  return (
    <Card className="p-6 sm:p-8 flex flex-col">
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center mb-5`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {index === 0 && (
            <>
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </>
          )}
          {index === 1 && (
            <>
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              <path d="M8 10h.01M12 10h.01M16 10h.01" />
            </>
          )}
          {index === 2 && (
            <>
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </>
          )}
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
        {description}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#3D49A8] to-[#6874E8] text-white px-5 py-2.5 text-sm font-medium transition-all hover:opacity-90 shadow-lg shadow-primary-500/20"
      >
        {cta}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-2"
        >
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </a>
    </Card>
  );
}
