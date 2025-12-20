import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
    Phone,
    Mail,
    Home,
    Heart,
    Users,
    Building2,
    Calendar,
    CheckCircle,
    ArrowRight,
    Sparkles,
    Facebook,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

// Image Carousel Component
const ImageCarousel = ({ images, projectTitle }: { images: string[], projectTitle: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    if (images.length === 0) return null;

    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black mb-4">Project Gallery</h3>

            {/* Main Image */}
            <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden group">
                <img
                    src={images[currentIndex]}
                    alt={`${projectTitle} - Image ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-label="Next image"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/75 text-white px-3 py-1 rounded-full text-sm">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnail Navigation */}
            {images.length > 1 && (
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-2">
                    {images.map((image, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`aspect-video bg-gray-200 rounded-lg overflow-hidden border-2 transition-all ${idx === currentIndex
                                ? 'border-gold-500 shadow-lg scale-105'
                                : 'border-transparent hover:border-gray-300'
                                }`}
                        >
                            <img
                                src={image}
                                alt={`Thumbnail ${idx + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

const CommunityImpact = () => {
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

    const projects = [
        {
            year: "2025",
            title: "Child Development Center Renovation",
            featured: true,
            status: "completed",
            description: "EICON sponsored the renovation of a local child development center to improve safety, functionality, and learning conditions for young children.",
            scope: [
                "Facility structural repairs and reinforcement",
                "Safety upgrades including improved electrical systems",
                "Refurbishment of learning spaces with child-friendly materials",
                "Installation of proper ventilation and lighting",
                "Renovation of outdoor play areas"
            ],
            impact: "Enhanced learning environment for 50+ children aged 2-5 years",
            location: "Murcia, Negros Occidental",
            images: [
                "./childdev/1.jpg",
                "./childdev/2.jpg",
                "./childdev/3.jpg",
                "./childdev/4.jpg",
                "./childdev/5.jpg",
                "./childdev/6.jpg",
                "./childdev/7.jpg"
            ]
        },
        {
            year: "2026",
            title: "Community Project – To Be Announced",
            featured: false,
            status: "upcoming",
            description: "We are currently evaluating community-focused projects for 2026. Our selection process prioritizes need, measurable impact, and long-term sustainability.",
            scope: [],
            impact: "Stay tuned for updates on our next community partnership",
            location: "TBA",
            images: []
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white shadow-sm border-b sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link to="/" className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
                                <Home className="h-6 w-6 text-black" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-black">EICON Builders & Supply Inc.</h1>
                                <p className="text-xs text-silvery-400">Every Build is an icon of trust</p>
                            </div>
                        </Link>

                        <nav className="hidden md:flex items-center space-x-8">
                            <button onClick={() => handleNavigateToSection('services')} className="text-silvery-600 hover:text-gold-600 transition-colors">Services</button>
                            <Link to="/ourprocess" className="text-silvery-600 hover:text-gold-600 transition-colors">Our Process</Link>
                            <button onClick={() => handleNavigateToSection('about')} className="text-silvery-600 hover:text-gold-600 transition-colors">About</button>
                            <Link to="/community-impact" className="text-gold-600 font-semibold">Community Impact</Link>
                            <button onClick={() => handleNavigateToSection('contact')} className="text-silvery-600 hover:text-gold-600 transition-colors">Contact</button>
                            <a href="https://www.facebook.com/eicon.buildersPH" target="_blank" rel="noopener noreferrer" className="text-silvery-600 hover:text-gold-600 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-black to-gray-800 text-white py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <Badge className="bg-gold-500 text-black mb-6 hover:bg-gold-500 hover:text-black inline-flex items-center">
                            <Heart className="h-4 w-4 mr-2" />
                            Annual Community Support Program
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Building More Than Structures
                            <span className="text-gold-400"> Building Communities</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            EICON Builders & Supply Inc. is committed to creating value beyond construction. Every year, we support one community-focused project through renovation, construction services, or materials to help strengthen local communities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Program Overview */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Annual Program</h2>
                        <p className="text-xl text-silvery-500 max-w-3xl mx-auto">
                            EICON selects one community project each year based on need, impact, and sustainability. This reflects our long-term commitment to responsible building and community partnership.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="text-center border-gray-200">
                            <CardHeader>
                                <div className="w-16 h-16 bg-gold-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="h-8 w-8 text-gold-600" />
                                </div>
                                <CardTitle className="text-xl">Community Need</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-silvery-600">
                                    We prioritize projects that address genuine community needs and benefit vulnerable populations.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-gray-200">
                            <CardHeader>
                                <div className="w-16 h-16 bg-gold-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Sparkles className="h-8 w-8 text-gold-600" />
                                </div>
                                <CardTitle className="text-xl">Measurable Impact</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-silvery-600">
                                    Each project is selected for its potential to create lasting, positive change in the community.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="text-center border-gray-200">
                            <CardHeader>
                                <div className="w-16 h-16 bg-gold-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Building2 className="h-8 w-8 text-gold-600" />
                                </div>
                                <CardTitle className="text-xl">Sustainability</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-silvery-600">
                                    We focus on projects that will continue to serve the community effectively for years to come.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-20">
                        {projects.map((project, index) => (
                            <div key={project.year} className={project.status === 'upcoming' ? 'opacity-75' : ''}>
                                <div className="flex flex-col gap-4 mb-8">
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <Badge className={`${project.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'} hover:bg-current`}>
                                            <Calendar className="h-3 w-3 mr-2" />
                                            {project.year}
                                        </Badge>
                                        {project.featured && (
                                            <Badge className="bg-gold-500 text-black hover:bg-gold-500">
                                                <Sparkles className="h-3 w-3 mr-2" />
                                                Featured Project
                                            </Badge>
                                        )}
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-black">{project.title}</h2>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                    {/* Project Details */}
                                    <div>
                                        <p className="text-lg text-silvery-500 mb-6">
                                            {project.description}
                                        </p>

                                        {project.scope.length > 0 && (
                                            <div className="mb-6">
                                                <h3 className="text-xl font-semibold text-black mb-4">Project Scope</h3>
                                                <div className="space-y-3">
                                                    {project.scope.map((item, idx) => (
                                                        <div key={idx} className="flex items-start">
                                                            <CheckCircle className="h-5 w-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                                                            <span className="text-silvery-600">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className="bg-gold-50 rounded-lg p-6 mb-6">
                                            <h3 className="text-lg font-semibold text-black mb-2">Community Impact</h3>
                                            <p className="text-silvery-600">{project.impact}</p>
                                        </div>

                                        <div className="flex items-center text-silvery-500">
                                            <Building2 className="h-5 w-5 mr-2" />
                                            <span>{project.location}</span>
                                        </div>
                                    </div>

                                    {/* Photo Gallery */}
                                    {project.status === 'completed' && project.images.length > 0 && (
                                        <ImageCarousel images={project.images} projectTitle={project.title} />
                                    )}

                                    {project.status === 'upcoming' && (
                                        <div className="flex items-center justify-center">
                                            <div className="text-center p-12 bg-gray-50 rounded-2xl">
                                                <Calendar className="h-16 w-16 text-gold-500 mx-auto mb-4" />
                                                <h3 className="text-2xl font-bold text-black mb-2">Coming Soon</h3>
                                                <p className="text-silvery-500">
                                                    We're currently evaluating potential projects for {project.year}. Check back for updates!
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {index < projects.length - 1 && <Separator className="mt-20 bg-gray-200" />}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a Community Project in Mind?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        We welcome suggestions for future community projects. If you know of an initiative that could benefit from our support, we'd love to hear from you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/">
                            <Button size="lg" className="bg-gold-500 text-black hover:bg-gold-600">
                                <Mail className="h-5 w-5 mr-2" />
                                Contact Us
                            </Button>
                        </Link>
                        <Link to="/">
                            <Button size="lg" variant="outline" className="border-gray-300 text-white hover:bg-gray-700 hover:text-gold-400">
                                Back to Home
                                <ArrowRight className="h-5 w-5 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-12 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
                                    <Home className="h-6 w-6 text-black" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">EICON Builders and Supply</h3>
                                    <p className="text-silvery-400 text-sm">Every Build is an icon of trust</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-silvery-400">
                                <li><Link to="/" className="hover:text-gold-400 transition-colors">Home</Link></li>
                                <li><Link to="/ourprocess" className="hover:text-gold-400 transition-colors">Our Process</Link></li>
                                <li><Link to="/community-impact" className="hover:text-gold-400 transition-colors">Community Impact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Contact Info</h4>
                            <ul className="space-y-2 text-silvery-400">
                                <li>+63 950 751 3820</li>
                                <li>eicon.buildersandsupply@gmail.com</li>
                            </ul>
                        </div>
                    </div>

                    <Separator className="my-8 bg-gray-800" />

                    <div className="text-center">
                        <p className="text-silvery-400 text-sm">
                            © 2025 EICON Builders & Supply Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CommunityImpact;
