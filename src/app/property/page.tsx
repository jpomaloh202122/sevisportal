import { 
  Home, 
  Building2, 
  LandPlot, 
  MapPin, 
  DollarSign,
  FileText,
  Percent,
  Ruler,
  Layers,
  ClipboardList,
  Calendar,
  Clock,
  CheckCircle,
  AlertTriangle,
  Phone
} from 'lucide-react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PropertyServices() {
  const propertyServices = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Property Registration",
      description: "Register new property and update ownership records",
      color: "bg-blue-500",
      status: "Available"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Building Permits",
      description: "Apply for construction and renovation permits",
      color: "bg-orange-500",
      status: "Available"
    },
    {
      icon: <LandPlot className="w-8 h-8" />,
      title: "Land Use Applications",
      description: "Apply for land use changes and zoning requests",
      color: "bg-green-500",
      status: "Available"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Property Tax Payments",
      description: "Pay property taxes and view assessment records",
      color: "bg-purple-500",
      status: "Available"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Title Deeds",
      description: "Request copies of title deeds and ownership documents",
      color: "bg-yellow-500",
      status: "Available"
    },
    {
      icon: <Percent className="w-8 h-8" />,
      title: "Valuation Appeals",
      description: "Appeal property valuations and tax assessments",
      color: "bg-red-500",
      status: "Available"
    }
  ];

  const propertyStats = [
    {
      label: "Properties Registered",
      value: "245K",
      change: "+5.7%"
    },
    {
      label: "Average Processing",
      value: "7.1 days",
      change: "-9.2%"
    },
    {
      label: "Online Applications",
      value: "76.3%",
      change: "+22.1%"
    },
    {
      label: "Customer Satisfaction",
      value: "91.2%",
      change: "+3.4%"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Home className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">
              Property Services Portal
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Manage property records, taxes, and land use applications
            </p>
          </div>
        </div>
      </section>

      {/* Property Stats */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {propertyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
                <div className="text-xs text-green-600 mt-1">{stat.change}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Property Services</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {propertyServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}>
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    <span className="flex items-center text-sm text-green-600">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      {service.status}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href="/property" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors block text-center">
                    Access Service
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Property Tools</h4>
              <div className="space-y-3">
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Property Search
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  Tax Calculator
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  Zoning Map
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-3 text-green-600" />
                  <span>1-800-PROPERTY</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-3 text-green-600" />
                  <span>123 Land Registry Office</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
