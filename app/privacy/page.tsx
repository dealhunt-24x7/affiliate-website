export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-yellow-400">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Effective Date: October 10, 2025</p>
        </header>

        {/* Introduction */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-300">1. Introduction</h2>
          <p className="text-gray-300 leading-relaxed">
            Welcome to <strong>DealHunt</strong>. Your privacy matters to us.
            This policy explains how your information is collected, used, and protected when using our platform.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-300">2. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Name, email, and profile details (Google/Facebook login).</li>
            <li>Device information for performance optimization.</li>
            <li>Cookies for personalization and analytics.</li>
            <li>Referral and affiliate click data.</li>
          </ul>
        </section>

        {/* Usage */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-300">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Improve product recommendations.</li>
            <li>Track affiliate conversions for payouts.</li>
            <li>Send important account notifications (optional).</li>
          </ul>
        </section>

        {/* Third-party */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-300">4. Third-Party Services</h2>
          <p className="text-gray-300">
            We use Amazon, Flipkart & other affiliate networks.  
            These services may collect data based on their own policies.
          </p>
        </section>

        {/* Security */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-300">5. Data Protection</h2>
          <p className="text-gray-300">
            We use encryption, secure storage, and industry-standard protection.
            No system is fully hack-proof, but we take maximum precautions.
          </p>
        </section>

        {/* User Rights */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-300">6. Your Rights</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Access your account data anytime.</li>
            <li>Request account deletion.</li>
            <li>Unsubscribe from notifications.</li>
            <li>Control cookies through browser settings.</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-300">7. Contact Us</h2>
          <p className="text-gray-300">
            Have questions? Contact us at:<br />
            <a href="mailto:support@dealhunt.com" className="text-yellow-400 underline">
              support@dealhunt.com
            </a>
          </p>
        </section>

        <footer className="text-center pt-8 border-t border-gray-700 text-gray-500 text-sm">
          © {new Date().getFullYear()} DealHunt — Cart to Heart. All rights reserved.
        </footer>
      </div>
    </main>
  );
          }
