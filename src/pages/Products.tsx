import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Wheat, Soup, Flame, Blend, Sparkles } from "lucide-react";
import basmatiRice from "@/assets/basmati_rice.jpg";
import crystalRice from "@/assets/crystal_rice.jpg";
import idliRavva from "@/assets/idli_ravva.jpeg";
import idliRice from "@/assets/idli_rice.jpg";
import sonaMasooRice from "@/assets/sona_masoori_rice.jpg";
import arharDal from "@/assets/arhar_dal.jpeg";
import chanaDal from "@/assets/chana_dal.jpg";
import masoorSplit from "@/assets/masoor_split.jpg";
import moongDal from "@/assets/moong_dal.jpg";
import moongSplit from "@/assets/moong_split.jpeg";
import moong from "@/assets/moong.jpg";
import rajma from "@/assets/rajma.jpg";
import toorDal from "@/assets/toor_dal.jpg";
import uradDal from "@/assets/urad_dal.jpeg";
import uradGota from "@/assets/urad_gota.jpeg";
import ajwain from "@/assets/ajwain.png";
import blackPepper from "@/assets/black_pepper.png";
import cardamom from "@/assets/cardamom.png";
import cinnamon from "@/assets/cinnamon.png";
import clove from "@/assets/clove.png";
import cuminWhole from "@/assets/cumin_whole.png";
import fennelWhole from "@/assets/fennel_whole.png";
import fenugreekWhole from "@/assets/fenugreek_whole.png";
import redChilli from "@/assets/red_chilli.png";
import turmeric from "@/assets/turmeric.png";
import biryaniMasala from "@/assets/biryani_masala.jpeg";
import chickenMasala from "@/assets/chicken_masala.png";
import chilliCrushed from "@/assets/chilli_crushed.jpeg";
import curryPowder from "@/assets/curry_powder.jpeg";
import garamMasala from "@/assets/garam_masala.png";
import rasamMasala from "@/assets/rasam_masala.jpeg";
import sambarMasala from "@/assets/sambar_masala.png";
import ajwainPowder from "@/assets/ajwain_powder.png";
import kashmiriChilliPowder from "@/assets/kashmiri_chilli_powder.jpeg";
import corianderPowder from "@/assets/coriander_powder.png";
import methiPowder from "@/assets/methi_powder.png";
import garlicPowder from "@/assets/garlic_powder.png";
import nutmegPowder from "@/assets/nutmeg_powder.png";
import cuminPowder from "@/assets/cumin_powder.png";
import pepperPowder from "@/assets/pepper_powder.png";
import fennelPowder from "@/assets/fennel_powder.png";
import cinnamonPowder from "@/assets/cinnamon_powder.png";
import chilliPowder from "@/assets/chilli_powder.png";
import clovePowder from "@/assets/clove_powder.png";
import turmericPowder from "@/assets/turmeric_powder.png";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Copy, ShoppingCart } from "lucide-react";
import { openWhatsApp as openWhatsAppUtil } from "@/lib/whatsapp";
import { AddToCartDialog } from "@/components/AddToCartDialog";
import { Cart } from "@/components/Cart";

const Products = () => {
  const [selectedProductTitle, setSelectedProductTitle] = useState<string | null>(null);
  const [enquiryProduct, setEnquiryProduct] = useState<string | null>(null);
  const [addToCartDialogOpen, setAddToCartDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    category: string;
    defaultWeight: string;
    image?: string;
  } | null>(null);

  const contactInfo = {
    email: "khagrofoods@gmail.com",
    phone: "+91 9948547000",
    address: "Flat No. 304, Krisals County, Syamala Nagar, Guntur - 522006, Andhra Pradesh, India"
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const openWhatsApp = () => {
    const message = enquiryProduct 
      ? `Hi, I would like to enquire about ${enquiryProduct}`
      : "Hi, I would like to enquire about your products";
    openWhatsAppUtil(contactInfo.phone, message);
  };

  const sendEmail = () => {
    const subject = enquiryProduct 
      ? `Enquiry about ${enquiryProduct}`
      : "Product Enquiry";
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}`;
  };
  const products = [
    {
      title: "Rice",
      description: "Premium quality rice varieties sourced from the finest farms",
      icon: Wheat,
      varieties: [
        { name: "Basmati Rice", image: basmatiRice },
        { name: "Crystal Rice", image: crystalRice },
        { name: "Idli Ravva", image: idliRavva },
        { name: "Idli Rice", image: idliRice },
        { name: "Sona Masoori Rice", image: sonaMasooRice }
      ]
    },
    {
      title: "Pulses and Dals",
      description: "High-quality pulses and lentils for nutritious meals",
      icon: Soup,
      varieties: [
        { name: "Arhar Dal", image: arharDal },
        { name: "Chana Dal", image: chanaDal },
        { name: "Masoor Split", image: masoorSplit },
        { name: "Moong Dal", image: moongDal },
        { name: "Moong Split", image: moongSplit },
        { name: "Moong", image: moong },
        { name: "Rajma", image: rajma },
        { name: "Toor Dal", image: toorDal },
        { name: "Urad Dal", image: uradDal },
        { name: "Urad Gota", image: uradGota }
      ]
    },
    {
      title: "Spices",
      description: "Authentic and aromatic whole spices",
      icon: Flame,
      varieties: [
        { name: "Cardamom", image: cardamom },
        { name: "Black Pepper", image: blackPepper },
        { name: "Cinnamon", image: cinnamon },
        { name: "Clove", image: clove },
        { name: "Ajwain", image: ajwain },
        { name: "Fenugreek (Whole)", image: fenugreekWhole },
        { name: "Fennel (Whole)", image: fennelWhole },
        { name: "Cumin (Whole)", image: cuminWhole },
        { name: "Turmeric", image: turmeric },
        { name: "Red Chilli", image: redChilli }
      ]
    },
    {
      title: "Blended Spices",
      description: "Expertly blended spice mixes for perfect flavors",
      icon: Blend,
      varieties: [
        { name: "Chilli Crushed", image: chilliCrushed },
        { name: "Rasam Masala", image: rasamMasala },
        { name: "Curry Powder", image: curryPowder },
        { name: "Biryani Masala", image: biryaniMasala },
        { name: "Chicken Masala", image: chickenMasala },
        { name: "Sambar Masala", image: sambarMasala },
        { name: "Garam Masala", image: garamMasala }
      ]
    },
    {
      title: "Grounded Spices",
      description: "Freshly ground spices for enhanced taste",
      icon: Sparkles,
      varieties: [
        { name: "Kashmiri Chilli Powder", image: kashmiriChilliPowder },
        { name: "Coriander Powder", image: corianderPowder },
        { name: "Methi Powder", image: methiPowder },
        { name: "Nutmeg Powder", image: nutmegPowder },
        { name: "Cumin Powder", image: cuminPowder },
        { name: "Pepper Powder", image: pepperPowder },
        { name: "Fennel Powder", image: fennelPowder },
        { name: "Cinnamon Powder", image: cinnamonPowder },
        { name: "Ajwain Powder", image: ajwainPowder },
        { name: "Garlic Powder", image: garlicPowder },
        { name: "Clove Powder", image: clovePowder },
        { name: "Turmeric Powder", image: turmericPowder },
        { name: "Chilli Powder", image: chilliPowder }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30"
          style={{ backgroundImage: "url('/background.jpg')" }}
        />
        <div className="absolute inset-0 bg-background" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <div className="pt-32 sm:pt-40 pb-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Refined Hero Section */}
          <div className="text-center mb-20 sm:mb-28 animate-fade-in">
            <span className="inline-block px-4 py-1.5 text-primary text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-6 sm:mb-8">
              Curated Collection
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 sm:mb-8 text-foreground leading-[1.1] tracking-tight">
              Our <span className="font-semibold italic text-primary">Premium</span> Products
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8">
              <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed font-light tracking-wide">
              Finest products sourced from trusted suppliers worldwide
            </p>
          </div>

          {/* Elegant Product Categories Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {products.map((product, index) => {
              const Icon = product.icon;
              const previewImages = product.varieties.slice(0, 4).map((v: any) => v.image);
              
              return (
                <div
                  key={product.title}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card 
                    className="relative overflow-hidden border-0 bg-card shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] transition-all duration-700 ease-out h-full flex flex-col group-hover:-translate-y-3"
                  >
                    {/* Single Featured Image */}
                    <div className="relative h-64 sm:h-72 overflow-hidden">
                      <img 
                        src={previewImages[0]} 
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                        loading="lazy"
                      />
                      {/* Sophisticated overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Floating variety count */}
                      <div className="absolute top-5 right-5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium bg-white/90 dark:bg-black/60 text-foreground backdrop-blur-md tracking-wide uppercase">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          {product.varieties.length} Varieties
                        </span>
                      </div>
                      
                      {/* Title overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Icon className="w-4 h-4 text-white/70" />
                              <span className="text-[10px] sm:text-xs text-white/70 uppercase tracking-widest font-medium">Category</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                              {product.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <CardContent className="p-6 sm:p-8 flex flex-col flex-1 bg-gradient-to-b from-card to-muted/20">
                      <p className="text-muted-foreground mb-6 leading-relaxed text-sm line-clamp-2 flex-1">
                        {product.description}
                      </p>
                      
                      {/* Product thumbnails */}
                      <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border/30">
                        <div className="flex -space-x-3">
                          {previewImages.slice(0, 4).map((img: string, i: number) => (
                            <div 
                              key={i}
                              className="w-10 h-10 rounded-full border-[3px] border-card overflow-hidden shadow-sm transition-transform duration-300"
                              style={{ transform: `translateX(${i * 2}px)` }}
                            >
                              <img src={img} alt="" className="w-full h-full object-cover" />
                            </div>
                          ))}
                        </div>
                        {product.varieties.length > 4 && (
                          <span className="text-xs text-muted-foreground">
                            +{product.varieties.length - 4} more
                          </span>
                        )}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button 
                          onClick={() => setSelectedProductTitle(product.title)}
                          className="flex-1 bg-foreground hover:bg-foreground/90 text-background shadow-none transition-all duration-300 font-medium tracking-wide text-sm"
                          size="lg"
                        >
                          Explore
                        </Button>
                        <Button 
                          onClick={() => setEnquiryProduct(product.title)}
                          variant="ghost"
                          className="flex-1 hover:bg-muted transition-all duration-300 font-medium tracking-wide text-sm"
                          size="lg"
                        >
                          Enquire
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          <Dialog open={selectedProductTitle !== null} onOpenChange={(open) => !open && setSelectedProductTitle(null)}>
            <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto bg-background border-0 shadow-2xl">
              {(() => {
                const current = products.find((p) => p.title === selectedProductTitle);
                if (!current) return null;
                const Icon = current.icon;
                return (
                  <>
                    <DialogHeader className="pb-8">
                      <div className="text-center">
                        <div className="inline-flex items-center gap-2 text-muted-foreground mb-4">
                          <Icon className="w-4 h-4" />
                          <span className="text-xs uppercase tracking-[0.2em] font-medium">Category</span>
                        </div>
                        <DialogTitle className="text-3xl sm:text-4xl font-light text-foreground tracking-tight">{current.title}</DialogTitle>
                        <p className="text-sm text-muted-foreground mt-3">{current.varieties.length} premium varieties available</p>
                        <div className="w-12 h-px bg-primary/40 mx-auto mt-6" />
                      </div>
                      <DialogDescription className="sr-only">
                        List of product varieties for {current.title}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
                      {current.varieties.map((variety, vIndex) => {
                        const varietyName = typeof variety === 'string' ? variety : (variety as any).name;
                        const varietyImage = typeof variety === 'object' && (variety as any).image ? (variety as any).image : null;
                        return (
                          <div 
                            key={varietyName} 
                            className="group"
                          >
                            <div className="aspect-square bg-muted/20 rounded-lg overflow-hidden mb-3 relative">
                              {varietyImage ? (
                                <img 
                                  src={varietyImage} 
                                  alt={varietyName}
                                  loading="lazy"
                                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <Icon className="w-12 h-12 text-muted-foreground/20" />
                                </div>
                              )}
                            </div>
                            <div className="text-center">
                              <p className="font-medium text-sm leading-tight mb-1 text-foreground">
                                {varietyName}
                              </p>
                              {current.title === "Rice" && (
                                <p className="text-[10px] text-muted-foreground mb-3 tracking-wide">
                                  10 LB · 20 LB · 40 LB
                                </p>
                              )}
                              {current.title === "Pulses and Dals" && (
                                <p className="text-[10px] text-muted-foreground mb-3 tracking-wide">
                                  2 LB · 4 LB · 40 LB
                                </p>
                              )}
                              {(current.title === "Spices" || current.title === "Blended Spices" || current.title === "Grounded Spices") && (
                                <p className="text-[10px] text-muted-foreground mb-3 tracking-wide">
                                  100g · 200g · 1 LB
                                </p>
                              )}
                              <div className="flex gap-2">
                                <Button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    let defaultWeight = "";
                                    if (current.title === "Rice") {
                                      defaultWeight = "10 LB · 20 LB · 40 LB";
                                    } else if (current.title === "Pulses and Dals") {
                                      defaultWeight = "2 LB · 4 LB · 40 LB";
                                    } else {
                                      defaultWeight = "100g · 200g · 1 LB";
                                    }
                                    setSelectedProduct({
                                      name: varietyName,
                                      category: current.title,
                                      defaultWeight,
                                      image: varietyImage,
                                    });
                                    setAddToCartDialogOpen(true);
                                  }}
                                  size="sm"
                                  variant="ghost"
                                  className="flex-1 text-xs hover:bg-muted"
                                >
                                  <ShoppingCart className="h-3.5 w-3.5 mr-1" />
                                  Add
                                </Button>
                                <Button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setEnquiryProduct(varietyName);
                                  }}
                                  size="sm"
                                  className="flex-1 text-xs bg-foreground text-background hover:bg-foreground/90"
                                >
                                  Enquire
                                </Button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                );
              })()}
            </DialogContent>
          </Dialog>

          <Dialog open={enquiryProduct !== null} onOpenChange={(open) => !open && setEnquiryProduct(null)}>
            <DialogContent className="max-w-md bg-background border-0 shadow-2xl">
              <DialogHeader className="pb-6 text-center">
                <div className="inline-flex items-center justify-center gap-2 text-muted-foreground mb-3">
                  <Mail className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-[0.2em] font-medium">Contact Us</span>
                </div>
                <DialogTitle className="text-2xl font-light text-foreground tracking-tight">Get in Touch</DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground mt-2">
                  Enquiry about: <span className="font-medium text-foreground">{enquiryProduct}</span>
                </DialogDescription>
                <div className="w-8 h-px bg-primary/40 mx-auto mt-4" />
              </DialogHeader>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 transition-colors hover:bg-muted/30">
                  <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-sm text-foreground break-all">{contactInfo.email}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0"
                      onClick={() => copyToClipboard(contactInfo.email)}
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </Button>
                    <Button
                      size="sm"
                      className="h-8 bg-foreground text-background hover:bg-foreground/90 text-xs"
                      onClick={sendEmail}
                    >
                      Send
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 transition-colors hover:bg-muted/30">
                  <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="text-sm text-foreground">{contactInfo.phone}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0"
                      onClick={() => copyToClipboard(contactInfo.phone)}
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </Button>
                    <Button
                      size="sm"
                      className="h-8 bg-emerald-600 hover:bg-emerald-700 text-white text-xs"
                      onClick={openWhatsApp}
                    >
                      WhatsApp
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 transition-colors hover:bg-muted/30">
                  <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Address</p>
                    <p className="text-sm text-foreground leading-relaxed">{contactInfo.address}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(contactInfo.address)}
                    className="flex-shrink-0 h-8 w-8 p-0"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center pt-4 tracking-wide">
                  We typically respond within 24 hours
                </p>

                <Button
                  onClick={() => setEnquiryProduct(null)}
                  variant="ghost"
                  className="w-full hover:bg-muted text-muted-foreground"
                >
                  Close
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <AddToCartDialog
            open={addToCartDialogOpen}
            onOpenChange={setAddToCartDialogOpen}
            product={selectedProduct}
          />
        </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Products;
