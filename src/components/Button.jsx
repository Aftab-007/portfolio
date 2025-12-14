export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-4 rounded-md font-medium transition focus:outline-none";

  const variants = {
    primary: "border border-muted/40 text-text hover:bg-surface",
    secondary: "text-text hover:underline underline-offset-4",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  // Render as link if href exists
  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }
  // Future-proof: render as button otherwise
  return <button className={styles}>{children}</button>;
}
