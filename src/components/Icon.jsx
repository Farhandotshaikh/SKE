import {
  FlaskConical, BookOpen, Briefcase, Monitor, Cpu, Target, Calculator, Feather, Award,
  Landmark, Mic, Trophy, Presentation, Users, Music, Wifi, Coffee,
} from 'lucide-react'

const map = {
  FlaskConical, BookOpen, Briefcase, Monitor, Cpu, Target, Calculator, Feather, Award,
  Landmark, Mic, Trophy, Presentation, Users, Music, Wifi, Coffee,
}

export default function Icon({ name, ...props }) {
  const C = map[name] || BookOpen
  return <C {...props} />
}
