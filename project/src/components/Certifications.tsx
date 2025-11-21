import React, { useState } from 'react';
import { Trophy, Award, Medal, Calendar, Building, Eye, X, Filter } from 'lucide-react';

interface Certificate {
  name: string;
  imageUrl: string;
  info: string;
  organization: string;
  date: string;
  rank: 'Top' | 'Mid' | 'Basic';
}

interface CertificationYear {
  year: number;
  certificates: Certificate[];
}

const Certifications: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [expandedCertificates, setExpandedCertificates] = useState<Set<string>>(new Set());
  const [rankFilter, setRankFilter] = useState<string>('all');

  const certificationData: CertificationYear[] = [
    {
      year: 2024,
      certificates: [
        {
          name: "Certificate of Participation – Open Mind 2024 (C Programming - 2nd Place)",
          imageUrl: "/certificates/24-02-15-c programming (1).jpeg",
          info: "Secured 2nd place in C Programming Competition at Open Mind 2024.",
          organization: "Prof. Ramkrishna More Arts, Commerce and Science College (Autonomous)",
          date: "14-15 February 2024",
          rank: "Top"
        },
        {
          name: "Certificate – Introduction to Ethical Hacking",
          imageUrl: "/certificates/24-03-19-Ethicak Hacking.jpeg",
          info: "Completed a certified beginner's course on Cyber Security and Ethical Hacking, gaining knowledge of threats, system vulnerabilities, and ethical intrusion testing.",
          organization: "Cyber Security Training (Private Provider)",
          date: "19 March 2024",
          rank: "Top"
        },
        {
          name: "Certificate – Meri Mati Mera Desh (World Record)",
          imageUrl: "/certificates/world record-meri mati.jpeg",
          info: "Contributed to a national effort under the 'Meri Mati Mera Desh' campaign, which earned a Guinness World Record for collective participation and patriotic pledge.",
          organization: "Government of India, National Service Scheme (NSS)",
          date: "2024",
          rank: "Top"
        },
        {
          name: "Sant Dnyaneshwar Maharaj Palakhi Sohla 2024",
          imageUrl: "/certificates/24-07-17-wari (1).jpeg",
          info: "Participation and volunteering in the Sant Dnyaneshwar Maharaj Palakhi Procession 2024.",
          organization: "Savitribai Phule Pune University and National Service Scheme (NSS)",
          date: "30 June - 17 July 2024",
          rank: "Mid"
        },
        {
          name: "Sant Dnyaneshwar Maharaj Palakhi Sohla 2024 (Phaltan)",
          imageUrl: "/certificates/24-07-10-wari faltan.jpeg",
          info: "Participation and volunteering in the Sant Dnyaneshwar Maharaj Palakhi Procession 2024.",
          organization: "Phaltan Nagar Parishad",
          date: "10 July 2024",
          rank: "Mid"
        },
        {
          name: "Viksit Bharat @ 2047 Youth Dialogue Workshop",
          imageUrl: "/certificates/24-03-26-vikasit bharat.jpeg",
          info: "Active participation in the Youth Dialogue Workshop organized under the Viksit Bharat @ 2047 initiative.",
          organization: "Savitribai Phule Pune University and National Service Scheme (NSS)",
          date: "26 March 2024",
          rank: "Basic"
        },
        {
          name: "Nadi Sanvardhan & Swachhta Prakalp",
          imageUrl: "/certificates/24-03-03-nadi savrdhan.jpeg",
          info: "Participation in the River Conservation and Cleanliness Campaign under NSS.",
          organization: "Savitribai Phule Pune University, Ramkrishna More College",
          date: "3 March 2024",
          rank: "Basic"
        },
        {
          name: "Mushroom Cultivation Workshop",
          imageUrl: "/certificates/24-03-01-mushroom cultivation.jpeg",
          info: "Participated in a two-day Mushroom Cultivation Workshop organized by NSS and Botany Dept.",
          organization: "Savitribai Phule Pune University, Ramkrishna More College",
          date: "1 March 2024",
          rank: "Basic"
        },
        {
          name: "Open Mind 2024 – Vyapar Manthan Poster & Model Presentation",
          imageUrl: "/certificates/24-02-15-om (1).jpeg",
          info: "Participated in Open Mind 2024 – Vyapar Manthan Poster & Model Presentation.",
          organization: "Prof. Ramkrishna More Arts, Commerce and Science College (Autonomous)",
          date: "14-15 February 2024",
          rank: "Basic"
        },
        {
          name: "Open Mind 2024 – Advertising / Edu Reels Competition",
          imageUrl: "/certificates/24-02-15-reel compitation (1).jpeg",
          info: "Participated in Open Mind 2024 – Advertising / Edu Reels Competition.",
          organization: "Prof. Ramkrishna More Arts, Commerce and Science College (Autonomous)",
          date: "14-15 February 2024",
          rank: "Basic"
        },
        {
          name: "Digital Marketing Certification Course",
          imageUrl: "/certificates/23-08-31-digital marketing (1).jpeg",
          info: "Successfully completed Digital Marketing Certification Course, acquiring valuable knowledge and practical skills for real-world scenarios.",
          organization: "Skill India, Bharti Bharudpodya Maha Vidyalaya",
          date: "31 August 2023",
          rank: "Top"
        }
      ]
    },
    {
      year: 2023,
      certificates: [
        {
          name: "Certificate of Participation – Pune Book Festival",
          imageUrl: "/certificates/23-12-15-granth dindi (1).jpeg",
          info: "Participated in the \"ज्ञानस्नेही ग्रंथदिंडी\" (Knowledge-Friendly Book Parade) held during the Pune Book Festival, promoting the love for reading and literature.",
          organization: "पुणे पुस्तक महोत्सव (Pune Book Festival), in association with Rashtriya Pustak Nyas, Bharati Vidyapeeth College, and other partners",
          date: "17 December 2023",
          rank: "Mid"
        },
        {
          name: "Volunteer Appreciation – International Day of Persons with Disabilities",
          imageUrl: "/certificates/23-12-03-divyang din (1).jpeg",
          info: "Recognized for volunteering during the 'International Day of Persons with Disabilities' event organized by PCMC, contributing support for Divyang citizens' welfare.",
          organization: "Pimpri Chinchwad Municipal Corporation, Department of Social Development (Divyang Section)",
          date: "3 December 2023",
          rank: "Basic"
        }
      ]
    }
  ];

  const getRankIcon = (rank: string) => {
    switch (rank) {
      case 'Top':
        return <Trophy className="text-yellow-500" size={20} />;
      case 'Mid':
        return <Award className="text-gray-400" size={20} />;
      default:
        return <Medal className="text-amber-600" size={20} />;
    }
  };

  const getRankStyles = (rank: string) => {
    switch (rank) {
      case 'Top':
        return {
          border: 'border-yellow-400 shadow-yellow-200',
          bg: 'bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20',
          animation: 'animate-pulse',
          badge: 'bg-gradient-to-r from-yellow-400 to-amber-500 text-white',
          glow: 'ring-2 ring-yellow-400 shadow-lg shadow-yellow-400/50'
        };
      case 'Mid':
        return {
          border: 'border-gray-300 shadow-gray-200',
          bg: 'bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-800 dark:to-slate-800',
          animation: '',
          badge: 'bg-gradient-to-r from-gray-400 to-slate-500 text-white',
          glow: 'ring-2 ring-gray-300 shadow-lg shadow-gray-300/50'
        };
      default:
        return {
          border: 'border-gray-200 dark:border-gray-700',
          bg: 'bg-white dark:bg-gray-900',
          animation: '',
          badge: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white',
          glow: '' // No glow for Basic rank
        };
    }
  };

  const toggleCertificate = (certId: string) => {
    const newExpanded = new Set(expandedCertificates);
    if (newExpanded.has(certId)) {
      newExpanded.delete(certId);
    } else {
      newExpanded.add(certId);
    }
    setExpandedCertificates(newExpanded);
  };

  const isExpanded = (certId: string) => expandedCertificates.has(certId);

  const filterCertificates = (certificates: Certificate[]) => {
    if (rankFilter === 'all') return certificates;
    const filterMap = {
      'high': 'Top',
      'mid': 'Mid',
      'basic': 'Basic'
    };
    return certificates.filter(cert => cert.rank === filterMap[rankFilter as keyof typeof filterMap]);
  };

  const sortCertificatesByRank = (certificates: Certificate[]) => {
    const rankOrder = { 'Top': 0, 'Mid': 1, 'Basic': 2 };
    return [...certificates].sort((a, b) => rankOrder[a.rank] - rankOrder[b.rank]);
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive timeline of my professional development and achievements
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <Filter className="text-gray-600 dark:text-gray-300" size={20} />
            <select
              value={rankFilter}
              onChange={(e) => setRankFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200"
            >
              <option value="all">All Certificates</option>
              <option value="high">Top Achievements</option>
              <option value="mid">Mid Level</option>
              <option value="basic">Basic Level</option>
            </select>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Trophy className="text-yellow-500" size={16} />
              <span className="text-gray-600 dark:text-gray-300">Top Achievement</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="text-gray-400" size={16} />
              <span className="text-gray-600 dark:text-gray-300">Mid Level</span>
            </div>
            <div className="flex items-center space-x-2">
              <Medal className="text-amber-600" size={16} />
              <span className="text-gray-600 dark:text-gray-300">Basic Level</span>
            </div>
          </div>
        </div>

        {/* Year Sections */}
        {certificationData.map((yearData) => {
          const filteredCertificates = filterCertificates(yearData.certificates);
          if (filteredCertificates.length === 0) return null;

          return (
            <div key={yearData.year} className="mb-16">
              <div className="flex items-center mb-8">
                <Calendar className="text-blue-600 mr-3" size={28} />
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white border-b-2 border-blue-600 pb-2">
                  {yearData.year}
                </h2>
                <span className="ml-4 text-gray-500 dark:text-gray-400">
                  ({filteredCertificates.length} certificate{filteredCertificates.length !== 1 ? 's' : ''})
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortCertificatesByRank(filteredCertificates).map((cert, index) => {
                  const styles = getRankStyles(cert.rank);
                  const certId = `${yearData.year}-${index}`;

                  return (
                    <div
                      key={certId}
                      className={`
                        ${styles.bg} ${styles.border} ${styles.animation} ${styles.glow}
                        border-2 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden
                        ${cert.rank === 'Top' ? '' : 'cursor-pointer'}
                      `}
                    >
                      {/* Top Rank Certificates - Always Expanded */}
                      {cert.rank === 'Top' && (
                        <div>
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={cert.imageUrl}
                              alt={cert.name}
                              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <Eye 
                                className="text-white cursor-pointer" 
                                size={32}
                                onClick={() => setSelectedCertificate(cert)}
                              />
                            </div>
                            <div className={`absolute top-3 right-3 ${styles.badge} px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1`}>
                              {getRankIcon(cert.rank)}
                              <span>{cert.rank}</span>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                              {cert.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                              {cert.info}
                            </p>
                            <div className="space-y-2">
                              <div className="flex items-start space-x-2">
                                <Building className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                  {cert.organization}
                                </p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Calendar className="text-purple-600" size={16} />
                                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                                  {cert.date}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Basic/Mid Rank Certificates - Collapsible */}
                      {(cert.rank === 'Basic' || cert.rank === 'Mid') && (
                        <button
                          onClick={() => toggleCertificate(certId)}
                          className="w-full p-6 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white pr-4">
                              {cert.name}
                            </h3>
                            <div className={`${styles.badge} px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 flex-shrink-0`}>
                              {getRankIcon(cert.rank)}
                              <span>{cert.rank}</span>
                            </div>
                          </div>

                          {/* Expandable Content */}
                          <div className={`
                            overflow-hidden transition-all duration-300 ease-in-out
                            ${isExpanded(certId) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                          `}>
                            <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                              <div className="mb-4">
                                <img
                                  src={cert.imageUrl}
                                  alt={cert.name}
                                  className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-200"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedCertificate(cert);
                                  }}
                                />
                              </div>
                              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                {cert.info}
                              </p>
                              <div className="space-y-2">
                                <div className="flex items-start space-x-2">
                                  <Building className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    {cert.organization}
                                  </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Calendar className="text-purple-600" size={16} />
                                  <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                                    {cert.date}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {!isExpanded(certId) && (
                            <div className="mt-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                              Click to expand details →
                            </div>
                          )}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {certificationData.reduce((total, year) => total + year.certificates.length, 0)}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Total Certificates</div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-2">
              {certificationData.reduce((total, year) => 
                total + year.certificates.filter(cert => cert.rank === 'Top').length, 0
              )}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Top Achievements</div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-gray-500 mb-2">
              {certificationData.reduce((total, year) => 
                total + year.certificates.filter(cert => cert.rank === 'Mid').length, 0
              )}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Mid Level</div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {certificationData.length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Years Active</div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedCertificate.name}
                </h3>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                  <X className="text-gray-500" size={24} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedCertificate.imageUrl}
                    alt={selectedCertificate.name}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-semibold ${getRankStyles(selectedCertificate.rank).badge}`}>
                    {getRankIcon(selectedCertificate.rank)}
                    <span>{selectedCertificate.rank} Achievement</span>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Description</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedCertificate.info}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Organization</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {selectedCertificate.organization}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Date</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {selectedCertificate.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;