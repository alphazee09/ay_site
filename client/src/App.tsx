import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LoadingProvider } from "@/components/LoadingProvider";
import Home from "@/pages/home";
import ServiceRequest from "@/pages/service-request";
import NotFound from "@/pages/not-found";
import { useLanguage } from "@/hooks/useLanguage";

function Router() {
  const { language } = useLanguage();

  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'} lang={language}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/service-request" component={ServiceRequest} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LoadingProvider>
          <Toaster />
          <Router />
        </LoadingProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
