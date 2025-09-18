import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Tourism and Hotels",
    institution: "Luxor University",
    period: "2018 - 2022",
    location: "Luxor, Egypt",
    description: "Comprehensive program covering hospitality management, tourism development, and business administration"
  }
];

const certifications = [
  {
    title: "Data Analyst Specialist Certificate",
    issuer: "DEPI",
    period: "2025 - Present",
    status: "In Progress",
    description: "Advanced data analysis techniques, visualization, and business intelligence"
  },
  {
    title: "Microsoft Office Certificate",
    issuer: "Egyptian Armed Forces",
    period: "2023 - 2024",
    status: "Completed",
    description: "Professional certification in Microsoft Office suite applications"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Education & Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development through formal education and specialized certifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-foreground">
              <GraduationCap className="w-8 h-8 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="card-gradient shadow-card border-border hover:shadow-glow transition-smooth">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl font-bold text-foreground">
                          {edu.degree}
                        </CardTitle>
                        <h4 className="text-lg font-semibold text-primary mt-1">
                          {edu.institution}
                        </h4>
                      </div>
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-foreground">
              <Award className="w-8 h-8 text-primary" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="card-gradient shadow-card border-border hover:shadow-glow transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {cert.title}
                    </CardTitle>
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-semibold text-primary">
                        {cert.issuer}
                      </h4>
                      <Badge 
                        variant="outline" 
                        className={
                          cert.status === "Completed" 
                            ? "bg-green-500/20 text-green-400 border-green-500/30" 
                            : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                        }
                      >
                        {cert.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;