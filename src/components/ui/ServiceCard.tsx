import { ChevronLeft } from "lucide-react";
import type { ServiceItem } from "../../types";

type Props = {
  item: ServiceItem;
};

function ServiceCard({ item }: Props) {
  const Icon = item.icon;

  return (
    <div className={`service-card service-${item.color}`}>
      <div className="service-card__top">
        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
        <div className="service-card__icon">
          <Icon size={20} />
        </div>
      </div>

      <button className="service-card__link">
        ورود به بخش
        <ChevronLeft size={16} />
      </button>
    </div>
  );
}

export default ServiceCard;