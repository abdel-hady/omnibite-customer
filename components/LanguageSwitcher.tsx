"use client";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "./ui/button";
export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const changeLanguage = (locale: string) => {
    router.push(`/${locale}${pathname.replace(/^\/(en|ar)/, "")}`);
  };
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => changeLanguage("en")}
      >
        English
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => changeLanguage("ar")}
      >
        Arabic
      </Button>
    </div>
  );
}
