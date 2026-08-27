import { ButtonHTMLAttributes } from "react";
import { CalendarClock } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import { useLanguage } from "@/contexts/LanguageContext";
import { openCalendlyPopup } from "@/lib/calendly";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface BookCallButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">,
    VariantProps<typeof buttonVariants> {
  source: string;
  showIcon?: boolean;
}

// Opens the Calendly popup and fires an analytics event tagged with where
// on the site the click came from (hero, header, footer, closing CTA...).
const BookCallButton = ({
  source,
  showIcon = true,
  variant,
  size,
  className,
  ...props
}: BookCallButtonProps) => {
  const { language, t } = useLanguage();

  const handleClick = () => {
    trackEvent("book_a_call_click", { source });
    void openCalendlyPopup(language);
  };

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      onClick={handleClick}
      className={cn(className)}
      {...props}
    >
      {showIcon && <CalendarClock className="h-4 w-4" />}
      {t("bookACall")}
    </Button>
  );
};

export default BookCallButton;
