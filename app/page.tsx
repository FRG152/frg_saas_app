import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/Cta";
import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard />
        <CompanionCard />
        <CompanionCard />
      </section>

      <section className="home-section">
        <CompanionsList />
        <Cta />
      </section>
    </div>
  );
};

export default Page;
