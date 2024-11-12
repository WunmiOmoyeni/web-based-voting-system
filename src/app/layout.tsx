// src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Web-Based Voting System',
  description: 'A secure and efficient voting system',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
