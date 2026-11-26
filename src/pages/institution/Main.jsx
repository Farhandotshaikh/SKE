// src/pages/institution/Main.jsx
import { useOutletContext } from "react-router-dom";

import Section from "../../components/sections/Section";
import SectionHeading from "../../components/sections/SectionHeading";
import IconCards from "../../components/sections/IconCards";
import MessageBlock from "../../components/sections/MessageBlock";
import EventList from "../../components/sections/EventList";
import TileGrid from "../../components/sections/TileGrid";
import PageHero from '../../components/PageHero'
import { img } from '../../data/site'

export default function Main() {
    const inst = useOutletContext();
    const base = `/institute/${inst.slug}`;
    const { hero, intro, introImage, quickLinks, message, programmes, events, facilities } = inst.main ?? {}

    // Turn page keys into full links
    const withLinks = (items) => items.map((i) => ({ ...i, to: `${base}/${i.page}` }));

    return (
        <>
            {/* Hero: no design supplied yet. Reuse PageHero or your hero here. */}

            <PageHero
                image={hero?.image || img.arcade}
                overlay="linear-gradient(90deg, rgba(57,49,133,0.9) 0%, rgba(57,49,133,0.62) 55%, rgba(38,31,115,0.38) 100%)"
                line1={hero?.line1 ?? inst.name}
                line2={hero?.line2}
                className="min-h-[420px] lg:h-[441px]"
            >
                {hero?.text && (
                    <p className="mb-0 mt-7 max-w-[500px] font-display text-[18px] font-light italic leading-[1.6] text-white/90">
                        {hero.text}
                    </p>
                )}
            </PageHero>

            {quickLinks?.length > 0 && (
                <Section>
                    <IconCards items={withLinks(quickLinks)} variant="light" />
                </Section>
            )}

            {message && <MessageBlock {...message} />}

            {programmes?.length > 0 && (
                <Section bg="bg-[#3a3187]">
                    <SectionHeading
                        lead="Programmes"
                        accent="Offered."
                        linkLabel="View Academics"
                        to={`${base}/academics`}
                        dark
                    />
                    <IconCards items={withLinks(programmes)} variant="dark" />
                </Section>
            )}

            {events?.length > 0 && (
                <Section>
                    <SectionHeading
                        lead="Student"
                        accent="Corner."
                        linkLabel="View all"
                        to={`${base}/student-corner`}
                    />
                    <EventList events={events} />
                </Section>
            )}

            {facilities?.length > 0 && (
                <Section bg="bg-white">
                    <SectionHeading
                        lead="Campus"
                        accent="Facilities."
                        linkLabel="View all facilities"
                        to={`${base}/facilities`}
                    />
                    <TileGrid tiles={facilities} caption={inst.name.toUpperCase()} />
                </Section>
            )}
        </>
    );
}