import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SwipeCardz Privacy Policy | Plymouth App Labs",
  description: "SwipeCardz Privacy Policy - Learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
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
            SwipeCardz Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">
            Last Updated: November 21, 2025
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg leading-7 text-gray-700 mb-8">
            At SwipeCardz, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-base leading-7 text-gray-700 mb-4">
              We collect the following types of information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li><strong>Email Address:</strong> Used for account creation and authentication</li>
              <li><strong>Flashcard Content:</strong> Questions, answers, and deck names you create</li>
              <li><strong>Practice Data:</strong> Your study sessions, progress, and performance statistics</li>
              <li><strong>Usage Analytics:</strong> App interactions, screen views, and feature usage</li>
              <li><strong>Device Information:</strong> Device type, operating system, and app version</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-base leading-7 text-gray-700 mb-4">
              We use your information to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>Provide and maintain our services</li>
              <li>Authenticate your account and manage sessions</li>
              <li>Sync your flashcards and progress across devices</li>
              <li>Analyze usage patterns to improve the app</li>
              <li>Send you important service notifications</li>
              <li>Respond to your feedback and support requests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Data Storage and Security
            </h2>
            <p className="text-base leading-7 text-gray-700 mb-4">
              Your data is stored securely on our servers with industry-standard encryption. We implement multiple layers of security including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>Encrypted data transmission (HTTPS)</li>
              <li>Secure authentication with OTP codes</li>
              <li>Rate limiting to prevent abuse</li>
              <li>Input validation and sanitization</li>
              <li>Regular security audits and updates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Google Sheets Integration
            </h2>
            <p className="text-base leading-7 text-gray-700">
              When you import flashcards from Google Sheets, we temporarily access the public sheet URL you provide. We do not store your Google account credentials or access any other Google data. Only publicly accessible sheets can be imported.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Analytics and Tracking
            </h2>
            <p className="text-base leading-7 text-gray-700">
              We use PostHog and Sentry for analytics and error tracking to improve app performance and user experience. These services collect anonymized usage data and crash reports. You can opt out of analytics tracking in the app settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Data Sharing
            </h2>
            <p className="text-base leading-7 text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share data with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li><strong>Service Providers:</strong> Trusted partners who help us operate the app (hosting, analytics, email delivery)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Your Data Rights
            </h2>
            <p className="text-base leading-7 text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>Access your personal data</li>
              <li>Request corrections to your data</li>
              <li>Delete your account and all associated data</li>
              <li>Export your flashcard data</li>
              <li>Opt out of analytics tracking</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Data Retention
            </h2>
            <p className="text-base leading-7 text-gray-700">
              We retain your data for as long as your account is active or as needed to provide services. If you delete your account, we will delete your personal data within 30 days, except where retention is required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Children's Privacy
            </h2>
            <p className="text-base leading-7 text-gray-700">
              SwipeCardz is intended for users aged 13 and older. We do not knowingly collect personal information from children under 13. If you are a parent and believe your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Cookies and Local Storage
            </h2>
            <p className="text-base leading-7 text-gray-700">
              We use local storage on your device to maintain your session and cache data for offline access. This improves app performance and allows you to use certain features without an internet connection.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Changes to This Policy
            </h2>
            <p className="text-base leading-7 text-gray-700">
              We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy in the app and updating the "Last Updated" date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

