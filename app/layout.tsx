import "./globals.css"
import { Josefin_Sans } from "next/font/google"

import Sidebar from "../components/Sidebar"
import SupabaseProvider from "./providers/SupabaseProvider"
import UserProvider from "./providers/UserProvider"
import ModalProvider from "./providers/ModalProvider"
import ToasterProvider from "./providers/ToastProvider"
import getSongsByUserId from "@/actions/getSongsByUserId"
import Player from "@/components/Player"
import getActiveProductsWithPrices from "@/actions/getActiveProductsWithPrices"

const figtree = Josefin_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "Songly Diploma",
  description: "21-11-3 ISiP",
}

export const revalidate = 0

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const userSongs = await getSongsByUserId()
  const products = await getActiveProductsWithPrices()

  return (
    <html lang="en">
      <body className={figtree.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <Sidebar songs={userSongs}>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
