"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type InquiryItem = {
  slug: string;
  title: string;
  image: string;
  qty: number;
  unit?: string;
};

type Ctx = {
  items: InquiryItem[];
  add: (item: Omit<InquiryItem, "qty">, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  count: number;
};

const InquiryCtx = createContext<Ctx | null>(null);
const STORAGE_KEY = "hehui_inquiry_v1";

export function InquiryProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<InquiryItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items, hydrated]);

  const add = useCallback<Ctx["add"]>((item, qty = 100) => {
    setItems((prev) => {
      const found = prev.find((p) => p.slug === item.slug);
      if (found) {
        return prev.map((p) =>
          p.slug === item.slug ? { ...p, qty: p.qty + qty } : p
        );
      }
      return [...prev, { ...item, qty }];
    });
  }, []);

  const remove = useCallback((slug: string) => {
    setItems((prev) => prev.filter((p) => p.slug !== slug));
  }, []);

  const setQty = useCallback((slug: string, qty: number) => {
    setItems((prev) =>
      prev.map((p) => (p.slug === slug ? { ...p, qty: Math.max(1, qty) } : p))
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<Ctx>(
    () => ({
      items,
      add,
      remove,
      setQty,
      clear,
      count: items.length,
    }),
    [items, add, remove, setQty, clear]
  );

  return <InquiryCtx.Provider value={value}>{children}</InquiryCtx.Provider>;
}

export function useInquiry() {
  const ctx = useContext(InquiryCtx);
  if (!ctx) throw new Error("useInquiry must be used within InquiryProvider");
  return ctx;
}
