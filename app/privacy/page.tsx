export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-yellow-400">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">
            Effective Date: October 10, 2025
          </p>
        </header>

        {/* Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-300">1. Introduction</h2>
          <p className="text-gray-300 leading-relaxed">
            Welcome to <strong>DealHunt</strong> (“we”, “our”, or “us”). 
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.
          </p>
        </section>

        {/* Data Collection */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-300">2. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Personal information such as name, email, and profile picture (from Google or Facebook login).</li>
            <li>Device and usage data for improving website performance.</li>
            <li>Cookies to enhance your browsing experience and remember preferences.</li>
          </ul>
        </section>

        {/* Data Usage */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-300">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>To provide personalized offers and affiliate product recommendations.</li>
            <li>To improve our website’s design and performance.</li>
            <li>To communicate updates, offers, and account-related information.</li>
          </ul>
        </section>

        {/* Third Parties */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-300">4. Third-Party Services</h2>
          <p className="text-gray-300">
            DealHunt may use trusted third-party platforms such as Amazon, Flipkart, and Google for affiliate tracking and analytics. 
            These platforms have their own privacy policies governing data use.
          </p>
        </section>

        {/* Data Protection */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-300">5. Data Protection</h2>
          <p className="text-gray-300">
            We implement industry-standard security measures to protect your data from unauthorized access or disclosure. 
            However, please note that no system is 100% secure.
          </p>
        </section>

        {/* Your Rights */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-300">6. Your Rights</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Request access to your data.</li>
            <li>Request correction or deletion of your data.</li>
            <li>Opt-out of promotional communications at any time.</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-300">7. Contact Us</h2>
          <p className="text-gray-300">
            For any privacy-related questions or requests, please contact us at: <br />
            <a href="mailto:support@dealhunt.com" className="text-yellow-400 underline">
              support@dealhunt.com
            </a>
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-gray-700 text-gray-500 text-sm">
          © {new Date().getFullYear()} DealHunt — Cart to Heart. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
