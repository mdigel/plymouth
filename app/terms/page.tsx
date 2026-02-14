import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Support | Plymouth App Labs",
};

const apps = [
  {
    name: "Swipe Cardz",
    subtitle: "Simple, swipeable study.",
    icon: "/swipecardz.png",
    links: {
      support: "/swipecardz/support",
      privacy: "/swipecardz/privacy-policy",
      terms: "/swipecardz/terms-of-service",
    },
  },
  {
    name: "Golden Loopz",
    subtitle: "Daily habits for builders.",
    icon: "/goldenloopzicon.png",
    links: {
      support: "/goldenloopz/support",
      privacy: "/goldenloopz/privacy-policy",
      terms: "/goldenloopz/terms-of-service",
    },
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-8 py-16">
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 tracking-tight mt-6 mb-2">
          Terms & Support
        </h1>
        <p className="text-gray-500 mb-12">
          Support, privacy policies, and terms of service for our apps.
        </p>

        <div className="flex flex-col gap-8">
          {apps.map((app) => (
            <div
              key={app.name}
              className="flex items-center gap-6 p-6 rounded-2xl border border-gray-100 bg-gray-50/50"
            >
              <Image
                src={app.icon}
                alt={app.name}
                width={80}
                height={80}
                className="w-[80px] h-[80px] rounded-[22%] shadow-md shrink-0"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-semibold text-gray-900">
                  {app.name}
                </h2>
                <p className="text-sm text-gray-400 mb-2">{app.subtitle}</p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={app.links.support}
                    className="text-sm text-gray-600 hover:text-gray-900 underline underline-offset-2 transition-colors"
                  >
                    Support
                  </Link>
                  <Link
                    href={app.links.privacy}
                    className="text-sm text-gray-600 hover:text-gray-900 underline underline-offset-2 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href={app.links.terms}
                    className="text-sm text-gray-600 hover:text-gray-900 underline underline-offset-2 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
