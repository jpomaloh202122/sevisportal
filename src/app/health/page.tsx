import { 
  Heart, 
  Stethoscope, 
  Pill, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle,
  Clock,
  FileText,
  Shield,
  Activity,
  Globe
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function HealthServices() {
  const healthServices = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health Insurance",
      description: "Apply for and manage government health insurance coverage",
      color: "bg-red-500",
      status: "Available"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Medical Appointments",
      description: "Schedule appointments with healthcare providers",
      color: "bg-blue-500",
      status: "Available"
    },
    {
      icon: <Pill className="w-8 h-8" />,
      title: "Prescription Services",
      description: "Manage prescriptions and medication refills",
      color: "bg-green-500",
      status: "Available"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Medical Records",
      description: "Access and manage your medical history and records",
      color: "bg-purple-500",
      status: "Available"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Vaccination Services",
      description: "Schedule vaccinations and immunization records",
      color: "bg-orange-500",
      status: "Available"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Health Monitoring",
      description: "Track vital signs and health metrics",
      color: "bg-pink-500",
      status: "Available"
    }
  ];

  const forms = [
    {
      name: "Health Insurance Application",
      description: "Apply for government health insurance coverage",
      processingTime: "7-10 business days",
      fee: "Free"
    },
    {
      name: "Medical Records Request",
      description: "Request copies of medical records and history",
      processingTime: "3-5 business days",
      fee: "$20"
    },
    {
      name: "Prescription Refill Request",
      description: "Request refills for existing prescriptions",
      processingTime: "1-2 business days",
      fee: "Free"
    },
    {
      name: "Vaccination Appointment",
      description: "Schedule vaccination appointments",
      processingTime: "1-3 business days",
      fee: "Free"
    }
  ];

  const resources = [
    {
      title: "Health Guidelines",
      description: "Latest health guidelines and recommendations",
      link: "#"
    },
    {
      title: "Emergency Contacts",
      description: "Emergency medical services and hotlines",
      link: "#"
    },
    {
      title: "Health Tips",
      description: "Preventive care and wellness information",
      link: "#"
    },
    {
      title: "Mental Health Support",
      description: "Mental health resources and counseling services",
      link: "#"
    }
  ];

  const healthStats = [
    {
      label: "Covered Citizens",
      value: "2.3M",
      change: "+5.2%"
    },
    {
      label: "Active Providers",
      value: "15,420",
      change: "+2.1%"
    },
    {
      label: "Average Wait Time",
      value: "3.2 days",
      change: "-12%"
    },
    {
      label: "Satisfaction Rate",
      value: "94.8%",
      change: "+1.5%"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Heart className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">
              Health Services Portal
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Access healthcare services, manage medical records, and schedule appointments
            </p>
          </div>
        </div>
      </section>

      {/* Health Stats */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {healthStats.map((stat, index) => (
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Healthcare Services</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {healthServices.map((service, index) => (
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
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    Access Service
                  </button>
                </div>
              ))}
            </div>

            {/* Forms Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Medical Forms & Applications</h3>
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
                            <button className="text-red-600 hover:text-red-900">
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
            {/* Emergency Services */}
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-red-900 mb-4 flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Emergency Services
              </h4>
              <div className="space-y-3">
                <div className="flex items-center text-red-800">
                  <Phone className="w-4 h-4 mr-3" />
                  <span className="font-semibold">911</span>
                </div>
                <div className="flex items-center text-red-800">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>1-800-HEALTH-EMERGENCY</span>
                </div>
                <p className="text-sm text-red-700">
                  For life-threatening emergencies, call 911 immediately.
                </p>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Health Resources</h4>
              <div className="space-y-3">
                {resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.link}
                    className="block p-3 rounded-lg border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-colors"
                  >
                    <h5 className="font-medium text-gray-900 mb-1">{resource.title}</h5>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Health Department</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-3 text-red-600" />
                  <span>1-800-HEALTH-INFO</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-3 text-red-600" />
                  <span>health@government.gov</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-3 text-red-600" />
                  <span>789 Health Plaza, Capital City</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="w-4 h-4 mr-3 text-red-600" />
                  <span>www.health.gov</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                  Schedule Appointment
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  View Medical Records
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  Request Prescription
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 