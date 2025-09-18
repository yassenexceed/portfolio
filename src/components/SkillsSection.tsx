import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Network, Wrench, MessageSquare, Users, Brain, Target } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: ".NET (C#)", level: "Expert" },
      { name: "C++", level: "Expert" },
      { name: "PHP", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "Python", level: "Basic" },
      { name: "HTML", level: "Intermediate" }
    ],
    description: "Strong foundation in multiple programming languages with expertise in .NET and C++"
  },
  {
    title: "Database & Systems",
    icon: Database,
    skills: [
      { name: "MSSQL", level: "Expert" },
      { name: "MySQL", level: "Expert" },
      { name: "Windows Forms", level: "Expert" },
      { name: "Linux", level: "Intermediate" },
      { name: "Apache/Nginx", level: "Intermediate" }
    ],
    description: "Proficient in database design, optimization, and server administration"
  },
  {
    title: "Networking & Security",
    icon: Network,
    skills: [
      { name: "TCP/IP", level: "Expert" },
      { name: "Socket Programming", level: "Expert" },
      { name: "Packet Handling", level: "Expert" },
      { name: "DDoS Protection", level: "Expert" },
      { name: "Firewall Management", level: "Expert" }
    ],
    description: "Specialized in network programming and security implementations"
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Microsoft Office", level: "Expert" },
      { name: "Adobe Premiere", level: "Intermediate" },
      { name: "vBulletin", level: "Expert" },
      { name: "WordPress", level: "Expert" },
      { name: "OpenCart", level: "Intermediate" }
    ],
    description: "Experienced with various development tools and content management systems"
  }
];

const softSkills = [
  {
    title: "Problem-solving",
    icon: Brain,
    description: "Analytical approach to complex technical challenges"
  },
  {
    title: "Communication",
    icon: MessageSquare,
    description: "Effective technical communication in Arabic and English"
  },
  {
    title: "Teamwork",
    icon: Users,
    description: "Collaborative development and project management"
  },
  {
    title: "Critical Thinking",
    icon: Target,
    description: "Strategic approach to software architecture and optimization"
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert": return "bg-green-500/20 text-green-400 border-green-500/30";
    case "Intermediate": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    case "Basic": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    default: return "bg-primary/20 text-primary border-primary/30";
  }
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skills developed through years of hands-on experience in software development
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-gradient shadow-card border-border hover:shadow-glow transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <Badge variant="outline" className={`${getLevelColor(skill.level)} border`}>
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <Card key={index} className="card-gradient shadow-card border-border hover:shadow-glow transition-smooth text-center">
                <CardContent className="pt-6">
                  <div className="p-3 rounded-lg bg-primary/20 w-fit mx-auto mb-4">
                    <skill.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Languages */}
        <Card className="card-gradient shadow-card border-border max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Arabic</span>
                <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30">
                  Native
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">English</span>
                <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30">
                  Excellent
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;