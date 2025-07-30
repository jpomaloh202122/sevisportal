import { 
  Users, 
  UserCheck, 
  FileText, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowLeft,
  CheckCircle,
  Clock,
  User,
  Shield,
  Activity,
  Globe,
  Building2,
  CreditCard,
  AlertTriangle,
  Map,
  Fingerprint,
  Camera
} from 'lucide-react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CitizenServices() {
  const citizenServices = [
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Citizen Registration",
      description: "Register as a new citizen and obtain citizenship",
      color: "bg-green-500",
      status: "Available"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Passport Services",
      description: "Apply for, renew, or replace passports",
      color: "bg-blue-500",
      status: "Available"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "National ID Card",
      description: "Apply for and manage national identification cards",
      color: "bg-purple-500",
      status: "Available"
    },
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: "Biometric Services",
      description: "Fingerprint and biometric data management",
      color: "bg-orange-500",
      status: "Available"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Civil Documents",
      description: "Birth certificates, marriage licenses, and civil records",
      color: "bg-red-500",
      status: "Available"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Voting Registration",
      description: "Register to vote and manage voting information",
      color: "bg-pink-500",
      status: "Available"
    }
  ];

  const forms = [
    {
      name: "Citizen Registration Form",
      description: "Register as a new citizen of the country",
      processingTime: "15-20 business days",
      fee: "Free"
    },
    {
      name: "Passport Application",
      description: "Apply for a new passport or renewal",
      processingTime: "10-15 business days",
      fee: "$85"
    },
    {
      name: "National ID Application",
      description: "Apply for national identification card",
      processingTime: "7-10 business days",
      fee: "$25"
    },
    {
      name: "Birth Certificate Request",
      description: "Request official birth certificate copy",
      processingTime: "3-5 business days",
      fee: "$15"
    }
  ];

  const resources = [
    {
      title: "Citizenship Guide",
      description: "Complete guide to citizenship requirements and process",
      link: "#"
    },
    {
      title: "Document Requirements",
      description: "Required documents for various citizen services",
      link: "#"
    },
    {
      title: "Voting Information",
      description: "Voting locations, dates, and requirements",
      link: "#"
    },
    {
      title: "Civil Rights",
      description: "Information about citizen rights and responsibilities",
      link: "#"
    }
  ];

  const citizenStats = [
    {
      label: "Registered Citizens",
      value: "3.2M",
      change: "+2.1%"
    },
    {
      label: "Active Passports",
      value: "2.8M",
      change: "+4.3%"
    },
    {
      label: "Voter Turnout",
      value: "78.5%",
      change: "+1.2%"
    },
    {
      label: "Processing Time",
      value: "6.8 days",
      change: "-18%"
    }
  ];

  const announcements = [
    {
      type: "info",
      message: "New online passport renewal system now available",
      time: "1 day ago"
    },
    {
      type: "warning",
      message: "Enhanced security features for national ID cards",
      time: "3 days ago"
    },
    {
      type: "success",
      message: "Citizen registration process simplified",
      time: "1 week ago"
    }
  ];

  const appointmentSlots = [
    {
      service: "Passport Application",
      available: "15 slots",
      nextAvailable: "Tomorrow"
    },
    {
      service: "ID Card Renewal",
      available: "8 slots",
      nextAvailable: "Today"
    },
    {
      service: "Citizen Registration",
      available: "22 slots",
      nextAvailable: "Next Week"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Users className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">
              Citizen Services Portal
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Manage citizenship, identity documents, and civil services
            </p>
          </div>
        </div>
      </section>

      {/* Citizen Stats */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {citizenStats.map((stat, index) => (
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
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Citizen Services</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {citizenServices.map((service, index) => (
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
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Access Service
                  </button>
                </div>
              ))}
            </div>

            {/* Forms Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Citizen Forms & Applications</h3>
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
                            <button className="text-green-600 hover:text-green-900">
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
            {/* Citizen Announcements */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-green-600" />
                Citizen Updates
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
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Citizen Resources</h4>
              <div className="space-y-3">
                {resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.link}
                    className="block p-3 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors"
                  >
                    <h5 className="font-medium text-gray-900 mb-1">{resource.title}</h5>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Citizen Affairs Department</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-3 text-green-600" />
                  <span>1-800-CITIZEN</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-3 text-green-600" />
                  <span>citizen@government.gov</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-3 text-green-600" />
                  <span>654 Citizen Plaza, Capital City</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="w-4 h-4 mr-3 text-green-600" />
                  <span>www.citizen.gov</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Schedule Appointment
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  Check Application Status
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  Update Information
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  Download Documents
                </button>
              </div>
            </div>

            {/* Document Requirements */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Required Documents</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-green-600" />
                  <span>Proof of Identity</span>
                </div>
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-green-600" />
                  <span>Proof of Address</span>
                </div>
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-green-600" />
                  <span>Birth Certificate</span>
                </div>
                <div className="flex items-center">
                  <Camera className="w-4 h-4 mr-2 text-green-600" />
                  <span>Passport Photos</span>
                </div>
                <div className="flex items-center">
                  <CreditCard className="w-4 h-4 mr-2 text-green-600" />
                  <span>Payment Method</span>
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