export const metadata = {
  title: "THEPOUCH.GLOBAL",
  description: "Cinematic fintech platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
