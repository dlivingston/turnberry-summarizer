# AI Meeting Notes Summarizer

A React-based prototype that simulates an AI-powered tool for summarizing meeting notes. Built with Next.js, TypeScript, and Tailwind CSS. This project is a "Take-home" challenge for Turnberry Solutions, and is only intended to meet the requirements specified. 

## Features

- 📝 Text input area for pasting meeting notes
- 🤖 Simulated AI summarization processing
- 🌓 Dark/light mode toggle
- 📋 Copy to clipboard functionality
- 🔄 Reset/clear form option
- 📱 Responsive design for desktop, tablet, and mobile

## Tech Stack

- [Next.js](https://nextjs.org) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [ShadcnUI](https://ui.shadcn.com) - UI components
- [Zustand](https://zustand-demo.pmnd.rs/) - State management
- [Heroicons](https://heroicons.com/) - Icons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/dlivingston/turnberry-summarizer
cd turnberry-summarizer
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser

## Design Decisions

- Used Zustand for lightweight state management
- Implemented controlled components for better state handling
- Added loading states with overlay for better UX
- Included accessibility features (ARIA labels, keyboard navigation)
- Utilized Geist font family for modern typography

## Project Structure

```
src/
├── app/              # Next.js app router
├── components/       # React components
├── store/           # Zustand store
└── lib/             # Utilities and helpers
```

## Deployment

This project is deployed on Vercel and can be accessed at: [turnberry-summarizer.vercel.app](https://turnberry-summarizer.vercel.app)


## Development

To contribute to this project:

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

This project is part of a technical assessment and is not licensed for public use.

## Disclaimer

This project is only intended to meet the requirements specified by Turnberry Solutions. No warranties, either express or implied, are hereby given. All information is supplied as is, without guarantee. The user assumes all responsibility for damages resulting from the use of this application, including (but not limited to) frustration, disgust, headaches, nausea, indigestion, system abends, disk head-crashes, general malfeasance, floods, fires, shark attack, nerve gas, locust infestation, cyclones, hurricanes, tsunamis, local electromagnetic disruptions, hydraulic brake system failure, invasion, low sperm count, hashing collisions, abnormal wear and tear of friction surfaces, cosmic radiation, inadvertent destruction of sensitive electronic components, amoebic dysentery, windstorms, the Riders of Nazgul, decreased resale value on your home, infuriated chickens, malfunctioning mechanical or electrical devices, premature activation of the distant early warning system, peasant uprisings, halitosis, artillery bombardment, explosions, cave-ins, and/or frogs falling from the sky.