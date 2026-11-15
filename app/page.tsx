import FeaturedProjects from "@/components/FeaturedProjects";
import History from "@/components/History";
import LegacyProjectLinks from "@/components/LegacyProjectLinks";
import MajorEvents from "@/components/MajorEvents";
import Social from "@/components/Social";
import Team from "@/components/Team";
import VolunteerRequest from "@/components/VolunteerRequest";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <main id="main-content" className="flex-1" tabIndex={-1}>
      <LegacyProjectLinks />
      <FeaturedProjects />
      <WhatWeDo />
      <Team />
      <MajorEvents />
      <VolunteerRequest />
      <History />
      <Social />
    </main>
  );
}
