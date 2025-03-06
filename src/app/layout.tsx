import type { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
          <h1>Header</h1>
        </header>

        {children}


<footer style={{backgroundColor: 'ghostwhite',
  padding: '1rem'
}}>


  <h1>Footer</h1>
</footer>



      </body>
    </html>
  );
}
