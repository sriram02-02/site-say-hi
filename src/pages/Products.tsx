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
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/background.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <div className="pt-28 sm:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Enhanced Hero Section */}
          <div className="text-center mb-16 sm:mb-24 animate-fade-in">
            <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-20 border border-primary/10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15)]">
              {/* Elegant decorative elements */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-full" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent rounded-full" />
              
              <span className="inline-block px-5 py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold tracking-widest mb-6 sm:mb-8 uppercase">
                Premium Quality Products
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-foreground leading-[1.1] pb-2">
                Our <span className="bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">Premium</span> Products
              </h1>
              <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
                <div className="w-12 h-px bg-primary/40" />
                <div className="w-2 h-2 rounded-full bg-primary/60" />
                <div className="w-12 h-px bg-primary/40" />
              </div>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                Carefully curated selection of finest products sourced from trusted suppliers worldwide
              </p>
            </div>
          </div>

          {/* Product Categories Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              // Get first 4 product images for preview
              const previewImages = product.varieties.slice(0, 4).map((v: any) => v.image);
              
              return (
                <div
                  key={product.title}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <Card 
                    className="relative overflow-hidden border border-primary/10 bg-card/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
                  >
                    {/* Image Preview Grid */}
                    <div className="relative h-52 sm:h-56 overflow-hidden">
                      <div className="grid grid-cols-2 grid-rows-2 h-full">
                        {previewImages.map((img: string, imgIndex: number) => (
                          <div 
                            key={imgIndex}
                            className="relative overflow-hidden"
                          >
                            <img 
                              src={img} 
                              alt=""
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                      {/* Elegant overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/40 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Icon badge */}
                      <div className="absolute top-4 left-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/95 dark:bg-card/95 backdrop-blur-sm shadow-lg flex items-center justify-center border border-primary/20">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                      </div>
                      
                      {/* Variety count badge */}
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 dark:bg-card/95 text-foreground shadow-lg backdrop-blur-sm border border-primary/10">
                          {product.varieties.length} Varieties
                        </span>
                      </div>
                      
                      {/* Title on image */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-md tracking-tight">
                          {product.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <CardContent className="p-5 sm:p-6 flex flex-col flex-1">
                      <p className="text-muted-foreground mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base line-clamp-2 flex-1">
                        {product.description}
                      </p>
                      
                      {/* Sample products preview */}
                      <div className="flex items-center gap-3 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-border/50">
                        <div className="flex -space-x-2">
                          {previewImages.slice(0, 4).map((img: string, i: number) => (
                            <div 
                              key={i}
                              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-card overflow-hidden shadow-sm ring-1 ring-primary/10"
                            >
                              <img src={img} alt="" className="w-full h-full object-cover" />
                            </div>
                          ))}
                          {product.varieties.length > 4 && (
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-card bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary shadow-sm">
                              +{product.varieties.length - 4}
                            </div>
                          )}
                        </div>
                        <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                          Premium selection
                        </span>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button 
                          onClick={() => setSelectedProductTitle(product.title)}
                          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-all duration-300 hover:shadow-lg font-semibold"
                          size="lg"
                        >
                          Explore All
                        </Button>
                        <Button 
                          onClick={() => setEnquiryProduct(product.title)}
                          variant="outline"
                          className="flex-1 border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 font-semibold"
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
            <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto bg-card border border-primary/10 shadow-2xl">
              {(() => {
                const current = products.find((p) => p.title === selectedProductTitle);
                if (!current) return null;
                const Icon = current.icon;
                return (
                  <>
                    <DialogHeader className="pb-6 border-b border-border/50">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                        </div>
                        <div>
                          <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">{current.title}</DialogTitle>
                          <p className="text-sm text-muted-foreground mt-1">{current.varieties.length} premium varieties available</p>
                        </div>
                      </div>
                      <DialogDescription className="sr-only">
                        List of product varieties for {current.title}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mt-6">
                      {current.varieties.map((variety, vIndex) => {
                        const varietyName = typeof variety === 'string' ? variety : (variety as any).name;
                        const varietyImage = typeof variety === 'object' && (variety as any).image ? (variety as any).image : null;
                        return (
                          <Card 
                            key={varietyName} 
                            className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-border/50 hover:border-primary/30 bg-card"
                          >
                            <div className="aspect-square bg-muted/30 flex items-center justify-center relative overflow-hidden">
                              {varietyImage ? (
                                <>
                                  <img 
                                    src={varietyImage} 
                                    alt={varietyName}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </>
                              ) : (
                                <>
                                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                  <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground/20 group-hover:scale-105 group-hover:text-primary/30 transition-all" />
                                </>
                              )}
                            </div>
                            <CardContent className="p-3 sm:p-4">
                              <p className="font-semibold text-center text-xs sm:text-sm leading-tight line-clamp-2 mb-2 sm:mb-3 text-foreground">
                                {varietyName}
                              </p>
                              {current.title === "Rice" && (
                                <p className="text-[10px] sm:text-xs text-muted-foreground text-center mb-2 font-medium">
                                  10 LB / 20 LB / 40 LB
                                </p>
                              )}
                              {current.title === "Pulses and Dals" && (
                                <p className="text-[10px] sm:text-xs text-muted-foreground text-center mb-2 font-medium">
                                  2 LB / 4 LB / 40 LB
                                </p>
                              )}
                              {(current.title === "Spices" || current.title === "Blended Spices" || current.title === "Grounded Spices") && (
                                <p className="text-[10px] sm:text-xs text-muted-foreground text-center mb-2 font-medium">
                                  100g / 200g / 1 LB
                                </p>
                              )}
                              <div className="flex flex-col gap-1.5">
                                <Button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    let defaultWeight = "";
                                    if (current.title === "Rice") {
                                      defaultWeight = "10 LB / 20 LB / 40 LB";
                                    } else if (current.title === "Pulses and Dals") {
                                      defaultWeight = "2 LB / 4 LB / 40 LB";
                                    } else {
                                      defaultWeight = "100g / 200g / 1 LB";
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
                                  className="w-full text-xs sm:text-sm border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                                >
                                  <ShoppingCart className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5" />
                                  Add to Cart
                                </Button>
                                <Button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setEnquiryProduct(varietyName);
                                  }}
                                  size="sm"
                                  className="w-full text-xs sm:text-sm bg-primary hover:bg-primary/90"
                                >
                                  Enquire Now
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </>
                );
              })()}
            </DialogContent>
          </Dialog>

          <Dialog open={enquiryProduct !== null} onOpenChange={(open) => !open && setEnquiryProduct(null)}>
            <DialogContent className="max-w-md bg-card border border-primary/10">
              <DialogHeader className="pb-4 border-b border-border/50">
                <DialogTitle className="text-xl sm:text-2xl font-bold text-foreground">Get in Touch</DialogTitle>
                <DialogDescription className="text-sm sm:text-base text-muted-foreground">
                  Enquiry about: <span className="font-semibold text-primary">{enquiryProduct}</span>
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-5 mt-5">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/50 transition-colors hover:bg-muted/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground mb-0.5 text-sm">Email</p>
                    <p className="text-sm text-muted-foreground break-all">{contactInfo.email}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/20 hover:border-primary/40"
                      onClick={() => copyToClipboard(contactInfo.email)}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                      onClick={sendEmail}
                    >
                      Send
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/50 transition-colors hover:bg-muted/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground mb-0.5 text-sm">Phone</p>
                    <p className="text-sm text-muted-foreground">{contactInfo.phone}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/20 hover:border-primary/40"
                      onClick={() => copyToClipboard(contactInfo.phone)}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white"
                      onClick={openWhatsApp}
                    >
                      WhatsApp
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/50 transition-colors hover:bg-muted/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground mb-0.5 text-sm">Address</p>
                    <p className="text-sm text-muted-foreground">{contactInfo.address}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(contactInfo.address)}
                    className="flex-shrink-0 border-primary/20 hover:border-primary/40"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground text-center pt-2">
                  We typically respond within 24 hours during business days
                </p>

                <Button
                  onClick={() => setEnquiryProduct(null)}
                  variant="outline"
                  className="w-full border-primary/20 hover:bg-primary/5"
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
