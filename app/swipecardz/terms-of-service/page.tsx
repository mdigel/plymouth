import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SwipeCardz Terms of Service | Plymouth App Labs",
  description: "SwipeCardz Terms of Service - Read our terms and conditions for using the app.",
};

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-8 py-16">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/swipecardz.png"
            alt="SwipeCardz"
            width={120}
            height={120}
            priority
            className="w-[120px] h-[120px] rounded-[22%] shadow-lg mb-6"
            style={{
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
            }}
          />
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            SwipeCardz Terms of Service
          </h1>
          <p className="text-sm text-gray-500">
            Last Updated: December 26, 2025
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-base leading-7 text-gray-700">
              By downloading, installing, or using SwipeCardz ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Description of Service
            </h2>
            <p className="text-base leading-7 text-gray-700">
              SwipeCardz is a flashcard application that allows users to create, import, and study flashcard decks. The App offers both free and paid features.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. User Accounts
            </h2>
            <p className="text-base leading-7 text-gray-700">
              SwipeCardz does not require account registration. All user data is stored locally on your device. You are responsible for maintaining the security of your device and any data stored within the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. In-App Purchases
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              4.1 Lifetime Unlimited Access
            </h3>
            <p className="text-base leading-7 text-gray-700 mb-4">
              SwipeCardz offers a one-time, non-consumable in-app purchase ("Lifetime Unlimited") that grants permanent access to core premium features, including unlimited deck creation.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              4.2 AI-Powered Features
            </h3>
            <p className="text-base leading-7 text-gray-700 mb-4">
              SwipeCardz may offer AI-powered features ("AI Features") that are separate from the Lifetime Unlimited purchase. AI Features may be offered as:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4 mb-4">
              <li>Separate one-time purchases</li>
              <li>Subscription-based access</li>
              <li>Usage-based pricing (e.g., credits or tokens)</li>
            </ul>
            <p className="text-base leading-7 text-gray-700 mb-4">
              The Lifetime Unlimited purchase does not include access to AI Features unless explicitly stated. AI Features have ongoing operational costs and are therefore priced separately from the core app functionality.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              4.3 Pricing
            </h3>
            <p className="text-base leading-7 text-gray-700 mb-4">
              Prices are displayed in your local currency within the App. All prices are subject to change without notice.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              4.4 Payment Processing
            </h3>
            <p className="text-base leading-7 text-gray-700 mb-4">
              All payments are processed through Apple's App Store. By making a purchase, you also agree to Apple's terms and conditions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              4.5 Refunds
            </h3>
            <p className="text-base leading-7 text-gray-700 mb-4">
              Refund requests must be directed to Apple through the App Store, as Apple handles all payment processing. We do not have the ability to process refunds directly.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              4.6 No Subscription for Core Features
            </h3>
            <p className="text-base leading-7 text-gray-700">
              The Lifetime Unlimited purchase is a one-time payment with no recurring charges. Note that AI Features, if offered, may have their own separate pricing structure including subscriptions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. User Content
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              5.1 Your Content
            </h3>
            <p className="text-base leading-7 text-gray-700 mb-4">
              You retain all rights to the flashcard content you create or import into the App. SwipeCardz does not claim ownership of your content.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              5.2 Local Storage
            </h3>
            <p className="text-base leading-7 text-gray-700 mb-4">
              All flashcard data is stored locally on your device. We do not have access to, collect, or store your flashcard content on our servers.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              5.3 Data Loss
            </h3>
            <p className="text-base leading-7 text-gray-700">
              You are responsible for backing up your device. We are not liable for any loss of data due to device failure, app deletion, or other circumstances.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Acceptable Use
            </h2>
            <p className="text-base leading-7 text-gray-700 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>Use the App for any unlawful purpose</li>
              <li>Attempt to reverse engineer, decompile, or disassemble the App</li>
              <li>Remove or alter any proprietary notices or labels on the App</li>
              <li>Use the App to infringe on the intellectual property rights of others</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Intellectual Property
            </h2>
            <p className="text-base leading-7 text-gray-700">
              The App, including its design, features, and original content (excluding user-generated content), is owned by SwipeCardz and is protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Third-Party Services
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              8.1 Google Sheets Integration
            </h3>
            <p className="text-base leading-7 text-gray-700 mb-4">
              The App allows importing flashcards from Google Sheets. Your use of Google Sheets is subject to Google's terms of service. We are not responsible for the availability or functionality of Google Sheets.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              8.2 App Store
            </h3>
            <p className="text-base leading-7 text-gray-700">
              The App is distributed through Apple's App Store. Your use of the App Store is subject to Apple's terms and conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Disclaimer of Warranties
            </h2>
            <p className="text-base leading-7 text-gray-700 mb-4 uppercase font-medium">
              The App is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
            <p className="text-base leading-7 text-gray-700 mb-4">
              We do not warrant that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>The App will meet your specific requirements</li>
              <li>The App will be uninterrupted, timely, secure, or error-free</li>
              <li>Any errors in the App will be corrected</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Limitation of Liability
            </h2>
            <p className="text-base leading-7 text-gray-700 mb-4 uppercase font-medium">
              To the maximum extent permitted by law, SwipeCardz shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>Your use or inability to use the App</li>
              <li>Any unauthorized access to or use of your device</li>
              <li>Any bugs, viruses, or other harmful code transmitted through the App</li>
              <li>Any errors or omissions in any content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Indemnification
            </h2>
            <p className="text-base leading-7 text-gray-700">
              You agree to indemnify and hold harmless SwipeCardz and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorneys' fees) arising out of your use of the App or violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. Changes to Terms
            </h2>
            <p className="text-base leading-7 text-gray-700">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by updating the "Last Updated" date at the top of this document. Your continued use of the App after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              13. Termination
            </h2>
            <p className="text-base leading-7 text-gray-700">
              We reserve the right to terminate or suspend your access to the App at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              14. Governing Law
            </h2>
            <p className="text-base leading-7 text-gray-700">
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              15. Severability
            </h2>
            <p className="text-base leading-7 text-gray-700">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              16. Entire Agreement
            </h2>
            <p className="text-base leading-7 text-gray-700">
              These Terms constitute the entire agreement between you and SwipeCardz regarding the use of the App, superseding any prior agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              17. Contact Us
            </h2>
            <p className="text-base leading-7 text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-base leading-7 text-gray-700">
              <strong>Email:</strong> support@swipecardz.com
            </p>
          </section>

          <hr className="my-8 border-gray-200" />

          <p className="text-base leading-7 text-gray-700 text-center">
            By using SwipeCardz, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
}
