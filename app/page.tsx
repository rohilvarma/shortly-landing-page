import { Hero, StatsPage } from "@/components"
import { heroContent } from "@/lib/constants"
export default function Home() {
  return <div className="">
    <Hero {...heroContent} />
    <StatsPage />
  </div>
}