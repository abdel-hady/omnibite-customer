// "use client";
import { ModeToggle } from "@/components/ModeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ModeToggle />
      <LanguageSwitcher />
      <button className="bg-terracotta">{t("cart")}</button>
    </div>
  );
}
