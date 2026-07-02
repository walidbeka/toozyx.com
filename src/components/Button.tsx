import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition-all duration-200";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#3D49A8] to-[#6874E8] text-white hover:opacity-90 shadow-lg shadow-primary-500/20",
    outline:
      "border-2 border-primary-400 text-primary-500 hover:bg-primary-50 hover:border-primary-500",
    ghost:
      "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={classes}>
      {children}
    </Link>
  );
}
