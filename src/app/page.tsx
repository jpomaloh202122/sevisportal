import { 
  Building2, 
  FileText, 
  Users, 
  Car, 
  Home, 
  GraduationCap, 
  Heart, 
  Shield, 
  Bell, 
  Search,
  ArrowRight,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function GovernmentPortal() {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Document Services",
      description: "Apply for certificates, licenses, and official documents",
      color: "bg-blue-500",
      href: "#"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Citizen Services",
      description: "ID cards, passports, and citizen registration",
      color: "bg-green-500",
      href: "/citizen"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Transportation",
      description: "Driver's licenses, vehicle registration, and permits",
      color: "bg-purple-500",
      href: "/transport"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Property Services",
      description: "Property registration, taxes, and housing assistance",
      color: "bg-orange-500",
      href: "#"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education",
      description: "Student services, scholarships, and academic records",
      color: "bg-red-500",
      href: "/education"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare",
      description: "Health insurance, medical records, and appointments",
      color: "bg-pink-500",
      href: "/health"
    }
  ];

  const announcements = [
    {
      title: "New Online Tax Filing System",
      description: "File your taxes online with our new streamlined system",
      date: "2024-01-15",
      priority: "high"
    },
    {
      title: "Updated Passport Application Process",
      description: "Simplified passport application with faster processing times",
      date: "2024-01-10",
      priority: "medium"
    },
    {
      title: "Holiday Office Closures",
      description: "Government offices will be closed during national holidays",
      date: "2024-01-05",
      priority: "low"
    }
  ];

  const quickLinks = [
    { name: "Pay Taxes", href: "#" },
    { name: "Apply for License", href: "#" },
    { name: "Report Issue", href: "#" },
    { name: "Find Office", href: "#" },
    { name: "Emergency Contacts", href: "#" },
    { name: "Public Records", href: "#" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black shadow-sm border-b border-yellow-500">
        <div className="max-w-[105rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <Link href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
              <div className="bg-transparent p-2 rounded-lg">
                <Image 
                  src="/images/newlogo.png" 
                  alt="Government Portal Logo"
                  width={300} 
                  height={90} 
                  className="h-12 w-auto"
                  priority
                />
              </div>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-yellow-400">SEVIS PORTAL</h1>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-yellow-300 hover:text-yellow-100">
                <Bell className="w-5 h-5" />
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <Image 
                  src="/images/newlogo.png" 
                  alt="SEVIS Portal Logo"
                  width={400} 
                  height={120} 
                  className="h-16 w-auto"
                  priority
                />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Welcome to Your Government Portal
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Access government services, pay taxes, and manage your documents online
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-yellow-400 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-2 group-hover:bg-yellow-200 transition-colors">
                  <Shield className="w-6 h-6 text-yellow-600" />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Government Services</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  {service.href ? (
                    <Link href={service.href} className="flex items-center text-red-600 hover:text-red-700 font-medium">
                      Access Service
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  ) : (
                                      <button className="flex items-center text-red-600 hover:text-red-700 font-medium">
                    Access Service
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Announcements */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Bell className="w-5 h-5 mr-2 text-red-600" />
                Announcements
              </h4>
              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <div key={index} className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-medium text-gray-900 mb-1">{announcement.title}</h5>
                    <p className="text-sm text-gray-600 mb-2">{announcement.description}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {announcement.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-3 text-red-600" />
                  <span>1-800-GOV-HELP</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-3 text-red-600" />
                  <span>support@government.gov</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-3 text-red-600" />
                  <span>123 Government St, Capital City</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="w-4 h-4 mr-3 text-red-600" />
                  <span>www.government.gov</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white border-t border-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-4 text-yellow-400">Government Portal</h5>
              <p className="text-gray-400">
                Providing secure and efficient government services to citizens.
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4 text-yellow-400">Services</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-300">Document Services</a></li>
                <li><a href="#" className="hover:text-yellow-300">Citizen Services</a></li>
                <li><a href="#" className="hover:text-yellow-300">Business Services</a></li>
                <li><a href="#" className="hover:text-yellow-300">Emergency Services</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4 text-yellow-400">Resources</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-300">Forms & Applications</a></li>
                <li><a href="#" className="hover:text-yellow-300">Laws & Regulations</a></li>
                <li><a href="#" className="hover:text-yellow-300">Public Records</a></li>
                <li><a href="#" className="hover:text-yellow-300">News & Updates</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4 text-yellow-400">Support</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-300">Help Center</a></li>
                <li><a href="#" className="hover:text-yellow-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-yellow-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-yellow-300">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Government Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
