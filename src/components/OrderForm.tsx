import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Package, 
  User, 
  Phone, 
  MapPin, 
  ShoppingBag, 
  Tag, 
  Check, 
  HelpCircle,
  Clock,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';
import { OrderFormData, PackageOption, OrderRecord } from '../types';
import { PACKAGES } from '../data';

interface OrderFormProps {
  onSubmitOrder: (order: OrderRecord) => void;
}

export default function OrderForm({ onSubmitOrder }: OrderFormProps) {
  // Select 2 packs as default (Recommended/Most Popular)
  const [selectedPackageId, setSelectedPackageId] = useState<string>('2-packs');
  const [formData, setFormData] = useState<OrderFormData>({
    fullName: '',
    phoneNumber: '',
    altPhoneNumber: '',
    deliveryAddress: '',
    packageId: '2-packs'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof OrderFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedPackage = PACKAGES.find(p => p.id === selectedPackageId) || PACKAGES[1];

  // Format currency
  const formatCurrency = (amount: number) => {
    return '₦' + amount.toLocaleString('en-NG');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error as customer types
    if (errors[name as keyof OrderFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handlePackageSelect = (pkgId: string) => {
    setSelectedPackageId(pkgId);
    setFormData(prev => ({ ...prev, packageId: pkgId }));
  };

  const validateForm = (): boolean => {
    const tempErrors: Partial<Record<keyof OrderFormData, string>> = {};
    
    if (!formData.fullName.trim()) {
      tempErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().split(' ').length < 2) {
      tempErrors.fullName = 'Please enter your full first and last name';
    }

    const phoneRegex = /^[0-9+() \-]{10,20}$/;
    
    if (!formData.phoneNumber.trim()) {
      tempErrors.phoneNumber = 'Active phone number is required';
    } else if (!phoneRegex.test(formData.phoneNumber.trim())) {
      tempErrors.phoneNumber = 'Please enter a valid active phone number';
    }

    if (formData.altPhoneNumber.trim() && !phoneRegex.test(formData.altPhoneNumber.trim())) {
      tempErrors.altPhoneNumber = 'Please enter a valid alternative phone number';
    }

    if (!formData.deliveryAddress.trim()) {
      tempErrors.deliveryAddress = 'Full Delivery Address is required';
    } else if (formData.deliveryAddress.trim().length < 15) {
      tempErrors.deliveryAddress = 'Please include State and Local Government Area (LGA) for delivery';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      // Scroll to error
      const firstErrorKey = Object.keys(errors)[0];
      if (firstErrorKey) {
        document.getElementsByName(firstErrorKey)[0]?.focus();
      }
      return;
    }

    setIsSubmitting(true);

    // Simulate 1.5s server-side processing delay for ultimate realism
    setTimeout(() => {
      const uniqueId = 'DDS-' + Math.floor(100000 + Math.random() * 900000);
      const newOrder: OrderRecord = {
        id: uniqueId,
        formData: formData,
        timestamp: new Date().toISOString(),
        status: 'pending',
        packageDetails: selectedPackage
      };
      
      onSubmitOrder(newOrder);
      setIsSubmitting(false);
    }, 15000 / 10); // 1.5 seconds
  };

  return (
    <section id="order-form-section" className="py-16 px-4 bg-brand-50/50 border-t border-b border-brand-100">
      <div className="max-w-4xl mx-auto">
        
        {/* Psychological Filtering Warning Header */}
        <div className="text-center mb-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200 animate-pulse">
            <Clock className="w-3.5 h-3.5" />
            MUST READ BEFORE PLACING ORDER
          </span>
          <h2 className="text-2xl sm:text-3.5xl font-serif text-brand-950 font-bold tracking-tight">
            Secure Your Package Today
          </h2>
          <div className="bg-amber-50 rounded-2xl p-5 max-w-2xl mx-auto border border-amber-200/80 text-center shadow-xs">
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-semibold">
              ⚠️ Please <span className="underline decoration-2 text-rose-700">ONLY</span> fill out the form below if you are fully ready to receive and pay for your order within the next 24 to 48 hours. 
            </p>
            <p className="text-[11px] sm:text-xs text-amber-800 mt-1.5 leading-relaxed">
              We incur high courier costs for dispatched packages. If you are traveling or will not have the funds ready, please hold on and order when you are 100% prepared.
            </p>
          </div>
        </div>

        {/* Outer Form Box */}
        <div className="bg-white rounded-3xl border border-brand-100 shadow-xl overflow-hidden grid lg:grid-cols-12">
          
          {/* Package Selector (Column 1) */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-brand-50/20 border-b lg:border-b-0 lg:border-r border-brand-100 space-y-6">
            <div className="flex items-center gap-2 border-b border-brand-100 pb-3">
              <ShoppingBag className="w-5 h-5 text-brand-700" />
              <h3 className="text-base sm:text-lg font-bold text-brand-900">
                Step 1: Select Your Package
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {PACKAGES.map((pkg) => (
                <div
                  id={`pkg-card-${pkg.id}`}
                  key={pkg.id}
                  onClick={() => handlePackageSelect(pkg.id)}
                  className={`relative p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer text-left select-none ${
                    selectedPackageId === pkg.id
                      ? 'border-brand-600 bg-brand-50/60 shadow-md ring-1 ring-brand-600/30'
                      : 'border-brand-100 bg-white hover:border-brand-300 hover:shadow-xs'
                  }`}
                >
                  {/* Popular Ribbon */}
                  {pkg.isPopular && (
                    <span className="absolute -top-3 right-4 bg-rose-600 text-white text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase shadow-sm">
                      Most Popular Course
                    </span>
                  )}

                  <div className="flex items-start justify-between gap-4">
                    {/* Checkbox button design */}
                    <div className="flex gap-3">
                      <div className={`mt-0.5 w-5.5 h-5.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                        selectedPackageId === pkg.id 
                          ? 'border-brand-600 bg-brand-600 text-white' 
                          : 'border-brand-300 bg-white'
                      }`}>
                        {selectedPackageId === pkg.id && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>

                      <div className="space-y-1">
                        <span className="text-xs font-black uppercase text-brand-600 tracking-wider block">
                          {pkg.badge}
                        </span>
                        <h4 className="text-base font-bold text-brand-950 font-serif leading-none">
                          {pkg.name}
                        </h4>
                        <p className="text-xs text-brand-600 leading-normal max-w-sm">
                          {pkg.description}
                        </p>
                        {pkg.gift && (
                          <div className="mt-2.5 inline-flex items-center gap-1.5 bg-rose-50 text-rose-800 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-lg border border-rose-100 animate-pulse">
                            <span>🎁</span>
                            <span>FREE GIFT: <strong className="font-extrabold">{pkg.gift.split(' (')[0]}</strong></span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Price section */}
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs text-brand-400 line-through">
                        {formatCurrency(pkg.originalPrice)}
                      </div>
                      <div className="text-lg font-black text-brand-950">
                        {formatCurrency(pkg.salePrice)}
                      </div>
                      <span className="inline-block bg-emerald-50 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5 rounded border border-emerald-100">
                        SAVE {formatCurrency(pkg.saveAmount)}
                      </span>
                    </div>
                  </div>

                  {/* Gift explanation detailed text on selected card */}
                  {selectedPackageId === pkg.id && pkg.gift && (
                    <div className="mt-3.5 pt-3 border-t border-brand-200/40 text-[11px] text-rose-700 font-semibold flex items-start gap-1.5 bg-rose-50/50 -mx-5 -mb-5 p-4 rounded-b-2xl">
                      <span className="text-sm">🎁</span>
                      <div>
                        <span className="uppercase font-black text-[10px] tracking-wider bg-rose-600 text-white px-1.5 py-0.5 rounded mr-1">OFFER ACTIVE</span>
                        Includes <span className="underline decoration-wavy decoration-rose-400 font-bold">{pkg.gift}</span> for complete internal and external cellular recovery.
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Sourcing Notice */}
            <div className="flex gap-2.5 items-start p-4 rounded-xl bg-brand-50 border border-brand-100 text-xs text-brand-700">
              <Info className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
              <p className="leading-relaxed">
                All prices include free courier delivery and a complimentary natural wellness guide booklet. Pay cash or bank transfer only after you receive and inspect your package.
              </p>
            </div>
          </div>

          {/* Delivery Form (Column 2) */}
          <form onSubmit={handleSubmit} className="lg:col-span-5 p-6 sm:p-8 space-y-6 bg-brand-900 text-white rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="flex items-center gap-2 border-b border-brand-800 pb-3 relative z-10">
              <User className="w-5 h-5 text-brand-300" />
              <h3 className="text-base sm:text-lg font-bold text-white font-serif">
                Step 2: Delivery Details
              </h3>
            </div>

            <div className="space-y-4 relative z-10">
              
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-200 block">
                  Full Name <span className="text-rose-400">*</span>
                </label>
                <div className="relative rounded-xl shadow-xs">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Samuel Adebayo"
                    className={`block w-full pl-10 pr-3 py-3 text-sm bg-brand-950/50 rounded-xl border transition-all outline-hidden text-white placeholder:text-brand-500 ${
                      errors.fullName 
                        ? 'border-rose-400 focus:border-rose-300 focus:ring-1 focus:ring-rose-400/30' 
                        : 'border-brand-800 focus:border-brand-400 focus:bg-brand-950/70'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-[11px] text-rose-300 font-medium">{errors.fullName}</p>
                )}
              </div>

              {/* Active Phone Number */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-200 block">
                  Active Phone Number <span className="text-rose-400">*</span>
                </label>
                <div className="relative rounded-xl shadow-xs">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="e.g. 08135417227"
                    className={`block w-full pl-10 pr-3 py-3 text-sm bg-brand-950/50 rounded-xl border transition-all outline-hidden text-white placeholder:text-brand-500 ${
                      errors.phoneNumber 
                        ? 'border-rose-400 focus:border-rose-300 focus:ring-1 focus:ring-rose-400/30' 
                        : 'border-brand-800 focus:border-brand-400 focus:bg-brand-950/70'
                    }`}
                  />
                </div>
                <p className="text-[10px] text-brand-300 italic">WhatsApp number is highly preferred for shipping updates.</p>
                {errors.phoneNumber && (
                  <p className="text-[11px] text-rose-300 font-medium">{errors.phoneNumber}</p>
                )}
              </div>

              {/* Alternative Phone Number */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-200 block">
                  Alternative Phone Number <span className="text-brand-400">(Optional)</span>
                </label>
                <div className="relative rounded-xl shadow-xs">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-500" />
                  <Phone className="w-4 h-4 absolute top-3.5 left-3.5 text-brand-400/80" />
                  <input
                    type="tel"
                    name="altPhoneNumber"
                    value={formData.altPhoneNumber}
                    onChange={handleInputChange}
                    placeholder="e.g. 08023456789"
                    className="block w-full pl-10 pr-3 py-3 text-sm bg-brand-950/50 rounded-xl border border-brand-800 transition-all outline-hidden text-white placeholder:text-brand-500 focus:border-brand-400 focus:bg-brand-950/70"
                  />
                </div>
                {errors.altPhoneNumber && (
                  <p className="text-[11px] text-rose-300 font-medium">{errors.altPhoneNumber}</p>
                )}
              </div>

              {/* Delivery Address */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-200 block">
                  Full Delivery Address <span className="text-rose-400">*</span>
                </label>
                <div className="relative rounded-xl shadow-xs">
                  <div className="absolute top-3.5 left-3.5 pointer-events-none text-brand-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <textarea
                    name="deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Street Name, House Number, State, and LGA clearly"
                    className={`block w-full pl-10 pr-3 py-2.5 text-sm bg-brand-950/50 rounded-xl border transition-all outline-hidden text-white placeholder:text-brand-500 resize-none ${
                      errors.deliveryAddress 
                        ? 'border-rose-400 focus:border-rose-300 focus:ring-1 focus:ring-rose-400/30' 
                        : 'border-brand-800 focus:border-brand-400 focus:bg-brand-950/70'
                    }`}
                  />
                </div>
                {errors.deliveryAddress && (
                  <p className="text-[11px] text-rose-300 font-medium">{errors.deliveryAddress}</p>
                )}
              </div>

            </div>

            {/* Price Preview Footer Card */}
            <div className="bg-brand-950/50 rounded-2xl p-4 border border-brand-800 space-y-1 relative z-10">
              <div className="flex justify-between items-center text-xs text-brand-300">
                <span>Selected Pack:</span>
                <span className="font-semibold text-white">{selectedPackage.name}</span>
              </div>
              {selectedPackage.gift && (
                <div className="flex justify-between items-center text-[11px] text-rose-300">
                  <span>Included Free Gift:</span>
                  <span className="font-bold flex items-center gap-1">🎁 {selectedPackage.gift.split(' (')[0]}</span>
                </div>
              )}
              <div className="flex justify-between items-center font-bold text-white text-base sm:text-lg">
                <span className="text-brand-200">Total Amount Due:</span>
                <span className="text-emerald-400 font-black">{formatCurrency(selectedPackage.salePrice)}</span>
              </div>
              <span className="block text-[10px] text-emerald-300 font-semibold text-right">
                ✓ Free Shipping & Pay on Delivery Active
              </span>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative w-full bg-emerald-400 hover:bg-emerald-300 disabled:opacity-80 text-brand-950 font-black text-sm sm:text-base py-4 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-emerald-400/20 flex items-center justify-center gap-2.5 overflow-hidden cursor-pointer relative z-10"
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.div 
                    key="submitting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <span className="w-5 h-5 rounded-full border-2 border-brand-950/30 border-t-brand-950 animate-spin"></span>
                    <span>SUBMITTING ORDER SECURELY...</span>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-2"
                  >
                    <Zap className="w-5 h-5 text-brand-950 fill-current animate-pulse" />
                    <span className="uppercase tracking-tight text-xs sm:text-sm">
                      YES! PURIFY MY SYSTEM & RESTORE MY HEALTH
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            
            <div className="text-center text-[10px] text-brand-300 font-medium flex items-center justify-center gap-1 relative z-10">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
              <span>SSL Secure 256-Bit Order Encryption</span>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
