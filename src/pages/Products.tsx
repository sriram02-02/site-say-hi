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
    <div className="min-h-screen bg-background">
      {/* Content */}
      <div className="relative">
        <Navigation />
        <div className="pt-28 sm:pt-36 pb-28">
        <div className="container mx-auto px-5 sm:px-8 max-w-7xl">
          {/* Ultra Clean Hero Section */}
          <div className="text-center mb-16 sm:mb-24 animate-fade-in">
            <p className="text-primary text-xs sm:text-sm font-medium tracking-[0.25em] uppercase mb-4">
              Premium Collection
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 text-foreground leading-[1.15] tracking-tight">
              Our Products
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
              Quality ingredients sourced directly from trusted farms
            </p>
          </div>

          {/* Clean Product Categories Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              const previewImages = product.varieties.slice(0, 4).map((v: any) => v.image);
              
              return (
                <div
                  key={product.title}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="relative overflow-hidden rounded-xl bg-card border border-border/40 hover:border-border transition-all duration-500 h-full flex flex-col hover:shadow-lg">
                    {/* Clean Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img 
                        src={previewImages[0]} 
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Minimal overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      
                      {/* Variety badge */}
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-medium bg-white/95 dark:bg-black/70 text-foreground backdrop-blur-sm tracking-wide">
                          {product.varieties.length} items
                        </span>
                      </div>
                      
                      {/* Title on image */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                          {product.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                        {product.description}
                      </p>
                      
                      {/* Product thumbnails */}
                      <div className="flex items-center justify-between mb-5 pb-5 border-b border-border/50">
                        <div className="flex -space-x-2">
                          {previewImages.slice(0, 4).map((img: string, i: number) => (
                            <div 
                              key={i}
                              className="w-8 h-8 rounded-full border-2 border-card overflow-hidden"
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
                          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground h-11 text-sm font-bold rounded-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5 border-0"
                        >
                          View All
                        </Button>
                        <Button 
                          onClick={() => setEnquiryProduct(product.title)}
                          variant="outline"
                          className="flex-1 border-2 border-primary hover:bg-primary hover:text-primary-foreground text-primary h-11 text-sm font-bold rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                        >
                          Enquire
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Dialog open={selectedProductTitle !== null} onOpenChange={(open) => !open && setSelectedProductTitle(null)}>
            <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-background border border-border/50 shadow-xl rounded-xl">
              {(() => {
                const current = products.find((p) => p.title === selectedProductTitle);
                if (!current) return null;
                const Icon = current.icon;
                return (
                  <>
                    <DialogHeader className="pb-6 border-b border-border/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <DialogTitle className="text-xl sm:text-2xl font-semibold text-foreground">{current.title}</DialogTitle>
                          <p className="text-sm text-muted-foreground mt-1">{current.varieties.length} varieties</p>
                        </div>
                      </div>
                      <DialogDescription className="sr-only">
                        List of product varieties for {current.title}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
                      {current.varieties.map((variety, vIndex) => {
                        const varietyName = typeof variety === 'string' ? variety : (variety as any).name;
                        const varietyImage = typeof variety === 'object' && (variety as any).image ? (variety as any).image : null;
                        return (
                          <div 
                            key={varietyName} 
                            className="group rounded-lg border border-border/40 overflow-hidden hover:border-border hover:shadow-md transition-all duration-300"
                          >
                            <div className="aspect-square bg-muted/30 overflow-hidden">
                              {varietyImage ? (
                                <img 
                                  src={varietyImage} 
                                  alt={varietyName}
                                  loading="lazy"
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <Icon className="w-10 h-10 text-muted-foreground/20" />
                                </div>
                              )}
                            </div>
                            <div className="p-3">
                              <p className="font-medium text-sm leading-tight mb-1 text-foreground line-clamp-1">
                                {varietyName}
                              </p>
                              {current.title === "Rice" && (
                                <p className="text-[10px] text-muted-foreground mb-2">
                                  10 LB · 20 LB · 40 LB
                                </p>
                              )}
                              {current.title === "Pulses and Dals" && (
                                <p className="text-[10px] text-muted-foreground mb-2">
                                  2 LB · 4 LB · 40 LB
                                </p>
                              )}
                              {(current.title === "Spices" || current.title === "Blended Spices" || current.title === "Grounded Spices") && (
                                <p className="text-[10px] text-muted-foreground mb-2">
                                  100g · 200g · 1 LB
                                </p>
                              )}
                              <div className="flex gap-1.5">
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
                                  variant="outline"
                                  className="flex-1 text-[11px] h-8 border-border"
                                >
                                  <ShoppingCart className="h-3 w-3 mr-1" />
                                  Add
                                </Button>
                                <Button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setEnquiryProduct(varietyName);
                                  }}
                                  size="sm"
                                  className="flex-1 text-[11px] h-8 bg-primary hover:bg-primary/90"
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
            <DialogContent className="max-w-sm bg-background border border-border/50 shadow-xl rounded-xl">
              <DialogHeader className="pb-4">
                <DialogTitle className="text-lg font-semibold text-foreground">Contact Us</DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">
                  Enquiry: <span className="text-foreground">{enquiryProduct}</span>
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                  <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground break-all">{contactInfo.email}</p>
                  </div>
                  <div className="flex gap-1.5 flex-shrink-0">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-7 w-7 p-0"
                      onClick={() => copyToClipboard(contactInfo.email)}
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                    <Button
                      size="sm"
                      className="h-7 bg-primary hover:bg-primary/90 text-xs px-2"
                      onClick={sendEmail}
                    >
                      Send
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                  <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">{contactInfo.phone}</p>
                  </div>
                  <div className="flex gap-1.5 flex-shrink-0">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-7 w-7 p-0"
                      onClick={() => copyToClipboard(contactInfo.phone)}
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                    <Button
                      size="sm"
                      className="h-7 bg-emerald-600 hover:bg-emerald-700 text-white text-xs px-2"
                      onClick={openWhatsApp}
                    >
                      WhatsApp
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                  <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-foreground leading-relaxed">{contactInfo.address}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(contactInfo.address)}
                    className="flex-shrink-0 h-7 w-7 p-0"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>

                <p className="text-[11px] text-muted-foreground text-center pt-2">
                  We respond within 24 hours
                </p>
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
