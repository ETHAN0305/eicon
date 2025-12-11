import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, MapPin, FileText, Hammer, Truck, CheckCircle, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const OurProcess = () => {
  const navigate = useNavigate();

  const handleNavigateToSection = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const processSteps = [
    {
      step: 1,
      icon: MessageSquare,
      title: "Initial Consultation",
      description: "We discuss your project goals, timeline, and requirements."
    },
    {
      step: 2,
      icon: MapPin,
      title: "Site Assessment & Planning",
      description: "Our team evaluates the location, materials needed, and overall scope."
    },
    {
      step: 3,
      icon: FileText,
      title: "Quotation & Materials Planning",
      description: "We prepare a clear and transparent quotation along with the necessary supplies."
    },
    {
      step: 4,
      icon: Hammer,
      title: "Construction & Execution",
      description: "Our builders deliver quality workmanship following safety and industry standards."
    },
    {
      step: 5,
      icon: Truck,
      title: "Delivery of Materials",
      description: "We supply and deliver all required materials on time."
    },
    {
      step: 6,
      icon: CheckCircle,
      title: "Completion & Handover",
      description: "We ensure the project is completed according to your expectations."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                <Home className="h-6 w-6 text-gray-900" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">EICON Builders & Supply Inc.</h1>
                <p className="text-xs text-gray-500">Every Build is an icon of trust</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => handleNavigateToSection('services')} className="text-gray-700 hover:text-amber-600 transition-colors">Services</button>
              <Link to="/projects" className="text-amber-600 font-medium transition-colors">Our Process</Link>
              <button onClick={() => handleNavigateToSection('about')} className="text-gray-700 hover:text-amber-600 transition-colors">About</button>
              <button onClick={() => handleNavigateToSection('contact')} className="text-gray-700 hover:text-amber-600 transition-colors">Contact</button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From initial consultation to project completion, we follow a systematic approach to ensure quality,
            transparency, and timely delivery of your construction project.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <Card key={step.step} className="relative overflow-hidden hover:shadow-xl transition-shadow border-2 border-gray-100">
                  {/* Step Number Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-900">{step.step}</span>
                  </div>

                  <CardHeader className="pt-6">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-amber-600" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Our Process Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures every project is completed with precision, quality, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Communication</h3>
              <p className="text-gray-600">
                We keep you informed at every stage, ensuring clarity and trust throughout the project.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Every step follows industry standards with regular inspections and quality checks.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
              <p className="text-gray-600">
                We value your time and ensure timely completion without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free consultation and let's discuss how we can bring your vision to life.
          </p>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600" onClick={() => handleNavigateToSection('contact')}>
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OurProcess;