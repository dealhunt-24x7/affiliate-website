// /data/faqs.ts
export type FAQItem = {
  q: string;
  a: string;
  links?: { label: string; href: string }[];
};
export type FAQCategories = Record<string, FAQItem[]>;

const SEED: FAQCategories = {
  "General": [
    { q: "What is DealHunt and how does it work?", a: "DealHunt is an affiliate deals aggregator that finds curated deals from partner merchants. When you click a deal we redirect to the merchant with an affiliate tag so we may earn a commission if you purchase." , links: [{ label: "About DealHunt", href: "/" }] },
    { q: "Which product categories do you cover?", a: "We cover luxury watches, jewellery, perfumes, bags, electronics, home & kitchen, clothing and general items. Use search or category filters to find deals." , links: [{ label: "All products", href: "/products" }] },
    { q: "Do I need an account to browse deals?", a: "No. Browsing is open to everyone. Signing in with Google unlocks wishlist, wallet and referral features." , links: [{ label: "Sign in", href: "/signin" }] },
    { q: "Are the deals on DealHunt real?", a: "Yes — we surface verified merchant offers but final price, tax, shipping & availability are controlled by the merchant." },
    { q: "How often are deals updated?", a: "We refresh feeds multiple times a day; some categories update hourly." },
    { q: "Why do some deals go offline?", a: "Deals can expire when the merchant runs out of stock or withdraws an offer." },
    { q: "How are deal images provided?", a: "Images come from the merchant or the partner feed; we resize and cache them for fast display." },
    { q: "How does DealHunt make money?", a: "We earn commission from partners when users buy through our affiliate links. This supports operating costs and features." },
    { q: "Can I request a brand to be added?", a: "Yes — contact Support with brand details and we’ll evaluate partnership opportunities." },
    { q: "Where can I find terms and privacy?", a: "Terms and privacy pages are linked in the footer. We keep user data limited and encrypted in transit." , links: [{ label: "Privacy", href: "/privacy" }] },
  ],

  "Orders & Products": [
    { q: "Do you sell products directly?", a: "No — DealHunt is an aggregator. Purchases happen on the merchant site." },
    { q: "How can I check authenticity?", a: "Check merchant seller ratings, warranty info and official seller tags before buying." },
    { q: "Do you show refurbished products?", a: "Yes where the merchant lists refurbished or open-box items; such items are clearly labelled." },
    { q: "How do I use coupons?", a: "Coupons listed on DealHunt are applied at merchant checkout and are subject to merchant T&Cs." },
    { q: "Can I filter by brand or price?", a: "Yes — the products page provides filters for brand, price range, discount and more." },
    { q: "How long will shipping take?", a: "Shipping estimates are shown on the merchant checkout page and depend on their fulfillment." },
    { q: "Are custom duties included?", a: "Customs/duties are charged by carriers/merchant; DealHunt does not control them." },
    { q: "Can I get warranty for watches/jewellery?", a: "Warranty depends on merchant and manufacturer; always verify vendor warranty details on the merchant page." },
    { q: "Do you support price alerts?", a: "Price alerts are on our roadmap; currently you can follow deals via wishlist and revisit frequently." },
    { q: "How are prices displayed (currency)?", a: "Prices reflect the merchant's listing and currency for your region when available." },
  ],

  "Cashback & Wallet": [
    { q: "Do you offer cashback?", a: "Some deals provide cashback via our wallet system. Eligibility is shown on the deal." , links: [{ label: "Wallet", href: "/wallet" }] },
    { q: "When is cashback credited?", a: "Credit timing depends on merchant confirmation — typically days to weeks after purchase." },
    { q: "How do I withdraw cashback?", a: "Withdrawals follow our payout flow: minimum balance, verification (KYC if required) and payout processing." },
    { q: "Will cashback be reversed on return?", a: "Yes — if merchant issues a refund, corresponding cashback may be reversed per policy." },
    { q: "Can referral bonuses be cashed out?", a: "Referral rewards are credited to your wallet and follow the same withdrawal rules." },
    { q: "How do I view transaction history?", a: "Your Wallet page lists earned, pending and withdrawn transactions with timestamps." },
    { q: "Are wallet funds insured?", a: "Wallet balances are bookkeeping entries and not bank deposits. We safeguard user data and follow payout rules." },
    { q: "What payment methods are supported for withdrawal?", a: "Supported withdrawal methods will be shown on Wallet (UPI, bank transfer, or partner payout options)." },
    { q: "How long does payout take?", a: "Payout processing can take 3–10 business days depending on provider and verification." },
    { q: "Is there a minimum withdrawal limit?", a: "Yes — minimum payout is displayed on the Wallet page and may change with promotions." },
  ],

  "Account & Login": [
    { q: "How do I create an account?", a: "We support Sign in with Google only. Click Sign in → Continue with Google and allow permissions." , links: [{ label: "Sign in", href: "/signin" }] },
    { q: "Can I set a password?", a: "No — currently we do not support email/password signups. Auth is handled by Google OAuth." },
    { q: "How do I change the Google account used?", a: "Sign out (Settings → Logout) and sign in again with the new Google account." },
    { q: "How do I delete my account?", a: "Contact Support to request account deletion; we will remove data per privacy policy." , links: [{ label: "Support", href: "/support" }, { label: "Privacy", href: "/privacy" }] },
    { q: "What data do you store?", a: "We store minimal profile info (name, email, image) and wishlist/wallet data; sensitive data is handled with care." },
    { q: "How to enable/disable notifications?", a: "Notifications can be toggled in Settings → Notifications." },
    { q: "How to reach support for account issues?", a: "Use Settings → Help or the Support page to open a ticket." },
    { q: "How do I update my email?", a: "If you need to change the linked account, re-authenticate using the new Google account." },
    { q: "What if my Google session expires?", a: "You may be prompted to sign in again; re-authenticate via Sign in with Google." },
    { q: "Is 2-step verification supported?", a: "We rely on Google account security which supports 2-step verification." },
  ],

  "Cart to Heart": [
    { q: "What is Cart to Heart?", a: "Cart to Heart channels part of partner commissions or donated funds into social causes (education, health, community projects)." , links: [{ label: "Cart to Heart", href: "/cart-to-heart-coming-soon" }] },
    { q: "How do I join Cart to Heart?", a: "Joining will be available on the Cart to Heart page. For now it's Coming Soon; subscribe for updates." },
    { q: "Does joining cost extra?", a: "No — contributions come from partner allocations or optional donations; purchases don't increase by default." },
    { q: "How is fund usage reported?", a: "We will publish periodic reports and impact summaries on the Cart to Heart page." },
    { q: "Can I nominate a cause?", a: "We will add nomination and voting features after the initial launch; details will be posted on the program page." },
    { q: "Is Cart to Heart available globally?", a: "Availability depends on partner support per country; initial rollout may be region-limited." },
    { q: "How will rewards work for participants?", a: "Participants may get exclusive badges, early access offers or reward points as part of program benefits." },
    { q: "Who audits the program?", a: "We plan to work with vetted NGOs and independent auditors for transparency." },
    { q: "How much of the commission goes to causes?", a: "Details will be published at launch; initial allocation models will be transparent on the program page." },
    { q: "Can I see past contributions?", a: "Impact reports and contribution summaries will be visible to participants on the program dashboard." },
  ],

  "Affiliate & Partners": [
    { q: "How does your affiliate model work?", a: "We send users to merchants with affiliate tags. When a qualifying sale occurs, we may earn commission per merchant terms." },
    { q: "Which merchants do you work with?", a: "We partner with major marketplaces and brand stores (Amazon, Flipkart, Myntra, brand boutiques) and specialized luxury retailers." },
    { q: "How do you verify partner feeds?", a: "We validate feed quality, merchant reputation and test affiliate links before listing." },
    { q: "Can a merchant request removal?", a: "Yes — merchants can contact our partnerships team for removal or updates." },
    { q: "Are there different commission rates?", a: "Commission rates vary by merchant, category and campaign. Rates are agreed with partners." },
    { q: "Do you support direct brand integrations?", a: "Yes — we support API-based integrations and feed ingestion for brand partners." },
    { q: "How do affiliates get paid?", a: "DealHunt pays partners per agreed schedule; affiliate payouts to publishers are handled per contract." },
    { q: "Can I become a partner?", a: "Contact Partnerships via the Support/Partner page to start discussions." },
    { q: "How do you handle promotional campaigns?", a: "Promotions are coordinated with partners and reflected on our platform with start/end dates." },
    { q: "How is partner performance measured?", a: "We track clicks, conversions and revenue share via analytics dashboards for partners." },
  ],
};

// generate placeholders to reach 45 per category
const DESIRED = 45;

function addPlaceholdersFor(category: string, items: FAQItem[]) {
  const out: FAQItem[] = [...items];
  for (let i = items.length + 1; i <= DESIRED; i++) {
    out.push({
      q: `${category} — Common question #${i}`,
      a: `This is a generated placeholder answer for "${category}" question number ${i}. Replace this with a specific detailed answer relevant to your product, policy or features. Suggested related pages: products, wallet, settings.`,
      links: [
        { label: "Products", href: "/products" },
        { label: "Wallet", href: "/wallet" },
      ],
    });
  }
  return out;
}

export const faqs: FAQCategories = Object.keys(SEED).reduce((acc, k) => {
  acc[k] = addPlaceholdersFor(k, SEED[k]);
  return acc;
}, {} as FAQCategories);

export const categories = Object.keys(faqs);
