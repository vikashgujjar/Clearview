'use client';

import { useEffect } from 'react';

export default function RevealOnScroll() {
  useEffect(() => {
    // Create an Intersection Observer to detect when elements enter the viewport
    const observerOptions = {
      threshold: 0.05, // Trigger when 5% of the element is visible
      rootMargin: '0px 0px -50px 0px', // Start revealing slightly before element enters viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Extract delay from inline style or get from computed style
          const element = entry.target as HTMLElement;
          const inlineStyle = element.getAttribute('style') || '';
          const delayMatch = inlineStyle.match(/transitionDelay:\s*([0-9.]+)s/);
          const delay = delayMatch ? parseFloat(delayMatch[1]) * 1000 : 0;

          // Use setTimeout to respect the transition delay
          setTimeout(
            () => {
              // Add animation class
              element.classList.add('visible');
            },
            delay
          );

          // Stop observing this element once it's visible
          observer.unobserve(element);
        }
      });
    }, observerOptions);

    // Observe all elements with the reveal class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}
