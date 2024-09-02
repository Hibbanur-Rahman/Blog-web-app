"use client"
import { Provider } from "react-redux";
import store from "@/redux/store";
import Navbar from "@/components/navbar";
import { Toaster } from "react-hot-toast";

const LayoutWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="pt-[90px] relative"></div>
      {children}
      <Toaster />
      {/* <Footer /> */}
    </Provider>
  );
};

export default LayoutWrapper;
