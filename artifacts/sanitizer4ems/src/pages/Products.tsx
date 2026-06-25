import React, { useState } from "react";
import { Head } from "@/components/Layout";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { AlertTriangle, Plus, Minus } from "lucide-react";

// Placeholder Stripe key
const stripePromise = loadStripe("pk_test_PLACEHOLDER_REPLACE_BEFORE_LAUNCH");

interface Product {
  id: string;
  name: string;
  size: string;
  description: string;
  priceOneTimeId: string;
  priceSubId: string;
}

const PRODUCTS: Product[] = [
  {
    id: "pocket",
    name: "Pocket Sanitizer",
    size: "0.25 oz",
    description: "Portable, clip-on, EMS belt-ready. Non-alcohol sanitizer — safe for all settings.",
    priceOneTimeId: "price_ONE_TIME_025OZ",
    priceSubId: "price_SUB_025OZ"
  },
  {
    id: "travel",
    name: "Travel Sanitizer",
    size: "2 oz",
    description: "Purse/bag size, perfect for on-the-go. Non-alcohol sanitizer — safe for all settings.",
    priceOneTimeId: "price_ONE_TIME_2OZ",
    priceSubId: "price_SUB_2OZ"
  },
  {
    id: "desk",
    name: "Desk/Station Sanitizer",
    size: "8 oz",
    description: "Ideal for EMS stations, offices, classrooms. Non-alcohol sanitizer — safe for all settings.",
    priceOneTimeId: "price_ONE_TIME_8OZ",
    priceSubId: "price_SUB_8OZ"
  },
  {
    id: "gallon",
    name: "Sanitizer Liquid Refill",
    size: "1 Gallon",
    description: "Bulk refill for dispensers and agency orders. Non-alcohol sanitizer — safe for all settings.",
    priceOneTimeId: "price_ONE_TIME_GALLON",
    priceSubId: "price_SUB_GALLON"
  }
];

export default function Products() {
  const handleCheckout = async (priceId: string, quantity: number, type: "one-time" | "subscription") => {
    toast.info("Stripe Checkout coming soon — product IDs will be finalized before launch.", {
      description: `Attempted to checkout: ${priceId} (Qty: ${quantity}, ${type})`
    });
    // In a real app, you would call your backend to create a checkout session
    // and then redirect to Stripe using stripe.redirectToCheckout
  };

  return (
    <>
      <Head 
        title="Products" 
        description="Shop our range of non-alcohol sanitizers. From pocket-sized to gallon refills." 
      />

      <div className="bg-yellow-50 border-b border-yellow-200 px-6 py-3 text-yellow-800 text-sm font-medium flex items-center justify-center gap-2">
        <AlertTriangle className="h-4 w-4" />
        ⚠️ Pricing and product details are placeholders. All information will be finalized before launch.
      </div>

      <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tough on germs, gentle on skin. Explore our non-alcohol sanitizer options for every situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} onCheckout={handleCheckout} />
          ))}
        </div>
      </section>
    </>
  );
}

function ProductCard({ product, onCheckout }: { product: Product, onCheckout: (id: string, qty: number, type: "one-time" | "subscription") => void }) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(q => Math.min(10, q + 1));
  const decrement = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="flex flex-col bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-square bg-secondary flex items-center justify-center p-6 border-b border-border">
        <span className="text-muted-foreground font-medium text-center">
          [Image: {product.name}]
        </span>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-1 text-sm font-bold text-accent">{product.size}</div>
        <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-1">{product.description}</p>
        
        <div className="text-xl font-bold text-foreground mb-6">
          TBD <span className="text-sm font-normal text-muted-foreground">pricing soon</span>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between border border-border rounded-md p-1">
            <button 
              onClick={decrement}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-sm transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="font-medium text-foreground w-8 text-center">{quantity}</span>
            <button 
              onClick={increment}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-sm transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-white"
            onClick={() => onCheckout(product.priceOneTimeId, quantity, "one-time")}
            data-testid={`btn-buy-${product.id}`}
          >
            Buy Now
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full border-primary text-primary hover:bg-primary/5"
            onClick={() => onCheckout(product.priceSubId, quantity, "subscription")}
            data-testid={`btn-sub-${product.id}`}
          >
            Subscribe & Save
          </Button>
        </div>
      </div>
    </div>
  );
}
