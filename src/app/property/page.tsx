import { 
  Home, 
  FileText, 
  Calculator, 
  MapPin, 
  Building, 
  CreditCard,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PropertyServices() {
  const propertyServices = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Property Registration",
      description: "Register new properties and update ownership information",
      color: "bg-blue-500"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Property Tax",
      description: "Pay property taxes and view tax history",
      color: "bg-green-500"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Building Permits",
      description: "Apply for construction and renovation permits",
      color: "bg-purple-500"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Housing Assistance",
      description: "Government housing programs and assistance",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Home className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">
              Property Services Portal
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Manage property registration, taxes, and housing services
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/" className="flex items-center text-orange-600 hover:text-orange-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Property Services</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {propertyServices.map((service, index) => (
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
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Access Service
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
