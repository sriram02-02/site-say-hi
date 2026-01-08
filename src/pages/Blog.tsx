import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Tag, BookOpen } from "lucide-react";
import spicesImage from "@/assets/spices-spoons.jpg";
import turmericImage from "@/assets/turmeric.png";
import basmatiImage from "@/assets/basmati_rice.jpg";
import dalImage from "@/assets/toor_dal.jpg";

const blogPosts = [
  {
    id: 1,
    slug: "health-benefits-of-turmeric",
    title: "The Amazing Health Benefits of Turmeric: Nature's Golden Spice",
    excerpt: "Discover why turmeric has been used for centuries in traditional medicine and how it can boost your health naturally.",
    image: turmericImage,
    date: "2024-12-15",
    readTime: "5 min read",
    category: "Health & Wellness",
    content: `Turmeric, known as the "Golden Spice," has been a cornerstone of traditional medicine for thousands of years. Its active compound, curcumin, offers powerful anti-inflammatory and antioxidant properties.

**Key Health Benefits:**
- **Anti-inflammatory**: Curcumin helps reduce chronic inflammation
- **Antioxidant Power**: Neutralizes free radicals in the body
- **Brain Health**: May improve memory and cognitive function
- **Heart Health**: Supports cardiovascular health
- **Joint Support**: Helps maintain healthy joints

At KH Agro, we source the finest quality turmeric from the best farms in India, ensuring you get maximum potency and freshness in every pack.`
  },
  {
    id: 2,
    slug: "guide-to-basmati-rice",
    title: "Ultimate Guide to Basmati Rice: From Farm to Your Table",
    excerpt: "Learn about the different varieties of Basmati rice, how to cook it perfectly, and why Indian Basmati is the world's finest.",
    image: basmatiImage,
    date: "2024-12-10",
    readTime: "7 min read",
    category: "Product Guide",
    content: `Basmati rice, known for its distinctive aroma and long grains, is a premium variety that has been cultivated in the Indian subcontinent for centuries. The word "Basmati" comes from Hindi, meaning "fragrant."

**Types of Basmati Rice:**
- **Traditional Basmati**: Classic long-grain with natural aging
- **1121 Basmati**: Extra-long grain, ideal for biryani
- **Pusa Basmati**: High-yielding variety with excellent taste

**Cooking Tips:**
1. Rinse rice thoroughly to remove excess starch
2. Soak for 30 minutes for longer, fluffier grains
3. Use 1:1.5 rice to water ratio
4. Let it rest covered for 5 minutes after cooking

KH Agro exports premium Basmati rice meeting international quality standards.`
  },
  {
    id: 3,
    slug: "indian-pulses-nutrition",
    title: "Indian Pulses: A Complete Protein Source for Vegetarians",
    excerpt: "Explore the nutritional value of different Indian pulses (dals) and their importance in a balanced vegetarian diet.",
    image: dalImage,
    date: "2024-12-05",
    readTime: "6 min read",
    category: "Nutrition",
    content: `Pulses (dals) are an essential part of Indian cuisine and provide crucial protein for millions of vegetarians worldwide. They're not just nutritious but also incredibly versatile in cooking.

**Popular Indian Pulses:**
- **Toor Dal**: Rich in protein, great for sambar
- **Chana Dal**: High fiber, excellent for curries
- **Moong Dal**: Easy to digest, perfect for khichdi
- **Urad Dal**: Essential for idli and dosa batter
- **Masoor Dal**: Quick cooking, iron-rich

**Nutritional Benefits:**
- High-quality plant protein
- Rich in dietary fiber
- Good source of iron and zinc
- Low glycemic index
- Heart-healthy

KH Agro sources pulses directly from farmers, ensuring freshness and quality.`
  },
  {
    id: 4,
    slug: "spice-storage-tips",
    title: "How to Store Spices to Preserve Freshness and Flavor",
    excerpt: "Expert tips on storing your spices correctly to maintain their aroma, potency, and shelf life for longer.",
    image: spicesImage,
    date: "2024-11-28",
    readTime: "4 min read",
    category: "Tips & Tricks",
    content: `Proper spice storage is crucial for maintaining their flavor, aroma, and nutritional value. Here's how to keep your spices fresh for longer.

**Storage Best Practices:**
- **Keep Away from Heat**: Store in cool, dry places away from stove
- **Avoid Sunlight**: UV rays degrade spice quality
- **Airtight Containers**: Prevents moisture and odor absorption
- **Buy Whole Spices**: They last longer than ground varieties
- **Label and Date**: Track freshness easily

**Shelf Life Guide:**
- Whole Spices: 3-4 years
- Ground Spices: 2-3 years
- Fresh Ground: 6-12 months

**Pro Tips:**
- Store red chillies in the freezer
- Keep frequently used spices in smaller containers
- Refresh by toasting in a dry pan before use

Quality spices from KH Agro come in optimal packaging to ensure maximum freshness.`
  }
];

const Blog = () => {
  const categories = ["All", "Health & Wellness", "Product Guide", "Nutrition", "Tips & Tricks"];

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
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12 animate-fade-in">
              <div className="relative bg-card/90 backdrop-blur-md rounded-3xl p-12 border-2 border-primary/20 shadow-2xl">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-sm font-bold mb-6 border border-primary/30">
                  <BookOpen className="w-4 h-4 inline mr-2" />
                  INSIGHTS & UPDATES
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent leading-tight pb-2">
                  Blog & News
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
                <p className="text-xl text-foreground max-w-2xl mx-auto leading-relaxed">
                  Discover tips, recipes, industry news, and insights about spices, rice, and pulses
                </p>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all bg-card/80 text-foreground/70 hover:bg-primary hover:text-primary-foreground border border-primary/20"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="pb-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <article 
                  key={post.id}
                  className="bg-card/95 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-foreground/60 text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-IN', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-foreground/70 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div className="bg-card/95 backdrop-blur-md rounded-3xl p-12 shadow-xl border-2 border-primary/20">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Stay Updated
              </h2>
              <p className="text-foreground/70 mb-8">
                Subscribe to our newsletter for the latest updates on products, recipes, and industry insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border border-primary/20 bg-background focus:outline-none focus:border-primary"
                />
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Blog;
