"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Pagination from "@/components/Pagination/Pagination";

export default function Page() {
    const t = useTranslations("properties");
    
    // el estado de la pagina actual esta aqui
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div>
            <p>{t("header")}</p>
            
            {/* componente de paginacion */}
            <Pagination
                totalPages={8}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}