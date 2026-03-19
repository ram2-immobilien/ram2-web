import { SearchBar } from "@/components/Search/SearchBar";
import { AdvancedFilters } from "@/components/Search/AdvancedFilters";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      <section className="bg-[#0F172A] h-[500px] w-full flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
        </h1>

        <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center" }}>
          <div style={{ position: "absolute", bottom: "-25px", width: "100%" }}>
            <SearchBar />
          </div>
        </div>
      </section>

      <section className="pt-32">
        <AdvancedFilters />
      </section>

    </main>
  );
}