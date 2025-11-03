import AudiophileProductsGrid from "@/src/components/AudiophileProductsGrid";
import BestAudioGear from "@/src/components/BestAudioGear";
import PageHeader from "@/src/components/PageHeader";
import ProductSection from "@/src/components/ProductSection";

const EarPhones = () => {
  return (
    <>
      <PageHeader title="Earphones" />

      <ProductSection
        title="YX1 WIRELESS"
        subtitle="EARPHONES"
        description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        imageMobile="/assets/earphones_1.png"
        imageDesktop="/assets/earphones_1_desktop.png"
        isNew
        link="/products/yx1-wireless-earphones"
      />

      <AudiophileProductsGrid />

      <BestAudioGear />
    </>
  );
};

export default EarPhones;
