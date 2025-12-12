import { FC } from "react";
import { useTranslations } from "next-intl";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects: FC = () => {
  const t = useTranslations("Projects");

  const projects = [
    {
      title: t("project1.title"),
      description: t("project1.description"),
      link: "#",
    },
    {
      title: t("project2.title"),
      description: t("project2.description"),
      link: "#",
    },
    {
      title: t("project3.title"),
      description: t("project3.description"),
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{t("title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href={project.link}>{t("viewProject")}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
