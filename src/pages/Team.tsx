import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Users, Building2, Warehouse, Truck, Award, Target, MapPin, Phone, Mail } from "lucide-react";
import teamImage from "@/assets/team-image.jpg";
import madhavaImage from "@/assets/madhava-enhanced.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Madhava Kondamadugula",
      role: "Managing Director",
      description: "Over 15 years of experience in agricultural exports and business development",
      phones: ["+91 9848938837", "+91 9948547000"],
      email: "khagrofoods@gmail.com",
      image: madhavaImage
    },
    {
      name: "M.S.Reddy",
      role: "Export Manager",
      description: "Over 20 years of experience in export management and expert in supply chain and quality control process",
      phones: ["+91 9052932845"],
      email: "khagroexporters@gmail.com",
      image: null
    }
  ];

  const infrastructure = [
    {
      icon: Warehouse,
      title: "Modern Warehouse",
      description: "10,000+ sq ft climate-controlled storage facility ensuring product freshness and quality",
      specs: ["Temperature Controlled", "Humidity Monitored", "Pest-Free Environment"]
    },
    {
      icon: Building2,
      title: "Processing Unit",
      description: "State-of-the-art processing and packaging facility with international standards",
      specs: ["FSSAI Compliant", "Hygienic Processing", "Quality Testing Lab"]
    },
    {
      icon: Truck,
      title: "Logistics Network",
      description: "Efficient distribution network ensuring timely delivery across India and worldwide",
      specs: ["Pan-India Coverage", "International Shipping", "Cold Chain Logistics"]
    }
  ];

  const milestones = [
    { year: "2018", title: "Company Founded", description: "Started operations in Guntur, Andhra Pradesh" },
    { year: "2019", title: "FSSAI Certified", description: "Achieved food safety certification" },
    { year: "2020", title: "Export License", description: "Obtained APEDA registration for exports" },
    { year: "2021", title: "ISO Certified", description: "Achieved ISO 9001:2015 certification" },
    { year: "2023", title: "Global Expansion", description: "Started exports to Middle East & Southeast Asia" }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/background.jpg')" }}
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative z-10">
        <Navigation />
        
        {/* Hero Section */}
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16 animate-fade-in">
              <div className="relative bg-card/90 backdrop-blur-md rounded-3xl p-16 border-2 border-primary/20 shadow-2xl">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-sm font-bold mb-8 border border-primary/30">
                  OUR TEAM & INFRASTRUCTURE
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent leading-tight">
                  The People Behind <br />KH Agro Excellence
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
                <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
                  Meet our dedicated team and explore our world-class infrastructure that ensures premium quality in every product
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative animate-fade-in">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-card ring-2 ring-primary/20">
                  <img 
                    src={teamImage} 
                    alt="KH Agro Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-sm font-bold mb-6 border border-primary/30">
                  <Users className="w-4 h-4" />
                  OUR LEADERSHIP
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
                  Expert Team <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Driving Growth</span>
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                  Our leadership team brings decades of combined experience in agricultural trading, export operations, and quality management. We're committed to building lasting relationships with our partners and customers.
                </p>
              </div>
            </div>

            {/* Team Members */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.name}
                  className="bg-card/95 backdrop-blur-md rounded-2xl p-8 shadow-xl border-2 border-primary/20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-6">
                    {member.image ? (
                      <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-primary/30 flex-shrink-0">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/30 flex-shrink-0">
                        <Users className="w-10 h-10 text-primary" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                      <p className="text-primary font-semibold mb-3">{member.role}</p>
                      <p className="text-foreground/80 mb-4">{member.description}</p>
                      <div className="space-y-2">
                        {member.phones.map((phone, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-foreground/70">
                            <Phone className="w-4 h-4" />
                            <span>{phone}</span>
                          </div>
                        ))}
                        <div className="flex items-center gap-2 text-foreground/70">
                          <Mail className="w-4 h-4" />
                          <span>{member.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Infrastructure Section */}
        <div className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-sm font-bold mb-6 border border-primary/30">
                <Building2 className="w-4 h-4" />
                WORLD-CLASS INFRASTRUCTURE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Facilities</span>
              </h2>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                State-of-the-art infrastructure ensuring quality at every step
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {infrastructure.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.title}
                    className="bg-card/95 backdrop-blur-md rounded-2xl p-8 shadow-xl border-2 border-primary/20 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 border-2 border-primary/30">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                    <p className="text-foreground/80 mb-6">{item.description}</p>
                    <ul className="space-y-2">
                      {item.specs.map((spec) => (
                        <li key={spec} className="flex items-center gap-2 text-foreground/70">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Location */}
            <div className="bg-card/95 backdrop-blur-md rounded-2xl p-8 shadow-xl border-2 border-primary/20">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/30 flex-shrink-0">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Head Office & Warehouse</h3>
                  <p className="text-foreground/80 text-lg">
                    Flat No. 304, Krisals County, Syamala Nagar, Guntur - 522006, Andhra Pradesh, India
                  </p>
                  <p className="text-foreground/60 mt-2">
                    Strategically located in Guntur - the spice capital of India, providing direct access to premium agricultural produce
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Timeline */}
        <div className="py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-sm font-bold mb-6 border border-primary/30">
                <Target className="w-4 h-4" />
                OUR JOURNEY
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Company <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Milestones</span>
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div 
                    key={milestone.year}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-card/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border-2 border-primary/20 inline-block">
                        <span className="text-primary font-bold text-xl">{milestone.year}</span>
                        <h3 className="text-xl font-bold text-foreground">{milestone.title}</h3>
                        <p className="text-foreground/70">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-primary hidden md:block z-10" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "5+", label: "Years Experience" },
                { value: "50+", label: "Product Varieties" },
                { value: "10+", label: "Export Countries" },
                { value: "500+", label: "Happy Clients" }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="bg-card/95 backdrop-blur-md rounded-2xl p-8 shadow-xl border-2 border-primary/20 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Team;
