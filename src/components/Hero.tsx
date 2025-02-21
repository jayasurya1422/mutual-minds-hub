
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 animate-fade-down">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Simplify Your Investment Journey
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn about mutual funds, compare performance, and make informed investment decisions with our comprehensive platform.
          </p>
          <div className="flex items-center justify-center space-x-4 pt-4">
            <Button size="lg" className="group">
              Start Investing
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
