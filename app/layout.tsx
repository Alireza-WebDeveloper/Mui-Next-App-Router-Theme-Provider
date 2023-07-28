import Header from './Components/Header';
import ThemeRegistry from './Theme';
import './globals.css';
export default function RootLayout(props: any) {
  const { children } = props;
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header />
          <main style={{ marginTop: '4rem' }}>{children}</main>
        </ThemeRegistry>
      </body>
    </html>
  );
}
