interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl bg-white border border-gray-100 card-shadow ${
        hover ? "card-shadow-hover" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
