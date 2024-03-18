import "../styles/globals.css";
import dynamic from "next/dynamic";
import { Footer } from "@/components/index ";
import AuthContextProvider from "@/context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Navbar = dynamic(() => import("@/components/Navbar"));

export const metadata = {
	title: "TechFiesta'24",
	description: "Something great awaits",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="body__container font-generalsans bg-black text-red border-yellowish">
				<AuthContextProvider>
					<Navbar />
					<div className="pt-0">{children}</div>
					<ToastContainer
						position="top-right"
						autoClose={1250}
						hideProgressBar={true}
						closeButton={false}
						icon={false}
						style={{
							font: "generalsans",
							fontSize: "1rem"
						}}
					/>
					<Footer />
				</AuthContextProvider>
			</body>
		</html>
	);
}
