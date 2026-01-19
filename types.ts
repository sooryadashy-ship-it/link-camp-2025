
export interface ScheduleItem {
  time: string;
  title: string;
  speaker?: string;
  description?: string;
  type: 'technical' | 'networking' | 'leadership' | 'break';
}

export interface DaySchedule {
  day: number;
  date: string;
  items: ScheduleItem[];
}

export interface NavLink {
  label: string;
  href: string;
}
