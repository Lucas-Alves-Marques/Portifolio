'use client';
import ActivitiesPage from "@/components/sections/activities";
import Presentation from "@/components/sections/presentation";
import ProjectsPage from "@/components/sections/projects";
import Footer from "@/layout/footer";

export default function Home() {

  return (

    <div className='w-full flex flex-col gap-4 overflow-y-auto overflow-x-hidden scroll justify-between'>

      <Presentation />
      <ProjectsPage />
      <ActivitiesPage />
      <Footer />

    </div>

  );

}
