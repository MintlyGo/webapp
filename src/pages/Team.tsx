import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

interface TeamMember {
  name: string;
  role: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    description: "A visionary leader with over 15 years of experience in fintech and blockchain technology.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    description: "Expert in blockchain architecture and cryptocurrency payment systems.",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Product",
    description: "Passionate about creating user-friendly crypto solutions for everyday use.",
  },
  {
    name: "David Kim",
    role: "Head of Security",
    description: "Cybersecurity expert ensuring the safety of our platform and user assets.",
  },
];

export default function Team() {
  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 