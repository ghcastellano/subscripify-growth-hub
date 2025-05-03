
import { useState } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does the 14-day free trial work?",
      answer: "Our 14-day free trial gives you full access to all features of your selected plan. No credit card is required to start, and you can cancel anytime before the trial ends without being charged."
    },
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade, downgrade, or change your plan at any time. If you upgrade, the new pricing will be prorated for the remainder of your billing cycle. If you downgrade, the new pricing will take effect at the start of your next billing cycle."
    },
    {
      question: "How does billing work?",
      answer: "We offer both monthly and annual billing options. With annual billing, you save 20% compared to monthly billing. We accept all major credit cards and PayPal. Invoices are sent via email at the beginning of each billing cycle."
    },
    {
      question: "Is there a limit on subscribers?",
      answer: "Yes, each plan has different subscriber limits. The Starter plan supports up to 500 subscribers, the Professional plan up to 10,000 subscribers, and the Enterprise plan offers unlimited subscribers."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time from your account settings. If you cancel, you'll still have access to your plan features until the end of your current billing cycle."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for annual subscriptions. If you're not satisfied with our service, you can request a refund within 30 days of your initial purchase. Monthly subscriptions are not eligible for refunds after payment."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our subscription platform
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium py-4 hover:text-saas-purple transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-2">
              Still have questions?
            </p>
            <a href="#" className="text-saas-purple hover:text-saas-purple-dark font-medium inline-flex items-center">
              Contact our support team
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
