
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I start investing in mutual funds?",
      answer: "To start investing in mutual funds, first complete your KYC (Know Your Customer) process. Then, choose a mutual fund based on your investment goals and risk tolerance. You can invest either through a lump sum amount or start a SIP (Systematic Investment Plan) with as little as ₹500 per month through various platforms or directly with fund houses."
    },
    {
      question: "What is the difference between direct and regular mutual funds?",
      answer: "Direct mutual funds are purchased directly from the fund house without any intermediary, resulting in lower expense ratios and potentially higher returns. Regular funds are purchased through distributors who charge a commission, leading to slightly higher expense ratios. The difference in returns between direct and regular plans can be 0.5-1% annually."
    },
    {
      question: "How are mutual fund returns taxed?",
      answer: "Equity mutual fund gains held for more than 1 year are taxed at 10% for gains above ₹1 lakh (Long Term Capital Gains). Gains on equity funds held for less than 1 year are taxed at 15% (Short Term Capital Gains). For debt funds, gains are taxed at your income tax slab rate if held for less than 3 years, and at 20% with indexation benefit if held for more than 3 years."
    },
    {
      question: "What is NAV in mutual funds?",
      answer: "NAV (Net Asset Value) is the per-unit market value of a mutual fund. It is calculated by dividing the total value of all the securities in the portfolio, minus liabilities, by the total number of units outstanding. NAV changes daily based on the underlying securities' market values."
    },
    {
      question: "Can I withdraw my mutual fund investment anytime?",
      answer: "Most open-ended mutual funds allow redemption at any time, but some conditions apply. Some funds may have exit loads (redemption charges) if you withdraw before a specified period. ELSS funds have a mandatory 3-year lock-in period. Liquid funds typically offer the highest liquidity with no exit load."
    },
    {
      question: "What is the minimum amount required to invest in mutual funds?",
      answer: "The minimum investment amount varies by fund and investment mode. For lump sum investments, it typically ranges from ₹1,000 to ₹5,000. For SIPs (Systematic Investment Plans), you can start with as low as ₹500 per month in many funds. Some funds may have higher minimum investment requirements."
    }
  ];

  return (
    <section className="py-16 px-4 bg-secondary/25">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8 animate-fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mt-2">
              Common questions about mutual fund investments
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
