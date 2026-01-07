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
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/10" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Enhanced Hero Section */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="relative bg-card/90 backdrop-blur-md rounded-3xl p-12 md:p-16 border-2 border-primary/20 shadow-2xl">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/20 to-transparent rounded-br-3xl" />
              
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-sm font-bold mb-6 border border-primary/30">
                PREMIUM QUALITY PRODUCTS
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent leading-tight">
                Our Premium Products
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Carefully curated selection of finest products sourced from trusted suppliers worldwide
              </p>
            </div>
          </div>

          {/* Product Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              const gradients = [
                "from-orange-600 via-red-500 to-amber-500",
                "from-amber-500 via-yellow-500 to-orange-400",
                "from-red-600 via-rose-500 to-pink-500",
                "from-violet-600 via-purple-500 to-fuchsia-500",
                "from-emerald-600 via-teal-500 to-cyan-500"
              ];
              const bgColors = [
                "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30",
                "bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30",
                "bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30",
                "bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30",
                "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30"
              ];
              // Get first 4 product images for preview
              const previewImages = product.varieties.slice(0, 4).map((v: any) => v.image);
              
              return (
                <div
                  key={product.title}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card 
                    className={`relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 ${bgColors[index % bgColors.length]}`}
                  >
                    {/* Animated gradient border */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${gradients[index % gradients.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm scale-105`} />
                    
                    {/* Image Preview Grid */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="grid grid-cols-2 grid-rows-2 h-full">
                        {previewImages.map((img: string, imgIndex: number) => (
                          <div 
                            key={imgIndex}
                            className="relative overflow-hidden"
                          >
                            <img 
                              src={img} 
                              alt=""
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                      {/* Overlay gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${gradients[index % gradients.length]} opacity-60 mix-blend-multiply`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      
                      {/* Variety count badge */}
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-white/90 dark:bg-black/70 text-foreground shadow-lg backdrop-blur-sm">
                          {product.varieties.length} Items
                        </span>
                      </div>
                      
                      {/* Title on image */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                          {product.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <CardContent className="p-6">
                      <p className="text-foreground/70 mb-6 leading-relaxed">
                        {product.description}
                      </p>
                      
                      {/* Sample products preview */}
                      <div className="flex items-center gap-2 mb-6">
                        <div className="flex -space-x-3">
                          {previewImages.slice(0, 3).map((img: string, i: number) => (
                            <div 
                              key={i}
                              className="w-10 h-10 rounded-full border-2 border-card overflow-hidden shadow-md"
                            >
                              <img src={img} alt="" className="w-full h-full object-cover" />
                            </div>
                          ))}
                          {product.varieties.length > 3 && (
                            <div className="w-10 h-10 rounded-full border-2 border-card bg-primary/10 flex items-center justify-center text-xs font-bold text-primary shadow-md">
                              +{product.varieties.length - 3}
                            </div>
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground ml-2">
                          Premium varieties
                        </span>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button 
                          onClick={() => setSelectedProductTitle(product.title)}
                          className={`flex-1 bg-gradient-to-r ${gradients[index % gradients.length]} hover:opacity-90 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}
                          size="lg"
                        >
                          Explore All
                        </Button>
                        <Button 
                          onClick={() => setEnquiryProduct(product.title)}
                          variant="outline"
                          className="flex-1 border-2 hover:bg-primary/5 transition-all duration-300"
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
            <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-card to-card/95 border-2 border-primary/20">
              {(() => {
                const current = products.find((p) => p.title === selectedProductTitle);
                if (!current) return null;
                const Icon = current.icon;
                const productIndex = products.findIndex((p) => p.title === selectedProductTitle);
                const iconBgs = [
                  "from-orange-500 to-red-500",
                  "from-amber-500 to-yellow-500",
                  "from-red-500 to-orange-500",
                  "from-purple-500 to-pink-500",
                  "from-emerald-500 to-teal-500"
                ];
                return (
                  <>
                    <DialogHeader className="pb-4 border-b border-primary/10">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${iconBgs[productIndex % iconBgs.length]} flex items-center justify-center shadow-lg`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <DialogTitle className="text-2xl md:text-3xl font-bold">{current.title} Varieties</DialogTitle>
                          <p className="text-sm text-muted-foreground mt-1">{current.varieties.length} products available</p>
                        </div>
                      </div>
                      <DialogDescription className="sr-only">
                        List of product varieties for {current.title}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
                      {current.varieties.map((variety, vIndex) => {
                        const varietyName = typeof variety === 'string' ? variety : (variety as any).name;
                        const varietyImage = typeof variety === 'object' && (variety as any).image ? (variety as any).image : null;
                        return (
                          <Card 
                            key={varietyName} 
                            className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 bg-card/80"
                          >
                            <div className="aspect-square bg-gradient-to-br from-muted to-muted/30 flex items-center justify-center relative overflow-hidden">
                              {varietyImage ? (
                                <>
                                  <img 
                                    src={varietyImage} 
                                    alt={varietyName}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </>
                              ) : (
                                <>
                                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                  <Icon className="w-16 h-16 text-muted-foreground/20 group-hover:scale-110 group-hover:text-primary/30 transition-all" />
                                </>
                              )}
                            </div>
                            <CardContent className="p-3">
                              <p className="font-medium text-center text-sm leading-tight line-clamp-2 mb-3">
                                {varietyName}
                              </p>
                              {current.title === "Rice" && (
                                <p className="text-xs text-muted-foreground text-center mb-2 font-medium">
                                  10 LB/20LB AND 40 LB
                                </p>
                              )}
                              {current.title === "Pulses and Dals" && (
                                <p className="text-xs text-muted-foreground text-center mb-2 font-medium">
                                  2 LB/4 LB/ AND 40 LB
                                </p>
                              )}
                              {(current.title === "Spices" || current.title === "Blended Spices" || current.title === "Grounded Spices") && (
                                <p className="text-xs text-muted-foreground text-center mb-2 font-medium">
                                  1 LB/100 GRAMS/200 GRAMS
                                </p>
                              )}
                              <div className="flex gap-2">
                                <Button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    let defaultWeight = "";
                                    if (current.title === "Rice") {
                                      defaultWeight = "10 LB/20LB AND 40 LB";
                                    } else if (current.title === "Pulses and Dals") {
                                      defaultWeight = "2 LB/4 LB/ AND 40 LB";
                                    } else {
                                      defaultWeight = "1 LB/100 GRAMS/200 GRAMS";
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
                                  className="flex-1"
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
                                  className="flex-1"
                                >
                                  Enquire
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
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl">Contact Information</DialogTitle>
                <DialogDescription className="text-base">
                  Enquiry about: {enquiryProduct}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <p className="text-sm text-muted-foreground break-all">{contactInfo.email}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(contactInfo.email)}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      onClick={sendEmail}
                    >
                      Send
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <p className="text-sm text-muted-foreground">{contactInfo.phone}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(contactInfo.phone)}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={openWhatsApp}
                    >
                      WhatsApp
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground mb-1">Address</p>
                    <p className="text-sm text-muted-foreground">{contactInfo.address}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(contactInfo.address)}
                    className="flex-shrink-0"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground text-center pt-2">
                  We typically respond within 24 hours during business days
                </p>

                <Button
                  onClick={() => setEnquiryProduct(null)}
                  className="w-full bg-orange-500 hover:bg-orange-600"
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
