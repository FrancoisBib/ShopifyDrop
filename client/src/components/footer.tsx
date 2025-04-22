import { Mail, FileText, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer text-gray-200 text-center py-10 px-6">
      <div className="container mx-auto">
        <div className="mb-4">
          <a href="mailto:hiformaxpert@gmail.com" className="hover:text-white flex items-center justify-center space-x-2">
            <Mail className="h-5 w-5" />
            <span>Contact us: hiformaxpert@gmail.com</span>
          </a>
        </div>
        <div className="text-sm space-x-4">
          <a href="#" className="hover:text-white flex items-center justify-center space-x-1 inline-flex"> <FileText className="h-4 w-4" /> <span>Legal Notice</span></a> |
          <a href="#" className="hover:text-white flex items-center justify-center space-x-1 inline-flex"> <FileText className="h-4 w-4" /> <span>Terms and Conditions</span></a> |
          <a href="#" className="hover:text-white flex items-center justify-center space-x-1 inline-flex"> <ShieldCheck className="h-4 w-4" /> <span>Privacy Policy</span></a>
        </div>
        <p className="mt-6 text-xs text-gray-500">&copy; {new Date().getFullYear()} FormaXpert. All rights reserved.</p>
      </div>
    </footer>
  );
}
