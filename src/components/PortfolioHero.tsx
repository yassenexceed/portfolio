import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const PortfolioHero = () => {
  const handleDownloadCV = () => {
    // Create a downloadable CV file
    const link = document.createElement('a');
    link.href = '/cv-yassen-khaled.pdf'; // We'll need to add the actual CV file
    link.download = 'Yassen_Khaled_CV.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Location and Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Alexandria, Egypt</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+20 1062981779</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>yassenexc@gmail.com</span>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Yassen Khaled</span>
            <br />
            <span className="text-3xl md:text-4xl text-foreground">Nagy Ibrahim</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
            Senior Software Developer
          </h2>

          {/* Summary */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Software developer specializing in networking, packet handling and socket programming. 
            Proficient in .NET, C++ libraries and SQL database management, delivering efficient, scalable solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={handleDownloadCV}
              className="group"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button variant="download" size="lg" asChild>
              <a href="#contact" className="scroll-smooth">
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-bounce">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-bounce">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;