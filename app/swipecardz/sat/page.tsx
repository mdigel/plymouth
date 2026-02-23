import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SwipeCardz - SAT Flashcards That Stick",
  description:
    "Study smarter for the SAT with SwipeCardz. Import from Google Sheets, swipe to learn, and track your progress.",
};

export default function SwipeCardzPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex flex-col">
      <div className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-8 w-full">
        <div className="flex flex-col items-center text-center mb-8 sm:mb-6">
          <Image
            src="/swipecardz.png"
            alt="SwipeCardz"
            width={80}
            height={80}
            priority
            className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-[22%] shadow-lg mb-4 sm:mb-4"
            style={{
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
            }}
          />
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight max-w-2xl">
            Study these SAT terms as Swipeable Flashcards
          </h1>
          <p className="text-base sm:text-xl text-gray-500 mt-3 sm:mt-3 max-w-xl">
            No account needed. Works offline.
            <br />
            No subscriptions. No ads.
          </p>
        </div>

        <div className="flex justify-center items-start gap-4 max-w-md sm:max-w-sm mx-auto">
          <div className="w-[50%] flex flex-col items-center">
            <div className="relative aspect-[687/1353] w-full">
              <Image
                src="/swipecardz-front.png"
                alt="Whatever terms you want"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="w-[50%] flex flex-col items-center">
            <div className="relative aspect-[687/1353] w-full">
              <Image
                src="/swipecardz-back.png"
                alt="From any Public Google Sheet"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mt-8">
          {[
            { name: "Jake R.", text: "Just as good as the big flashcard apps but without the monthly fee. No account needed, no friction — just open it and study." },
            { name: "Priya K.", text: "I made 30 different decks with my favorite LLM, dropped them into Google Sheets, and uploaded them here in minutes. Now it's what I study on my commute every day." },
          ].map((t) => (
            <div key={t.name} className="bg-gray-50 rounded-xl px-4 py-3">
              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-snug">&ldquo;{t.text}&rdquo;</p>
              <p className="text-xs text-gray-400 mt-1">— {t.name}</p>
            </div>
          ))}
        </div>

        <div className="hidden sm:flex flex-col items-center mt-6">
          <Image
            src="/swipecardz_qr.svg"
            alt="Scan to download SwipeCardz on the App Store"
            width={120}
            height={120}
          />
          <p className="text-sm text-gray-400 mt-2 inline-flex items-center gap-1.5">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Scan to download on the App Store
          </p>
        </div>

        <div className="flex sm:hidden justify-center mt-8">
          <a
            href="https://apps.apple.com/us/app/swipecardz/id6755474814"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-base font-medium text-white shadow-md transition-all hover:bg-gray-800 hover:shadow-lg"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Start Studying For Free
          </a>
        </div>
      </div>

      <footer className="border-t border-gray-100 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span>&copy; {new Date().getFullYear()} Plymouth App Labs</span>
          <div className="flex gap-6">
            <Link href="/swipecardz/privacy-policy" className="hover:text-gray-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/swipecardz/terms-of-service" className="hover:text-gray-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/swipecardz/support" className="hover:text-gray-600 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
