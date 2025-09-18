import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Developer",
    company: "Rigid Online",
    period: "Jan 2017 - Jan 2025",
    location: "Remote",
    achievements: [
      "Engineered a TCP packet handler using asynchronous methods to filter packets, reducing malicious traffic and introducing new features using .NET and C++",
      "Managed dedicated servers and virtual machines and implemented security measures in Firewall and DDoS Protection",
      "Designed a low-latency database and stored procedures ensuring optimal performance",
      "Built .NET game bots using sockets and packets controllable via MSSQL database with a command-based table",
      "Implemented Discord Bot using Javascript with the ability to log users and all channel data stored in MSSQL database",
      "Implemented Hardware-related and IP connection limit with Virtual Machine Detection in Windows library"
    ],
    skills: [".NET", "C++", "MSSQL", "TCP/IP", "Discord API", "Security"]
  },
  {
    title: "Senior Software Developer",
    company: "Cronos Online",
    period: "Jan 2017 - June 2023",
    location: "Remote",
    achievements: [
      "Redesigned SQL schemas and stored procedures, making query times very low",
      "Developed packet/byte rate limiters to prevent server crashes reducing downtimes by 90%",
      "Similar work scope as Rigid Online with focus on performance optimization"
    ],
    skills: [".NET", "C++", "SQL Optimization", "Performance Tuning", "Networking"]
  },
  {
    title: "Website Manager (Freelancer)",
    company: "Self-Employed",
    period: "Jan 2012 - Present",
    location: "Remote",
    achievements: [
      "Created various forums using vBulletin and phpBB",
      "Used OpenCart and other online store management systems",
      "Implemented Websites using WordPress for media companies and stores",
      "Linux and Windows Installation with PHP and Apache or Nginx",
      "Designed and implemented client/server Windows libraries to add custom features",
      "Created web-mall in-game with ASP.NET hosted on IIS for players to purchase items in-game"
    ],
    skills: ["WordPress", "vBulletin", "phpBB", "OpenCart", "ASP.NET", "Linux", "Apache", "Nginx"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Professional Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Over 8 years of experience in software development, specializing in networking and high-performance applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-gradient shadow-card border-border hover:shadow-glow transition-smooth">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {exp.title}
                    </CardTitle>
                    <h3 className="text-lg font-semibold text-primary mt-1">
                      {exp.company}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;