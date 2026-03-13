import { useTranslations } from "next-intl";
import Pagination from "@/components/Pagination/Pagination";

export default function Page() {
    const t = useTranslations("properties");

    return (
        <div>
            <p>{t("header")}</p>
            
            {/* componente de paginacion */}
            <Pagination totalPages={8} />
        </div>
    );
}