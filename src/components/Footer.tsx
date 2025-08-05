export default function Footer() {
  return (
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
  );
} 