interface PageHeaderProps {
  className?: string;
  children: React.ReactNode;
  title: string;
  description?: string;
}

export function PageHeader({ className, children, title, description }: PageHeaderProps) {
  return (
    <div className={`mx-auto max-w-3xl ${className ?? ''}`}>
      <div className="text-balance text-center">
        <div className="relative mb-5 flex items-center justify-center gap-4 before:h-px before:w-24 before:border-b before:shadow-none before:[border-image:linear-gradient(to_left,theme(colors.lime.300/.16),transparent)1] after:h-px after:w-24 after:border-b after:shadow-none after:[border-image:linear-gradient(to_right,theme(colors.lime.300/.16),transparent)1]">
          <div className="relative inline-flex whitespace-nowrap rounded-lg bg-gradient-to-b from-zinc-900/80 to-zinc-900/70 px-3 py-[3px] text-sm font-medium tracking-normal shadow before:absolute before:inset-0 before:rounded-lg">
            {/* Border with dots in corners */}
            <div
              className="absolute -inset-1.5 -z-10 rounded-sm bg-zinc-500/15 before:absolute before:inset-y-0 before:left-0 before:w-[7px] before:bg-[length:7px_7px] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.lime.200/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.lime.200/.56)_0.5px,transparent_0.5px)] before:[background-position:top_center,bottom_center] after:absolute after:inset-y-0 after:right-0 after:w-[7px] after:bg-[length:7px_7px] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.lime.200/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.lime.200/.56)_0.5px,transparent_0.5px)] after:[background-position:top_center,bottom_center]"
              aria-hidden="true"
            />
            <span className="relative text-zinc-200">{children}</span>
          </div>
        </div>
        <div>
          <h1 className="bg-gradient-to-b from-lime-200 to-zinc-200 bg-clip-text py-6 font-inter-tight text-5xl font-bold text-transparent md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 text-lg text-zinc-400">{description}</p>
        </div>
      </div>
    </div>
  );
}
