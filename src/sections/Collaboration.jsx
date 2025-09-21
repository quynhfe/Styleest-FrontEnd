import React from "react";
import aboutData from "../data/about.json";

import ContentTitle from "../components/content-title";
import ContentDescription from "../components/content-des";
import Link from "../components/btn-link";

function CollaborationSection({ sectionData }) {
  return (
    <div className={sectionData.layout.container}>
      <div className={sectionData.layout.image1Container}>
        <img
          className='max-md:max-w-200 max-md:h-78 md:max-w-56 md:max-h-69 lg:max-h-120 lg:max-w-100 xl:max-h-200'
          loading='lazy'
          src={sectionData.image1.url}
          alt={sectionData.image1.alt}
        />
      </div>
      <div className={sectionData.layout.image2Container}>
        <img
          className='max-md:w-40 max-md:h-29.5 md:max-w-56 md:max-h-45 lg:max-h-100 lg:max-w-100 '
          loading='lazy'
          src={sectionData.image2.url}
          alt={sectionData.image2.alt}
        />
      </div>
      <div className={sectionData.layout.textContainer}>
        <ContentTitle>{sectionData.title}</ContentTitle>
        <ContentDescription>{sectionData.description}</ContentDescription>
        <Link href={`/collection/${sectionData.slug}`}>See Collection</Link>
      </div>
    </div>
  );
}

function Collaboration() {
  const collaborationData = [
    {
      id: "tayson",
      slug: "tayson",
      title: "STYLEEST collaborates with TAYSON",
      description:
        "The collection is comprised of hoodies, jerseys, shorts and accessories that feature the parisian club’s branding overlaid by CRASH’s vibrant aesthetic.",
      image1: {
        url: aboutData[0].imageUrl,
        alt: aboutData[0].title,
      },
      image2: {
        url: aboutData[1].imageUrl,
        alt: aboutData[1].title,
      },
      layout: {
        container:
          "max-md:py-15 w-full max-md:gap-y-16.75 md:gap-x-21.75 lg:gap-x-16 xl:gap-x-[126px] lg:pt-0 md:pb-0 grid grid-flow-row-dense md:grid-rows-none md:grid-flow-col-dense relative md:mt-35 lg:mt-25",
        image1Container: "img-taysonf lg:flex lg:justify-items-start",
        image2Container:
          "md:top-[-200px] lg:top-[-170px] right-0 img-taysonb md:row-start-1 lg:flex lg:justify-end lg:mb-0",
        textContainer: "tayson-des md:mt-[17px] lg:mt-[134px] xl:mt-[334px]",
      },
    },
    {
      id: "coutu",
      slug: "coutu",
      title: "STYLEEST collaborates with COUTU",
      description:
        "This exclusive partnership brings together two fashion powerhouses, combining Styleest's curated sophistication with Coutu's avant-garde designs.",
      image1: {
        url: aboutData[2].imageUrl,
        alt: aboutData[2].title,
      },
      image2: {
        url: aboutData[3].imageUrl,
        alt: aboutData[3].title,
      },
      layout: {
        container:
          "max-md:py-15 w-full max-md:gap-y-16.75 md:gap-x-21.75 lg:gap-x-16 xl:gap-x-[126px] lg:pt-0 md:pb-0 grid grid-flow-row-dense md:grid-rows-none md:grid-flow-col-dense relative md:mt-40 md:mb-9.5 lg:mt-45 xl:mt-[208px]",
        image1Container: "img-taysonf md:col-start-2 lg:flex lg:justify-end",
        image2Container:
          "img-taysonb md:top-70 lg:top-95 xl:top-120 left-0 row-start-4 col-start-1",
        textContainer:
          "tayson-des md:col-start-1 md:row-start-1 md:mt-5 lg:mt-14 xl:mt-[56px]",
      },
    },
  ];

  return (
    <div className='px-(--mx-sm) md:px-(--mx-md) lg:px-(--mx-lg) xl:px-(--mx-xl)'>
      <div className='flex flex-col max-w-screen mx-auto'>
        {collaborationData.map((item) => (
          <CollaborationSection
            key={item.id}
            sectionData={item}
          />
        ))}
      </div>
    </div>
  );
}

export default Collaboration;
