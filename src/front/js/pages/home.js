import React from "react";
import "../../styles/home.css";
import Slide from "./Slide";

export const Home = () => {
    const slidesData = [
        {
            id: 1,
            title: "Capítulo 1: 'Esgrima en Mercurio'",
            imageSrc: "https://content.nationalgeographic.com.es/medio/2022/07/31/el-planeta-mercurio_c7bafef8_1280x720.jpg",
        },
        {
            id: 2,
            title: "Capítulo 2: 'Mi cuerpo habla en Venus'",
            imageSrc: "https://starwalk.space/gallery/images/amazing-planet-venus/1140x641.jpg",
        },
        {
            id: 3,
            title: "Capítulo 3: 'Thoukball en Marte'",
            imageSrc: "https://fotografias.lasexta.com/clipping/cmsimages01/2023/07/06/6DF6DDE6-1250-48BB-8F63-09BE692B4CF3/nueva-imagen-marte-muestra-que-tan-rojo-como-pensabamos_58.jpg?crop=1277,724,x87,y0&width=1000&height=567&optimize=high&format=webply",
        },
        {
            id: 4,
            title: "Capítulo 4: 'Descubriendo el Bijbol y Júpiter'",
            imageSrc: "https://www.ngenespanol.com/wp-content/uploads/2023/06/jupiter-asi-es-el-planeta-mas-grande-y-antiguo-del-sistema-solar-770x431.jpg",
        },
        {
            id: 5,
            title: "Capítulo 5: 'Kimball en Saturno'",
            imageSrc: "https://www.ngenespanol.com/wp-content/uploads/2023/11/en-2025-los-iconicos-anillos-de-saturno-desapareceran.jpg",
        },
        {
            id: 6,
            title: "Capítulo 6: 'UranoVoley'",
            imageSrc: "https://img2.rtve.es/i/?w=1600&i=1678705110488.jpg",
        },
        {
            id: 7,
            title: "Capítulo 7: 'Stickeando en Neptuno'",
            imageSrc: "https://starwalk.space/gallery/images/neptune-at-opposition-2021/1140x641.jpg",
        },
        {
            id: 8,
            title: "Capítulo 8: 'Padeleando en Plutón'",
            imageSrc: "https://media.es.wired.com/photos/65d3a691d5395740395ba76e/16:9/w_2560%2Cc_limit/Pluto%25CC%2581n%2520(1).jpg",
        },
        {
            id: 9,
            title: "Capitulo 9: 'El arte del taichi y el yoga'",
            imageSrc: "https://akm-img-a-in.tosshub.com/indiatoday/sunsetyoga-2_647_062115121022.jpg?size=690:388",
        },
        {
            id: 10,
            title: "Capitulo 10: 'Acrosport en el panteón'",
            imageSrc: "https://www.ngenespanol.com/wp-content/uploads/2024/01/el-iconico-partenon-de-atenas-un-edificio-religioso-militar-y-turistico-1280x720.jpg",
        },
        {
            id: 11,
            title: "Capitulo 11: 'Encuéntrate en Australia'",
            imageSrc: "https://www.kayak.es/rimg/dimg/43/4b/72c43e11-city-2258-17a3a42c3ab.jpg?width=1366&height=768&xhint=1597&yhint=1522&crop=true",
        },
        {
            id: 12,
            title: "Capitulo 12: 'Frankfurt y el Goalball'",
            imageSrc: "https://www.germany.travel/media/redaktion/staedte_kultur_content/frankfurt/fuer_gallerydomblick_frankfurtdavid_vasicek.jpg",
        },
        {
            id: 13,
            title: "Capitulo 13: 'Rugby Tag Sudafricano'",
            imageSrc: "https://estaticosgn-cdn.deia.eus/clip/5134f7e8-062b-4930-a12c-37a076b66b69_16-9-discover-aspect-ratio_default_0.jpg",
        },
        {
            id: 14,
            title: "Capitulo 14: 'El estadio de Nairobi'",
            imageSrc: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Nelson_Mandela_Stadium_in_Port_Elizabeth_%28cropped%29.jpg",
        },
        {
            id: 15,
            title: "Capítulo 15: 'El legado Chino en el badminton'",
            imageSrc: "https://www.globaltimes.cn/Portals/0/attachment/2021/2021-06-20/015605ff-d9ec-4bc5-a7f6-e91a65a68a04.jpeg",
        },
        {
            id: 16,
            title: "Capitulo 16: 'Goleando en Brasil'",
            imageSrc: "https://i.pinimg.com/originals/fe/a3/2f/fea32fab68e10ea7add843d5fe85328d.jpg",
        },
    ];

    return (
        <div className="background-div text-center pt-5">
            <h1 className="title-home">¡COMIENZA NUESTRO GRAN VIAJE!</h1>
            <div className="container-fluid">
                <div className="row">
                    {slidesData.map((slide) => (
                        <div key={slide.id} className="col-12 col-md-6 col-lg-3 mb-4">
                            <Slide
                                title={slide.title}
                                imageSrc={slide.imageSrc}
                                chapterId={slide.id}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
