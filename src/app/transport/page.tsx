import { 
  Car, 
  Bus, 
  Train, 
  Plane, 
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
  Map
} from 'lucide-react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TransportServices() {
  const transportServices = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Driver's License",
      description: "Apply for, renew, or replace driver's licenses",
      color: "bg-blue-500",
      status: "Available"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Vehicle Registration",
      description: "Register vehicles and manage registration renewals",
      color: "bg-green-500",
      status: "Available"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Vehicle Permits",
      description: "Apply for special permits and certifications",
      color: "bg-purple-500",
      status: "Available"
    },
    {
      icon: <Bus className="w-8 h-8" />,
      title: "Public Transport",
      description: "Bus passes, schedules, and route information",
      color: "bg-orange-500",
      status: "Available"
    },
    {
      icon: <Train className="w-8 h-8" />,
      title: "Rail Services",
      description: "Train tickets, schedules, and station information",
      color: "bg-red-500",
      status: "Available"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Airport Services",
      description: "Airport information and travel assistance",
      color: "bg-pink-500",
      status: "Available"
    }
  ];

  const forms = [
    {
      name: "Driver's License Application",
      description: "Apply for a new driver's license",
      processingTime: "10-15 business days",
      fee: "$45"
    },
    {
      name: "Vehicle Registration Renewal",
      description: "Renew vehicle registration online",
      processingTime: "3-5 business days",
      fee: "$35"
    },
    {
      name: "Special Vehicle Permit",
      description: "Apply for commercial or special use permits",
      processingTime: "7-10 business days",
      fee: "$75"
    },
    {
      name: "Public Transport Pass",
      description: "Apply for monthly or annual transit passes",
      processingTime: "2-3 business days",
      fee: "$25"
    }
  ];

  const resources = [
    {
      title: "Traffic Updates",
      description: "Real-time traffic conditions and road closures",
      link: "#"
    },
    {
      title: "Public Transport Routes",
      description: "Bus and train route maps and schedules",
      link: "#"
    },
    {
      title: "Parking Information",
      description: "Parking locations, rates, and availability",
      link: "#"
    },
    {
      title: "Road Safety Guidelines",
      description: "Traffic rules and safety information",
      link: "#"
    }
  ];

  const transportStats = [
    {
      label: "Registered Vehicles",
      value: "1.8M",
      change: "+3.2%"
    },
    {
      label: "Licensed Drivers",
      value: "2.1M",
      change: "+1.8%"
    },
    {
      label: "Daily Transit Users",
      value: "450K",
      change: "+5.4%"
    },
    {
      label: "Average Processing Time",
      value: "4.2 days",
      change: "-15%"
    }
  ];

  const alerts = [
    {
      type: "warning",
      message: "Road construction on Main Street - expect delays",
      time: "2 hours ago"
    },
    {
      type: "info",
      message: "New bus route 15 now serving downtown area",
      time: "1 day ago"
    },
    {
      type: "success",
      message: "Online license renewal system now available",
      time: "3 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Car className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">
              Transport Services Portal
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Manage licenses, register vehicles, and access public transportation services
            </p>
          </div>
        </div>
      </section>

      {/* Transport Stats */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {transportStats.map((stat, index) => (
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Transportation Services</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {transportServices.map((service, index) => (
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
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Access Service
                  </button>
                </div>
              ))}
            </div>

            {/* Forms Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Transport Forms & Applications</h3>
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
            {/* Transport Alerts */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
                Transport Alerts
              </h4>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <div key={index} className={`p-3 rounded-lg border-l-4 ${
                    alert.type === 'warning' ? 'border-orange-500 bg-orange-50' :
                    alert.type === 'info' ? 'border-blue-500 bg-blue-50' :
                    'border-green-500 bg-green-50'
                  }`}>
                    <p className="text-sm text-gray-900 mb-1">{alert.message}</p>
                    <p className="text-xs text-gray-500">{alert.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Transport Resources</h4>
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
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Transport Department</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-3 text-blue-600" />
                  <span>1-800-TRANSPORT</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-3 text-blue-600" />
                  <span>transport@government.gov</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-3 text-blue-600" />
                  <span>321 Transport Ave, Capital City</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="w-4 h-4 mr-3 text-blue-600" />
                  <span>www.transport.gov</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Renew License
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  Register Vehicle
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  Check Traffic
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  Buy Transit Pass
                </button>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h4>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <CreditCard className="w-4 h-4 mr-3 text-blue-600" />
                  <span>Credit/Debit Cards</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <CreditCard className="w-4 h-4 mr-3 text-blue-600" />
                  <span>Online Banking</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <CreditCard className="w-4 h-4 mr-3 text-blue-600" />
                  <span>Mobile Payments</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <CreditCard className="w-4 h-4 mr-3 text-blue-600" />
                  <span>Cash at Offices</span>
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