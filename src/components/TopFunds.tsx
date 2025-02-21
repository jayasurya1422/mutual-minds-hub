
import { ArrowUp, ArrowDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TopFunds = () => {
  const funds = [
    {
      name: "HDFC Top 100 Fund",
      category: "Large Cap",
      returns: 15.8,
      trending: "up",
    },
    {
      name: "SBI Small Cap Fund",
      category: "Small Cap",
      returns: 18.2,
      trending: "up",
    },
    {
      name: "Axis Midcap Fund",
      category: "Mid Cap",
      returns: 16.5,
      trending: "up",
    },
    {
      name: "ICICI Pru Value Discovery",
      category: "Value",
      returns: 14.9,
      trending: "down",
    },
  ];

  return (
    <section className="py-16 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8 animate-fade-up">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Top Performing Funds</h2>
            <p className="text-muted-foreground mt-2">Track the best performing mutual funds</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {funds.map((fund) => (
              <Card key={fund.name} className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-lg font-medium">{fund.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{fund.category}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-semibold">
                      {fund.returns}%
                    </span>
                    {fund.trending === "up" ? (
                      <ArrowUp className="h-5 w-5 text-green-500" />
                    ) : (
                      <ArrowDown className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopFunds;
