export function Footer() {
  return (
    <footer className="shadow-none [border-image:linear-gradient(to_right,transparent,theme(colors.lime.300/.16),transparent)1]">
      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="py-8 text-center">
            <p className="text-sm text-zinc-200">
              &copy; BRIL.LA, LLC. All Rights Reserved. {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
