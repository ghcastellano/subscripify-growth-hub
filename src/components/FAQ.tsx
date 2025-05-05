
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does AlwaysActive keep me active on messaging platforms?",
      answer: "AlwaysActive uses a lightweight desktop client that simulates minimal mouse movements and keyboard activity at scheduled intervals. This prevents your status from changing to 'Away' or 'Inactive' on platforms like Slack, Teams, and other messaging apps that track user activity."
    },
    {
      question: "Is this against my company's policies?",
      answer: "We recommend checking your company's policies regarding presence management tools. Many remote workers use AlwaysActive during legitimate breaks or when they need to step away briefly but want to remain available. Our tool doesn't interact with any company data or communications."
    },
    {
      question: "What platforms does AlwaysActive support?",
      answer: "AlwaysActive works with most major communication platforms including Slack, Microsoft Teams, Google Chat, Discord, Zoom, Skype, and virtually any application that tracks user activity through mouse/keyboard input. If you have a specific platform, contact us to confirm compatibility."
    },
    {
      question: "Will this affect my computer's performance?",
      answer: "No, our application is extremely lightweight, using less than 20MB of RAM and minimal CPU. It runs silently in the background and you won't notice any impact on your system's performance."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription anytime from your account dashboard. If you cancel, you'll still have access to AlwaysActive until the end of your current billing period. We don't offer refunds for partial months of service."
    },
    {
      question: "Is my data safe with AlwaysActive?",
      answer: "Absolutely. AlwaysActive doesn't access, read, or store any of your messages or sensitive information. The app only simulates mouse/keyboard activity to maintain your active status. We don't have access to any of your communications or company data."
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
            Everything you need to know about AlwaysActive
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
