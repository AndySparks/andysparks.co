import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  wide?: boolean;
  prose?: boolean;
  className?: string;
};

export function Container({
  children,
  wide = false,
  prose = false,
  className = "",
}: ContainerProps) {
  const maxWidth = wide
    ? "var(--width-wide)"
    : prose
      ? "var(--width-prose)"
      : "var(--width-content)";
  return (
    <div
      className={className}
      style={{
        maxWidth,
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "var(--space-sm)",
        paddingRight: "var(--space-sm)",
      }}
    >
      {children}
    </div>
  );
}
