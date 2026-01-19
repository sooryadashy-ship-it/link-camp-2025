
import { DaySchedule, NavLink } from './types';

export const EVENT_NAME = "LINK CAMP 2025";
export const ORGANIZER = "IEEE LINK";
export const VENUE = "Green Valley Convention Center, Kerala";
export const DATES = "August 22 - 24, 2025";
export const CONTACT_EMAIL = "contact@ieeelink.org";

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Registration', href: '#register' },
];

export interface Speaker {
  name: string;
  role: string;
  company: string;
  image: string;
}

export const SPEAKERS: Speaker[] = [
  {
    name: "Dr. Sarah Johnson",
    role: "Leadership Coach",
    company: "Global Tech Inc.",
    image: "https://i.pravatar.cc/300?u=sarah"
  },
  {
    name: "Alex Riviera",
    role: "CTO",
    company: "NexGen Robotics",
    image: "https://i.pravatar.cc/300?u=alex"
  },
  {
    name: "Priya Sharma",
    role: "Research Scientist",
    company: "AI Labs",
    image: "https://i.pravatar.cc/300?u=priya"
  },
  {
    name: "Michael Chen",
    role: "Startup Mentor",
    company: "Founders Lab",
    image: "https://i.pravatar.cc/300?u=michael"
  }
];

export const SCHEDULE_DATA: DaySchedule[] = [
  {
    day: 1,
    date: "Aug 22, Friday",
    items: [
      { time: "09:00 AM", title: "Registration & Check-in", type: "break" },
      { time: "10:30 AM", title: "Inauguration Ceremony", description: "Grand opening of LINK CAMP 2025 with keynote speakers.", type: "leadership" },
      { time: "01:00 PM", title: "Networking Lunch", type: "networking" },
      { time: "02:30 PM", title: "Leadership Workshop", speaker: "Dr. Sarah Johnson", description: "Effective communication and team management in professional environments.", type: "leadership" },
      { time: "04:30 PM", title: "Evening Social", type: "networking" },
    ]
  },
  {
    day: 2,
    date: "Aug 23, Saturday",
    items: [
      { time: "09:30 AM", title: "Emerging Tech Trends", speaker: "Alex Riviera", description: "Exploring AI, Edge Computing, and Sustainable Tech.", type: "technical" },
      { time: "11:30 AM", title: "Innovation Hackathon", description: "A rapid prototyping challenge for student members.", type: "technical" },
      { time: "01:00 PM", title: "Lunch Break", type: "break" },
      { time: "02:00 PM", title: "Career Path Panel", description: "Industry experts share their journey and tips for students.", type: "leadership" },
      { time: "06:00 PM", title: "Cultural Night", type: "networking" },
    ]
  },
  {
    day: 3,
    date: "Aug 24, Sunday",
    items: [
      { time: "10:00 AM", title: "IEEE Benefits & Networking", description: "How to maximize your IEEE membership for global opportunities.", type: "leadership" },
      { time: "11:30 AM", title: "Valedictory Function", description: "Award ceremony and concluding remarks.", type: "leadership" },
      { time: "01:00 PM", title: "Farewell Lunch", type: "break" },
    ]
  }
];
