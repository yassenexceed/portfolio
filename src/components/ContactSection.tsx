import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "yassenexc@gmail.com",
    href: "mailto:yassenexc@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+20 1062981779",
    href: "tel:+201062981779"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Alexandria, Egypt",
    href: null
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "hover:text-blue-400"
  },
  {
    icon: Github,
    label: "GitHub", 
    href: "https://github.com",
    color: "hover:text-purple-400"
  }
];

const ContactSection = () => {
  const handleDownloadCV = () => {
    // Create a downloadable CV file
    const link = document.createElement('a');
    link.href = '/cv-yassen-khaled.pdf';
    link.download = 'Yassen_Khaled_CV.pdf';
    link.click();
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next project? Let's connect and explore how we can work together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="card-gradient shadow-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Contact Information
                </CardTitle>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/20">
                      <contact.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href} 
                          className="text-foreground font-medium hover:text-primary transition-smooth"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-gradient shadow-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Quick Actions
                </CardTitle>
                <p className="text-muted-foreground">
                  Download my resume or connect with me on social platforms
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Download CV Button */}
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={handleDownloadCV}
                  className="w-full group"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download Full Resume
                </Button>

                {/* Social Links */}
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground font-medium">Connect with me:</p>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="download"
                        asChild
                        className="group"
                      >
                        <a 
                          href={social.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3"
                        >
                          <social.icon className={`w-5 h-5 transition-smooth ${social.color}`} />
                          {social.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Availability Status */}
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <div>
                      <p className="text-green-400 font-medium">Available for new opportunities</p>
                      <p className="text-sm text-muted-foreground">Open to full-time positions and freelance projects</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;