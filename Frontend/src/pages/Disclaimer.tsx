import SEO from "@/components/SEO";

export default function Disclaimer() {
  return (
    <>
      <SEO title="Disclaimer & Affiliate Disclosure" description="Important legal disclaimer and affiliate disclosure for Small Account Trading Academy." path="/disclaimer" />
      <div className="container mx-auto max-w-3xl px-4 py-12 prose prose-sm max-w-none">
        <h1 className="font-display text-3xl font-bold mb-8">Disclaimer</h1>

        <h2 className="font-display text-xl font-semibold mt-8 mb-3">Risk Warning</h2>
        <p className="text-muted-foreground">
          Trading foreign exchange (Forex) and contracts for difference (CFDs) on margin carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment. You should not invest money that you cannot afford to lose.
        </p>

        <h2 className="font-display text-xl font-semibold mt-8 mb-3">No Financial Advice</h2>
        <p className="text-muted-foreground">
          The content on this website is for educational and informational purposes only. Nothing on this site constitutes financial advice, trading advice, or any other type of professional advice. You should always consult a licensed financial advisor before making investment decisions.
        </p>

        <h2 className="font-display text-xl font-semibold mt-8 mb-3">No Guarantee of Results</h2>
        <p className="text-muted-foreground">
          Past performance is not indicative of future results. No representation is being made that any account will or is likely to achieve profits or losses similar to those discussed on this website. The trading results presented are not necessarily typical and may not reflect your actual results.
        </p>

        <h2 className="font-display text-xl font-semibold mt-8 mb-3">Affiliate Disclosure</h2>
        <p className="text-muted-foreground">
          This website contains affiliate links. When you click on these links and open trading accounts, we may receive a commission at no additional cost to you. This helps support the free educational content we provide. Our recommendations are based on our genuine belief in the products, but you should always do your own research before opening an account with any broker.
        </p>

        <h2 className="font-display text-xl font-semibold mt-8 mb-3">Accuracy of Information</h2>
        <p className="text-muted-foreground">
          While we strive to keep the information on this site accurate and up-to-date, we make no warranties or representations about the accuracy, reliability, or completeness of any content. Market conditions change rapidly, and information may become outdated.
        </p>
      </div>
    </>
  );
}
