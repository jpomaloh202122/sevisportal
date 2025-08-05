import { 
  FileText, 
  FileCheck, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle,
  Clock,
  Globe,
  Building2,
  AlertTriangle,
  Camera,
  BookOpen,
  Award
} from 'lucide-react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function DocumentServices() {
  const documentServices = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Birth Certificates",
      description: "Request official birth certificate copies and amendments",
      color: "bg-blue-500",
      status: "Available"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Marriage Licenses",
      description: "Apply for marriage licenses and certificates",
      color: "bg-pink-500",
      status: "Available"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Professional Licenses",
      description: "Apply for and renew professional licenses",
      color: "bg-purple-500",
      status: "Available"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Business Permits",
      description: "Obtain permits for business operations",
      color: "bg-orange-500",
      status: "Available"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Death Certificates",
      description: "Request official death certificate copies",
      color: "bg-gray-500",
      status: "Available"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Educational Records",
      description: "Request transcripts and educational certificates",
      color: "bg-green-500",
      status: "Available"
    }
  ];

  const forms = [
    {
      name: "Birth Certificate Request",
      description: "Request official birth certificate copy",
      processingTime: "3-5 business days",
      fee: "$15"
    },
    {
      name: "Marriage License Application",
      description: "Apply for marriage license",
      processingTime: "1-2 business days",
      fee: "$50"
    },
    {
      name: "Professional License Application",
      description: "Apply for professional license",
      processingTime: "10-15 business days",
      fee: "$125"
    },
    {
      name: "Business Permit Application",
      description: "Apply for business operation permit",
      processingTime: "7-10 business days",
      fee: "$75"
    }
  ];

  const resources = [
    {
      title: "Document Requirements Guide",
      description: "Complete guide to required documents for applications",
      link: "#"
    },
    {
      title: "Fee Schedule",
      description: "Current fees for all document services",
      link: "#"
    },
    {
      title: "Processing Times",
      description: "Expected processing times for different documents",
      link: "#"
    },
    {
      title: "Legal Requirements",
      description: "Legal requirements and regulations for documents",
      link: "#"
    }
  ];

  const documentStats = [
    {
      label: "Documents Processed",
      value: "125K",
      change: "+8.2%"
    },
    {
      label: "Average Processing",
      value: "4.2 days",
      change: "-12%"
    },
    {
      label: "Online Applications",
      value: "89.5%",
      change: "+15.3%"
    },
    {
      label: "Customer Satisfaction",
      value: "94.8%",
      change: "+2.1%"
    }
  ];

  const announcements = [
    {
      type: "info",
      message: "New online document verification system launched",
      time: "2 days ago"
    },
    {
      type: "warning",
      message: "Updated requirements for professional licenses",
      time: "1 week ago"
    },
    {
      type: "success",
      message: "Reduced processing times for birth certificates",
      time: "2 weeks ago"
    }
  ];

  const appointmentSlots = [
    {
      service: "Document Notarization",
      available: "12 slots",
      nextAvailable: "Today"
    },
    {
      service: "License Application Review",
      available: "6 slots",
      nextAvailable: "Tomorrow"
    },
    {
      service: "Document Authentication",
      available: "18 slots",
      nextAvailable: "This Week"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <FileText className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">
              Document Services Portal
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Apply for certificates, licenses, and official documents
            </p>
          </div>
        </div>
      </section>

      {/* Document Stats */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {documentStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
                <div className="text-xs text-blue-600 mt-1">{stat.change}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Document Services</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {documentServices.map((service, index) => (
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
                  <Link href="/documents" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors block text-center">
                    Access Service
                  </Link>
                </div>
              ))}
            </div>

            {/* Forms Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Document Forms & Applications</h3>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Form Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Description
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Processing Time
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Fee
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {forms.map((form, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {form.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {form.description}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {form.processingTime}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {form.fee}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900">
                              Download
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Document Announcements */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-blue-600" />
                Document Updates
              </h4>
              <div className="space-y-3">
                {announcements.map((announcement, index) => (
                  <div key={index} className={`p-3 rounded-lg border-l-4 ${
                    announcement.type === 'warning' ? 'border-orange-500 bg-orange-50' :
                    announcement.type === 'info' ? 'border-blue-500 bg-blue-50' :
                    'border-green-500 bg-green-50'
                  }`}>
                    <p className="text-sm text-gray-900 mb-1">{announcement.message}</p>
                    <p className="text-xs text-gray-500">{announcement.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Appointment Slots */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Available Appointments</h4>
              <div className="space-y-3">
                {appointmentSlots.map((slot, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <h5 className="font-medium text-gray-900 mb-1">{slot.service}</h5>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{slot.available}</span>
                      <span>Next: {slot.nextAvailable}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Document Resources</h4>
              <div className="space-y-3">
                {resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.link}
                    className="block p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    <h5 className="font-medium text-gray-900 mb-1">{resource.title}</h5>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Document Services Department</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-3 text-blue-600" />
                  <span>1-800-DOCS-HELP</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-3 text-blue-600" />
                  <span>documents@government.gov</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-3 text-blue-600" />
                  <span>789 Document Plaza, Capital City</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="w-4 h-4 mr-3 text-blue-600" />
                  <span>www.documents.gov</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Schedule Appointment
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  Track Application
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  Verify Document
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  Download Forms
                </button>
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Commonly Required</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Government-issued ID</span>
                </div>
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Proof of Address</span>
                </div>
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Supporting Documents</span>
                </div>
                <div className="flex items-center">
                  <Camera className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Passport Photos</span>
                </div>
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Proof of Citizenship</span>
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
