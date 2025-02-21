
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="/" className="text-xl font-semibold">
            MutualHub
          </a>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#learn" className="text-sm hover:text-primary transition-colors">
              Learn
            </a>
            <a href="#compare" className="text-sm hover:text-primary transition-colors">
              Compare
            </a>
            <a href="#calculate" className="text-sm hover:text-primary transition-colors">
              Calculate
            </a>
            <a href="#news" className="text-sm hover:text-primary transition-colors">
              News
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search funds..."
              className="pl-9 w-[200px] bg-secondary"
            />
          </div>
          <Button variant="default" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
