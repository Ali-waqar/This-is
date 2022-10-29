import _ from 'lodash/fp';
import { RefObject, useEffect, useRef, useState } from 'react';

interface ScrollOptions {
  behavior?: 'auto' | 'smooth';
  offset?: number; // Pixels
}

const defaultOptions: ScrollOptions = {
  behavior: 'smooth',
  offset: 0,
};

export default function useScroll(
  scrollOptions: ScrollOptions = defaultOptions,
  rootMargin = '-48%'
): [() => void, RefObject<HTMLDivElement>, boolean] {
  const options = _.merge(defaultOptions, scrollOptions);
  const elRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const executeScroll = (): void =>
    window?.scrollTo({
      behavior: options.behavior,
      top: Number(elRef?.current?.offsetTop) - Number(options.offset),
    });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin }
    );

    if (elRef.current) {
      observer.observe(elRef.current);
      return () => observer.unobserve(elRef.current);
    }
  }, [rootMargin]);

  return [executeScroll, elRef, isVisible];
}
