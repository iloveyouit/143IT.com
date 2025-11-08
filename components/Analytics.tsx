"use client";

import { useEffect } from "react";

/**
 * Analytics component placeholder
 * 
 * To use Fathom Analytics:
 * 1. Sign up at https://usefathom.com
 * 2. Get your site ID
 * 3. Replace YOUR_SITE_ID below
 * 4. Uncomment the script tag
 * 
 * To use Plausible Analytics:
 * 1. Sign up at https://plausible.io
 * 2. Add your domain
 * 3. Uncomment the script tag below
 * 
 * To use Google Analytics:
 * 1. Get your measurement ID (G-XXXXXXXXXX)
 * 2. Use @next/third-parties or gtag
 */

export default function Analytics() {
  useEffect(() => {
    // Fathom Analytics
    // if (process.env.NEXT_PUBLIC_FATHOM_SITE_ID) {
    //   const script = document.createElement("script");
    //   script.src = "https://cdn.usefathom.com/script.js";
    //   script.setAttribute("data-site", process.env.NEXT_PUBLIC_FATHOM_SITE_ID);
    //   script.defer = true;
    //   document.head.appendChild(script);
    // }

    // Plausible Analytics
    // if (process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN) {
    //   const script = document.createElement("script");
    //   script.defer = true;
    //   script.setAttribute("data-domain", process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN);
    //   script.src = "https://plausible.io/js/script.js";
    //   document.head.appendChild(script);
    // }

    // Google Analytics (via gtag)
    // if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    //   const script1 = document.createElement("script");
    //   script1.async = true;
    //   script1.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`;
    //   document.head.appendChild(script1);
    //
    //   const script2 = document.createElement("script");
    //   script2.innerHTML = `
    //     window.dataLayer = window.dataLayer || [];
    //     function gtag(){dataLayer.push(arguments);}
    //     gtag('js', new Date());
    //     gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
    //   `;
    //   document.head.appendChild(script2);
    // }
  }, []);

  return null;
}

