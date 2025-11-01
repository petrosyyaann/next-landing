import { BeforeAfter } from "../components/BeforeAfter";
import { BruxismExplanation } from "../components/BruxismExplanation";
import { ClosingCTA } from "../components/ClosingCTA";
import { DayWithBruxiCare } from "../components/DayWithBruxiCare";
import { FooterRussian } from "../components/FooterRussian";
import { HeroImmersive } from "../components/HeroImmersive";
import { SystemModules } from "../components/SystemModules";
import { Reveal } from "../components/Reveal";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b">
      <HeroImmersive />

      <Reveal>
        <BruxismExplanation />
      </Reveal>

      <Reveal>
        <SystemModules />
      </Reveal>

      <Reveal>
        <DayWithBruxiCare />
      </Reveal>

      <Reveal>
        <BeforeAfter />
      </Reveal>

      <Reveal>
        <ClosingCTA />
      </Reveal>

      <FooterRussian />
    </div>
  );
}
