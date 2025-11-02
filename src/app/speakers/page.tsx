import AudiophileProductsGrid from "@/src/components/AudiophileProductsGrid";
import BestAudioGear from "@/src/components/BestAudioGear";
import PageHeader from "@/src/components/PageHeader";
import ProductSection from "@/src/components/ProductSection";

const Speaker = () => {
  return (
    <>
      <PageHeader title="Speakers" />

      <ProductSection
        title="ZX9"
        subtitle="SPEAKER"
        description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        imageMobile="/assets/speaker_1.png"
        imageDesktop="/assets/speaker_1_desktop.png"
        isNew
      />

      <ProductSection
        title="ZX7"
        subtitle="SPEAKER"
        description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        imageMobile="/assets/speaker_2.png"
        imageDesktop="/assets/speaker_2_desktop.png"
        reverse
      />

      <AudiophileProductsGrid />

      <BestAudioGear />
    </>
  );
};

export default Speaker;
