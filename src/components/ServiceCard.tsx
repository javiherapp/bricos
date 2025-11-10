import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: LucideIcon;
  secondaryIcon?: LucideIcon;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon: Icon, secondaryIcon: SecondaryIcon, title, description, link }: ServiceCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 relative">
          {SecondaryIcon ? (
            <>
              <Icon className="w-7 h-7 text-primary translate-x-2" />
              <SecondaryIcon className="w-6 h-6 text-primary/80 -translate-x-3 -translate-y-1 absolute" />
            </>
          ) : (
            <Icon className="w-8 h-8 text-primary" />
          )}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        <Button variant="outline" asChild>
          <Link to={link}>Ver Más</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
