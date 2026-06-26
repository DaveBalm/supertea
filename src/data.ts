import { PackageOption } from './types';

export const PACKAGES: PackageOption[] = [
  {
    id: '1-pack',
    name: '1 Pack (Trial Pack)',
    badge: 'Starter Cleanse',
    quantity: 1,
    originalPrice: 25000,
    salePrice: 15000,
    saveAmount: 10000,
    description: 'Perfect for a quick system reset and clearing mild body heat.',
    isPopular: false,
    imageAlt: 'One pack of Dr. David Super Tea',
    gift: '1 Piece of DAVID BALM (Must-have non-mentholated family balm)'
  },
  {
    id: '2-packs',
    name: '2 Packs (Recommended Treatment)',
    badge: 'Most Popular',
    quantity: 2,
    originalPrice: 50000,
    salePrice: 27000,
    saveAmount: 23000,
    description: 'Recommended full course to completely flush recurring parasites, typhoid, and restore optimal blood circulation.',
    isPopular: true,
    imageAlt: 'Two packs of Dr. David Super Tea (Full Course)',
    gift: '2 Pieces of DAVID BALM (Must-have non-mentholated family balm)'
  },
  {
    id: '3-packs',
    name: '3 Packs (Family Protection Pack)',
    badge: 'Best Value',
    quantity: 3,
    originalPrice: 75000,
    salePrice: 38000,
    saveAmount: 37000,
    description: 'Complete immune shield for the entire household. Keep your family permanently safe from recurring infections.',
    isPopular: false,
    imageAlt: 'Three packs of Dr. David Super Tea (Family Pack)',
    gift: '1 DOZEN (12 Pieces) of DAVID BALM (Must-have non-mentholated family balm)'
  }
];

export const CORE_BENEFITS = [
  {
    title: 'Destroys Malaria & Typhoid Parasites',
    description: 'Clears stubborn, recurring infections from your bloodstream and stops them from coming back.',
    iconName: 'ShieldAlert'
  },
  {
    title: 'Deep Cellular Cleansing',
    description: 'Flushes out accumulated waste, chemicals, and toxins from your liver, kidneys, and digestive tract.',
    iconName: 'Sparkles'
  },
  {
    title: 'Relieves Chronic Pains & Numbness',
    description: 'Restores smooth, unrestricted blood circulation to eliminate tingling, stiffness, joint aches, and leg pains.',
    iconName: 'Flame'
  },
  {
    title: 'Cools Down Internal Heat',
    description: 'Targets and balances abnormal core body heat, helping you sleep like a baby and wake up refreshed.',
    iconName: 'ThermometerSnowflake'
  },
  {
    title: 'Explosive Energy & Immune Boost',
    description: 'Rebuilds your body\'s natural defenses so you stop falling sick every time the weather changes.',
    iconName: 'Zap'
  }
];

export const PAIN_POINTS = [
  {
    question: 'Are you sick and tired of swallowing heavy synthetic pills?',
    text: 'Do you take medication every few weeks, only for malaria or typhoid to return the moment you stop?'
  },
  {
    question: 'Are you living with constant body aches and numbness?',
    text: 'That persistent tingling sensation in your hands or feet is a signal that your blood circulation is heavily restricted.'
  },
  {
    question: 'Do you feel a burning sensation of "internal heat"?',
    text: 'It is not just exhaustion—it is a clear sign that your organs are overloaded and your body is desperately crying out for a deep system cleanse.'
  }
];

export const FAQS = [
  {
    question: 'How do I take Dr. David Super Tea?',
    answer: 'Simply steep one tea bag in hot water for 5-10 minutes. Drink it warm, preferably morning and night for best results. Each pack contains instructions.'
  },
  {
    question: 'Are there any side effects?',
    answer: 'No. Dr. David Super Tea is 100% plant-based, made with organic herbs, and has zero synthetic chemicals or additives. It is completely gentle on the stomach.'
  },
  {
    question: 'How long does delivery take?',
    answer: 'We deliver within 24 to 48 hours. Delivery is fast and secure. You pay only when you receive your package.'
  },
  {
    question: 'Can I call someone for more details?',
    answer: 'Yes! Our direct health representatives are ready to answer your questions. Call or WhatsApp us directly at 08135417227.'
  }
];
