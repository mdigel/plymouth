import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StudyModeDaily",
  description:
    "Free study decks for DSAT 2026 and AP Psychology. Import directly into SwipeCardz.",
};

const groups = [
  {
    label: "DSAT 2026",
    links: [
      {
        title: "DSAT Math 2026 - Key Rules & Concepts",
        href: "https://docs.google.com/spreadsheets/d/1cB2Zy5QN-ypxvU6f95p_B0WLKBNAF59SEAillFgceQk",
      },
      {
        title: "DSAT Vocab 2026 - High Frequency Vocab",
        href: "https://docs.google.com/spreadsheets/d/191WoP9eJ7-hBIgxOxLkenJJo6VW3PsidJ0Bja7JiWoA",
      },
      {
        title: "DSAT Grammar 2026 - Key Rules & Concepts",
        href: "https://docs.google.com/spreadsheets/d/1M1kxDnyJusbXzAGss1If5nSSk84EOmWamoJy5jZdgTE",
      },
    ],
  },
  {
    label: "AP Psychology",
    links: [
      {
        title: "AP Psych 2026 - Core Terms & Definitions",
        href: "https://docs.google.com/spreadsheets/d/1_jf79gc3P757FWG6d3dbyKPkruGTn4Ov3T1H4pzhQ04",
      },
      {
        title: "AP Psychology 2026 - Theories & Psychologists",
        href: "https://docs.google.com/spreadsheets/d/1277eqyve6vDjwuZhoIZvMaG-l7wGcPjfec703sEx2lQ",
      },
    ],
  },
];

export default function StudyModeDailyPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <div className="max-w-xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center mb-10">
          <Image
            src="/swipecardz.png"
            alt="SwipeCardz"
            width={100}
            height={100}
            priority
            className="w-[100px] h-[100px] rounded-[22%] shadow-lg mb-5"
            style={{
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
            }}
          />
          <h1 className="text-2xl font-bold text-gray-900">@StudyModeDaily</h1>
          <p className="text-sm text-gray-500 mt-1">
            Free study decks for SwipeCardz
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {groups.map((group) => (
            <div key={group.label}>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 px-1">
                {group.label}
              </h2>
              <div className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-left text-base font-medium text-gray-900 shadow-sm transition-all hover:shadow-md hover:border-gray-300 hover:bg-gray-50"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-7 h-7 shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        d="M19 11V9h-5V3H7.5L3 7.5V21h8v-2H5V9h5V4h7v7h2z"
                        fill="#23A566"
                      />
                      <path
                        d="M19 13h-8v8h8v-8zm-6 6v-1.5h1.5V19H13zm0-2.5v-1h1.5v1H13zm2.5 2.5v-1.5H17V19h-1.5zm0-2.5v-1H17v1h-1.5z"
                        fill="#23A566"
                      />
                    </svg>
                    <div className="min-w-0">
                      <span className="block leading-snug">{link.title}</span>
                      <span className="block text-xs text-gray-400 mt-0.5">
                        Google Sheets
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-12">
          Powered by{" "}
          <a
            href="https://plymouthapplabs.com"
            className="underline hover:text-gray-600"
          >
            Plymouth App Labs
          </a>
        </p>
      </div>
    </div>
  );
}
