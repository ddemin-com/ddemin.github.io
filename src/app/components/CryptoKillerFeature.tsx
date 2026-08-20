import { Shield, Smartphone, Cloud, Key, RefreshCw, AlertCircle, CheckCircle2, UserCircle, ArrowDown } from 'lucide-react';

export function CryptoKillerFeature() {
  return (
    <>
      {/* Killer Feature Section */}
      <section className="py-16 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-900/20 border border-green-700/50 rounded-xl mb-6">
              <span className="text-2xl">⭐</span>
              <span className="text-green-400 font-semibold">Killer Feature</span>
            </div>
            <h2 className="text-white mb-6 text-4xl">Wallet Recovery</h2>
            <p className="text-slate-300 text-xl leading-relaxed max-w-4xl">
              Haqabi splits the user's seed phrase into three parts, which are encrypted and stored in three different locations. 
              To recover the wallet, you only need 2 out of 3 parts.
            </p>
          </div>

          {/* Recovery Scenarios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Scenario 1 */}
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-700/50 rounded-xl p-6 hover:border-green-500 hover:shadow-lg hover:shadow-green-900/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-amber-500/50">
                  <Smartphone className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-amber-400 mb-2 text-lg">Lost or Stolen Phone</h3>
                  <p className="text-slate-300">
                    In case of theft, loss, or wallet compromise, the recovery function allows the user 
                    to regain access to funds and protect them from unauthorized access
                  </p>
                </div>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-700/50 rounded-xl p-6 hover:border-green-500 hover:shadow-lg hover:shadow-green-900/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-amber-500/50">
                  <Key className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-amber-400 mb-2 text-lg">Forgotten Password</h3>
                  <p className="text-slate-300">
                    If the user forgets their wallet password, the recovery function allows them 
                    to regain access to funds
                  </p>
                </div>
              </div>
            </div>

            {/* Scenario 3 */}
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-700/50 rounded-xl p-6 hover:border-green-500 hover:shadow-lg hover:shadow-green-900/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-amber-500/50">
                  <RefreshCw className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-amber-400 mb-2 text-lg">Device Upgrade or Factory Reset</h3>
                  <p className="text-slate-300">
                    During device upgrade or factory reset, the recovery function allows 
                    restoring the wallet while preserving all previously created accounts and data
                  </p>
                </div>
              </div>
            </div>

            {/* Scenario 4 */}
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-700/50 rounded-xl p-6 hover:border-green-500 hover:shadow-lg hover:shadow-green-900/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-amber-500/50">
                  <AlertCircle className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-amber-400 mb-2 text-lg">Phone Damage or Malfunction</h3>
                  <p className="text-slate-300">
                    If the device with the wallet is damaged or stops functioning, the recovery function 
                    allows restoring wallet access on a new device
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recovery Flow Diagram - NEW SIMPLE VERSION */}
          <div>
            <h3 className="text-white mb-6 text-2xl">Wallet Recovery with Haqabi</h3>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-6">
              <div className="max-w-3xl mx-auto">
                
                {/* Step 1: Original Seed Phrase */}
                <div className="flex flex-col items-center mb-4">
                  <div className="bg-gradient-to-br from-blue-600/30 to-blue-500/20 border-2 border-blue-500 rounded-xl p-4 mb-2 w-full max-w-sm">
                    <div className="flex items-center justify-center gap-3">
                      <Key className="w-8 h-8 text-blue-400" />
                      <div className="text-center">
                        <p className="text-white font-semibold">User's Seed Phrase</p>
                        <p className="text-slate-400 text-xs">12 words for recovery</p>
                      </div>
                    </div>
                  </div>
                  <ArrowDown className="w-6 h-6 text-slate-500" />
                </div>

                {/* Step 2: Division */}
                <div className="flex flex-col items-center mb-4">
                  <div className="bg-gradient-to-br from-purple-600/30 to-purple-500/20 border-2 border-purple-500 rounded-xl p-4 mb-2 w-full max-w-sm">
                    <div className="flex items-center justify-center gap-3">
                      <div className="text-3xl">✂️</div>
                      <div className="text-center">
                        <p className="text-white font-semibold">Split into 3 Parts</p>
                        <p className="text-slate-400 text-xs">Encryption and distribution</p>
                      </div>
                    </div>
                  </div>
                  <ArrowDown className="w-6 h-6 text-slate-500" />
                </div>

                {/* Step 3: Three Storage Locations */}
                <div className="mb-4">
                  <p className="text-center text-slate-400 text-sm mb-4">Parts are stored in 3 independent locations:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* Share 1 */}
                    <div className="bg-slate-800/70 border-2 border-slate-600 rounded-lg p-4">
                      <div className="flex flex-col items-center gap-2 mb-3">
                        <UserCircle className="w-10 h-10 text-blue-400" />
                        <p className="text-white text-sm font-semibold text-center">Social Login</p>
                        <p className="text-slate-400 text-xs text-center">ID Token → Haqaby</p>
                      </div>
                      <div className="bg-green-600/20 border-2 border-green-500/70 rounded py-2 text-center">
                        <span className="text-green-400 text-sm font-semibold">Share 1</span>
                      </div>
                    </div>

                    {/* Share 2 */}
                    <div className="bg-slate-800/70 border-2 border-slate-600 rounded-lg p-4">
                      <div className="flex flex-col items-center gap-2 mb-3">
                        <Smartphone className="w-10 h-10 text-purple-400" />
                        <p className="text-white text-sm font-semibold text-center">Phone Login</p>
                        <p className="text-slate-400 text-xs text-center">Haqabi storage</p>
                      </div>
                      <div className="bg-green-600/20 border-2 border-green-500/70 rounded py-2 text-center">
                        <span className="text-green-400 text-sm font-semibold">Share 2</span>
                      </div>
                    </div>

                    {/* Share 3 */}
                    <div className="bg-slate-800/70 border-2 border-slate-600 rounded-lg p-4">
                      <div className="flex flex-col items-center gap-2 mb-3">
                        <Cloud className="w-10 h-10 text-cyan-400" />
                        <p className="text-white text-sm font-semibold text-center">Cloud Storage</p>
                        <p className="text-slate-400 text-xs text-center">iCloud / Google Drive</p>
                      </div>
                      <div className="bg-green-600/20 border-2 border-green-500/70 rounded py-2 text-center">
                        <span className="text-green-400 text-sm font-semibold">Share 3</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4: Recovery Process */}
                <div className="flex flex-col items-center">
                  <ArrowDown className="w-6 h-6 text-slate-500 mb-3" />
                  <div className="bg-slate-800/50 border border-slate-600 rounded-lg p-3 mb-3 w-full max-w-sm">
                    <p className="text-center text-slate-300">
                      <span className="text-green-400 font-semibold">Any 2 of 3</span> parts for recovery
                    </p>
                  </div>
                  <ArrowDown className="w-6 h-6 text-green-400 mb-3" />
                  <div className="bg-gradient-to-br from-green-600/40 to-emerald-600/30 border-2 border-green-500 rounded-xl p-4 shadow-xl shadow-green-900/50 w-full max-w-sm">
                    <div className="flex items-center justify-center gap-3">
                      <CheckCircle2 className="w-10 h-10 text-green-400" />
                      <div className="text-center">
                        <p className="text-white text-lg font-semibold">Recovered!</p>
                        <p className="text-green-200 text-xs">Seed phrase restored</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Explanation */}
              <div className="mt-6 pt-4 border-t border-slate-700">
                <p className="text-slate-300 text-sm text-center leading-relaxed">
                  <span className="text-white font-semibold">How it works:</span> Haqabi splits the user's seed phrase into three encrypted parts 
                  and saves them in three independent locations. To regain access to the wallet, it is enough to obtain 
                  access to any two of the three parts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
