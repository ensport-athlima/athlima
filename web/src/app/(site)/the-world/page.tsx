import type { Metadata } from "next"
import { og } from "@/lib/og"
import { ApplyBlock } from "@/components/blocks/ApplyBlock"
import { EcosystemPortals } from "@/components/blocks/EcosystemPortals"
import { PillarDiagram } from "@/components/blocks/PillarDiagram"
import { StatementScreen } from "@/components/blocks/StatementScreen"
import { TwoDayFlow } from "@/components/blocks/TwoDayFlow"
import { pillarDefs } from "@/content/pillars"
import { theWorld } from "@/content/the-world"
import { routes } from "@/lib/routes"

/**
 * THE WORLD — the ecosystem, the five pillars, the six IPs. Tier 1. Static, ISR 1h.
 * Six sections from 04_CONTENT/the-world.md; a route file composes blocks and nothing else.
 */
export const revalidate = 3600

export const metadata: Metadata = {
  title: theWorld.meta.title,
  description: theWorld.meta.description,
  alternates: { canonical: routes.theWorld },
  ...og(theWorld.meta.title),
}

export default function TheWorldPage() {
  const { entry, pillars, portals, connection, twoDays, invitation } = theWorld
  return (
    <main id="content">
      <StatementScreen
        id={entry.id}
        variant="entry"
        eyebrow={entry.eyebrow}
        size="xl"
        lines={entry.headline}
        lead={entry.lead}
        ctas={{ emotional: entry.emotional, functional: entry.functional }}
      />
      <PillarDiagram
        id={pillars.id}
        marker={pillars.marker}
        headline={pillars.headline}
        pillars={pillarDefs}
        body={pillars.body}
      />
      <EcosystemPortals
        id={portals.id}
        marker={portals.marker}
        intro={portals.intro}
        sub={portals.sub}
        portals={portals.portals}
      />
      <StatementScreen
        id={connection.id}
        marker={connection.marker}
        size="md"
        lines={connection.headline}
        body={connection.body}
        padding="standard"
      >
        <p data-item className="display text-display-sm text-paper">
          {connection.pullLine.map((l) => (
            <span key={l.text} className={l.lime ? "block text-lime" : "block"}>
              {l.text}
            </span>
          ))}
        </p>
      </StatementScreen>
      <TwoDayFlow
        id={twoDays.id}
        marker={twoDays.marker}
        headline={twoDays.headline}
        facts={twoDays.facts}
        cta={twoDays.cta}
      />
      <ApplyBlock
        id={invitation.id}
        headline={invitation.headline}
        sub={invitation.sub}
        tertiary={invitation.tertiary}
      />
    </main>
  )
}
