import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import spicesImage from "@/assets/spices-spoons.jpg";
import { Heart, Shield, Award, Sparkles, Quote } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Quality First",
      description: "Every product undergoes rigorous quality checks to ensure excellence"
    },
    {
      icon: Shield,
      title: "Traditional Values",
      description: "Rooted in authentic practices and time-honored traditions"
    },
    {
      icon: Award,
      title: "Premium Standards",
      description: "Committed to delivering only the finest products to your home"
    },
    {
      icon: Sparkles,
      title: "Natural Purity",
      description: "Pure, authentic ingredients with no compromise on quality"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/background.jpg')" }}
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
      
      {/* Hero Section */}
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
          <div className="text-center mb-10 sm:mb-16 animate-fade-in relative">
            
            
            
            
            <div className="relative bg-card/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 border-2 border-primary/20 shadow-2xl">
              <div className="inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-8 border border-primary/30">
                WELCOME TO SREE NANDI
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent leading-tight">
                About Sree Nandi
              </h1>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 sm:mb-8 rounded-full" />
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground font-medium max-w-3xl mx-auto leading-relaxed px-2">
                Bringing premium, natural products rooted in tradition to every household
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-12 sm:py-20">
        <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in bg-card/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-primary/20 shadow-2xl relative overflow-hidden order-2 md:order-1">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
              
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-8 border border-primary/30">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  OUR STORY
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-8 text-foreground leading-tight">
                  A Legacy of <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Quality & Trust</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed mb-4 sm:mb-8">
                  Sree Nandi is a trusted and emerging brand committed to delivering high-quality, authentic products rooted in traditional values and purity. Founded with a passion for excellence and a vision to bring premium, natural products to every household.
                </p>
                
                <div className="relative border-l-4 border-primary pl-4 sm:pl-8 my-6 sm:my-10 bg-gradient-to-r from-primary/10 to-transparent py-4 sm:py-6 rounded-r-xl">
                  <Quote className="absolute -left-3 top-4 sm:top-6 w-5 h-5 sm:w-6 sm:h-6 text-primary bg-card rounded-full p-1" />
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-foreground">
                    Our Philosophy
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed italic">
                    Sree Nandi is more than just a brand—it's a commitment to health, heritage, and honesty. Every product is crafted with devotion and undergoes strict quality checks to ensure our customers receive only the best.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in order-1 md:order-2">
              {/* Glowing background effect */}
              
              
              <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-card ring-2 ring-primary/20">
                <img 
                  src={spicesImage} 
                  alt="Premium quality spices and ingredients"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-12 sm:py-24">
        <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
          <div className="text-center mb-10 sm:mb-20">
            <div className="relative bg-card/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-primary/20 shadow-2xl max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 border border-primary/30">
                <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                WHAT DRIVES US
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
                Our Core <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Values</span>
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 sm:mb-6 rounded-full" />
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/90 max-w-2xl mx-auto leading-relaxed px-2">
                The principles that guide us in delivering excellence
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={value.title}
                  className="relative bg-card/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl border-2 border-primary/20 animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Animated gradient background */}
                  
                  
                  {/* Decorative corner */}
                  
                  
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 sm:mb-6 md:mb-8 border-2 border-primary/30">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed text-xs sm:text-sm md:text-base">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
      </div>
    </div>
  );
};

export default About;
