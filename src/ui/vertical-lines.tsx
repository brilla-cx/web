export function VerticalLines() {
  return (
    <div
      className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-[1102px] -translate-x-1/2"
      aria-hidden="true"
    >
      {/* Left side */}
      <div className="before:absolute before:inset-y-0 before:left-0 before:border-l before:shadow-none before:[border-image:linear-gradient(to_bottom,theme(colors.lime.300/.16),transparent)1] after:absolute after:inset-y-0 after:left-20 after:border-l after:shadow-none after:[border-image:linear-gradient(to_bottom,theme(colors.lime.300/.16),transparent)1]"></div>
      {/* Right side */}
      <div className="before:absolute before:inset-y-0 before:right-0 before:border-l before:shadow-none before:[border-image:linear-gradient(to_bottom,theme(colors.lime.300/.16),transparent)1] after:absolute after:inset-y-0 after:right-20 after:border-l after:shadow-none after:[border-image:linear-gradient(to_bottom,theme(colors.lime.300/.16),transparent)1]"></div>
    </div>
  );
}
