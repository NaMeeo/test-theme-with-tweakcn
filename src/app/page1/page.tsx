import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { Palette} from "lucide-react";

export default function Page() {
  return (
    <main>
      <div>
              <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Palette className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">ThemeForge</h1>
          </div>
          <ThemeSwitcher />
        </div>
      </header>
        hello world
        <Button>
            TEST123
        </Button>
      </div>
    </main>
  );
}