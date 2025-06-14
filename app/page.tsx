import React from 'react'
import {Button} from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard";
import CTA from "@/components/CTA";
import CompanionList from "@/components/CompanionList";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className= "home-section">
          <CompanionCard
              id="123"
              name= "Neura the Brainy Explorer"
              topic= "Neural Network of the Brain"
              subject = "science"
              duration = {45}
              color = "#E5D0FF"
          />
          <CompanionCard
              id="123"
              name= "Countsy the Number wizard"
              topic= "Derivative & Integral"
              subject = "Math"
              duration = {38}
              color = "#FFDA6E"
          />
          <CompanionCard
              id="789"
              name= "Verba the Vocabulary Builder"
              topic= "English Literature"
              subject = "Language"
              duration = {30}
              color = "#BDE7FF"
          />


      </section>

        <section className="home-section">
            <CompanionList
                title="Recently completed session"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full"

            />
            <CTA/>
        </section>
    </main>
  )
}

export default Page