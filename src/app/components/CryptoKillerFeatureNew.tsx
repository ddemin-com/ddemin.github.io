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
              To recover your wallet, you only need 2 out of 3 parts.
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
                  <h3 className="text-amber-400 mb-2 text-lg">Потеря или кража телефона</h3>
                  <p className="text-slate-300">
                    В случае кражи, потери или взлома кошелька функция восстановления позволяет пользователю 
                    восстановить доступ к средствам и защитить их от несанкционированного доступа
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
                  <h3 className="text-amber-400 mb-2 text-lg">Забытый пароль</h3>
                  <p className="text-slate-300">
                    Если пользователь забыл пароль от кошелька, функция восстановления позволяет ему 
                    восстановить доступ к средствам
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
                  <h3 className="text-amber-400 mb-2 text-lg">Обновление устройства или сброс настроек</h3>
                  <p className="text-slate-300">
                    В�� время обновления устройства или сброса настроек функция восстановления позволяет 
                    восстановить кошелек с сохранением всех ранее созданных аккаунтов и данных
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
                  <h3 className="text-amber-400 mb-2 text-lg">Повреждение или поломка телефона</h3>
                  <p className="text-slate-300">
                    Если устройство с кошельком повреждено или перестало функционировать, функция восстановления 
                    позволяет восстановить доступ к кошельку на новом устройстве
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recovery Flow Diagram - NEW SIMPLE VERSION */}
          <div>
            <h3 className="text-white mb-6 text-2xl">Восстановление кошелька с Haqabi</h3>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-8">
              <div className="max-w-4xl mx-auto">
                
                {/* Step 1: Original Seed Phrase */}
                <div className="flex flex-col items-center mb-8">
                  <div className="bg-gradient-to-br from-blue-600/30 to-blue-500/20 border-2 border-blue-500 rounded-2xl p-6 mb-4 w-full max-w-md">
                    <div className="flex items-center justify-center gap-4">
                      <Key className="w-10 h-10 text-blue-400" />
                      <div className="text-center">
                        <p className="text-white text-lg font-semibold">Seed-фраза пользователя</p>
                        <p className="text-slate-400 text-sm">12 слов для восстановления</p>
                      </div>
                    </div>
                  </div>
                  <ArrowDown className="w-8 h-8 text-slate-500" />
                </div>

                {/* Step 2: Division */}
                <div className="flex flex-col items-center mb-8">
                  <div className="bg-gradient-to-br from-purple-600/30 to-purple-500/20 border-2 border-purple-500 rounded-2xl p-6 mb-4 w-full max-w-md">
                    <div className="flex items-center justify-center gap-4">
                      <div className="text-4xl">✂️</div>
                      <div className="text-center">
                        <p className="text-white text-lg font-semibold">Разделение на 3 части</p>
                        <p className="text-slate-400 text-sm">Шифрование и распределение</p>
                      </div>
                    </div>
                  </div>
                  <ArrowDown className="w-8 h-8 text-slate-500" />
                </div>

                {/* Step 3: Three Storage Locations */}
                <div className="mb-8">
                  <p className="text-center text-slate-400 mb-6">Части хранятся в 3 независимых местах:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Share 1 */}
                    <div className="bg-slate-800/70 border-2 border-slate-600 rounded-xl p-5">
                      <div className="flex flex-col items-center gap-3 mb-4">
                        <UserCircle className="w-12 h-12 text-blue-400" />
                        <p className="text-white font-semibold text-center">Социальный вход</p>
                        <p className="text-slate-400 text-sm text-center">ID Token → Haqaby</p>
                      </div>
                      <div className="bg-green-600/20 border-2 border-green-500/70 rounded-lg py-3 text-center">
                        <span className="text-green-400 font-semibold">Share 1</span>
                      </div>
                    </div>

                    {/* Share 2 */}
                    <div className="bg-slate-800/70 border-2 border-slate-600 rounded-xl p-5">
                      <div className="flex flex-col items-center gap-3 mb-4">
                        <Smartphone className="w-12 h-12 text-purple-400" />
                        <p className="text-white font-semibold text-center">Вход по телефону</p>
                        <p className="text-slate-400 text-sm text-center">Haqabi storage</p>
                      </div>
                      <div className="bg-green-600/20 border-2 border-green-500/70 rounded-lg py-3 text-center">
                        <span className="text-green-400 font-semibold">Share 2</span>
                      </div>
                    </div>

                    {/* Share 3 */}
                    <div className="bg-slate-800/70 border-2 border-slate-600 rounded-xl p-5">
                      <div className="flex flex-col items-center gap-3 mb-4">
                        <Cloud className="w-12 h-12 text-cyan-400" />
                        <p className="text-white font-semibold text-center">Облачное хранилище</p>
                        <p className="text-slate-400 text-sm text-center">iCloud / Google Drive</p>
                      </div>
                      <div className="bg-green-600/20 border-2 border-green-500/70 rounded-lg py-3 text-center">
                        <span className="text-green-400 font-semibold">Share 3</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4: Recovery Process */}
                <div className="flex flex-col items-center">
                  <ArrowDown className="w-8 h-8 text-slate-500 mb-6" />
                  <div className="bg-slate-800/50 border border-slate-600 rounded-xl p-4 mb-6 w-full max-w-md">
                    <p className="text-center text-slate-300 text-lg">
                      <span className="text-green-400 font-semibold">Любые 2 из 3</span> частей для восстановления
                    </p>
                  </div>
                  <ArrowDown className="w-8 h-8 text-green-400 mb-6" />
                  <div className="bg-gradient-to-br from-green-600/40 to-emerald-600/30 border-2 border-green-500 rounded-2xl p-6 shadow-2xl shadow-green-900/50 w-full max-w-md">
                    <div className="flex items-center justify-center gap-4">
                      <CheckCircle2 className="w-12 h-12 text-green-400" />
                      <div className="text-center">
                        <p className="text-white text-xl font-semibold">Восстановлено!</p>
                        <p className="text-green-200 text-sm">Seed-фраза восстановлена</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Explanation */}
              <div className="mt-10 pt-6 border-t border-slate-700">
                <p className="text-slate-300 text-center leading-relaxed">
                  <span className="text-white font-semibold">Принцип работы:</span> Haqabi делит seed-фразу пользователя на три зашифрованные части 
                  и сохраняет их в трёх независимых местах. Для восстановления доступа к кошельку достаточно полу��ить 
                  доступ к любым двум из трёх частей.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}