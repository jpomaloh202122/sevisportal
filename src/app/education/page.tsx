import { 
  GraduationCap, 
  BookOpen, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle,
  Clock,
  Award,
  School,
  Library,
  Calculator,
  Globe
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function EducationServices() {
  const educationServices = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Student Registration",
      description: "Register for courses, programs, and academic services",
      color: "bg-blue-500",
      status: "Available"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Academic Records",
      description: "Access transcripts, certificates, and academic history",
      color: "bg-green-500",
      status: "Available"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Scholarship Applications",
      description: "Apply for government scholarships and financial aid",
      color: "bg-purple-500",
      status: "Available"
    },
    {
      icon: <School className="w-8 h-8" />,
      title: "School Registration",
      description: "Register children for primary and secondary education",
      color: "bg-orange-500",
      status: "Available"
    },
    {
      icon: <Library className="w-8 h-8" />,
      title: "Library Services",
      description: "Access digital library resources and research materials",
      color: "bg-red-500",
      status: "Available"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Student Loan Management",
      description: "Apply for and manage student loans and repayment",
      color: "bg-pink-500",
      status: "Available"
    }
  ];

  const forms = [
    {
      name: "Student Registration Form",
      description: "Register for new academic programs",
      processingTime: "3-5 business days",
      fee: "Free"
    },
    {
      name: "Transcript Request",
      description: "Request official academic transcripts",
      processingTime: "2-3 business days",
      fee: "$15"
    },
    {
      name: "Scholarship Application",
      description: "Apply for government scholarships",
      processingTime: "10-15 business days",
      fee: "Free"
    },
    {
      name: "School Transfer Request",
      description: "Transfer between educational institutions",
      processingTime: "5-7 business days",
      fee: "$25"
    }
  ];

  const resources = [
    {
      title: "Academic Calendar",
      description: "Important dates and deadlines for the academic year",
      link: "#"
    },
    {
      title: "Student Handbook",
      description: "Policies, procedures, and guidelines for students",
      link: "#"
    },
    {
      title: "Financial Aid Guide",
      description: "Complete guide to scholarships and financial assistance",
      link: "#"
    },
    {
      title: "Career Counseling",
      description: "Resources for career planning and development",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <GraduationCap className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">
              Education Services Portal
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Access academic records, apply for scholarships, and manage your educational journey
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education Services</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {educationServices.map((service, index) => (
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Forms & Applications</h3>
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
            {/* Quick Stats */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Active Students</span>
                  <span className="font-semibold text-gray-900">45,230</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Scholarships Awarded</span>
                  <span className="font-semibold text-gray-900">12,450</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Graduation Rate</span>
                  <span className="font-semibold text-gray-900">94.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Processing Time</span>
                  <span className="font-semibold text-gray-900">2-5 days</span>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Resources</h4>
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
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Education Department</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-3 text-blue-600" />
                  <span>1-800-EDU-HELP</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-3 text-blue-600" />
                  <span>education@government.gov</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-3 text-blue-600" />
                  <span>456 Education Ave, Capital City</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="w-4 h-4 mr-3 text-blue-600" />
                  <span>www.education.gov</span>
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