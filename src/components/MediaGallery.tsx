import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Image, Video, ShieldCheck, HelpCircle, ExternalLink, RefreshCw } from 'lucide-react';

interface MediaItem {
  id: string; // Google Drive File ID or reference
  title: string;
  type: 'image' | 'video';
  description: string;
  thumbnailUrl?: string;
  isExternalUrl?: boolean;
  externalUrl?: string;
  isFlowVideo?: boolean;
}

// Default placeholders loaded from typical shared assets or illustrative items
// The customer can easily swap these IDs or we show them exactly how to customize it!
const INITIAL_MEDIA_ITEMS: MediaItem[] = [
  {
    id: "flow-video-1",
    title: "Official Restorative Vitality Guide",
    type: "video",
    description: "Watch the traditional guidance on healing organic wellness and restoring complete vitality.",
    thumbnailUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    isExternalUrl: true,
    externalUrl: "https://labs.google/fx/tools/flow/shared/video/cb64e3de-a395-404e-9cb4-b3ecf6d1a913",
    isFlowVideo: true
  },
  {
    id: "17X8X07H7oXm_k7uE6hK_Y7u_uW0X7U7A",
    title: "Verified Customer Success Story",
    type: "video",
    description: "Grace sharing her experience with continuous body pains and stiffness."
  },
  {
    id: "1X7K8j9o_L-h7m_Wk7U_Y8t_oH0X7Y7Z",
    title: "100% Organic Sourcing & Sacks",
    type: "image",
    description: "Sacks of raw, freshly harvested leaves and botanical roots prior to formulation."
  },
  {
    id: "1Y7H8m9o_K-j7m_Xk7U_Z8u_pH0Y7Z7A",
    title: "Pure Golden Therapeutic Tea Cup",
    type: "image",
    description: "Freshly brewed hot Super Tea showing its rich therapeutic golden color."
  }
];

export default function MediaGallery() {
  const [activeTab, setActiveTab] = useState<'all' | 'video' | 'image'>('all');
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  // Filtered items
  const filteredItems = INITIAL_MEDIA_ITEMS.filter(item => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  // Helper to generate Google Drive direct link for images (using the official high-performance Googleusercontent CDN)
  const getDriveImageUrl = (id: string) => {
    return `https://lh3.googleusercontent.com/d/${id}=s800`;
  };

  // Helper to generate Google Drive embed player link for videos
  const getDriveVideoEmbedUrl = (id: string) => {
    return `https://drive.google.com/file/d/${id}/preview`;
  };

  return (
    <section id="media-showcase" className="py-16 px-4 bg-white border-t border-brand-100 relative">
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#16423c_1px,transparent_1px)] [background-size:40px_40px]"></div>
      
      <div className="max-w-5xl mx-auto relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200">
            <Video className="w-3.5 h-3.5 text-brand-600 animate-pulse" />
            Media Showcase & Demos
          </span>
          <h2 className="text-2xl sm:text-3.5xl font-serif text-brand-950 font-bold tracking-tight">
            See the Power of Dr. David Super Tea
          </h2>
          <p className="text-xs sm:text-sm text-brand-600 max-w-xl mx-auto leading-relaxed">
            We host our authentic product photography and customer video reviews directly on Google Drive. Below is our live interactive player.
          </p>
        </div>

        {/* Informative Guidance box explaining how to integrate their own */}
        <div className="bg-brand-50/70 border border-brand-200 rounded-2xl p-5 max-w-3xl mx-auto">
          <div className="flex gap-3 items-start text-xs sm:text-sm">
            <div className="bg-brand-900 text-white rounded-full p-1.5 font-bold text-[10px] sm:text-xs">
              💡
            </div>
            <div className="space-y-1 text-brand-900">
              <p className="font-bold">How to display your specific Drive files:</p>
              <p className="text-xs text-brand-700 leading-relaxed">
                1. Make sure your Google Drive files/folder are shared as <strong className="text-brand-900">"Anyone with the link can view"</strong>.<br />
                2. Copy the file IDs from your Google Drive links (e.g. from <code>https://drive.google.com/file/d/<strong className="text-rose-700">FILE_ID</strong>/view</code>).<br />
                3. The applet automatically converts these IDs into high-performance CDN images and streaming video players instantly!
              </p>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center gap-2">
          {(['all', 'video', 'image'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all uppercase tracking-wider cursor-pointer border ${
                activeTab === tab
                  ? 'bg-brand-900 text-white border-brand-900 shadow-md'
                  : 'bg-brand-50/50 text-brand-700 border-brand-100 hover:bg-brand-100'
              }`}
            >
              {tab === 'all' ? 'All Media' : tab === 'video' ? '📺 Videos' : '📸 Photos'}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-brand-50/30 rounded-2xl border border-brand-100/60 overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              
              {/* Media Preview Container */}
              <div className="relative aspect-video bg-brand-950 overflow-hidden flex items-center justify-center">
                {item.type === 'video' ? (
                  /* Video Card design */
                  <>
                    <img 
                      src={item.thumbnailUrl || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600"}
                      alt={item.title}
                      className="object-cover w-full h-full opacity-60 group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-brand-950/20"></div>
                    <button
                      onClick={() => setSelectedVideoId(item.id)}
                      className="absolute w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-brand-950 flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer z-10"
                    >
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </button>
                    {item.isFlowVideo ? (
                      <span className="absolute top-3 left-3 bg-indigo-900/95 text-[10px] font-black px-2.5 py-1 rounded-full text-white flex items-center gap-1.5 border border-indigo-400/30 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Labs Flow Shared Video
                      </span>
                    ) : (
                      <span className="absolute top-3 left-3 bg-brand-900/90 text-[10px] font-bold px-2 py-1 rounded text-white flex items-center gap-1">
                        <Video className="w-3 h-3 text-emerald-400" />
                        PLAY VIDEO
                      </span>
                    )}
                  </>
                ) : (
                  /* Image Card design */
                  <>
                    <img 
                      src={getDriveImageUrl(item.id)}
                      onError={(e) => {
                        // Fallback image in case the ID is a placeholder
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=600";
                      }}
                      alt={item.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                      onClick={() => setSelectedImageId(item.id)}
                    />
                    <span className="absolute top-3 left-3 bg-brand-900/90 text-[10px] font-bold px-2 py-1 rounded text-white flex items-center gap-1">
                      <Image className="w-3 h-3 text-emerald-400" />
                      VIEW PHOTO
                    </span>
                  </>
                )}
              </div>

              {/* Media Card Info */}
              <div className="p-4 space-y-1 border-t border-brand-100 bg-white">
                <h4 className="font-serif font-bold text-brand-950 text-sm sm:text-base">
                  {item.title}
                </h4>
                <p className="text-xs text-brand-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Lightbox / Video Player Modal */}
        <AnimatePresence>
          {selectedVideoId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-950/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedVideoId(null)}
            >
              <button 
                className="absolute top-4 right-4 text-white hover:text-brand-300 font-bold text-2xl z-50 cursor-pointer"
                onClick={() => setSelectedVideoId(null)}
              >
                ✕ Close
              </button>
              
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="w-full max-w-4xl bg-brand-950 rounded-2xl overflow-hidden aspect-video border border-brand-800 shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src={
                    INITIAL_MEDIA_ITEMS.find(m => m.id === selectedVideoId)?.isExternalUrl 
                      ? INITIAL_MEDIA_ITEMS.find(m => m.id === selectedVideoId)?.externalUrl 
                      : getDriveVideoEmbedUrl(selectedVideoId || "")
                  }
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* Direct Link Footer Overlay for Flow Video */}
                {INITIAL_MEDIA_ITEMS.find(m => m.id === selectedVideoId)?.isExternalUrl && (
                  <div className="absolute bottom-4 right-4 z-50">
                    <a
                      href={INITIAL_MEDIA_ITEMS.find(m => m.id === selectedVideoId)?.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-indigo-900/90 text-white border border-indigo-500/30 hover:bg-indigo-800 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-md"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                      Open Full Video on Google Labs Flow
                    </a>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}

          {selectedImageId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-950/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImageId(null)}
            >
              <button 
                className="absolute top-4 right-4 text-white hover:text-brand-300 font-bold text-2xl z-50 cursor-pointer"
                onClick={() => setSelectedImageId(null)}
              >
                ✕ Close
              </button>
              
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border border-brand-800 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={getDriveImageUrl(selectedImageId)}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=1200";
                  }}
                  alt="Full view"
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
