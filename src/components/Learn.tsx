
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Learn = () => {
  const topics = [
    {
      title: "What are Mutual Funds?",
      description:
        "Learn about mutual funds and how they pool money from multiple investors to purchase securities.",
    },
    {
      title: "Types of Mutual Funds",
      description:
        "Explore different types of mutual funds including equity, debt, hybrid, and index funds.",
    },
    {
      title: "Investment Strategies",
      description:
        "Discover various investment strategies and how to build a diversified portfolio.",
    },
    {
      title: "Risk Management",
      description:
        "Understand the risks associated with mutual funds and how to manage them effectively.",
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
                  <p className="text-muted-foreground">{topic.description}</p>
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
