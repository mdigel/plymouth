import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golden Loopz Privacy Policy | Plymouth App Labs",
  description: "Golden Loopz Privacy Policy - Learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-8 py-16">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/goldenloopzicon.png"
            alt="Golden Loopz"
            width={120}
            height={120}
            priority
            className="w-[120px] h-[120px] rounded-[22%] shadow-lg mb-6"
            style={{
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
            }}
          />
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-base font-medium text-gray-700">Golden Loopz</p>
          <p className="text-sm text-gray-500 mt-2">
            Effective Date: January 18, 2026
          </p>
          <p className="text-sm text-gray-500">
            Last Updated: January 18, 2026
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Overview
            </h2>
            <p className="text-base leading-7 text-gray-700">
              Golden Loopz (&quot;the App,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is a personal productivity tracking application designed to help you track daily inputs toward your goals. We are committed to protecting your privacy and being transparent about how we handle your information.
            </p>
            <p className="text-base leading-7 text-gray-700 mt-4">
              This Privacy Policy explains what data we collect, how we use it, and your rights regarding your information.
            </p>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data We Collect
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              1. Data Stored Locally on Your Device
            </h3>
            <p className="text-base leading-7 text-gray-700 mb-4">
              The following data is stored <strong>exclusively on your device</strong> and is never transmitted to our servers:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li><strong>Daily Activity Logs:</strong> Hours spent on building, marketing, learning, workouts, TV time, and drink counts</li>
              <li><strong>Daily Reflections:</strong> Free-text notes you write about your day</li>
              <li><strong>Mood Data:</strong> Your burnout-to-motivation scale entries</li>
              <li><strong>Weekly Goals:</strong> Personal targets you set for each metric</li>
              <li><strong>Streak Information:</strong> Your logging and activity streak data</li>
              <li><strong>Onboarding Preferences:</strong> Your chosen focus areas and preferences</li>
            </ul>
            <p className="text-base leading-7 text-gray-700 mt-4 font-medium">
              This data never leaves your device. We cannot access, view, or recover this data. If you delete the app, this data is permanently deleted.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              2. Analytics Data (Anonymous)
            </h3>
            <p className="text-base leading-7 text-gray-700 mb-4">
              We use PostHog, a third-party analytics service, to understand how the App is used. This helps us improve the user experience. The analytics data we collect includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li><strong>App Usage Events:</strong> Which screens you view, when you save log entries, and general interaction patterns</li>
              <li><strong>Device Information:</strong> Device type, operating system version, and app version</li>
              <li><strong>Aggregated Metrics:</strong> Non-identifiable statistics such as whether you entered a reflection (yes/no), the count of metrics logged, and general time ranges</li>
            </ul>
            <p className="text-base leading-7 text-gray-700 mt-4 font-medium">
              We do NOT collect:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>The actual content of your reflections</li>
              <li>Specific values of your logged metrics (e.g., exact hours worked)</li>
              <li>Your name, email, or any personally identifiable information</li>
              <li>Your location data</li>
              <li>Photos, contacts, or other device data</li>
            </ul>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How We Use Your Data
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              Local Data
            </h3>
            <p className="text-base leading-7 text-gray-700 mb-4">
              Your locally stored data is used solely to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>Display your activity history and progress</li>
              <li>Calculate and show your streaks</li>
              <li>Track your progress toward weekly goals</li>
              <li>Provide the core functionality of the App</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              Analytics Data
            </h3>
            <p className="text-base leading-7 text-gray-700 mb-4">
              Anonymous analytics data is used to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>Understand which features are most valuable to users</li>
              <li>Identify and fix bugs or usability issues</li>
              <li>Make informed decisions about future features</li>
              <li>Improve overall app performance and user experience</li>
            </ul>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Sharing
            </h2>
            <p className="text-base leading-7 text-gray-700 mb-4 font-medium">
              We do not sell your data. Period.
            </p>
            <p className="text-base leading-7 text-gray-700 mb-4">
              We share data only with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>
                <strong>PostHog (Analytics Provider):</strong> Anonymous usage data to help us improve the App. PostHog&apos;s privacy policy can be found at{" "}
                <a href="https://posthog.com/privacy" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">
                  https://posthog.com/privacy
                </a>
              </li>
            </ul>
            <p className="text-base leading-7 text-gray-700 mt-4">
              We may disclose information if required by law or to protect our legal rights.
            </p>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Storage and Security
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              Local Data
            </h3>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>All personal tracking data is stored locally on your device using secure on-device storage</li>
              <li>We have no access to this data</li>
              <li>Data is protected by your device&apos;s security features (passcode, Face ID, etc.)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              Analytics Data
            </h3>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>Analytics data is processed by PostHog and stored on their secure servers</li>
              <li>Data is transmitted using industry-standard encryption (HTTPS/TLS)</li>
            </ul>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your Rights and Choices
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              Deleting Your Data
            </h3>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li><strong>Local Data:</strong> Uninstall the app to permanently delete all locally stored data</li>
              <li><strong>Analytics Data:</strong> Contact us at the email below to request deletion of analytics data associated with your device</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              Opting Out of Analytics
            </h3>
            <p className="text-base leading-7 text-gray-700 mb-4">
              The App currently does not offer an in-app toggle for analytics. If you wish to opt out, you may:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>Contact us to request your device be excluded from analytics collection</li>
              <li>Disable the app&apos;s network access through your device settings</li>
            </ul>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Children&apos;s Privacy
            </h2>
            <p className="text-base leading-7 text-gray-700">
              Golden Loopz is not directed at children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us so we can delete it.
            </p>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-base leading-7 text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. When we do, we will:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>Update the &quot;Last Updated&quot; date at the top of this document</li>
              <li>Notify you through the App if changes are significant</li>
            </ul>
            <p className="text-base leading-7 text-gray-700 mt-4">
              Your continued use of the App after changes are posted constitutes acceptance of the updated policy.
            </p>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Third-Party Services
            </h2>
            <p className="text-base leading-7 text-gray-700 mb-4">
              The App uses the following third-party services:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Service</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Purpose</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Privacy Policy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-sm text-gray-700">PostHog</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Analytics</td>
                    <td className="px-4 py-3 text-sm">
                      <a href="https://posthog.com/privacy" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">
                        posthog.com/privacy
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-sm text-gray-700">Expo</td>
                    <td className="px-4 py-3 text-sm text-gray-700">App infrastructure</td>
                    <td className="px-4 py-3 text-sm">
                      <a href="https://expo.dev/privacy" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">
                        expo.dev/privacy
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Apple App Store</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Distribution</td>
                    <td className="px-4 py-3 text-sm">
                      <a href="https://apple.com/legal/privacy" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">
                        apple.com/legal/privacy
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-base leading-7 text-gray-700 mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or your data, please contact us:
            </p>
            <p className="text-base leading-7 text-gray-700">
              <strong>Email:</strong>{" "}
              <a href="mailto:support@plymouthapplabs.com" className="text-blue-600 hover:text-blue-800 underline">
                support@plymouthapplabs.com
              </a>
            </p>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Summary
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">What We Collect</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Stored Where</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Can We Access It?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-sm text-gray-700">Activity logs, reflections, goals</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Your device only</td>
                    <td className="px-4 py-3 text-sm text-gray-700">❌ No</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-sm text-gray-700">Anonymous usage patterns</td>
                    <td className="px-4 py-3 text-sm text-gray-700">PostHog servers</td>
                    <td className="px-4 py-3 text-sm text-gray-700">✅ Yes (anonymized)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Personal info (name, email, etc.)</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Nowhere</td>
                    <td className="px-4 py-3 text-sm text-gray-700">❌ We don&apos;t collect this</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-base leading-7 text-gray-700 mt-6 font-medium text-center">
              Your personal data stays on your device. We can&apos;t see it, and we wouldn&apos;t want to.
            </p>
          </section>

          <hr className="my-8 border-gray-200" />

          <p className="text-sm text-gray-500 text-center italic">
            This privacy policy applies to version 1.0.3 and later of the Golden Loopz app.
          </p>
        </div>
      </div>
    </div>
  );
}
