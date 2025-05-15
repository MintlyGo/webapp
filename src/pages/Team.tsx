import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter, User, Users } from "lucide-react";

export default function Team() {
  const leadershipTeam = [
    {
      name: "Chief Executive Officer",
      role: "Chief Executive Officer",
      bio: "",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Chief Technology Officer",
      role: "Chief Technology Officer",
      bio: "",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Chief Product Officer",
      role: "Chief Product Officer",
      bio: "",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const departments = [
    {
      name: "Engineering",
      members: [
        {
          name: "Lead Backend Engineer",
          role: "Lead Backend Engineer"
        },
        {
          name: "Frontend Developer",
          role: "Frontend Developer"
        },
        {
          name: "Blockchain Engineer",
          role: "Blockchain Engineer"
        }
      ]
    },
    {
      name: "Product & Design",
      members: [
        {
          name: "Product Manager",
          role: "Product Manager"
        },
        {
          name: "UI/UX Designer",
          role: "UI/UX Designer"
        },
        {
          name: "Product Analyst",
          role: "Product Analyst"
        }
      ]
    },
    {
      name: "Operations & Support",
      members: [
        {
          name: "Operations Manager",
          role: "Operations Manager"
        },
        {
          name: "Customer Success Lead",
          role: "Customer Success Lead"
        },
        {
          name: "Support Specialist",
          role: "Support Specialist"
        }
      ]
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push boundaries and embrace new technologies to create better financial solutions."
    },
    {
      title: "User-Centric",
      description: "Every decision we make starts with our users' needs and experiences."
    },
    {
      title: "Security & Trust",
      description: "We maintain the highest standards of security to protect our users' assets and data."
    },
    {
      title: "Global Mindset",
      description: "We build for a diverse, global community and embrace inclusive financial solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 via-transparent to-primary-900/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet the Team Behind{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 text-transparent bg-clip-text">MintlyGo</span>
            </h1>
            <p className="text-xl text-gray-100">
              We're a diverse team of innovators, engineers, and financial experts working to revolutionize crypto payments.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-primary-900 to-primary-700 text-transparent bg-clip-text">Leadership Team</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Meet the visionaries and experts leading MintlyGo towards a future of seamless crypto payments.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((leader) => (
                <Card key={leader.name} className="border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                        <User className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{leader.name}</h3>
                        <p className="text-primary-600 font-medium">{leader.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{leader.bio}</p>
                    <div className="flex gap-4">
                      {leader.social.linkedin && (
                        <a href={leader.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-600 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {leader.social.twitter && (
                        <a href={leader.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-600 transition-colors">
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                      {leader.social.github && (
                        <a href={leader.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-600 transition-colors">
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Departments Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-primary-900 to-primary-700 text-transparent bg-clip-text">Our Departments</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Talented individuals working together to bring our vision to life.</p>
            {departments.map((dept) => (
              <div key={dept.name} className="mb-16 last:mb-0">
                <div className="flex items-center gap-3 mb-8">
                  <Users className="w-6 h-6 text-primary-600" />
                  <h3 className="text-2xl font-semibold text-primary-800">{dept.name}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {dept.members.map((member) => (
                    <Card key={member.name} className="border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 bg-white/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                            <User className="w-5 h-5 text-primary-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{member.name}</h4>
                            <p className="text-primary-600">{member.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Values Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary-900 to-primary-700 text-transparent bg-clip-text">Our Values</h2>
              <p className="text-xl text-gray-600">
                The principles that guide our work and culture
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <Card key={value.title} className="border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 bg-white/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary-800">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Join Us Banner */}
      <div className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 via-transparent to-primary-900/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-100 mb-8">
              We're always looking for talented individuals who share our vision of revolutionizing crypto payments.
            </p>
            <button className="bg-white text-primary-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 