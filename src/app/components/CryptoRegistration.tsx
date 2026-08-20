import { ArrowRight, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import screen1 from 'figma:asset/528cec0491c29235afb6042f8c9b8964706af4c1.png';
import screen2 from 'figma:asset/ad404ff5b1069af9efc4158f2792579125cc2ceb.png';
import screen3 from 'figma:asset/5e7a0754f89054c350d562aa004e6f2a814f37e0.png';
import screen4 from 'figma:asset/6cef5211235752fe0e634ce345a4aaf7f2ed526d.png';
import screen5 from 'figma:asset/607e288882712166130c1eb7b9ce27658bf3321d.png';
import onboardingScreens from 'figma:asset/25de29f522023ecee95086d8285f5298b368b3b0.png';
import recoveryScreens from 'figma:asset/c73e920b16b462d920fc95122c271ff5134c16bf.png';
import authenticationScreens from 'figma:asset/11503c47c98784d52662b83879a97cb082d691e9.png';
import educationScreens from 'figma:asset/625aea73f3df359d249b5422989795e94f1b9042.png';
import mainScreens from 'figma:asset/0b8b57ba9e5dd67be09dd3538fb8fa235b983934.png';
import walletConnectScreens from 'figma:asset/0f853ea77ae72a72f8242111c63774ede3c91d2e.png';
import cryptoDetailScreens from 'figma:asset/def378330106bf4f451c623669cbab197bc9b4a7.png';
import sendScreens from 'figma:asset/4b7e2e2818be272fc58d09b6908072f0c47c17b6.png';
import notificationsScreens from 'figma:asset/9ed30aa237bb0598ed39437de07f0abf5833c100.png';
import exchangeScreens from 'figma:asset/43b17aee649db36c27c77474646f3614606294f3.png';
import receiveScreens from 'figma:asset/acd830a7352a58b84b391f9be0139722775cadd8.png';
import stakingScreens from 'figma:asset/2a40e662f601673fe552aaf131c93026b0c0935d.png';
import dappsScreens from 'figma:asset/bcddeffed0adc6c56035b3b78efe35da7659034c.png';
import settingsScreens from 'figma:asset/4116ac0bbe3e6f8cd7a955bd67512e7c94ec5fec.png';
import transactionHistoryScreens from 'figma:asset/fddd0b4ab9491caf252fa981ac348015bb1e204d.png';
import addressBookScreens from 'figma:asset/473603328a0b773132dde2515ec9e9f3f287d8e6.png';
import gameScreens from 'figma:asset/4b3ed63f79a3bce6a9fd93ff106ba5088767957b.png';

type SectionType = 'onboarding' | 'recovery' | 'authentication' | 'main' | 'education' | 'walletConnect' | 'cryptoDetail' | 'send' | 'receive' | 'exchange' | 'notifications' | 'staking' | 'dapps' | 'settings' | 'transactionHistory' | 'addressBook' | 'game';

export function CryptoRegistration() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [expandedSection, setExpandedSection] = useState<SectionType | null>(null);

  const sections: { type: SectionType; title: string; emoji: string; image: string; description: string; features: { title: string; desc: string }[] }[] = [
    {
      type: 'onboarding',
      title: 'Onboarding',
      emoji: '🎓',
      image: onboardingScreens,
      description: 'Educational screens introducing users to key wallet security features',
      features: [
        { title: 'Secure Recovery', desc: 'Explanation of recovery system with seed phrase splitting' },
        { title: 'Cloud-Based Check', desc: 'Cloud storage access verification' },
        { title: 'Recovery Limitations', desc: 'Warning about importance of saving all parts' },
        { title: 'Progress Indicator', desc: 'Seed phrase setup progress' },
      ]
    },
    {
      type: 'recovery',
      title: 'Wallet Recovery',
      emoji: '🔄',
      image: recoveryScreens,
      description: 'Step-by-step wallet access recovery process through 2-of-3 system',
      features: [
        { title: 'Method Selection', desc: 'Using 2 of 3 parts for recovery' },
        { title: 'Phone Input', desc: 'Phone number verification with activation code' },
        { title: 'Recovered', desc: 'Successful recovery of distributed and cloud storage' },
        { title: 'Verification', desc: 'Social media confirmation to complete the process' },
      ]
    },
    {
      type: 'authentication',
      title: 'Authentication',
      emoji: '🔐',
      image: authenticationScreens,
      description: 'Wallet login methods for additional security',
      features: [
        { title: 'PIN Code', desc: '6-digit code for wallet access' },
        { title: 'Biometrics', desc: 'Face ID / Touch ID for quick login' },
        { title: '2FA', desc: 'Two-factor authentication for additional protection' },
      ]
    },
    {
      type: 'main',
      title: 'Main Screen',
      emoji: '🏠',
      image: mainScreens,
      description: 'Main wallet page with balance and primary actions',
      features: [
        { title: 'Balance', desc: 'Current balance of all assets' },
        { title: 'Portfolio Chart', desc: 'Visualization of portfolio value changes' },
        { title: 'Asset List', desc: 'List of all added cryptocurrencies' },
        { title: 'Quick Actions', desc: 'Send, receive, exchange and other operations' },
      ]
    },
    {
      type: 'education',
      title: 'Educational Program',
      emoji: '📚',
      image: educationScreens,
      description: 'Educational materials and articles about cryptocurrencies and security',
      features: [
        { title: 'Articles', desc: 'Detailed articles about cryptocurrencies and their use' },
        { title: 'Video Tutorials', desc: 'Video reviews and guides on using the wallet' },
        { title: 'Tests', desc: 'Tests to check knowledge about cryptocurrencies' },
        { title: 'Forums', desc: 'Discussions and questions in the user community' },
      ]
    },
    {
      type: 'walletConnect',
      title: 'Wallet Connect',
      emoji: '🔗',
      image: walletConnectScreens,
      description: 'Connect to DeFi applications and dApps via QR code',
      features: [
        { title: 'QR Code', desc: 'Scan QR code to connect' },
        { title: 'App List', desc: 'Choose from available DeFi applications' },
        { title: 'Authorization', desc: 'Quick authorization through wallet' },
        { title: 'Integration', desc: 'Full integration with DeFi ecosystem' },
      ]
    },
    {
      type: 'cryptoDetail',
      title: 'Detailed Crypto View',
      emoji: '💎',
      image: cryptoDetailScreens,
      description: 'Price charts, history, token information, actions',
      features: [
        { title: 'Price Charts', desc: 'Interactive price change charts' },
        { title: 'Transaction History', desc: 'Complete history of token operations' },
        { title: 'Token Information', desc: 'Detailed token information' },
        { title: 'Actions', desc: 'Send, receive, exchange and other operations' },
      ]
    },
    {
      type: 'send',
      title: 'Send',
      emoji: '📤',
      image: sendScreens,
      description: 'Send cryptocurrency to address or QR code with confirmation',
      features: [
        { title: 'Address or QR Code', desc: 'Enter address or scan QR code' },
        { title: 'Amount', desc: 'Specify amount to send' },
        { title: 'Confirmation', desc: 'Confirm sending' },
        { title: 'Transaction History', desc: 'Add transaction to history' },
      ]
    },
    {
      type: 'receive',
      title: 'Receive',
      emoji: '📥',
      image: receiveScreens,
      description: 'QR code for receiving cryptocurrency, copy address',
      features: [
        { title: 'QR Code', desc: 'Scan QR code to receive' },
        { title: 'Address', desc: 'Copy wallet address' },
        { title: 'Transaction History', desc: 'Add transaction to history' },
      ]
    },
    {
      type: 'exchange',
      title: 'Exchange',
      emoji: '🔄',
      image: exchangeScreens,
      description: 'Exchange between cryptocurrencies within wallet',
      features: [
        { title: 'Currency Selection', desc: 'Select currency for exchange' },
        { title: 'Amount', desc: 'Specify amount for exchange' },
        { title: 'Confirmation', desc: 'Confirm exchange' },
        { title: 'Transaction History', desc: 'Add transaction to history' },
      ]
    },
    {
      type: 'notifications',
      title: 'Notifications',
      emoji: '🔔',
      image: notificationsScreens,
      description: 'Push notifications about transactions and price changes',
      features: [
        { title: 'Transactions', desc: 'Notifications about new transactions' },
        { title: 'Prices', desc: 'Notifications about price changes' },
        { title: 'Settings', desc: 'Configure notification types' },
      ]
    },
    {
      type: 'staking',
      title: 'Staking',
      emoji: '💰',
      image: stakingScreens,
      description: 'Staking cryptocurrency to earn income',
      features: [
        { title: 'Token Selection', desc: 'Select token for staking' },
        { title: 'Amount', desc: 'Specify amount for staking' },
        { title: 'Confirmation', desc: 'Confirm staking' },
        { title: 'Staking History', desc: 'Add staking to history' },
      ]
    },
    {
      type: 'dapps',
      title: 'DApps',
      emoji: '🎮',
      image: dappsScreens,
      description: 'Integration with decentralized applications',
      features: [
        { title: 'DApp Selection', desc: 'Select DApp to use' },
        { title: 'Authorization', desc: 'Authorization through wallet' },
        { title: 'Integration', desc: 'Full integration with DApp' },
        { title: 'Transaction History', desc: 'Add transaction to history' },
      ]
    },
    {
      type: 'settings',
      title: 'Settings',
      emoji: '⚙️',
      image: settingsScreens,
      description: 'Configure wallet parameters and security',
      features: [
        { title: 'Language', desc: 'Interface language selection' },
        { title: 'Theme', desc: 'Light or dark theme' },
        { title: 'Security', desc: 'Configure PIN code and biometrics' },
        { title: 'Notifications', desc: 'Configure notification types' },
      ]
    },
    {
      type: 'transactionHistory',
      title: 'Transaction History',
      emoji: '📜',
      image: transactionHistoryScreens,
      description: 'View all wallet transactions',
      features: [
        { title: 'Filters', desc: 'Filter by transaction type' },
        { title: 'Sorting', desc: 'Sort by date' },
        { title: 'Details', desc: 'View transaction details' },
        { title: 'Export', desc: 'Export transaction history' },
      ]
    },
    {
      type: 'addressBook',
      title: 'Address Book',
      emoji: '👥',
      image: addressBookScreens,
      description: 'Save and manage addresses of other wallets',
      features: [
        { title: 'Add', desc: 'Add new address' },
        { title: 'Edit', desc: 'Edit existing address' },
        { title: 'Delete', desc: 'Delete address' },
        { title: 'Search', desc: 'Search address by name' },
      ]
    },
    {
      type: 'game',
      title: 'In-App Game',
      emoji: '🌳',
      image: gameScreens,
      description: 'Gamification with daily rewards and leaderboard',
      features: [
        { title: 'Reward Tree', desc: 'Collect coins and grow your tree' },
        { title: 'Daily Rewards', desc: 'Get bonuses for activity' },
        { title: 'Leaderboard', desc: 'Compete with other users' },
        { title: 'Seasons', desc: 'Participate in seasonal tournaments' },
      ]
    }
  ];

  const currentSectionIndex = expandedSection ? sections.findIndex(s => s.type === expandedSection) : -1;
  const currentSection = currentSectionIndex !== -1 ? sections[currentSectionIndex] : null;

  const navigateSection = (direction: 'prev' | 'next') => {
    if (currentSectionIndex === -1) return;
    const newIndex = direction === 'prev' 
      ? (currentSectionIndex - 1 + sections.length) % sections.length
      : (currentSectionIndex + 1) % sections.length;
    setExpandedSection(sections[newIndex].type);
  };

  const getSectionColors = (type: SectionType) => {
    switch (type) {
      case 'onboarding':
        return { border: 'border-blue-700/50', bg: 'bg-blue-900/50', text: 'text-blue-400', feature: 'bg-blue-900/20 border-blue-700/50' };
      case 'recovery':
        return { border: 'border-purple-700/50', bg: 'bg-purple-900/50', text: 'text-purple-400', feature: 'bg-purple-900/20 border-purple-700/50' };
      case 'authentication':
        return { border: 'border-purple-700/50', bg: 'bg-purple-900/50', text: 'text-purple-400', feature: 'bg-purple-900/20 border-purple-700/50' };
      case 'main':
        return { border: 'border-green-700/50', bg: 'bg-green-900/50', text: 'text-green-400', feature: 'bg-green-900/20 border-green-700/50' };
      case 'education':
        return { border: 'border-blue-700/50', bg: 'bg-blue-900/50', text: 'text-blue-400', feature: 'bg-blue-900/20 border-blue-700/50' };
      case 'walletConnect':
        return { border: 'border-cyan-700/50', bg: 'bg-cyan-900/50', text: 'text-cyan-400', feature: 'bg-cyan-900/20 border-cyan-700/50' };
      case 'cryptoDetail':
        return { border: 'border-indigo-700/50', bg: 'bg-indigo-900/50', text: 'text-indigo-400', feature: 'bg-indigo-900/20 border-indigo-700/50' };
      case 'send':
        return { border: 'border-blue-700/50', bg: 'bg-blue-900/50', text: 'text-blue-400', feature: 'bg-blue-900/20 border-blue-700/50' };
      case 'receive':
        return { border: 'border-emerald-700/50', bg: 'bg-emerald-900/50', text: 'text-emerald-400', feature: 'bg-emerald-900/20 border-emerald-700/50' };
      case 'exchange':
        return { border: 'border-teal-700/50', bg: 'bg-teal-900/50', text: 'text-teal-400', feature: 'bg-teal-900/20 border-teal-700/50' };
      case 'notifications':
        return { border: 'border-orange-700/50', bg: 'bg-orange-900/50', text: 'text-orange-400', feature: 'bg-orange-900/20 border-orange-700/50' };
      case 'staking':
        return { border: 'border-yellow-700/50', bg: 'bg-yellow-900/50', text: 'text-yellow-400', feature: 'bg-yellow-900/20 border-yellow-700/50' };
      case 'dapps':
        return { border: 'border-violet-700/50', bg: 'bg-violet-900/50', text: 'text-violet-400', feature: 'bg-violet-900/20 border-violet-700/50' };
      case 'settings':
        return { border: 'border-gray-700/50', bg: 'bg-gray-900/50', text: 'text-gray-400', feature: 'bg-gray-900/20 border-gray-700/50' };
      case 'transactionHistory':
        return { border: 'border-blue-700/50', bg: 'bg-blue-900/50', text: 'text-blue-400', feature: 'bg-blue-900/20 border-blue-700/50' };
      case 'addressBook':
        return { border: 'border-gray-700/50', bg: 'bg-gray-900/50', text: 'text-gray-400', feature: 'bg-gray-900/20 border-gray-700/50' };
      case 'game':
        return { border: 'border-amber-700/50', bg: 'bg-amber-900/50', text: 'text-amber-400', feature: 'bg-amber-900/20 border-amber-700/50' };
      default:
        return { border: 'border-slate-700/50', bg: 'bg-slate-900/50', text: 'text-slate-400', feature: 'bg-slate-900/20 border-slate-700/50' };
    }
  };

  const screens = [
    { src: screen1, title: 'Welcome', description: 'First screen with user greeting' },
    { src: screen2, title: 'Phone Number', description: 'Enter number for registration' },
    { src: screen3, title: 'Phrase Generation', description: 'Create seed phrase for recovery' },
    { src: screen4, title: 'PIN Confirmation', description: 'Enter and confirm PIN code' },
    { src: screen5, title: 'Main Screen', description: 'Ready wallet with balance' }
  ];

  return (
    <>
      {/* Design Solution Overview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4 text-4xl">Design Solution</h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              The team developed a huge number of sections for the entire wallet. We'll examine the registration process in detail and present other sections in overview.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Deep Dive */}
      <section className="py-16 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-900/20 border border-green-700/50 rounded-xl mb-6">
              <span className="text-2xl">🎯</span>
              <span className="text-green-400 font-semibold">Detailed Analysis</span>
            </div>
            <h2 className="text-white mb-6 text-4xl">Registration and Wallet Creation</h2>
            <p className="text-slate-300 text-xl leading-relaxed">
              Registration is a critical stage where the user decides whether to trust the app with their assets. 
              Task: make the process simple, clear and secure, explaining the importance of each step.
            </p>
          </div>

          {/* Problem */}
          <div className="mb-12">
            <h3 className="text-white mb-6 text-2xl">Registration Problems</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 border border-orange-700/40 rounded-xl p-6">
                <div className="text-3xl mb-4">😰</div>
                <h4 className="text-white mb-3">Fear and Distrust</h4>
                <p className="text-slate-400">
                  Users fear making a mistake when creating a wallet and losing access to their funds
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 border border-orange-700/40 rounded-xl p-6">
                <div className="text-3xl mb-4">🤯</div>
                <h4 className="text-white mb-3">Complex Terminology</h4>
                <p className="text-slate-400">
                  Seed phrases, private keys, addresses — beginners struggle to understand technical terms
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 border border-orange-700/40 rounded-xl p-6">
                <div className="text-3xl mb-4">⏱️</div>
                <h4 className="text-white mb-3">Long Registration</h4>
                <p className="text-slate-400">
                  Multi-step processes scare users away and increase abandonment rates
                </p>
              </div>
            </div>
          </div>

          {/* User Flow */}
          <div className="mb-12">
            <h3 className="text-white mb-6 text-2xl">Registration User Flow</h3>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-600/20 to-green-500/10 border-2 border-green-500/50 rounded-2xl flex items-center justify-center mb-3">
                    <span className="text-3xl">👋</span>
                  </div>
                  <p className="text-white mb-2">Welcome</p>
                  <p className="text-slate-400 text-sm">Explaining benefits</p>
                </div>

                <div className="flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-green-400" />
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-600/20 to-green-500/10 border-2 border-green-500/50 rounded-2xl flex items-center justify-center mb-3">
                    <span className="text-3xl"></span>
                  </div>
                  <p className="text-white mb-2">Create PIN</p>
                  <p className="text-slate-400 text-sm">6-digit code</p>
                </div>

                <div className="flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-green-400" />
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-600/20 to-green-500/10 border-2 border-green-500/50 rounded-2xl flex items-center justify-center mb-3">
                    <span className="text-3xl">🔑</span>
                  </div>
                  <p className="text-white mb-2">Seed Phrase</p>
                  <p className="text-slate-400 text-sm">12 words for recovery</p>
                </div>

                <div className="md:col-span-5 flex items-center justify-center my-2">
                  <ArrowRight className="w-6 h-6 text-green-400 rotate-90 md:rotate-0" />
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-600/20 to-green-500/10 border-2 border-green-500/50 rounded-2xl flex items-center justify-center mb-3">
                    <span className="text-3xl">✅</span>
                  </div>
                  <p className="text-white mb-2">Confirmation</p>
                  <p className="text-slate-400 text-sm">Memory check</p>
                </div>

                <div className="flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-green-400" />
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-600/20 to-green-500/10 border-2 border-green-500/50 rounded-2xl flex items-center justify-center mb-3">
                    <span className="text-3xl">👤</span>
                  </div>
                  <p className="text-white mb-2">Biometrics</p>
                  <p className="text-slate-400 text-sm">Face ID / Touch ID</p>
                </div>

                <div className="flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-green-400" />
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-600/20 to-green-500/10 border-2 border-green-500/50 rounded-2xl flex items-center justify-center mb-3">
                    <span className="text-3xl">🎉</span>
                  </div>
                  <p className="text-white mb-2">Done</p>
                  <p className="text-slate-400 text-sm">Wallet created</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key UX Solutions */}
          <div className="mb-12">
            <h3 className="text-white mb-6 text-2xl">Key UX Solutions</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-700/50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h4 className="text-white mb-2 text-lg">Simple Explanations at Every Step</h4>
                    <p className="text-slate-300">
                      Instead of technical jargon, we use clear language: "These 12 words are the key to your wallet. 
                      Only with them can you restore access to funds on a new device"
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-700/50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📋</span>
                  </div>
                  <div>
                    <h4 className="text-white mb-2 text-lg">Visual Progress Indication</h4>
                    <p className="text-slate-300">
                      Show which stage the user is at (step 2 of 5) to reduce anxiety 
                      and give understanding of how much is left until completion
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-700/50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎮</span>
                  </div>
                  <div>
                    <h4 className="text-white mb-2 text-lg">Interactive Seed Phrase Verification</h4>
                    <p className="text-slate-300">
                      Gamified confirmation process: user selects correct words from a list, 
                      which helps better memorize the phrase and ensure it's saved
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-700/50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-white mb-2 text-lg">Quick Biometrics as an Option</h4>
                    <p className="text-slate-300">
                      We offer to set up Face ID/Touch ID for quick access, but don't make it mandatory — 
                      user can always skip and set up later
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Screens Preview */}
          <div>
            <h3 className="text-white mb-6 text-2xl">Registration Screens</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {screens.map((screen, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className="group relative bg-slate-800/50 border-2 border-slate-700 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-900/30 hover:scale-105"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[9/16] bg-black overflow-hidden flex items-center justify-center">
                    <ImageWithFallback
                      src={screen.src}
                      alt={screen.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Title */}
                  <div className="p-3 bg-slate-900">
                    <p className="text-slate-400 text-center text-xs group-hover:text-white transition-colors">
                      {screen.title}
                    </p>
                  </div>
                  
                  {/* Number badge */}
                  <div className="absolute top-2 left-2 w-6 h-6 bg-green-600/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xs">{index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for enlarged image */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-8 animate-in fade-in duration-300"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-600 flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Previous Button */}
          {selectedImage > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage - 1);
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800/80 hover:bg-green-600 border border-slate-600 hover:border-green-500 flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}

          {/* Next Button */}
          {selectedImage < screens.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage + 1);
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800/80 hover:bg-green-600 border border-slate-600 hover:border-green-500 flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}

          <div 
            className="max-w-sm w-full animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* iPhone Mockup Frame */}
            <div className="relative mx-auto" style={{ width: '280px' }}>
              {/* Device Frame with subtle green glow */}
              <div 
                className="relative bg-black rounded-[3rem] p-3 shadow-2xl border-[3px] border-slate-700/50"
                style={{ 
                  boxShadow: '0 0 40px rgba(34, 197, 94, 0.15), 0 0 80px rgba(34, 197, 94, 0.08), 0 20px 25px -5px rgba(0, 0, 0, 0.5)' 
                }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10 border-b border-slate-700/50"></div>
                
                {/* Screen */}
                <div className="relative bg-black rounded-[2.5rem] overflow-hidden ring-1 ring-slate-700/30" style={{ aspectRatio: '9/19.5' }}>
                  <ImageWithFallback
                    src={screens[selectedImage].src}
                    alt={screens[selectedImage].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info below device */}
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-green-400 text-sm">{selectedImage + 1} / {screens.length}</span>
                </div>
                <h3 className="text-white text-xl mb-1">{screens[selectedImage].title}</h3>
                <p className="text-slate-400 text-sm">{screens[selectedImage].description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* All Features Overview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-white mb-4 text-4xl">All App Sections</h2>
            <p className="text-slate-400 text-lg">
              Complete overview of cryptocurrency wallet functionality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Registration - highlighted */}
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 border-2 border-green-600/50 rounded-xl p-6 relative">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-green-600 text-white text-xs rounded-full">Detailed above</span>
              </div>
              <div className="text-4xl mb-4">📝</div>
              <h4 className="text-white mb-2 text-lg">Registration</h4>
              <p className="text-slate-400 text-sm">
                Create wallet, PIN code, seed phrase, biometrics
              </p>
            </div>

            {/* Onboarding - Interactive */}
            <div 
              onClick={() => setExpandedSection(expandedSection === 'onboarding' ? null : 'onboarding')}
              className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-2 border-blue-700/50 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 group cursor-pointer shadow-lg shadow-blue-900/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">🎓</div>
                <ZoomIn className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white mb-2 text-lg">Onboarding</h4>
              <p className="text-slate-400 text-sm mb-2">
                Educational screens about wallet features and cryptocurrency basics
              </p>
              <p className="text-blue-400 text-xs font-semibold">Click to view screens →</p>
            </div>

            {/* Authentication */}
            <div 
              onClick={() => setExpandedSection(expandedSection === 'authentication' ? null : 'authentication')}
              className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-2 border-purple-700/50 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 group cursor-pointer shadow-lg shadow-purple-900/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">🔐</div>
                <ZoomIn className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white mb-2 text-lg">Authentication</h4>
              <p className="text-slate-400 text-sm mb-2">
                Login via PIN, biometrics, 2FA for additional security
              </p>
              <p className="text-purple-400 text-xs font-semibold">Click to view screens →</p>
            </div>

            {/* Recovery - Interactive */}
            <div 
              onClick={() => setExpandedSection(expandedSection === 'recovery' ? null : 'recovery')}
              className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-2 border-purple-700/50 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 group cursor-pointer shadow-lg shadow-purple-900/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">🔄</div>
                <ZoomIn className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white mb-2 text-lg">Wallet Recovery</h4>
              <p className="text-slate-400 text-sm mb-2">
                Import existing wallet via seed phrase
              </p>
              <p className="text-purple-400 text-xs font-semibold">Click to view screens →</p>
            </div>

            {/* Main Screen */}
            <div 
              onClick={() => setExpandedSection(expandedSection === 'main' ? null : 'main')}
              className="bg-gradient-to-br from-green-900/20 to-emerald-900/10 border-2 border-green-700/50 rounded-xl p-6 hover:border-green-500 transition-all duration-300 group cursor-pointer shadow-lg shadow-green-900/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">🏠</div>
                <ZoomIn className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white mb-2 text-lg">Main Screen</h4>
              <p className="text-slate-400 text-sm mb-2">
                Balance, portfolio chart, quick actions, asset list
              </p>
              <p className="text-green-400 text-xs font-semibold">Click to view screens →</p>
            </div>

            {/* Education */}
            <div 
              onClick={() => setExpandedSection(expandedSection === 'education' ? null : 'education')}
              className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-2 border-blue-700/50 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 group cursor-pointer shadow-lg shadow-blue-900/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">📚</div>
                <ZoomIn className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white mb-2 text-lg">Educational Program</h4>
              <p className="text-slate-400 text-sm mb-2">
                Educational materials, articles, videos about cryptocurrencies
              </p>
              <p className="text-blue-400 text-xs font-semibold">Click to view screens →</p>
            </div>

            {/* Wallet Connect */}
            <div 
              onClick={() => setExpandedSection(expandedSection === 'walletConnect' ? null : 'walletConnect')}
              className="bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 border-2 border-cyan-700/50 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 group cursor-pointer shadow-lg shadow-cyan-900/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">🔗</div>
                <ZoomIn className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white mb-2 text-lg">Wallet Connect</h4>
              <p className="text-slate-400 text-sm mb-2">
                Connect to DeFi applications and dApps via QR code
              </p>
              <p className="text-cyan-400 text-xs font-semibold">Click to view screens →</p>
            </div>

            {/* Crypto Detail */}
            <div 
              onClick={() => setExpandedSection(expandedSection === 'cryptoDetail' ? null : 'cryptoDetail')}
              className="bg-gradient-to-br from-indigo-900/20 to-indigo-800/10 border-2 border-indigo-700/50 rounded-xl p-6 hover:border-indigo-500 transition-all duration-300 group cursor-pointer shadow-lg shadow-indigo-900/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">💎</div>
                <ZoomIn className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white mb-2 text-lg">Detailed Crypto View</h4>
              <p className="text-slate-400 text-sm mb-2">
                Price charts, history, token information, actions
              </p>
              <p className="text-indigo-400 text-xs font-semibold">Click to view screens →</p>
            </div>

            {/* Send */}
            <div 
              onClick={() => setExpandedSection(expandedSection === 'send' ? null : 'send')}
              className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-2 border-blue-700/50 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 group cursor-pointer shadow-lg shadow-blue-900/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">📤</div>
                <ZoomIn className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white mb-2 text-lg">Send</h4>
              <p className="text-slate-400 text-sm mb-2">
                Send cryptocurrency to address or QR code with confirmation
              </p>
              <p className="text-blue-400 text-xs font-semibold">Click to view screens →</p>
            </div>

            {/* Receive */}
            <div 
              onClick={() => setExpandedSection(expandedSection === 'receive' ? null : 'receive')}
              className="bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border-2 border-emerald-700/50 rounded-xl p-6 hover:border-emerald-500 transition-all duration-300 group cursor-pointer shadow-lg shadow-emerald-900/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">📥</div>
                <ZoomIn className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white mb-2 text-lg">Receive</h4>
              <p className="text-slate-400 text-sm mb-2">
                QR code for receiving cryptocurrency, copy address
              </p>
              <p className="text-emerald-400 text-xs font-semibold">Click to view screens →</p>
            </div>

            {/* Exchange */}
            <div 
              onClick={() => setExpandedSection(expandedSection === 'exchange' ? null : 'exchange')}
              className="bg-gradient-to-br from-teal-900/20 to-teal-800/10 border-2 border-teal-700/50 rounded-xl p-6 hover:border-teal-500 transition-all duration-300 group cursor-pointer shadow-lg shadow-teal-900/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">🔄</div>
                <ZoomIn className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white mb-2 text-lg">Exchange</h4>
              <p className="text-slate-400 text-sm mb-2">
                Exchange between cryptocurrencies within wallet
              </p>
              <p className="text-teal-400 text-xs font-semibold">Click to view screens →</p>
            </div>

            {/* Notifications */}
            <div 
              onClick={() => setExpandedSection(expandedSection === 'notifications' ? null : 'notifications')}
              className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 border-2 border-orange-700/50 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 group cursor-pointer shadow-lg shadow-orange-900/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">🔔</div>
                <ZoomIn className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white mb-2 text-lg">Notifications</h4>
              <p className="text-slate-400 text-sm mb-2">
                Push notifications about transactions and price changes
              </p>
              <p className="text-orange-400 text-xs font-semibold">Click to view screens →</p>
            </div>

            {/* Staking */}
            <div 
              onClick={() => setExpandedSection(expandedSection === 'staking' ? null : 'staking')}
              className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 border-2 border-yellow-700/50 rounded-xl p-6 hover:border-yellow-500 transition-all duration-300 group cursor-pointer shadow-lg shadow-yellow-900/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">💰</div>
                <ZoomIn className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white mb-2 text-lg">Staking</h4>
              <p className="text-slate-400 text-sm mb-2">
                Staking cryptocurrency to earn income
              </p>
              <p className="text-yellow-400 text-xs font-semibold">Click to view screens →</p>
            </div>

            {/* DApps */}
            <div 
              onClick={() => setExpandedSection(expandedSection === 'dapps' ? null : 'dapps')}
              className="bg-gradient-to-br from-violet-900/20 to-violet-800/10 border-2 border-violet-700/50 rounded-xl p-6 hover:border-violet-500 transition-all duration-300 group cursor-pointer shadow-lg shadow-violet-900/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">🎮</div>
                <ZoomIn className="w-5 h-5 text-violet-400 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white mb-2 text-lg">DApps</h4>
              <p className="text-slate-400 text-sm mb-2">
                Integration with decentralized applications
              </p>
              <p className="text-violet-400 text-xs font-semibold">Click to view screens →</p>
            </div>

            {/* Settings */}
            <div 
              onClick={() => setExpandedSection(expandedSection === 'settings' ? null : 'settings')}
              className="bg-gradient-to-br from-gray-900/20 to-gray-800/10 border-2 border-gray-700/50 rounded-xl p-6 hover:border-gray-500 transition-all duration-300 group cursor-pointer shadow-lg shadow-gray-900/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">⚙️</div>
                <ZoomIn className="w-5 h-5 text-gray-400 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white mb-2 text-lg">Settings</h4>
              <p className="text-slate-400 text-sm mb-2">
                Configure wallet parameters and security
              </p>
              <p className="text-gray-400 text-xs font-semibold">Click to view screens →</p>
            </div>

            {/* Transaction History */}
            <div 
              onClick={() => setExpandedSection(expandedSection === 'transactionHistory' ? null : 'transactionHistory')}
              className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-2 border-blue-700/50 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 group cursor-pointer shadow-lg shadow-blue-900/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">📜</div>
                <ZoomIn className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white mb-2 text-lg">Transaction History</h4>
              <p className="text-slate-400 text-sm mb-2">
                View all wallet transactions
              </p>
              <p className="text-blue-400 text-xs font-semibold">Click to view screens →</p>
            </div>

            {/* Address Book */}
            <div 
              onClick={() => setExpandedSection(expandedSection === 'addressBook' ? null : 'addressBook')}
              className="bg-gradient-to-br from-gray-900/20 to-gray-800/10 border-2 border-gray-700/50 rounded-xl p-6 hover:border-gray-500 transition-all duration-300 group cursor-pointer shadow-lg shadow-gray-900/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">👥</div>
                <ZoomIn className="w-5 h-5 text-gray-400 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white mb-2 text-lg">Address Book</h4>
              <p className="text-slate-400 text-sm mb-2">
                Save and manage addresses of other wallets
              </p>
              <p className="text-gray-400 text-xs font-semibold">Click to view screens →</p>
            </div>

            {/* Game */}
            <div 
              onClick={() => setExpandedSection(expandedSection === 'game' ? null : 'game')}
              className="bg-gradient-to-br from-amber-900/20 to-amber-800/10 border-2 border-amber-700/50 rounded-xl p-6 hover:border-amber-500 transition-all duration-300 group cursor-pointer shadow-lg shadow-amber-900/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">🌳</div>
                <ZoomIn className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white mb-2 text-lg">In-App Game</h4>
              <p className="text-slate-400 text-sm mb-2">
                Gamification with daily rewards and leaderboard
              </p>
              <p className="text-amber-400 text-xs font-semibold">Click to view screens →</p>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Modal with Carousel */}
      {expandedSection && currentSection && (() => {
        const colors = getSectionColors(currentSection.type);
        return (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
          onClick={() => setExpandedSection(null)}
        >
          <button
            onClick={() => setExpandedSection(null)}
            className="absolute top-4 md:top-6 right-4 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-600 flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
          >
            <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateSection('prev');
            }}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800/80 hover:bg-green-600 border border-slate-600 hover:border-green-500 flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateSection('next');
            }}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800/80 hover:bg-green-600 border border-slate-600 hover:border-green-500 flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          <div 
            className="max-w-6xl w-full animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border rounded-2xl p-6 md:p-8 shadow-2xl ${colors.border}`}>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{currentSection.emoji}</div>
                    <h3 className="text-white text-2xl md:text-3xl">{currentSection.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm px-3 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
                      {currentSectionIndex + 1} / {sections.length}
                    </span>
                  </div>
                </div>
                <p className="text-slate-300 text-sm md:text-base">
                  {currentSection.description}
                </p>
              </div>
              
              <div className={`bg-black/50 rounded-2xl overflow-hidden border ${colors.border}`}>
                <ImageWithFallback
                  src={currentSection.image}
                  alt={currentSection.title}
                  className="w-full h-auto"
                />
              </div>

              <div className={`mt-6 grid ${currentSection.features.length === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-4'} gap-3`}>
                {currentSection.features.map((feature, idx) => (
                  <div 
                    key={idx}
                    className={`rounded-lg p-3 border ${colors.feature}`}
                  >
                    <h4 className={`mb-1 text-sm font-semibold ${colors.text}`}>
                      {feature.title}
                    </h4>
                    <p className="text-slate-400 text-xs">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        );
      })()}
    </>
  );
}