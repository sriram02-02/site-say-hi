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
    { year: "2014", title: "Company Founded", description: "Started operations in Guntur, Andhra Pradesh" },
    { year: "2015", title: "APEDA, FIEO & Spices Board", description: "Registered with APEDA, FIEO and Spices Board" },
    { year: "2021", title: "ISO Certified", description: "Obtained ISO certification for quality management" },
    { year: "2021", title: "Global Expansion", description: "Expanded exports to Canada market" },
    { year: "2022", title: "FSSAI Certified", description: "Achieved food safety certification" },
    { year: "2024", title: "US Exports with FDA", description: "Completed FDA process and started exports to USA" }
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
        <div className="pt-24 sm:pt-32 pb-12 sm:pb-20">
          <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
            <div className="text-center mb-10 sm:mb-16 animate-fade-in">
              <div className="relative bg-card/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 border-2 border-primary/20 shadow-2xl">
                <div className="inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-8 border border-primary/30">
                  OUR TEAM & INFRASTRUCTURE
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent leading-tight">
                  The People Behind <br className="hidden sm:block" /><span className="sm:hidden"> </span>KH Agro Excellence
                </h1>
                <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 sm:mb-8 rounded-full" />
                <p className="text-base sm:text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed px-2">
                  Meet our dedicated team and explore our world-class infrastructure that ensures premium quality in every product
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-12 sm:py-20">
          <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 sm:mb-20">
              <div className="relative animate-fade-in order-2 md:order-1">
                <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-card ring-2 ring-primary/20">
                  <img 
                    src={teamImage} 
                    alt="KH Agro Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="animate-fade-in order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 border border-primary/30">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                  OUR LEADERSHIP
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-8 text-foreground">
                  Expert Team <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Driving Growth</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed mb-6 sm:mb-8">
                  Our leadership team brings decades of combined experience in agricultural trading, export operations, and quality management. We're committed to building lasting relationships with our partners and customers.
                </p>
              </div>
            </div>

            {/* Team Members */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 mb-12 sm:mb-20">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.name}
                  className="bg-card/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border-2 border-primary/20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                    {member.image ? (
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-primary/30 flex-shrink-0">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/30 flex-shrink-0">
                        <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                      </div>
                    )}
                    <div className="flex-1 text-center sm:text-left min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                      <p className="text-primary font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{member.role}</p>
                      <p className="text-foreground/80 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">{member.description}</p>
                      <div className="space-y-1 sm:space-y-2">
                        {member.phones.map((phone, idx) => (
                          <div key={idx} className="flex items-center justify-center sm:justify-start gap-2 text-foreground/70 text-xs sm:text-sm">
                            <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                            <span className="break-all">{phone}</span>
                          </div>
                        ))}
                        <div className="flex items-center justify-center sm:justify-start gap-2 text-foreground/70 text-xs sm:text-sm">
                          <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="break-all">{member.email}</span>
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
        <div className="py-12 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
            <div className="text-center mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 border border-primary/30">
                <Building2 className="w-3 h-3 sm:w-4 sm:h-4" />
                WORLD-CLASS INFRASTRUCTURE
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
                Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Facilities</span>
              </h2>
              <p className="text-sm sm:text-base md:text-xl text-foreground/80 max-w-2xl mx-auto px-2">
                State-of-the-art infrastructure ensuring quality at every step
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-20">
              {infrastructure.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.title}
                    className="bg-card/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border-2 border-primary/20 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 sm:mb-6 border-2 border-primary/30">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 sm:mb-4">{item.title}</h3>
                    <p className="text-foreground/80 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">{item.description}</p>
                    <ul className="space-y-1 sm:space-y-2">
                      {item.specs.map((spec) => (
                        <li key={spec} className="flex items-center gap-2 text-foreground/70 text-xs sm:text-sm">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary flex-shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Location */}
            <div className="bg-card/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border-2 border-primary/20">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/30 flex-shrink-0">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2">Head Office & Warehouse</h3>
                  <p className="text-foreground/80 text-sm sm:text-base md:text-lg">
                    Flat No. 304, Krisals County, Syamala Nagar, Guntur - 522006, Andhra Pradesh, India
                  </p>
                  <p className="text-foreground/60 mt-2 text-xs sm:text-sm md:text-base">
                    Strategically located in Guntur - the spice capital of India, providing direct access to premium agricultural produce
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Timeline */}
        <div className="py-12 sm:py-20">
          <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
            <div className="text-center mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 border border-primary/30">
                <Target className="w-3 h-3 sm:w-4 sm:h-4" />
                OUR JOURNEY
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
                Company <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Milestones</span>
              </h2>
            </div>

            <div className="relative">
              {/* Mobile: vertical line on left, Desktop: center */}
              <div className="absolute left-4 sm:left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-primary/20" />
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {milestones.map((milestone, index) => (
                  <div 
                    key={milestone.year}
                    className={`flex items-start gap-4 sm:gap-6 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Mobile dot */}
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary flex-shrink-0 mt-4 md:hidden z-10" />
                    
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-card/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl border-2 border-primary/20 inline-block w-full md:w-auto">
                        <span className="text-primary font-bold text-base sm:text-lg md:text-xl">{milestone.year}</span>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground">{milestone.title}</h3>
                        <p className="text-foreground/70 text-xs sm:text-sm md:text-base">{milestone.description}</p>
                      </div>
                    </div>
                    {/* Desktop center dot */}
                    <div className="w-4 h-4 rounded-full bg-primary hidden md:block z-10 flex-shrink-0 mt-6" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="py-12 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "50+", label: "Product Varieties" },
                { value: "10+", label: "Export Countries" },
                { value: "10+", label: "Happy Clients" }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="bg-card/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border-2 border-primary/20 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <p className="text-foreground/70 text-xs sm:text-sm md:text-base">{stat.label}</p>
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
