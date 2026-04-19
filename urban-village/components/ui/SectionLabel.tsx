interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`font-sans text-[12px] uppercase tracking-[0.2em] text-terracotta ${className}`}
    >
      {children}
    </p>
  );
}
