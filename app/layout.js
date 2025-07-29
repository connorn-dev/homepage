import './globals.css';

export const metadata = {
  title: 'CONNORN.DEV',
  description: 'Connor Narowetz Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/fav.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </head>
      <body>{children}</body>
    </html>
  );
} 