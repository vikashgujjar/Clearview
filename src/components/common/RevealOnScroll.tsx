'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Create an Intersection Observer to detect when elements enter the viewport
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: '0px 0px -50px 0px', // Start revealing slightly before element enters viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // If already visible, skip
          if (element.classList.contains('visible')) {
            observer.unobserve(element);
            return;
          }

          // Extract delay from inline style
          const inlineStyle = element.getAttribute('style') || '';
          const delayMatch = inlineStyle.match(/transitionDelay:\s*([0-9.]+)s/);
          const delay = delayMatch ? parseFloat(delayMatch[1]) * 1000 : 0;

          // Use setTimeout to respect the transition delay
          setTimeout(() => {
            element.classList.add('visible');
          }, delay);

          // Stop observing this element once it's triggered
          observer.unobserve(element);
        }
      });
    }, observerOptions);

    // Function to find and observe elements
    const observeElements = () => {
      const revealElements = document.querySelectorAll('.reveal:not(.visible)');
      revealElements.forEach((el) => {
        observer.observe(el);
      });
    };

    // Initial scan
    observeElements();

    // Set up a MutationObserver to watch for new .reveal elements added to the DOM
    // This handles elements that might render late or after client-side navigation
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Fallback timer to ensure elements are caught even if mutations are missed
    const timer = setTimeout(observeElements, 500);
    const timer2 = setTimeout(observeElements, 1500); // Second fallback for slower loads

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [pathname]); // Re-run when the route changes

  return null;
}

