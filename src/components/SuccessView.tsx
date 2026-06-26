import { motion } from 'motion/react';
import { CheckCircle2, MessageSquare, Phone, Calendar, ArrowLeft, Truck, Package, HeartPulse } from 'lucide-react';
import { OrderRecord } from '../types';

interface SuccessViewProps {
  order: OrderRecord;
  onReset: () => void;
}

export default function SuccessView({ order, onReset }: SuccessViewProps) {
  const { fullName, phoneNumber, altPhoneNumber, deliveryAddress } = order.formData;
  const pkg = order.packageDetails;
  
  // Format price in Naira
  const formatCurrency = (amount: number) => {
    return '₦' + amount.toLocaleString('en-NG');
  };

  // Generate WhatsApp custom message
  const whatsappNumber = '2348135417227'; // Formatted without leading 0 for API
  const messageText = `Hello, I just placed an order for Dr. David Super Tea.\n\n*ORDER DETAILS:*\n- *Order ID:* #${order.id}\n- *Full Name:* ${fullName}\n- *Phone:* ${phoneNumber}\n${altPhoneNumber ? `- *Alt Phone:* ${altPhoneNumber}\n` : ''}- *Address:* ${deliveryAddress}\n- *Selected Package:* ${pkg.name}\n- *Total Amount:* ${formatCurrency(pkg.salePrice)} (Pay on Delivery)\n\nPlease confirm my order for immediate dispatch!`;
  
  const encodedMessage = encodeURIComponent(messageText);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-2xl mx-auto bg-white rounded-3xl border border-brand-100 shadow-xl overflow-hidden my-6"
    >
      {/* Visual Header */}
      <div className="bg-gradient-to-br from-brand-800 to-brand-900 text-brand-50 p-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-4"
        >
          <CheckCircle2 className="w-10 h-10 text-emerald-400" />
        </motion.div>
        
        <h2 className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-white leading-none">
          Order Successfully Received!
        </h2>
        <p className="text-brand-300 text-xs sm:text-sm mt-2 max-w-md mx-auto">
          Thank you for choosing Dr. David Super Tea. Your journey to vibrant health has officially started.
        </p>

        <div className="mt-4 inline-block bg-brand-950/40 text-[10px] sm:text-xs font-mono font-bold tracking-wider px-3.5 py-1.5 rounded-full border border-brand-700/50">
          ORDER REFERENCE ID: #{order.id}
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        
        {/* FAST TRACK WHATSAPP CALL TO ACTION */}
        <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-5 text-center space-y-4 shadow-sm">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full animate-bounce">
              ⚡ Action Required for Immediate Dispatch
            </span>
          </div>
          <h3 className="text-sm sm:text-base font-bold text-brand-950 leading-snug">
            Want us to skip the waiting line and dispatch your order today?
          </h3>
          <p className="text-xs text-brand-700 max-w-md mx-auto">
            Click the button below to send your order reference directly to our warehouse on WhatsApp. This ensures your package leaves with today's early dispatch batch!
          </p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 w-full bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-emerald-600/10 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            CLICK HERE TO CONFIRM ON WHATSAPP
          </a>
        </div>

        {/* Fulfillment Pipeline Simulator */}
        <div className="bg-brand-50/40 rounded-2xl p-5 border border-brand-100/50 space-y-4">
          <h4 className="text-xs uppercase font-black text-brand-800 tracking-wider flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-brand-600" />
            Estimated Delivery Timeline
          </h4>
          
          <div className="grid grid-cols-3 gap-2 relative">
            {/* Connected line background */}
            <div className="absolute top-[18px] left-[15%] right-[15%] h-0.5 bg-brand-200 z-0"></div>
            
            <div className="text-center z-10 flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-xs border-2 border-white shadow-xs">
                <Package className="w-4.5 h-4.5" />
              </div>
              <span className="text-[10px] font-bold text-brand-900 mt-2 block">Order Placed</span>
              <span className="text-[9px] text-brand-500 mt-0.5 block">Just now</span>
            </div>

            <div className="text-center z-10 flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-xs border-2 border-white shadow-xs animate-pulse">
                <Truck className="w-4.5 h-4.5" />
              </div>
              <span className="text-[10px] font-bold text-brand-700 mt-2 block">Processing</span>
              <span className="text-[9px] text-brand-500 mt-0.5 block">Within 3 hours</span>
            </div>

            <div className="text-center z-10 flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-brand-100 text-brand-400 flex items-center justify-center font-bold text-xs border-2 border-white shadow-xs">
                <HeartPulse className="w-4.5 h-4.5" />
              </div>
              <span className="text-[10px] font-bold text-brand-400 mt-2 block">Delivery</span>
              <span className="text-[9px] text-brand-500 mt-0.5 block">24 - 48 hours</span>
            </div>
          </div>
        </div>

        {/* Invoice Summary */}
        <div className="border border-brand-100 rounded-2xl overflow-hidden shadow-xs bg-white">
          <div className="bg-brand-50/70 px-4 py-3 border-b border-brand-100 flex justify-between items-center">
            <span className="text-xs font-bold text-brand-900 uppercase tracking-wider">Official Invoice Summary</span>
            <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-sm">Pay On Delivery (POD)</span>
          </div>
          
          <div className="p-4 space-y-3.5 text-xs sm:text-sm">
            <div className="flex justify-between pb-2 border-b border-dashed border-brand-100 text-brand-600">
              <span>Customer Name:</span>
              <strong className="text-brand-900">{fullName}</strong>
            </div>
            <div className="flex justify-between pb-2 border-b border-dashed border-brand-100 text-brand-600">
              <span>Active Phone:</span>
              <strong className="text-brand-900">{phoneNumber}</strong>
            </div>
            {altPhoneNumber && (
              <div className="flex justify-between pb-2 border-b border-dashed border-brand-100 text-brand-600">
                <span>Alternative Phone:</span>
                <strong className="text-brand-900">{altPhoneNumber}</strong>
              </div>
            )}
            <div className="flex justify-between pb-2 border-b border-dashed border-brand-100 text-brand-600 items-start">
              <span>Delivery Address:</span>
              <strong className="text-brand-900 text-right max-w-[65%] leading-relaxed">{deliveryAddress}</strong>
            </div>
            <div className="flex justify-between pb-2 border-b border-dashed border-brand-100 text-brand-600">
              <span>Selected Package:</span>
              <span className="text-brand-900 font-semibold">{pkg.name}</span>
            </div>
            <div className="flex justify-between pt-2 text-sm sm:text-base text-brand-950 font-black">
              <span className="text-brand-700">Total Amount Due:</span>
              <span className="text-brand-900 text-lg">{formatCurrency(pkg.salePrice)}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between text-xs text-brand-500 pt-4 border-t border-brand-100">
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-brand-400" />
            <span>Need assistance? Call or WhatsApp support at <strong className="text-brand-700">08135417227</strong></span>
          </div>
          <button 
            onClick={onReset}
            className="flex items-center gap-1 text-brand-600 font-semibold hover:text-brand-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Go back to landing page
          </button>
        </div>

      </div>
    </motion.div>
  );
}
