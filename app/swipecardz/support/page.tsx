import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SwipeCardz Support | Plymouth App Labs",
  description: "Get support for SwipeCardz. Contact us at support@plymouthapplabs.com or through the feedback feature in the app.",
};

export default function SupportPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-8 py-16">
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
          <h1 className="text-3xl font-semibold text-gray-900">
            SwipeCardz Support
          </h1>
        </div>
        <div className="prose prose-gray max-w-none">
          <p className="text-lg leading-7 text-gray-700">
            If you have any questions or feedback, please contact us at{" "}
            <a
              href="mailto:support@plymouthapplabs.com"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              support@plymouthapplabs.com
            </a>{" "}
            or through the feedback feature in the app.
          </p>
        </div>
      </div>
    </div>
  );
}

