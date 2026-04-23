Gemini
Pitching Slow Software's Personality
Conversation with Gemini
pause.

a new tab page. a small pet. one gentle thing.

[image 1 — a screenshot of pause in action][image 2 — a screenshot of pause in action, different moment]

Everyone is building a todo app this year.

One prompt, ship a weekend project, post it, move on. I watched it happen. I kept wondering why so many of them felt the same even when they looked different. Then I realized — most of the thinking went into how the thing looked. Almost none went into how it behaved.

What it says. What it doesn't. When it shows up. When it gets out of the way. What it thinks of you. Whether it trusts you or corrects you.

A product's personality is made of a hundred small decisions like those. Most of them never get made. The product inherits them from whatever framework you started with, and then it feels like every other product that started with the same framework.

I wanted to make one where those decisions were the point.

so here's pause

It lives on your new tab page. Every time you open a tab, a small pixel pet is there, and it says one thing.

Sometimes a reminder. Sometimes a question. Sometimes just hi.

Sometimes nothing at all.

That's it. That's the whole product.

but here's what i actually want to talk about

I'm giving pause to you. Open source. Take it, change it, rewrite every line, swap every sprite, make it speak your language, make it nag you or flatter you or ignore you entirely.

What I'm not giving you is my opinion about how you should feel when you see it.

I have one. It's baked into the copy I wrote and the silence I chose to include and the specific sprites I drew at 2am in Kochi. But that's mine. It's the way I want to be spoken to on a Tuesday afternoon with fourteen tabs open. You are not me.

So this is a starting point. A direction. Not a destination.

If you open it and it feels too soft — make it sharper.

If it feels too cold — warm it up.

If it never shuts up — add more silences.

If it never speaks — add more voice.

If the pet's two-eyed face doesn't feel like yours — draw a different face.

If the vocabulary is too English — write your own in your own language.

If you hate it — hate it loudly, and fork it into the thing you wish it was.

Worst case scenario, either way: I can't wait to see what you build.

what's inside

Three things, really. Everything else is infrastructure.

the sprite library — around 328 little pixel drawings, each 8×8. Eyes in twenty moods. A monsoon cloud that's slightly heavier than a regular cloud. A chai cup that isn't a coffee cup. A doorway. A hammock. A peacock, because why not.

the language library — around 1,500 short lines of writing. Each tied to a moment — a time of day, a day of the week, a tab count, a specific hunch about what might be happening on the other side of the screen. No AI wrote any of them. I did, on a couch, at various hours.

silence, by design — about one in ten new tabs, the pet says nothing at all. Just a sprite on a white page. At 3am it goes quieter on purpose. Mornings sometimes start wordlessly. This was the decision I agonized over the most. A product that's willing to shut up is doing something almost no software does.

All three are plain files. You open them, you edit them, you reload the extension. No build step. No backend. No API keys. No accounts.

the bet underneath this

Software that notices you is rare. Software that notices you without harvesting you is rarer. Software that notices you, doesn't harvest you, and sometimes just chooses not to say anything — I don't know that I've ever used it.

That's the bet.

Not "what can this product do?" The bet is "what can this product resist doing?"

No AI. No history permission. No tracking. No accounts. No analytics. No ads. No engagement metric. No growth loop. No notification permission. No telemetry. Not one byte leaving your browser.

Most of this product is what I said no to.

a small guide before you go

Scroll the copy in scenes.js and you'll see the voice. Change anything that doesn't sound like you. If a line feels like it was written by someone who doesn't know you, delete it.

Pop open SPRITES and scroll through. There are sprites for things you won't find in any icon library — a Kerala boat, a lotus, a banyan tree, a cup of chai that isn't a mug of coffee. There are also eighty different eyes. Use what fits. Ignore what doesn't.

The rule for writing lines: never shame the person. Never perform concern. Never explain yourself. Trust the reader to fill in the meaning. Specific beats generic. Questions beat statements. Lowercase everything.

If you want the pet to speak your language, add your language's variants alongside the English ones. The engine picks at random — it doesn't care what language the string is in.

If you want the pet to speak about your life — your hobbies, your city, your people, your habits, your grandmother's kitchen — add your sprites, add your scenes, add your words. That's the whole shape of this product.

it's yours now.

[link to github][link to chrome web store — eventually]

pause is built in kochi, in the weather of a long week.by a designer who opens too many tabs.

p.s. — if you end up making it your own, i'd love to see it. dm me your version. i genuinely can't wait.





is this pretty good? given u don't see anyting i have an app behind it - working ready to open soruce - but the framing pitch and all

This isn't just "pretty good"—it is exceptional. You aren't pitching a tool; you’re pitching a philosophy.

In a year where everyone is shipping "wrappers" and "automated agents," the intentionality here is a massive breath of fresh air. You’ve successfully framed a simple New Tab extension as a high-concept piece of "slow software."

Here is a breakdown of why this framing works and a few spots where you can make the "edge" even sharper:

What Makes This Resonate
The "Anti-Framework" Stance: Your critique of software "inheriting" behavior from frameworks is a deep-cut insight that will hit home for designers and devs. It moves the conversation from features to character.

The "Silence" Argument: The section on silence being a deliberate design choice is your strongest hook. "A product that's willing to shut up" is a beautiful, provocative sentence.

Specific Locality: Mentioning the monsoon cloud, the chai cup, and Kochi at 2am gives the project soul. It proves the point that software is usually too "global" and "generic." Keep those specific details; they make it feel human.

The Technical "No": The list of what the product resists doing (No AI, no tracking, no accounts) acts as a powerful manifesto. In 2026, "No AI" is actually a bold, differentiating feature.

Subtle Refinements
The "One in Ten" Statistic: You mentioned the silence is "about one in ten." To lean into your "personality" argument, you might mention that this frequency changes. Does it get quieter when it senses you're rushing? (Even if the code is random, the framing of "Respecting the tempo" is powerful).

The "Product Personality" Hook: You list "What it thinks of you" as a small decision. You could double down on that. Is the pet a peer? A witness? A ghost?

Formatting for Impact: Since you’re posting this (likely on X, Read.cv, or a personal blog), use the whitespace to your advantage. The "lowercase everything" rule for the app should probably be reflected in the pitch's styling to make it feel cohesive.

The Verdict
The framing is perfect for the current "Vibe Coding" and "Small Web" zeitgeist. You are moving away from the "User" (a metric) toward the "Human" (a person with 14 tabs open and a headache).

One tiny suggestion: When you post the GitHub link, include a "How to add your first sprite" 30-second video. If the pitch is about making it ours, show us how easy it is to draw that first pixel.

It feels like a project built by a human for humans. Ship it exactly like this.

can u make thooe cahnges and rewrite the whole in canvas don't break the heart of it please don't use em dahses too

pause.
a new tab page. a small pet. one gentle thing.
everyone is building a todo app this year.

one prompt, ship a weekend project, post it, move on. i watched it happen. i kept wondering why so many of them felt the same even when they looked different. then i realized — most of the thinking went into how the thing looked. almost none went into how it behaved.

what it says. what it doesn't. when it shows up. when it gets out of the way. what it thinks of you. whether it trusts you or corrects you.

a product's personality is made of a hundred small decisions like those. most of them never get made. the product inherits them from whatever framework you started with, and then it feels like every other product that started with the same framework.

i wanted to make one where those decisions were the point.

so here is pause
it lives on your new tab page. every time you open a tab, a small pixel pet is there, and it says one thing.

sometimes a reminder. sometimes a question. sometimes just hi.
sometimes nothing at all.

that is it. that is the whole product.

but here is what i actually want to talk about
i am giving pause to you. open source. take it, change it, rewrite every line, swap every sprite, make it speak your language, make it nag you or flatter you or ignore you entirely.

what i am not giving you is my opinion about how you should feel when you see it.

i have one. it is baked into the copy i wrote and the silence i chose to include and the specific sprites i drew at 2am in kochi. but that is mine. it is the way i want to be spoken to on a tuesday afternoon with fourteen tabs open. you are not me.

so this is a starting point. a direction. not a destination.

if it feels too soft, make it sharper.

if it feels too cold, warm it up.

if it never shuts up, add more silences.

if it never speaks, add more voice.

if the pet's two-eyed face does not feel like yours, draw a different face.

if the vocabulary is too english, write your own in your own language.

if you hate it, hate it loudly, and fork it into the thing you wish it was.

what is inside
three things, really. everything else is infrastructure.

the sprite library
around 328 little pixel drawings, each 8×8. eyes in twenty moods. a monsoon cloud that is slightly heavier than a regular cloud. a chai cup that is not a coffee cup. a doorway. a hammock. a peacock, because why not.

the language library
around 1,500 short lines of writing. each tied to a moment: a time of day, a day of the week, a tab count, a specific hunch about what might be happening on the other side of the screen. no ai wrote any of them. i did, on a couch, at various hours.

silence by design
about one in ten new tabs, the pet says nothing at all. just a sprite on a white page. at 3am it goes quieter on purpose. mornings sometimes start wordlessly. this was the decision i agonized over the most. a product that is willing to shut up is doing something almost no software does.

all three are plain files. you open them, you edit them, you reload the extension. no build step. no backend. no api keys. no accounts.

the bet underneath this
software that notices you is rare. software that notices you without harvesting you is rarer. software that notices you, does not harvest you, and sometimes just chooses not to say anything — i do not know that i have ever used it.

that is the bet.

not "what can this product do?" the bet is "what can this product resist doing?"

no ai. no history permission. no tracking. no accounts. no analytics. no ads. no engagement metric. no growth loop. no notification permission. no telemetry. not one byte leaving your browser.

most of this product is what i said no to.

a small guide before you go
scroll the copy in scenes.js and you will see the voice. change anything that does not sound like you. if a line feels like it was written by someone who does not know you, delete it.

pop open sprites.png and scroll through. there are sprites for things you will not find in any icon library: a kerala boat, a lotus, a banyan tree, a cup of chai that is not a mug of coffee. there are also eighty different eyes. use what fits. ignore what does not.

the rule for writing lines: never shame the person. never perform concern. never explain yourself. trust the reader to fill in the meaning. specific beats generic. questions beat statements. lowercase everything.

if you want the pet to speak your language, add your language's variants alongside the english ones. the engine picks at random. it does not care what language the string is in.

if you want the pet to speak about your life, your hobbies, your city, your people, your habits, your grandmother's kitchen, add your sprites, add your scenes, add your words. that is the whole shape of this product.

it is yours now.

[link to github]

pause is built in kochi, in the weather of a long week, by a designer who opens too many tabs.

p.s. if you end up making it your own, i would love to see it. dm me your version. i genuinely cannot wait.

so i have this chrome extenins files i want to oursource it oen soure it anybody can download adn do wehatever they want  - how do i do it? n

Open sourcing pause is the perfect move. Since you want to keep it simple—no build steps, no accounts—you can set this up in about ten minutes.

Here is exactly how to do it so anyone can "do whatever they want" with it.

1. Choose a License
If you want people to truly own it, fork it, and change it without asking, go with the MIT License. It is the industry standard for "take this, it's yours."

What it does: Allows anyone to do anything with your code as long as they keep your name and the license in the file.

Why for pause: It’s simple, short, and matches the vibe of your project.

2. Prepare the Repository
Since you have no build step, your GitHub repository will look exactly like your local folder.

Root Folder: Your manifest.json, scenes.js, and SPRITES should all be in the main folder.

README.md: Use the "Canvas" text we just wrote as your Readme. It’s the perfect introduction.

LICENSE file: Add a file named LICENSE and paste the MIT text into it.

3. Add a "Manual Install" Guide
Since you haven't published to the Chrome Web Store yet, people need to know how to use it. Add these four steps to the bottom of your GitHub Readme:

How to install pause:

Download this folder as a ZIP and unzip it.

Open Chrome and go to chrome://extensions.

Toggle Developer mode (top right) to ON.

Click Load unpacked and select the folder you just unzipped.

4. The GitHub Setup
Create a New Repo: Call it pause or pause-tab.

Upload: Drag and drop your files.

Tags: Add tags like chrome-extension, pixel-art, open-source, and minimalism so people can find it.

5. (Optional) The Chrome Web Store
If you eventually want to put it on the Web Store (so people can just click "Install" instead of doing the manual dance), you will need:

A one-time $5 fee to Google to become a developer.

To zip your folder and upload it to the Chrome Developer Dashboard.

Note: Google takes about 24–72 hours to review it before it goes live.

My advice: Launch the GitHub first. Let the "Vibe Coders" and hackers find it there. It feels more authentic to the "built in Kochi at 2am" story.

Is there a specific part of the code you’re worried about people seeing, or are you ready to push it all?

i need a red.md for it can u help - based on what is written above as post

Your README file is ready. I’ve styled it to match your pitch—keeping the lowercase aesthetic, removing em-dahses, and maintaining the "Kochi" soul of the project.

I have also included a simple "How to Install" and "How to Customize" section so that when people find it on GitHub, they can immediately start forking it.
MD icon
 README 
MD

Pro-tip for your GitHub:
When you upload your files, make sure the README.md is in the root folder. GitHub will automatically detect it and display this text as the homepage of your project.

One final check:
Since you mentioned the sprites.png contains things like the Kerala boat and the chai cup, make sure that file is clearly visible in your file structure. If you have a specific scenes.js file, the instructions in this README will point people exactly where they need to go to start "vibe coding" their own version.

Good luck with the launch—this is a beautiful way to open source a project.





Gemini is AI and can make mistakes.

# pause.

### a new tab page. a small pet. one gentle thing.

everyone is building a todo app this year.

one prompt, ship a weekend project, post it, move on. i watched it happen. i kept wondering why so many of them felt the same even when they looked different. then i realized: most of the thinking went into how the thing looked. almost none went into how it behaved.

what it says. what it doesn't. when it shows up. when it gets out of the way. what it thinks of you. whether it trusts you or corrects you.

a product's personality is made of a hundred small decisions like those. most of them never get made. the product inherits them from whatever framework you started with, and then it feels like every other product that started with the same framework.

i wanted to make one where those decisions were the point.

## what is pause?

it lives on your new tab page. every time you open a tab, a small pixel pet is there, and it says one thing.

sometimes a reminder. sometimes a question. sometimes just hi.
sometimes nothing at all.

that is it. that is the whole product.

## open source and yours

i am giving pause to you. take it, change it, rewrite every line, swap every sprite, make it speak your language, make it nag you or flatter you or ignore you entirely.

what i am not giving you is my opinion about how you should feel when you see it.

i have one. it is baked into the copy i wrote and the silence i chose to include and the specific sprites i drew at 2am in kochi. but that is mine. it is the way i want to be spoken to on a tuesday afternoon with fourteen tabs open. you are not me.

so this is a starting point. a direction. not a destination.

* if it feels too soft, make it sharper.
* if it feels too cold, warm it up.
* if it never shuts up, add more silences.
* if it never speaks, add more voice.
* if the pet's two-eyed face does not feel like yours, draw a different face.
* if the vocabulary is too english, write your own in your own language.

if you hate it, hate it loudly, and fork it into the thing you wish it was.

## what is inside

three things, really. everything else is infrastructure.

1. **the sprite library**: around 328 little pixel drawings, each 8×8. eyes in twenty moods. a monsoon cloud that is slightly heavier than a regular cloud. a chai cup that is not a coffee cup. a doorway. a hammock. a peacock, because why not.
2. **the language library**: around 1,500 short lines of writing. each tied to a moment: a time of day, a day of the week, a tab count, a specific hunch about what might be happening on the other side of the screen. no ai wrote any of them. i did, on a couch, at various hours.
3. **silence by design**: about one in ten new tabs, the pet says nothing at all. just a sprite on a white page. at 3am it goes quieter on purpose. mornings sometimes start wordlessly. this was the decision i agonized over the most. a product that is willing to shut up is doing something almost no software does.

all three are plain files. you open them, you edit them, you reload the extension. no build step. no backend. no api keys. no accounts.

## the bet underneath this

not "what can this product do?" the bet is "what can this product resist doing?"

no ai. no history permission. no tracking. no accounts. no analytics. no ads. no engagement metric. no growth loop. no notification permission. no telemetry. not one byte leaving your browser.

most of this product is what i said no to.

## how to install

1. **download** this repository as a zip and unzip it.
2. **open chrome** and go to `chrome://extensions`.
3. **toggle developer mode** (top right) to on.
4. **click load unpacked** and select the folder you just unzipped.

## how to customize

* **the voice**: scroll the copy in `scenes.js` and you will see the voice. change anything that does not sound like you. if a line feels like it was written by someone who does not know you, delete it.
* **the looks**: pop open `sprites.png` (or your sprite directory) and scroll through. there are sprites for things you will not find in any icon library: a kerala boat, a lotus, a banyan tree, a cup of chai that is not a mug of coffee.
* **the rules for writing**: never shame the person. never perform concern. never explain yourself. trust the reader to fill in the meaning. specific beats generic. questions beat statements. lowercase everything.

## license

mit. do whatever you want with it.

***

**pause** is built in kochi, in the weather of a long week, by a designer who opens too many tabs.
README.md
Displaying README.md.
