import type { PropsWithChildren } from "react";
import Header from "./header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <Header />

      <main className="container mx-auto min-h-screen px-4 py-8">
        {children}
      </main>

      <footer className="border-t py-12 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>Made with ❤️ By Sappakit</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
