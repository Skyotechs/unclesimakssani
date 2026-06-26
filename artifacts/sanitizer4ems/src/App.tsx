import React, { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Referral from "@/pages/Referral";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import PolicyPage from "@/pages/PolicyPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
      <Route path="/referral" component={Referral} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy"><PolicyPage type="privacy" /></Route>
      <Route path="/terms"><PolicyPage type="terms" /></Route>
      <Route path="/refund"><PolicyPage type="refund" /></Route>
      <Route path="/shipping"><PolicyPage type="shipping" /></Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <Layout>
            <Router />
          </Layout>
        </WouterRouter>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
