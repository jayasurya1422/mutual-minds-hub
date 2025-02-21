
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">MutualHub</h3>
            <p className="text-sm text-muted-foreground">
              Empowering investors with knowledge and tools for informed mutual fund investments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Home</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">About Us</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Investments</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Learn</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Blog</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Market Updates</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Help Center</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                Email: support@mutualhub.com
              </li>
              <li className="text-muted-foreground">
                Phone: +1 (555) 123-4567
              </li>
              <li className="text-muted-foreground">
                Address: 123 Financial District,<br />New York, NY 10004
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} MutualHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
