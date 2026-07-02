"use client";

import Script from "next/script";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const isDev = siteConfig.env === "development";
const ga4Id = siteConfig.analytics.ga4Id;
const clarityId = siteConfig.analytics.clarityId;

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (isDev || !ga4Id) return;
    if (typeof window.gtag === "function") {
      window.gtag("config", ga4Id, { page_path: pathname });
    }
  }, [pathname]);

  if (isDev) return null;

  return (
    <>
      {ga4Id && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${ga4Id}', { page_path: window.location.pathname });
            `}
          </Script>
        </>
      )}
      {clarityId && (
        <Script id="clarity-init" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","${clarityId}");
          `}
        </Script>
      )}
    </>
  );
}
