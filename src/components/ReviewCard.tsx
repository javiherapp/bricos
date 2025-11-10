import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  initials: string;
  review: string;
}

const ReviewCard = ({ name, initials, review }: ReviewCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mr-4">
            {initials}
          </div>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">{review}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
