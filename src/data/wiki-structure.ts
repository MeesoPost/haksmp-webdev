export interface WikiPage {
  slug: string;
  title: string;
  description: string;
  category: string;
  content: string;
}

export const wikiPages: WikiPage[] = [
  {
    slug: 'getting-started',
    title: 'Getting Started',
    category: 'Guide',
    description: 'Learn how to join the HAK SMP server and set up your client.',
    content: `# Getting Started with HAK SMP

Welcome to HAK SMP Season 4: Het Landen Systeem!

## Prerequisites

Before joining the server, you need:

- **Minecraft Java Edition** 1.20.1 or compatible
- **Forge** installed (version provided in the modpack)
- **At least 4GB RAM** allocated to Minecraft
- **Stable internet connection**

## Installation Steps

### 1. Download the Modpack

Visit our [Mods & Plugins](/plugins) page and download the latest HAK SMP modpack from Modrinth.

### 2. Install Forge

The modpack comes pre-configured with Forge. Make sure you have the correct version installed:
- Minecraft: 1.20.1
- Forge: Latest stable

### 3. Load the Modpack

Extract the downloaded modpack to your \`.minecraft/instances\` folder (or your launcher's instances directory).

### 4. Connect to Server

Once loaded, create a new instance and connect to:
- **Server**: haksmp.minecraft.com
- **Port**: 25565

### 5. Verification

After connecting, you should see:
- ✓ All mods loading correctly
- ✓ Custom server messages in chat
- ✓ Proper UI scaling for your resolution

## Troubleshooting

**Mods won't load?**
- Make sure you installed the exact Forge version
- Clear your Minecraft cache and restart

**Can't connect to server?**
- Check your firewall settings
- Verify the server is online in Discord
- Try connecting from a different network

**Low FPS?**
- Allocate more RAM to Minecraft (4-6GB recommended)
- Lower graphics settings to Fast
- Disable clouds and particles

Need help? Ask in our Discord server!
`,
  },
  {
    slug: 'server-rules',
    title: 'Server Rules',
    category: 'Rules',
    description: 'Essential rules and guidelines for playing on HAK SMP.',
    content: `# Server Rules

We want HAK SMP to be a fun and respectful place for everyone. Please follow these rules:

## Core Rules

### 1. Be Respectful

- Treat all players with respect
- No harassment, discrimination, or hate speech
- Disagreements are okay, but stay civil
- Respect players' builds and belongings

### 2. No Griefing

- Do not destroy or modify other players' builds without permission
- Keep your creations to your territory
- Respect the landscape and environmental builds

### 3. No Cheating

- No X-ray mods or client cheats
- No unauthorized automation
- No exploiting bugs for advantage
- Report bugs to staff instead

### 4. Play Fair

- No scamming other players
- Trading must be voluntary from both sides
- Disputes should be reported to mods

### 5. Language

- Keep chat family-friendly
- No excessive profanity
- No NSFW content in chat or builds

## Territory System

### Claiming Land

The Landen Systeem allows you to claim territory:

1. Use the claim tool (details in Discord)
2. Mark your territory boundaries
3. Other players cannot build in your territory without permission

### Territory Disputes

- Boundaries must be clear and marked
- Document any agreements in writing (Discord)
- Mods will mediate disputes

## Consequences

- **First violation**: Warning
- **Second violation**: 24-hour mute
- **Third violation**: Temporary ban (3-7 days)
- **Repeated offenses**: Permanent ban

## Questions?

Ask staff on Discord or in-game for clarification on any rules.
`,
  },
  {
    slug: 'land-system',
    title: 'Het Landen Systeem',
    category: 'Mechanics',
    description: 'Complete guide to HAK SMP Season 4\'s territory and kingdom system.',
    content: `# Het Landen Systeem (The Land System)

HAK SMP Season 4 features a unique territory and kingdom management system.

## Overview

Players can claim territory, establish kingdoms, and compete for dominance across the world. The system is built around strategic planning, cooperation, and commerce.

## Claiming Territory

### How to Claim

1. Use the claim tool from the server
2. Define your territory boundaries
3. Mark the area with beacons or signs
4. Register through the mod interface

### Territory Size

- **Starter plot**: 32x32 blocks
- **Small territory**: 64x64 blocks
- **Medium territory**: 128x128 blocks
- **Large territory**: 256x256 blocks

Larger territories require:
- More resources
- Leadership position in a kingdom
- Approval from mods

### Claimed Land Rules

Within your territory, you have full control:
- Build freely
- Set up farms and factories
- Deny access to other players
- Establish rules for allies

## Kingdom System

### Establishing a Kingdom

To create a kingdom:

1. Claim a territory (minimum 128x128)
2. Register as kingdom founder through the mod
3. Set kingdom rules and policies
4. Recruit members

### Kingdom Features

- **Shared Territory**: Members can contribute to kingdom lands
- **Treasury**: Collective resources managed by leadership
- **Diplomacy**: Sign treaties with other kingdoms
- **Warfare**: Engage in server conflicts (with rules)

### Kingdom Ranks

- **Ruler**: Full control, all permissions
- **Minister**: Manage specific aspects (economy, defense)
- **Noble**: Mid-level member with build permissions
- **Citizen**: Full member, can participate
- **Guest**: Temporary visitor, limited permissions

## Resources & Economy

### Currency

The server uses **Crowns** as the primary currency:
- Earn from farming, trading, and quests
- Spend on territory expansion
- Use for kingdom services

### Trade Posts

Trading stations exist at:
- **Central Market**: World spawn, open to all
- **Kingdom Markets**: Private markets within kingdoms
- **Nomadic Traders**: Random NPCs offering rare items

### Taxation

Kingdoms can set tax rates:
- Citizens automatically contribute percentage of earnings
- Used to fund kingdom projects
- Opt-in system (no forced taxation)

## Warfare

Conflicts between kingdoms can occur:

### Rules of Engagement

- Only declared wars are valid
- Mods must approve before conflict
- No player elimination (PvP is controlled)
- Territory disputes resolved through negotiations first

### Raid System

- Raid other kingdom territories (with permission)
- Steal resources from unguarded areas
- Defend with traps and guards
- Insurance system for valuable items

## Events & Challenges

The server hosts seasonal events:

- **Seasonal Competitions**: Mining, building, farming
- **Kingdom Wars**: Large-scale battles
- **Trading Festivals**: Commerce and auction
- **Treasure Hunts**: Hidden rewards across the map

## Getting Help

Questions about the land system?
- Read documentation in Discord
- Ask mods in-game
- Attend kingdom meetings
- Check the wiki regularly for updates
`,
  },
  {
    slug: 'faq',
    title: 'Frequently Asked Questions',
    category: 'Help',
    description: 'Common questions and answers about HAK SMP.',
    content: `# Frequently Asked Questions

## Server Access

**Q: How do I join the server?**
A: Download the modpack from the Mods & Plugins page and follow the installation guide. Add the server address in your multiplayer list.

**Q: Do I need to be whitelisted?**
A: Yes, we maintain a whitelist. Ask to be added in our Discord server.

**Q: What's the server address?**
A: Available in the Discord #server-info channel after you join.

## Gameplay

**Q: Can I play solo builds?**
A: Yes! You can claim solo territory and play independently, or join a kingdom.

**Q: Are there age restrictions?**
A: We welcome players 13+. Younger players need parental permission.

**Q: Can I modify my territory rules?**
A: Yes, but rules must be documented and approved by mods.

## Technical

**Q: What Java version do I need?**
A: Java 17 or higher for Minecraft 1.20.1.

**Q: The server is lagging, what can I do?**
A: Reduce render distance to 8 chunks, disable mods you don't use, or contact mods about server issues.

**Q: I lost my items, can I get them back?**
A: Maybe! Contact mods with proof. Accidental deaths may be eligible for recovery, but griefing is not.

## Account & Bans

**Q: I was banned, how do I appeal?**
A: Submit an appeal in Discord's #appeals channel with details about the incident.

**Q: Can I transfer my account between servers?**
A: No, but your data is saved if we reset seasons.

**Q: How do I change my Minecraft skin?**
A: Through the Minecraft launcher - it syncs automatically with the server.

## Economy & Trading

**Q: How do I earn Crowns?**
A: Complete quests, farm resources, trade with players, or work for your kingdom.

**Q: Can I trade with offline players?**
A: Through kingdom treasuries and trade posts, yes. Direct trading requires both players online.

**Q: What's the exchange rate for items?**
A: The market determines prices. Check kingdom markets for current rates.

## Building & Terraforming

**Q: Can I terraform my territory?**
A: Yes, but respect surrounding territories. Ask permission for large changes affecting others.

**Q: Are there building restrictions?**
A: No height limits, but mods can request changes for performance or aesthetics.

**Q: Can I build outside my territory?**
A: Only in unclai​med wilderness or with explicit permission from territory owners.

## Still Have Questions?

- Check the Discord wiki channel
- Ask in #general-help
- DM a moderator directly
- Look for announcements about documentation
`,
  },
];

export function getWikiPage(slug: string): WikiPage | undefined {
  return wikiPages.find(page => page.slug === slug);
}

export function getWikiCategories(): string[] {
  return Array.from(new Set(wikiPages.map(page => page.category)));
}

export function getWikiPagesByCategory(category: string): WikiPage[] {
  return wikiPages.filter(page => page.category === category);
}

export function getAllWikiPages(): WikiPage[] {
  return wikiPages;
}
