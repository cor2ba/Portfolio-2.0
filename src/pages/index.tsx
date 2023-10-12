import Footer from "@/components/Footer"
import Components from "@/components/Components"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Portfolio V2.0 GC',
  description: 'Portfolio V2.0 by Gabriel Córdoba.',
}

export default function Home() {
  return (
    <main className="flex relative min-h-screen justify-center flex-col items-center w-full ">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <Components />
        <Footer />
    </main>
  )
}
