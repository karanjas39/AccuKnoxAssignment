"use client";

import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar/Navbar";
import { Provider } from "react-redux";
import { store } from "@/store/index";
import ProtectedRoutes from "@/components/ProtectedRoutes/ProtectedRoutes";
import { ChildrenProp } from "@/utils/Types/types";

function ClientProvider({ children }: ChildrenProp) {
  return (
    <>
      <Provider store={store}>
        <ProtectedRoutes>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen">
              <Navbar />
              {children}
            </div>
            <Toaster />
          </ThemeProvider>
        </ProtectedRoutes>
      </Provider>
    </>
  );
}

export default ClientProvider;
