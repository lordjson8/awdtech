'use client';
import { Project } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations('ProjectsPage');

  return (
    <Card className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      <CardHeader className="p-0">
        <div className="relative h-60">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
        </div>
      </CardHeader>
      <CardContent className="p-6 bg-white dark:bg-gray-800">
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
          {project.title}
        </CardTitle>
        <CardDescription className="mt-2 text-gray-600 dark:text-gray-300 h-20 overflow-hidden">
          {project.description}
        </CardDescription>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <Link href={`/projects/${project.slug}`} passHref>
            <Button variant="outline" className="w-full group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
              {t('viewProject')}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
