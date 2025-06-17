import Socials from "./Socials";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t bg-background px-6">
      <div className="container mx-auto py-3 max-w-4xl">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Copyright {currentYear} Jordi Roca
          </p>
          <Socials />
        </div>
      </div>
    </footer>
  );
}
