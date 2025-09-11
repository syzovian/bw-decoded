import React from 'react';
import { Download, FileText, Shield, ExternalLink, Database, Zap, Activity } from 'lucide-react';

export default function ResourcesPage() {
  const resources = [
    {
      id: 1,
      title: "How to Teach in the Age of AI",
      description: "Framework for educators on integrating AI responsibly into classrooms.",
      filename: "teaching_in_ai_era.pdf",
      size: "121 KB",
      type: "PDF",
      category: "BROCHURE",
      downloadUrl: "/teaching_in_ai_era.pdf"
    },
    {
      id: 3,
      title: "Falsely Accused by an AI Detector: How to Respond",
      description: "Practical guide for students on responding to false AI plagiarism accusations.",
      filename: "false_accusation.pdf",
      size: "95 KB",
      type: "PDF",
      category: "BROCHURE",
      downloadUrl: "/false_accusation.pdf"
    },
    {
      id: 2,
      title: "Issues with Turnitin's AI Detector",
      description: "Critical overview of flaws and potential biases in Turnitin’s AI detector.",
      filename: "turnitin_ai_issues.pdf",
      size: "101 KB",
      type: "PDF",
      category: "BROCHURE",
      downloadUrl: "/turnitin_ai_issues.pdf"
    }
  ];

  const handleDownload = async (resource: typeof resources[0]) => {
    try {
      const response = await fetch(resource.downloadUrl);
      const blob = await response.blob();
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = resource.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback to direct link
      window.open(resource.downloadUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Terminal Header */}
        <div className="bg-[#0b4d59]/80 backdrop-blur-sm border border-[#f6c453]/30 rounded-2xl p-8 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-[#f6c453] rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-[#f0a04b] rounded-full animate-pulse delay-300"></div>
                <div className="w-3 h-3 bg-[#e1eedd] rounded-full animate-pulse delay-600"></div>
              </div>
              <span className="text-[#f6c453] font-mono text-sm">RESOURCE_VAULT.sys</span>
            </div>
            <div className="hidden sm:block text-[#e1eedd] font-mono text-xs sm:text-right">ACCESS: GRANTED</div>
          </div>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#f6c453]/20 to-[#f0a04b]/20 border border-[#f6c453]/50 rounded-xl flex items-center justify-center">
              <Database className="w-8 h-8 text-[#f6c453]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#fefbe9] mb-2">
                KNOWLEDGE <span className="text-[#f6c453] cyber-glow">VAULT</span>
              </h1>
            </div>
          </div>
          
          <p className="text-xl text-[#e1eedd] max-w-4xl">
            Access our curated collection of concise guides exploring critical challenges, practical strategies, and ethical considerations surrounding the use of AI across different fields.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-8">
            <Activity className="w-5 h-5 text-[#f0a04b]" />
            <span className="text-[#f0a04b] font-mono text-sm uppercase tracking-wider">AVAILABLE_RESOURCES</span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#f0a04b] to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="group relative bg-[#0b4d59]/60 backdrop-blur-sm border border-[#f6c453]/20 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:border-[#f6c453]"
              >
                {/* Scanning effect */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f6c453] to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Resource Display */}
                <div className="aspect-video bg-gradient-to-br from-[#f6c453]/10 to-[#f0a04b]/10 flex items-center justify-center relative">
                  <div className="absolute inset-0 cyber-scan opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={`/${
                      resource.id === 2 ? 'photo_1.png' : 
                      resource.id === 3 ? 'photo_2.png' : 
                      'photo_3.png'
                    }`}
                    alt={resource.title}
                    className={`w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300 relative z-10 ${
                     resource.id === 2 ? 'object-[center_22%]' : 'object-top'
                    }`}
                  />
                  
                  {/* Category indicator */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#0b4d59]/60 backdrop-blur-sm border border-[#f6c453]/30 rounded-lg text-xs font-mono text-[#f6c453] shadow-lg z-20">
                    {resource.category}
                  </div>
                </div>
                
                {/* Resource Info */}
                <div className="p-6 space-y-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#f0a04b] rounded-full animate-pulse"></div>
                      <span className="text-[#f0a04b] font-mono text-xs">{resource.type}</span>
                    </div>
                    <div className="text-[#e1eedd]/60 font-mono text-xs">{resource.size}</div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#fefbe9] group-hover:text-[#f6c453] transition-colors leading-tight">
                    {resource.title}
                  </h3>
                  
                  <p className="text-[#e1eedd] text-sm leading-relaxed line-clamp-3 sm:line-clamp-none md:line-clamp-3 flex-1">
                    {resource.description}
                  </p>
                  
                  <button
                    onClick={() => handleDownload(resource)}
                    className="group/download relative bg-gradient-to-r from-[#f6c453] to-[#f0a04b] text-[#0b4d59] px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 overflow-hidden inline-flex items-center justify-center space-x-2 mt-auto"
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/download:translate-x-full transition-transform duration-700"></div>
                    <div className="relative flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>DOWNLOAD</span>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Access Terminal */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-2 h-2 bg-[#f6c453] rounded-full animate-pulse"></div>
              <span className="text-[#f6c453] font-mono text-sm uppercase tracking-wider">SECURE_ACCESS</span>
              <div className="w-2 h-2 bg-[#f6c453] rounded-full animate-pulse delay-500"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#f6c453] font-mono">{resources.length}</div>
                <div className="text-sm text-[#e1eedd] font-mono uppercase tracking-wider">Available Resources</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#f0a04b] font-mono">PDF</div>
                <div className="text-sm text-[#e1eedd] font-mono uppercase tracking-wider">Primary Format</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#fefbe9] font-mono">FREE</div>
                <div className="text-sm text-[#e1eedd] font-mono uppercase tracking-wider">Access Level</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-[#e1eedd]/60 text-xs font-mono mt-8">
              <Shield className="w-4 h-4 text-[#f6c453]" />
              <span>All resources are provided for educational purposes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
