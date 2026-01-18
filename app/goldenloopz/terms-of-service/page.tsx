import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Golden Loopz Terms of Service | Plymouth App Labs",
  description: "Golden Loopz Terms of Service - Read our terms and conditions for using the app.",
};

export default function TermsOfServicePage() {
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
            Terms of Service
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
              1. Acceptance of Terms
            </h2>
            <p className="text-base leading-7 text-gray-700 mb-4">
              By downloading, installing, or using the Golden Loopz mobile application (&quot;the App,&quot; &quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App.
            </p>
            <p className="text-base leading-7 text-gray-700">
              These Terms constitute a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and Golden Loopz (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
            </p>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Description of Service
            </h2>
            <p className="text-base leading-7 text-gray-700 mb-4">
              Golden Loopz is a personal productivity tracking application that allows you to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>Track daily activities including work hours, learning time, workouts, and other habits</li>
              <li>Set and monitor weekly goals</li>
              <li>Record daily reflections and mood</li>
              <li>View progress over time through charts and statistics</li>
              <li>Maintain accountability through streak tracking</li>
            </ul>
            <p className="text-base leading-7 text-gray-700 mt-4">
              The App is designed for personal use and stores all user data locally on your device.
            </p>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Eligibility
            </h2>
            <p className="text-base leading-7 text-gray-700">
              You must be at least 13 years of age to use this App. By using the App, you represent and warrant that you meet this age requirement. If you are under 18, you represent that you have your parent or guardian&apos;s permission to use the App.
            </p>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. User Account
            </h2>
            <p className="text-base leading-7 text-gray-700">
              Golden Loopz does not require user registration or an account. No login credentials are needed to use the App. Your data is stored locally on your device and is not associated with any account on our servers.
            </p>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. User Responsibilities
            </h2>
            <p className="text-base leading-7 text-gray-700 mb-4">
              By using the App, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>Use the App only for its intended purpose of personal productivity tracking</li>
              <li>Not attempt to reverse engineer, decompile, or disassemble the App</li>
              <li>Not use the App to violate any applicable laws or regulations</li>
              <li>Not attempt to interfere with or disrupt the App&apos;s functionality</li>
              <li>Not use automated systems or software to extract data from the App</li>
              <li>Not redistribute, sublicense, or resell the App or any part thereof</li>
            </ul>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Data and Privacy
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              6.1 Local Data Storage
            </h3>
            <p className="text-base leading-7 text-gray-700">
              All personal data you enter into the App (activity logs, reflections, goals, etc.) is stored exclusively on your device. We do not have access to this data and cannot recover it if lost.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              6.2 Data Responsibility
            </h3>
            <p className="text-base leading-7 text-gray-700 mb-4">
              You are solely responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>Backing up your device to preserve your data</li>
              <li>The accuracy and content of data you enter</li>
              <li>Any data loss resulting from device loss, damage, or app deletion</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              6.3 Analytics
            </h3>
            <p className="text-base leading-7 text-gray-700">
              We collect anonymous usage analytics to improve the App. For complete details, please review our{" "}
              <Link href="/goldenloopz/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">
                Privacy Policy
              </Link>.
            </p>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Intellectual Property
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              7.1 Our Rights
            </h3>
            <p className="text-base leading-7 text-gray-700">
              The App, including its design, features, code, graphics, logos, and content, is owned by Golden Loopz and protected by copyright, trademark, and other intellectual property laws. All rights not expressly granted are reserved.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              7.2 Your Rights
            </h3>
            <p className="text-base leading-7 text-gray-700">
              You retain ownership of the content you create within the App (such as reflections and notes). By using the App, you do not grant us any rights to this content, as it remains stored locally on your device.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              7.3 Limited License
            </h3>
            <p className="text-base leading-7 text-gray-700">
              We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes in accordance with these Terms.
            </p>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Disclaimers
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              8.1 &quot;As Is&quot; Basis
            </h3>
            <p className="text-base leading-7 text-gray-700 mb-4 uppercase font-medium">
              THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>IMPLIED WARRANTIES OF MERCHANTABILITY</li>
              <li>FITNESS FOR A PARTICULAR PURPOSE</li>
              <li>NON-INFRINGEMENT</li>
              <li>ACCURACY OR RELIABILITY OF CONTENT</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              8.2 No Professional Advice
            </h3>
            <p className="text-base leading-7 text-gray-700 mb-4">
              The App is a personal tracking tool only. It does not provide:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>Medical, health, or fitness advice</li>
              <li>Mental health counseling or therapy</li>
              <li>Financial or business advice</li>
              <li>Professional productivity coaching</li>
            </ul>
            <p className="text-base leading-7 text-gray-700 mt-4">
              Always consult appropriate professionals for advice in these areas.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              8.3 No Guarantees
            </h3>
            <p className="text-base leading-7 text-gray-700 mb-4">
              We do not guarantee that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>The App will meet your specific requirements</li>
              <li>The App will be uninterrupted, timely, secure, or error-free</li>
              <li>Results from using the App will be accurate or reliable</li>
              <li>Any errors in the App will be corrected</li>
            </ul>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Limitation of Liability
            </h2>
            <p className="text-base leading-7 text-gray-700 mb-4 font-medium">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              9.1 No Liability for Damages
            </h3>
            <p className="text-base leading-7 text-gray-700 mb-4 uppercase font-medium">
              IN NO EVENT SHALL GOLDEN LOOPZ, ITS OWNERS, EMPLOYEES, OR AFFILIATES BE LIABLE FOR ANY:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>Indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, data, use, or goodwill</li>
              <li>Damages resulting from unauthorized access to your data</li>
              <li>Damages arising from your use or inability to use the App</li>
              <li>Damages arising from any content or conduct of third parties</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              9.2 Maximum Liability
            </h3>
            <p className="text-base leading-7 text-gray-700 uppercase font-medium">
              OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR THE APP SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE APP, IF ANY, OR $10 USD, WHICHEVER IS GREATER.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              9.3 Basis of the Bargain
            </h3>
            <p className="text-base leading-7 text-gray-700 uppercase font-medium">
              YOU ACKNOWLEDGE THAT THESE LIMITATIONS OF LIABILITY ARE AN ESSENTIAL ELEMENT OF THE AGREEMENT AND THAT WE WOULD NOT PROVIDE THE APP WITHOUT THESE LIMITATIONS.
            </p>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Indemnification
            </h2>
            <p className="text-base leading-7 text-gray-700 mb-4">
              You agree to indemnify, defend, and hold harmless Golden Loopz, its owners, employees, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys&apos; fees) arising out of or related to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>Your use of the App</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Any content you create or enter into the App</li>
            </ul>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Modifications to the App
            </h2>
            <p className="text-base leading-7 text-gray-700 mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>Modify, suspend, or discontinue the App at any time without notice</li>
              <li>Add or remove features or functionality</li>
              <li>Update the App for security, performance, or compatibility reasons</li>
            </ul>
            <p className="text-base leading-7 text-gray-700 mt-4">
              We are not liable to you or any third party for any modification, suspension, or discontinuation of the App.
            </p>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. Changes to These Terms
            </h2>
            <p className="text-base leading-7 text-gray-700 mb-4">
              We may update these Terms from time to time. When we do:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>We will update the &quot;Last Updated&quot; date at the top of this document</li>
              <li>Material changes may be communicated through the App</li>
              <li>Your continued use of the App after changes constitutes acceptance</li>
            </ul>
            <p className="text-base leading-7 text-gray-700 mt-4">
              If you do not agree to the updated Terms, you must stop using the App.
            </p>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              13. Termination
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              13.1 By You
            </h3>
            <p className="text-base leading-7 text-gray-700">
              You may terminate your use of the App at any time by uninstalling it from your device. Upon uninstallation, all locally stored data will be permanently deleted.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              13.2 By Us
            </h3>
            <p className="text-base leading-7 text-gray-700">
              We reserve the right to terminate or suspend your access to the App at any time, for any reason, without notice or liability.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              13.3 Effect of Termination
            </h3>
            <p className="text-base leading-7 text-gray-700 mb-4">
              Upon termination:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>Your license to use the App is revoked</li>
              <li>Provisions that by their nature should survive (including disclaimers, limitations of liability, and indemnification) will remain in effect</li>
            </ul>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              14. Governing Law and Dispute Resolution
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              14.1 Governing Law
            </h3>
            <p className="text-base leading-7 text-gray-700">
              These Terms shall be governed by and construed in accordance with the laws of the United States and the State of California, without regard to conflict of law principles.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              14.2 Dispute Resolution
            </h3>
            <p className="text-base leading-7 text-gray-700 mb-4">
              Any dispute arising from these Terms or your use of the App shall be resolved through:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li><strong>Informal Resolution:</strong> First, by contacting us directly to attempt to resolve the dispute informally</li>
              <li><strong>Binding Arbitration:</strong> If informal resolution fails, through binding arbitration administered in accordance with applicable arbitration rules</li>
              <li><strong>Small Claims Court:</strong> You may alternatively bring claims in small claims court if eligible</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              14.3 Class Action Waiver
            </h3>
            <p className="text-base leading-7 text-gray-700 uppercase font-medium">
              YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION.
            </p>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              15. General Provisions
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              15.1 Entire Agreement
            </h3>
            <p className="text-base leading-7 text-gray-700">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Golden Loopz regarding the App.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              15.2 Severability
            </h3>
            <p className="text-base leading-7 text-gray-700">
              If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              15.3 Waiver
            </h3>
            <p className="text-base leading-7 text-gray-700">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              15.4 Assignment
            </h3>
            <p className="text-base leading-7 text-gray-700">
              You may not assign or transfer these Terms without our prior written consent. We may assign our rights and obligations without restriction.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              15.5 No Third-Party Beneficiaries
            </h3>
            <p className="text-base leading-7 text-gray-700">
              These Terms do not create any third-party beneficiary rights.
            </p>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              16. App Store Terms
            </h2>
            <p className="text-base leading-7 text-gray-700 mb-4">
              If you downloaded the App from the Apple App Store:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-7 text-gray-700 ml-4">
              <li>These Terms are between you and Golden Loopz, not Apple</li>
              <li>Apple has no obligation to furnish maintenance or support services</li>
              <li>Apple is not responsible for any product warranties or claims</li>
              <li>Apple is not responsible for addressing any claims related to the App</li>
              <li>Apple and its subsidiaries are third-party beneficiaries of these Terms</li>
            </ul>
          </section>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              17. Contact Information
            </h2>
            <p className="text-base leading-7 text-gray-700 mb-4">
              For questions or concerns about these Terms, please contact us:
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
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Topic</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Key Point</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-sm text-gray-700">Data</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Stored locally on your device; we can&apos;t access it</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-sm text-gray-700">Liability</td>
                    <td className="px-4 py-3 text-sm text-gray-700">The App is provided &quot;as is&quot; without warranties</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-sm text-gray-700">Your Rights</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Personal, non-commercial use license</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-sm text-gray-700">Disputes</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Individual arbitration; no class actions</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">Termination</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Uninstall anytime; data will be deleted</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <hr className="my-8 border-gray-200" />

          <p className="text-sm text-gray-500 text-center italic">
            These Terms of Service apply to version 1.0.3 and later of the Golden Loopz app.
          </p>
        </div>
      </div>
    </div>
  );
}
