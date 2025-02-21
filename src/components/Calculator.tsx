
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Calculator = () => {
  const [amount, setAmount] = useState("5000");
  const [years, setYears] = useState("10");
  const [returns, setReturns] = useState("12");
  const [result, setResult] = useState(0);

  const calculateSIP = () => {
    const P = parseFloat(amount);
    const t = parseFloat(years) * 12;
    const r = parseFloat(returns) / 1200;
    const FV = P * ((Math.pow(1 + r, t) - 1) / r) * (1 + r);
    setResult(Math.round(FV));
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8 animate-fade-up">
          <div className="text-center">
            <h2 className="text-3xl font-bold">SIP Calculator</h2>
            <p className="text-muted-foreground mt-2">
              Plan your investments and see how your money grows
            </p>
          </div>
          <Card className="max-w-xl mx-auto">
            <CardHeader>
              <CardTitle>Calculate Returns</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="amount">Monthly Investment (₹)</Label>
                <Input
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  type="number"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="years">Investment Period (Years)</Label>
                <Input
                  id="years"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  type="number"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="returns">Expected Returns (%)</Label>
                <Input
                  id="returns"
                  value={returns}
                  onChange={(e) => setReturns(e.target.value)}
                  type="number"
                />
              </div>
              <Button onClick={calculateSIP} className="w-full">
                Calculate
              </Button>
              {result > 0 && (
                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground">Expected Amount</p>
                  <p className="text-3xl font-bold">₹{result.toLocaleString()}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
