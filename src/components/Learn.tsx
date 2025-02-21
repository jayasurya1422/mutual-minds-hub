
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Learn = () => {
  const topics = [
    {
      title: "What are Mutual Funds?",
      description:
        "A mutual fund is a professionally managed investment vehicle that pools money from multiple investors to purchase a diversified portfolio of stocks, bonds, or other securities. When you invest in a mutual fund, you're buying units or shares of the fund, representing your portion of the fund's holdings. The fund is managed by experienced portfolio managers who make investment decisions on behalf of investors, following the fund's stated objectives.",
    },
    {
      title: "Types of Mutual Funds",
      description:
        "Equity funds invest primarily in stocks, offering high growth potential with higher risk. Debt funds invest in fixed-income securities like bonds, providing stable returns with lower risk. Hybrid funds combine both equity and debt investments for balanced returns. Index funds track specific market indices like NIFTY 50. Money market funds invest in short-term, highly liquid instruments. ELSS (Equity-Linked Savings Scheme) funds offer tax benefits under Section 80C with a 3-year lock-in period.",
    },
    {
      title: "Investment Strategies",
      description:
        "Start with understanding your financial goals, risk tolerance, and investment horizon. Consider SIP (Systematic Investment Plan) for disciplined investing - invest fixed amounts regularly to benefit from rupee cost averaging. Diversify across fund types to manage risk. For beginners, large-cap or index funds offer stability. Review fund performance over 5-10 years, not just recent returns. Check expense ratio, fund manager experience, and fund house reputation before investing.",
    },
    {
      title: "Understanding NAV and Returns",
      description:
        "NAV (Net Asset Value) represents the per-unit market value of a fund's assets minus liabilities. Returns come in two forms: dividends during holding period and capital appreciation when units are sold. CAGR (Compound Annual Growth Rate) helps compare fund performance over different periods. Consider both absolute returns and risk-adjusted returns. Total Expense Ratio (TER) impacts your actual returns - lower TER means more returns for investors.",
    },
    {
      title: "Risk Management",
      description:
        "Market risk affects fund value based on market conditions. Interest rate risk impacts debt funds when rates change. Credit risk relates to borrower default possibility in debt funds. Liquidity risk concerns ease of buying/selling units. Mitigate risks through diversification across asset classes, sectors, and market caps. Consider your age and financial goals - younger investors can take more risks for higher returns.",
    },
    {
      title: "Key Terms to Know",
      description:
        "Exit Load: Fee charged when selling units before a specified period. Lock-in Period: Minimum holding period, especially in ELSS funds. Dividend vs. Growth Option: Choose between regular payouts or reinvestment. Direct vs. Regular Plans: Direct plans have lower expense ratios as they bypass distributors. Portfolio Turnover: Frequency of buying/selling securities within the fund - higher turnover means higher costs.",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8 animate-fade-up">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Learn About Mutual Funds</h2>
            <p className="text-muted-foreground mt-2">
              Comprehensive guides to help you understand mutual fund investments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((topic) => (
              <Card
                key={topic.title}
                className="bg-card hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{topic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {topic.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
