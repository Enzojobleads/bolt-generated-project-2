import { Link } from 'react-router-dom';
import { HomeIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-4">
        <h1 className="text-xl font-bold">Prospect Manager</h1>
      </div>
      <nav className="mt-4">
        <Link to="/" className="flex items-center px-4 py-2 hover:bg-gray-100">
          <HomeIcon className="h-5 w-5 mr-2" />
          Dashboard
        </Link>
        <Link to="/import" className="flex items-center px-4 py-2 hover:bg-gray-100">
          <ArrowUpTrayIcon className="h-5 w-5 mr-2" />
          Import
        </Link>
      </nav>
    </div>
  );
}
