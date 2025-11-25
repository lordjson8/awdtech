
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
  const t = useTranslations('Realisations');
  const projectT = useTranslations(`Realisations.${project.slug}`);
  return (
    <Card>
      <CardHeader>
        <Image
          src={project.image}
          alt={projectT('title')}
          width={400}
          height={250}
          className="rounded-lg object-cover"
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{projectT('title')}</CardTitle>
        <CardDescription className="mt-2">{projectT('description')}</CardDescription>
        <Link href={`/realisations/${project.slug}`} className="mt-4 inline-block">
          <Button>{t('viewProject')}</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
