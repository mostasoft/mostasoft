"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function RouteProgressBar() {
  const pathname = usePathname();

  useEffect(() => {
    // Start loading bar
    NProgress.start();

    // Finish after small delay to allow DOM to update
    const timer = setTimeout(() => {
      NProgress.done();
    }, 2000); // Adjust if needed

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
