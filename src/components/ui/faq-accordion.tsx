"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/content/faqs";

export function FaqAccordion({
  faqs,
  className,
}: {
  faqs: FAQ[];
  className?: string;
}) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className={cn("divide-y divide-border", className)}
    >
      {faqs.map((faq) => (
        <Accordion.Item key={faq.id} value={faq.id}>
          <Accordion.Header>
            <Accordion.Trigger
              className="group flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
            >
              <span className="font-heading text-[16px] font-semibold text-brand-navy group-hover:text-brand-blue transition-colors duration-fast">
                {faq.question}
              </span>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue-light text-brand-blue transition-all duration-fast group-data-[state=open]:bg-brand-blue group-data-[state=open]:text-white">
                <Plus
                  className="h-4 w-4 transition-transform duration-fast group-data-[state=open]:hidden"
                  aria-hidden="true"
                />
                <Minus
                  className="hidden h-4 w-4 group-data-[state=open]:block"
                  aria-hidden="true"
                />
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden text-brand-charcoal/80 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <p className="pb-5 text-body leading-relaxed">{faq.answer}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
