import AudiophileProductsGrid from "@/src/components/AudiophileProductsGrid";
import BestAudioGear from "@/src/components/BestAudioGear";
import PageHeader from "@/src/components/PageHeader";
import ProductSection from "@/src/components/ProductSection";

const HeadPhones = () => {
  return (
    <>
      <PageHeader title="Headphones" />

      <ProductSection
        title="XX99 MARK II"
        subtitle="HEADPHONES"
        description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        imageMobile="/assets/headphones_1.png"
        imageDesktop="/assets/headphones_1_desktop.png"
        isNew
        link="/products/xx99-mark-II-headphones"
      />

      <ProductSection
        title="XX99 MARK I"
        subtitle="HEADPHONES"
        description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        imageMobile="/assets/headphones_2.png"
        imageDesktop="/assets/headphones_2_desktop.png"
        reverse
        link="/products/xx99-mark-I-headphones"
      />

      <ProductSection
        title="XX59"
        subtitle="HEADPHONES"
        description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        imageMobile="/assets/headphones_3.png"
        imageDesktop="/assets/headphones_3_desktop.png"
        link="/products/xx59-headphones"
      />

      <AudiophileProductsGrid />

      <BestAudioGear />
    </>
  );
};

export default HeadPhones;
