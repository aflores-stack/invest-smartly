import heroBarsAsset from "@/assets/hero-bars.png.asset.json";

export function BarChartCompare() {
  return (
    <div className="w-full">
      <img
        src={heroBarsAsset.url}
        alt="Comparación de rentabilidad: Banca 4.5% vs Prestamype 20%, 4 veces más rentable"
        className="h-auto w-full"
        width={1024}
        height={768}
        loading="eager"
      />
    </div>
  );
}
