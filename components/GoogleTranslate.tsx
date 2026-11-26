"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

export default function GoogleTranslate() {
  const pathname = usePathname();

  // 1. Force-clean any Google Translate banners and prevent body from shifting down
  useEffect(() => {
    const suppressGoogleBanner = () => {
      if (document.body.style.top && document.body.style.top !== "0px") {
        document.body.style.top = "0px";
      }
      if (document.documentElement.style.top && document.documentElement.style.top !== "0px") {
        document.documentElement.style.top = "0px";
      }

      const bannerIframes = document.querySelectorAll<HTMLElement>(
        'iframe.goog-te-banner-frame, iframe[id^=":"][id$=".container"], iframe[class*="VIpgJd"], .goog-te-banner-frame'
      );
      bannerIframes.forEach((el) => {
        el.style.display = "none";
        el.style.visibility = "hidden";
        el.style.height = "0px";
        el.style.position = "absolute";
        el.style.top = "-9999px";
      });

      const skiptranslateContainers = document.querySelectorAll<HTMLElement>(
        'body > .skiptranslate, div.VIpgJd-ZVi9od-aZ2wEe-wOHMyf, div[id^="goog-gt-"]'
      );
      skiptranslateContainers.forEach((el) => {
        el.style.display = "none";
        el.style.visibility = "hidden";
        el.style.height = "0px";
      });
    };

    suppressGoogleBanner();

    const observer = new MutationObserver(() => {
      suppressGoogleBanner();
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
      childList: true,
    });

    const interval = setInterval(suppressGoogleBanner, 200);
    const timeout = setTimeout(() => clearInterval(interval), 5000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  // 2. Multi-page persistence & Route-change translation across ALL pages
  useEffect(() => {
    const savedLang = localStorage.getItem("awm_lang");
    const isArabic = savedLang === "ar";

    if (isArabic) {
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";

      // Set cookie across root and domain
      const hostname = window.location.hostname;
      document.cookie = "googtrans=/en/ar; path=/;";
      if (hostname) {
        document.cookie = `googtrans=/en/ar; path=/; domain=${hostname};`;
        document.cookie = `googtrans=/en/ar; path=/; domain=.${hostname};`;
      }

      // Re-trigger translation for the newly loaded page DOM
      const timer = setTimeout(() => {
        const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
        if (combo) {
          combo.value = "ar";
          combo.dispatchEvent(new Event("change"));
        }
      }, 250);

      return () => clearTimeout(timer);
    } else {
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
    }
  }, [pathname]);

  // 3. Define Google Translate Element Init Callback
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,ar",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  return (
    <>
      <div id="google_translate_element" className="hidden" style={{ display: "none" }} />
      <Script
        id="google-translate-script"
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}
