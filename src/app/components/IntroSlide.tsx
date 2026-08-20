import { Database, GitBranch, Filter, Search, Users, Layout } from 'lucide-react';

export default function IntroSlide() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 p-12 shadow-2xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Database className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-white mb-2">MS Spot</h1>
              <div className="text-blue-400 text-xl">Azure VM Management Platform</div>
            </div>
          </div>
          <p className="text-slate-300 text-xl leading-relaxed">
            A platform that allows users to edit various technical information about all virtual machines in Azure.
          </p>
        </div>

        {/* Context Section */}
        <div className="mb-12 bg-slate-800/50 rounded-xl p-8 border border-slate-700">
          <h2 className="text-white mb-4 flex items-center gap-3">
            <GitBranch className="w-6 h-6 text-blue-400" />
            Context
          </h2>
          <div className="space-y-4 text-slate-300">
            <p>
              The main source of information about virtual machines is{' '}
              <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded border border-blue-500/30">JSON files</span>, stored in{' '}
              <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded border border-blue-500/30">Git</span>.
            </p>
            <p>
              The application extracts data from these files and presents it in a structured form in a web application. After user editing, the application writes changes back to JSON files and creates a pull request to merge changes into the master branch.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div>
          <h2 className="text-white mb-6">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard 
              icon={<Filter className="w-5 h-5" />}
              title="Sorting and Filtering"
              description="Various types of data sorting and filtering"
            />
            <FeatureCard 
              icon={<Search className="w-5 h-5" />}
              title="Full-text Search"
              description="Fast search across all data"
            />
            <FeatureCard 
              icon={<Users className="w-5 h-5" />}
              title="Role Management"
              description="Different user roles"
            />
            <FeatureCard 
              icon={<Layout className="w-5 h-5" />}
              title="Flexible Workspace"
              description="Customizable workspace"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-5 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-blue-600/20 text-blue-400 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-500/30">
          {icon}
        </div>
        <div>
          <h3 className="text-white mb-1">{title}</h3>
          <p className="text-slate-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
