import { TrendingUp, Users, Award, Target, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import release10Image from 'figma:asset/4651b584b6456f8b78547790dddca36db6311fc8.png';
import release12Image from 'figma:asset/4af0eaef4e19f0e10c10394b15aa4c38782441a2.png';
import navigation10Image from 'figma:asset/bc79c42aa475456633861a3f988747f452ed5c6e.png';
import navigation12Image from 'figma:asset/6ebf42e1617930cf2f3aeb90574d4c3afc276beb.png';

export function CryptoTestingResults() {
  return (
    <>
      {/* Testing & Results Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-white mb-4 text-4xl flex items-center gap-3">
              <Target className="w-10 h-10 text-green-400" />
              Testing and Results
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl">
              Conducted large-scale testing with real users to assess user experience satisfaction 
              and iteratively improve the product
            </p>
          </div>

          {/* Testing Methodology */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-700/50 rounded-xl p-6">
              <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-white mb-2">Respondents</h3>
              <p className="text-slate-400">
                130 users participated in testing two releases
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-700/50 rounded-xl p-6">
              <div className="w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-white mb-2">Methodology</h3>
              <p className="text-slate-400">
                Post-usage surveys, scale from 1 to 10
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-700/50 rounded-xl p-6">
              <div className="w-14 h-14 bg-green-600/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-white mb-2">Iterations</h3>
              <p className="text-slate-400">
                2 releases with improvements based on feedback
              </p>
            </div>
          </div>

          {/* Satisfaction Comparison */}
          <div>
            <h3 className="text-white mb-6 text-2xl">
              User Experience Satisfaction Dynamics
            </h3>
            <p className="text-slate-400 mb-8 text-lg">
              Question: "How satisfied are you with the overall Haqabi user experience?"
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Release 1.0 */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white text-xl">Release 1.0</h4>
                    <span className="text-slate-400">23 respondents</span>
                  </div>
                  <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700">
                  <ImageWithFallback
                    src={release10Image}
                    alt="Release 1.0 Results"
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Average score</span>
                    <span className="text-yellow-400 font-semibold">6.5 / 10</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Rating 8-10</span>
                    <span className="text-white">43%</span>
                  </div>
                </div>
              </div>

              {/* Release 1.2 */}
              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-2 border-green-600/50 rounded-xl p-6 shadow-xl shadow-green-900/30">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white text-xl">Release 1.2</h4>
                    <span className="text-slate-300">107 respondents</span>
                  </div>
                  <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 border border-green-600/30">
                  <ImageWithFallback
                    src={release12Image}
                    alt="Release 1.2 Results"
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">Average score</span>
                    <span className="text-green-400 font-semibold text-lg">8.2 / 10</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">Rating 8-10</span>
                    <span className="text-green-400 font-semibold">62%</span>
                  </div>
                  <div className="flex items-center gap-2 mt-3 p-2 bg-green-900/30 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm font-semibold">+26% satisfaction growth</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation & Usability Comparison */}
            <div className="mt-12">
              <h3 className="text-white mb-6 text-2xl">
                Navigation and Usability Ease
              </h3>
              <p className="text-slate-400 mb-8 text-lg">
                Question: "How easy was it to navigate and use Haqabi wallet?"
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Release 1.0 - Navigation */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white text-xl">Release 1.0</h4>
                      <span className="text-slate-400">23 respondents</span>
                    </div>
                    <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500" style={{ width: '69%' }}></div>
                    </div>
                  </div>
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700">
                    <ImageWithFallback
                      src={navigation10Image}
                      alt="Release 1.0 Navigation Results"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Average score</span>
                      <span className="text-yellow-400 font-semibold">6.9 / 10</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Rating 8-10</span>
                      <span className="text-white">39%</span>
                    </div>
                  </div>
                </div>

                {/* Release 1.2 - Navigation */}
                <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-2 border-green-600/50 rounded-xl p-6 shadow-xl shadow-green-900/30">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white text-xl">Release 1.2</h4>
                      <span className="text-slate-300">107 respondents</span>
                    </div>
                    <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-green-600/30">
                    <ImageWithFallback
                      src={navigation12Image}
                      alt="Release 1.2 Navigation Results"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">Average score</span>
                      <span className="text-green-400 font-semibold text-lg">8.7 / 10</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">Rating 8-10</span>
                      <span className="text-green-400 font-semibold">64%</span>
                    </div>
                    <div className="flex items-center gap-2 mt-3 p-2 bg-green-900/30 rounded-lg">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 text-sm font-semibold">+26% usability growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Improvements */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-white mb-6 text-xl flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
                Key Improvements Between Releases
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white mb-1">Simplified Onboarding</h4>
                    <p className="text-slate-400 text-sm">
                      Reduced registration steps from 7 to 4, added progress bar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white mb-1">Improved Navigation</h4>
                    <p className="text-slate-400 text-sm">
                      Redesigned main menu, added quick access to frequently used features
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white mb-1">Visual Hierarchy</h4>
                    <p className="text-slate-400 text-sm">
                      Improved readability and structured information using cards and dividers
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white mb-1">Clear Charts</h4>
                    <p className="text-slate-400 text-sm">
                      Redesigned portfolio charts with interactive tooltips and legend
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white mb-1">Action Feedback</h4>
                    <p className="text-slate-400 text-sm">
                      Added notifications and statuses for all transactions and operations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white mb-1">Error Prevention</h4>
                    <p className="text-slate-400 text-sm">
                      Implemented address validation, warnings and double confirmation for critical actions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-16 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-2 border-green-600/50 rounded-2xl p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-900/40 border border-green-600/50 rounded-xl mb-6">
                <Award className="w-6 h-6 text-green-400" />
                <span className="text-green-400 font-semibold">Final Results</span>
              </div>
              <h2 className="text-white mb-4 text-4xl">Achieved Metrics</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4 bg-slate-900/50 rounded-xl border border-green-700/30">
                <div className="text-4xl text-green-400 mb-2">+26%</div>
                <p className="text-slate-300 text-sm">UX Satisfaction Growth</p>
              </div>
              <div className="text-center p-4 bg-slate-900/50 rounded-xl border border-green-700/30">
                <div className="text-4xl text-green-400 mb-2">8.2/10</div>
                <p className="text-slate-300 text-sm">UX Satisfaction</p>
              </div>
              <div className="text-center p-4 bg-slate-900/50 rounded-xl border border-green-700/30">
                <div className="text-4xl text-green-400 mb-2">+26%</div>
                <p className="text-slate-300 text-sm">Usability Growth</p>
              </div>
              <div className="text-center p-4 bg-slate-900/50 rounded-xl border border-green-700/30">
                <div className="text-4xl text-green-400 mb-2">8.7/10</div>
                <p className="text-slate-300 text-sm">Navigation Ease</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-slate-900/50 rounded-xl border border-green-700/30">
                <div className="text-3xl text-green-400 mb-2">62%</div>
                <p className="text-slate-300">High satisfaction ratings (8-10)</p>
              </div>
              <div className="text-center p-4 bg-slate-900/50 rounded-xl border border-green-700/30">
                <div className="text-3xl text-green-400 mb-2">64%</div>
                <p className="text-slate-300">High usability ratings (8-10)</p>
              </div>
            </div>

            <div className="border-t border-green-700/50 pt-8">
              <p className="text-slate-200 text-xl leading-relaxed text-center">
                An iterative design approach and continuous user testing enabled the creation of 
                <span className="text-white font-semibold"> an intuitive and secure</span> cryptocurrency 
                application that received <span className="text-white font-semibold">high ratings</span> from the target audience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
