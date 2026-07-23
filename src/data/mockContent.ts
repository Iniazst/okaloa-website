export interface BlockText {
  _type: string;
  children: { _type: string; text: string }[];
}

export interface HomepageContent {
  heroHeadline: string;
  heroTextBlocks: string[]; // Simple array of strings for mock rendering
  deriskingTitle: string;
  deriskingTextBlocks: string[];
  engageTitle: string;
  engageTextBlocks: string[];
  whenTitle: string;
  whenTextBlocks: string[];
  aboutTitle: string;
  aboutTextBlocks: string[];
  eventsTitle?: string;
  eventsSubheader?: string;
}

export interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  description?: string;
  link?: string;
}

export const mockHomepage: HomepageContent = {
  heroHeadline: "Learning happens when people co-create and share.",
  heroTextBlocks: [
    "Okaloa simulations build strategic agility. Rather than teaching rigid frameworks, we create immersive experiences where flow dynamics become visible, enabling teams to co-create solutions."
  ],
  deriskingTitle: "De-risking",
  deriskingTextBlocks: [
    "We de-risk organizational change. By testing scaling models in a safe, simulated environment first, teams avoid the friction and fatigue of standard rollouts, discovering what actually works for them."
  ],
  engageTitle: "How we engage",
  engageTextBlocks: [
    "We engage with your organization through workshops, certified learning dojos, and game kits. We focus on training internal facilitators to sustain and grow flow coaching capabilities over time."
  ],
  whenTitle: "Is this for you?",
  whenTextBlocks: [
    "If your organization is struggling with framework fatigue, heavy silos, slow delivery cycles, or a lack of real collaboration, Okaloa is for you. We provide tactile, direct learning that sticks."
  ],
  aboutTitle: "About",
  aboutTextBlocks: [
    "Okaloa was founded in Belgium to help organizations scale agility through shared experience and self-discovery. We are the creators of Flowlab and Dojo practice spaces."
  ],
  eventsTitle: "Upcoming Events",
  eventsSubheader: "Join our live simulation workshops and dojo training sessions."
};

export const mockEvents: UpcomingEvent[] = [
  {
    id: 'event-1',
    title: 'Okaloa Flowlab Facilitator Training (Tactile)',
    date: '2026-09-12',
    description: 'Learn to facilitate physical board simulations and debrief groups on agile flow and collaboration.',
    link: 'mailto:info@okaloa.com?subject=Register: Facilitator Training'
  },
  {
    id: 'event-2',
    title: 'Strategic Agility Masterclass (Online)',
    date: '2026-10-05',
    description: 'A deep dive into flow metrics, bottleneck management, and scaling systems in distributed organizations.',
    link: 'mailto:info@okaloa.com?subject=Register: Masterclass'
  }
];
