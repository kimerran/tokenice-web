import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "TokeNice | k1merran.eth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="relative h-screen flex min-h screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
