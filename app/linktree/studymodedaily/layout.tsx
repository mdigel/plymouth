import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StudyModeDaily",
  description:
    "Free study decks for DSAT 2026 and AP Psychology. Import directly into SwipeCardz.",
};

export default function StudyModeDailyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
