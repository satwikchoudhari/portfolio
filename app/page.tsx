"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "certifications", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const skills = {
    languages: ["Java", "Kotlin", "Python", "C++", "C"],
    mobile: ["Android Studio", "Jetpack Compose", "MVVM", "XML Layouts", "Material Design"],
    backend: ["Firebase", "SQLite", "Room DB", "REST APIs"],
    ml: ["TensorFlow Lite", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "OpenCV"],
    tools: ["Git", "GitHub", "IntelliJ IDEA", "Jupyter", "Google Colab", "Gradle"],
  }

  const projects = [
    {
      title: "Plant Detection App",
      description:
        "Android app built with Kotlin + Jetpack Compose to classify 10+ plant species using TensorFlow Lite.",
      tech: ["Kotlin", "Jetpack Compose", "TensorFlow Lite", "Firebase"],
      status: "In Progress",
      github: "#",
    },
    {
      title: "Android Utility Apps",
      description: "Developed 3+ apps (notes, weather, expense tracker) using MVVM and REST APIs.",
      tech: ["Android", "MVVM", "Room DB", "Google Maps SDK"],
      status: "Completed",
      github: "#",
    },
    {
      title: "Machine Learning Experiments",
      description: "Implemented ML models on datasets of 5k+ rows achieving 85%+ accuracy.",
      tech: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
      status: "Completed",
      github: "#",
    },
  ]

  const certifications = [
    "Supervised Machine Learning: Regression and Classification - DeepLearning.AI",
    "Advanced Learning Algorithms - DeepLearning.AI",
    "Unsupervised Learning, Recommenders, Reinforcement Learning - DeepLearning.AI",
    "Android Mobile Application Development - Meta",
    "Deep Learning Specialization - DeepLearning.AI",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-primary">Satwik Choudhari</div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Certifications", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-4xl sm:text-6xl font-bold text-balance mb-6">
              Hi, I'm <span className="text-primary">Satwik Choudhari</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-balance">
              Android Developer & Machine Learning Enthusiast
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty">
              Final-year B.Tech student passionate about building innovative mobile applications and exploring the
              frontiers of machine learning technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection("projects")} className="animate-pulse-glow">
                View My Work
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold mb-6">Professional Summary</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm a final-year B.Tech student in Electronics & Telecommunication with hands-on experience in Android
                Development using Kotlin, Jetpack Compose, and Firebase. I'm also passionate about Machine Learning,
                working with TensorFlow and scikit-learn to build intelligent solutions.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                My expertise spans mobile app development, API integration, and data analysis. I'm actively seeking
                opportunities in Software Development and Android Engineering where I can contribute to innovative
                projects and continue growing my technical skills.
              </p>
            </div>
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Bachelor of Technology</h4>
                  <p className="text-muted-foreground">Electronics and Telecommunication Engineering</p>
                  <p className="text-sm text-muted-foreground">
                    Shri Guru Gobind Singhji Institute of Engineering and Technology
                  </p>
                  <p className="text-sm text-muted-foreground">2022 – 2026 | CGPA: 6.8/10</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">Contact Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">📱 +91-8552874512</p>
                  <p className="text-sm">✉️ satwikchoudhari19@gmail.com</p>
                  <p className="text-sm">🔗 LinkedIn | GitHub</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card
                key={category}
                className="hover:shadow-lg transition-all hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-primary capitalize">
                    {category === "ml" ? "Machine Learning" : category.replace("_", " ")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="hover:shadow-xl transition-all hover:scale-105 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                  </div>
                  <CardDescription className="text-pretty">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    View on GitHub
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm leading-relaxed">{cert}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground text-pretty">
              I'm always interested in discussing new opportunities and innovative projects. Let's connect and explore
              how we can work together!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="animate-pulse-glow">
              Send Email
            </Button>
            <Button variant="outline" size="lg">
              View LinkedIn
            </Button>
            <Button variant="outline" size="lg">
              Check GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">© 2024 Satwik Choudhari. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
