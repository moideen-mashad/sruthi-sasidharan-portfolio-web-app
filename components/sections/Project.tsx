'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Linkedin } from 'lucide-react';
import { getUserData, getProjects } from '@/lib/utils/data';
import CardPlaceholder from '@/components/ui/CardPlaceholder';
import { Project as ProjectType } from '@/types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Project = () => {
  const [projectList, setProjectList] = useState<ProjectType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    try {
      setProjectList(getProjects());
    } finally {
      setIsLoading(false);
    }
  }, []);

  const userData = getUserData();

  return (
    <div className="project_bg py-20 lg:py-32" id="projects">
      <div className="container mx-auto px-4 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="w-full text-left mb-10 lg:mb-16">
            <h2 className="sub_title text-3xl sm:text-4xl font-bold mb-3 tracking-tight">
              {userData.project_title}
            </h2>
            <p className="para text-base sm:text-lg text-color opacity-70 leading-relaxed">
              {userData.project}
            </p>
          </div>

          <div className="w-full">
            {isLoading || !isClient ? (
              <CardPlaceholder />
            ) : (
              <div className="project-swiper-wrapper">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={24}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                  breakpoints={{ 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } }}
                  className="project-swiper"
                >
                  {projectList.map((item: ProjectType, index: number) => (
                    <SwiperSlide key={item.id} className="h-auto flex">
                      <div className="project-card flex flex-col h-full">
                        <div className="project-card-image-wrapper relative aspect-[16/10] overflow-hidden bg-slate-50">
                          <Image
                            src={item.image}
                            alt={`${item.name} project screenshot`}
                            width={400}
                            height={250}
                            className="project-card-image w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            loading={index < 3 ? 'eager' : 'lazy'}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            quality={90}
                          />
                          <div className="project-card-overlay absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Link
                              href={item.host_link}
                              className="project-card-overlay-link w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:bg-black hover:text-white transition-all duration-300"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${item.name} demo`}
                            >
                              <ExternalLink size={24} />
                            </Link>
                          </div>
                        </div>
                        <div className="project-card-body p-6 lg:p-8 flex-1 flex flex-col">
                          <div className="project-card-info mb-6">
                            <h3 className="project-card-title text-xl font-bold mb-2 tracking-tight">{item.name}</h3>
                            {item.description && (
                              <p className="project-card-description text-sm opacity-70 leading-relaxed line-clamp-3">
                                {item.description}
                              </p>
                            )}
                          </div>
                          <div className="project-card-footer mt-auto pt-6 border-t border-black/5">
                            <div className="project-card-tech flex flex-wrap gap-2 mb-6">
                              {item.technology_used.map((tech: string, i: number) => (
                                <span key={i} className="project-tech-badge px-3 py-1 bg-black/5 text-black/80 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="project-card-actions flex gap-3">
                              <Link
                                href={item.host_link}
                                className="project-card-btn flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-black text-white font-semibold text-sm hover:bg-slate-900 active:scale-95 no-underline transition-all"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${item.name} demo`}
                              >
                                <span>Live Demo</span>
                                <ExternalLink size={16} aria-hidden="true" />
                              </Link>
                              {item.linkedin_post && (
                                <Link
                                  href={item.linkedin_post}
                                  className="project-card-btn-icon w-12 h-12 flex items-center justify-center rounded-xl border border-black/10 hover:border-black hover:bg-black/5 transition-all active:scale-95 no-underline"
                                  target="_blank"
                                  aria-label={`View ${item.name} LinkedIn post`}
                                  rel="noopener noreferrer"
                                >
                                  <Linkedin size={20} aria-hidden="true" />
                                  <span className="sr-only">LinkedIn</span>
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
