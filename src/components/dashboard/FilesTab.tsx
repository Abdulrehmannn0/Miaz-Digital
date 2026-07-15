/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Search, 
  Trash2, 
  Download, 
  Eye, 
  CloudUpload, 
  Filter, 
  FolderPlus, 
  Sparkles, 
  X,
  ExternalLink,
  Info
} from 'lucide-react';
import { DashboardFile } from '../../types/dashboard';

interface FilesTabProps {
  files: DashboardFile[];
  onUploadFile: (file: Omit<DashboardFile, 'id'>) => void;
  onDeleteFile: (fileId: string) => void;
}

export default function FilesTab({
  files,
  onUploadFile,
  onDeleteFile
}: FilesTabProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [dragOver, setDragOver] = useState<boolean>(false);
  const [previewFile, setPreviewFile] = useState<DashboardFile | null>(null);

  const fileTypes = [
    { id: 'all', label: 'All Files' },
    { id: 'pdf', label: 'PDFs' },
    { id: 'figma', label: 'Figma Layouts' },
    { id: 'docx', label: 'Word Documents' },
    { id: 'zip', label: 'Zips & Code' },
    { id: 'video', label: 'Media & Demos' }
  ];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const uploadedFiles = Array.from(e.dataTransfer.files) as File[];
    
    if (uploadedFiles.length > 0) {
      uploadedFiles.forEach(f => {
        let detectedType: DashboardFile['type'] = 'pdf';
        if (f.name.endsWith('.fig')) detectedType = 'figma';
        else if (f.name.endsWith('.docx') || f.name.endsWith('.doc')) detectedType = 'docx';
        else if (f.name.endsWith('.zip') || f.name.endsWith('.rar')) detectedType = 'zip';
        else if (f.name.endsWith('.png') || f.name.endsWith('.jpg') || f.name.endsWith('.jpeg') || f.name.endsWith('.svg')) detectedType = 'png';
        else if (f.name.endsWith('.mp4') || f.name.endsWith('.mov') || f.name.endsWith('.webm')) detectedType = 'video';

        onUploadFile({
          name: f.name,
          size: `${(f.size / (1024 * 1024)).toFixed(1)} MB`,
          type: detectedType,
          date: 'Today',
          folder: 'Client Uploads'
        });
      });
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files ? Array.from(e.target.files) as File[] : [];
    if (selectedFiles.length > 0) {
      selectedFiles.forEach(f => {
        let detectedType: DashboardFile['type'] = 'pdf';
        if (f.name.endsWith('.fig')) detectedType = 'figma';
        else if (f.name.endsWith('.docx') || f.name.endsWith('.doc')) detectedType = 'docx';
        else if (f.name.endsWith('.zip') || f.name.endsWith('.rar')) detectedType = 'zip';
        else if (f.name.endsWith('.png') || f.name.endsWith('.jpg') || f.name.endsWith('.jpeg') || f.name.endsWith('.svg')) detectedType = 'png';
        else if (f.name.endsWith('.mp4') || f.name.endsWith('.mov') || f.name.endsWith('.webm')) detectedType = 'video';

        onUploadFile({
          name: f.name,
          size: `${(f.size / (1024 * 1024)).toFixed(1)} MB`,
          type: detectedType,
          date: 'Today',
          folder: 'Client Uploads'
        });
      });
    }
  };

  // Filter & Search Logic
  const filteredFiles = files.filter(f => {
    const matchesSearch = f.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (f.folder && f.folder.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = activeFilter === 'all' || f.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6 text-left">
      <div>
        <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mb-2">Workspace Deliverables Cabinet</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Download pristine wireframe PDFs, design system asset packs, configuration codes, and dynamic video briefings.</p>
      </div>

      {/* Search and Filters Bar */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch justify-between">
        {/* Search Input */}
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search files by name or folder..."
            className="w-full pl-11 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-xl text-xs font-semibold focus:outline-none focus:border-blue-500 text-slate-800 dark:text-white"
          />
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-1.5 items-center">
          {fileTypes.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-3 py-1.5 rounded-lg text-4xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-50 text-slate-600 dark:bg-slate-900 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Drag-Drop Zone */}
      <div 
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`p-8 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer text-center ${
          dragOver 
            ? 'border-blue-500 bg-blue-500/5' 
            : 'border-slate-200 dark:border-slate-800 bg-slate-50/20 dark:bg-slate-950/20 hover:bg-slate-50 dark:hover:bg-slate-950/40'
        }`}
      >
        <CloudUpload className="w-10 h-10 text-slate-400 mb-3 animate-bounce" />
        <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">Drag and Drop Brand Assets</span>
        <p className="text-[10px] text-slate-400 mb-4 max-w-sm leading-normal">
          Directly stream figma source mockups, wireframe pdfs, ZIP code bases, or MP4 recordings here up to 50MB.
        </p>

        <label className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-3xs uppercase tracking-wider rounded-lg transition-all cursor-pointer shadow-md">
          Browse Files Manually
          <input 
            type="file"
            multiple
            onChange={handleFileSelect}
            className="hidden"
          />
        </label>
      </div>

      {/* Files List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredFiles.length > 0 ? (
          filteredFiles.map(file => (
            <div 
              key={file.id} 
              className="p-4 bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] hover:border-blue-500/30 rounded-xl flex items-center justify-between gap-4 transition-all hover:shadow-xs group"
            >
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="p-2.5 bg-blue-500/10 text-blue-500 rounded-xl shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="overflow-hidden text-left">
                  <span className="text-xs font-bold text-slate-800 dark:text-white block truncate max-w-xs md:max-w-md">
                    {file.name}
                  </span>
                  <div className="flex items-center gap-1.5 mt-1 text-[9px] text-slate-400 font-mono">
                    <span className="uppercase font-bold text-blue-500">{file.type}</span>
                    <span>&bull;</span>
                    <span>{file.size}</span>
                    <span>&bull;</span>
                    <span className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-[8px] font-bold text-slate-500 truncate max-w-[90px]">
                      {file.folder || 'Root'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action shortcuts */}
              <div className="flex items-center gap-1.5 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                <button
                  type="button"
                  onClick={() => setPreviewFile(file)}
                  className="p-2 bg-slate-50 hover:bg-blue-500/10 text-slate-500 hover:text-blue-500 dark:bg-slate-900 rounded-lg border border-slate-200/50 dark:border-slate-800 transition-colors cursor-pointer"
                  title="Preview File"
                >
                  <Eye className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => alert(`Simulated Download of: ${file.name}`)}
                  className="p-2 bg-slate-50 hover:bg-emerald-500/10 text-slate-500 hover:text-emerald-500 dark:bg-slate-900 rounded-lg border border-slate-200/50 dark:border-slate-800 transition-colors cursor-pointer"
                  title="Download"
                >
                  <Download className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onDeleteFile(file.id)}
                  className="p-2 bg-slate-50 hover:bg-red-500/10 text-slate-500 hover:text-red-500 dark:bg-slate-900 rounded-lg border border-slate-200/50 dark:border-slate-800 transition-colors cursor-pointer"
                  title="Delete File"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-1 md:col-span-2 py-12 border border-dashed border-slate-150 dark:border-slate-850 rounded-xl text-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">No deliverables match query</span>
          </div>
        )}
      </div>

      {/* File Previewer Modal Popup */}
      <AnimatePresence>
        {previewFile && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-[#0D1117] border border-slate-100 dark:border-[#1F2937] w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col text-left"
            >
              {/* Header */}
              <div className="p-5 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-500/10 text-blue-500 rounded-xl">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-850 dark:text-white truncate max-w-md">{previewFile.name}</h4>
                    <p className="text-[10px] text-slate-400 mt-1">{previewFile.size} &bull; Published {previewFile.date}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setPreviewFile(null)}
                  className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Preview Body Area */}
              <div className="p-8 flex flex-col items-center justify-center min-h-[250px] bg-slate-50/30 dark:bg-slate-950/40 text-center space-y-4">
                
                {previewFile.type === 'png' ? (
                  <div className="space-y-4 w-full">
                    <div className="h-44 bg-linear-to-br from-indigo-500/20 to-purple-500/10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 overflow-hidden relative group">
                      <Sparkles className="w-8 h-8 text-indigo-500 animate-spin" />
                      <span className="absolute text-5xs uppercase tracking-widest font-black text-slate-400 bottom-2">Niaz High-Fidelity Rendering</span>
                    </div>
                    <p className="text-3xs text-slate-400 font-mono">Simulated Graphic View Layer - 100% vector scaling match.</p>
                  </div>
                ) : previewFile.type === 'pdf' ? (
                  <div className="space-y-3">
                    <FileText className="w-12 h-12 text-red-500 mx-auto" />
                    <span className="text-xs font-bold text-slate-800 dark:text-white block">Document Layout Reader Sandbox</span>
                    <p className="text-3xs text-slate-400 max-w-sm">This PDF is protected and cryptographically signed. You can download the physical file to view signatures and sitemaps.</p>
                    <button 
                      onClick={() => alert('Downloading PDF file')}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-3xs uppercase tracking-wider rounded-lg shadow"
                    >
                      Download Original PDF
                    </button>
                  </div>
                ) : previewFile.type === 'figma' ? (
                  <div className="space-y-3">
                    <svg className="w-12 h-12 mx-auto" viewBox="0 0 38 57" fill="none">
                      <path d="M19 0C13.75 0 9.5 4.25 9.5 9.5C9.5 14.75 13.75 19 19 19C24.25 19 28.5 14.75 28.5 9.5C28.5 4.25 24.25 0 19 0Z" fill="#F24E1E"/>
                      <path d="M9.5 28.5C9.5 23.25 13.75 19 19 19H28.5V38H19C13.75 38 9.5 33.75 9.5 28.5Z" fill="#A259FF"/>
                      <path d="M19 38C13.75 38 9.5 42.25 9.5 47.5C9.5 52.75 13.75 57 19 57C24.25 57 28.5 52.75 28.5 47.5V38H19Z" fill="#1ABCFE"/>
                    </svg>
                    <span className="text-xs font-bold text-slate-800 dark:text-white block">Figma Live Design Interaction Embed</span>
                    <p className="text-3xs text-slate-400 max-w-sm">Synchronized design canvas active. Click below to inspect layout grids, typography scales, colors and component vectors directly on Figma console.</p>
                    <a 
                      href="https://figma.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-3xs uppercase tracking-wider rounded-lg inline-flex items-center gap-1 shadow"
                    >
                      Open Figma Workspace <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Info className="w-12 h-12 text-slate-400 mx-auto" />
                    <span className="text-xs font-bold text-slate-800 dark:text-white block">Staging Environment Container</span>
                    <p className="text-3xs text-slate-400 max-w-sm">This resource format ({previewFile.type.toUpperCase()}) cannot be directly parsed in-browser. Please download to execute or inspect local configs.</p>
                    <button 
                      onClick={() => alert('Downloading file')}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-3xs uppercase tracking-wider rounded-lg shadow"
                    >
                      Download File Package
                    </button>
                  </div>
                )}

              </div>

              {/* Footer info banner */}
              <div className="p-4 bg-slate-50 dark:bg-slate-900/40 text-center text-4xs text-slate-400 font-mono">
                SHA-256 Decryption Verified &bull; Secured with TLS 1.3 Key Exchanges
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
