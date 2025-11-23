import Navbar from "@/Components/Navbar";
import "./globals.css";
import Footer from "@/Components/Footer";
import AuthProvider from "@/Components/SessionProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="max-w-7xl mx-auto">
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
