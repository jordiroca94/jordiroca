import { Github, Linkedin, Mail } from "lucide-react";

export default function Socials() {
  return (
    <div className="flex gap-2">
      <a
        href="mailto:jordirocasoler94@gmail.com"
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
        aria-label="Email me"
      >
        <Mail className="h-5 w-5" />
      </a>
      <a
        href="https://github.com/jordiroca94"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
        aria-label="Visit my GitHub"
      >
        <Github className="h-5 w-5" />
      </a>
      <a
        href="https://linkedin.com/in/jordi-roca-soler/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
        aria-label="Connect on LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </a>
    </div>
  );
}
